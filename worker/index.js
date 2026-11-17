// bentruong.dev Worker: serves the site from ./dist and a tiny visitor counter at /api/visits.
// One Durable Object per site keeps two SQLite tables: unique visitor IDs (total) and
// recent session heartbeats (live). IDs are random strings made in the browser; no IPs,
// names or cookies are stored.
import { DurableObject } from "cloudflare:workers";

const SITES = new Set(["resume", "syllabus", "badminton"]);
const LIVE_WINDOW_MS = 90_000;
const ID = /^[A-Za-z0-9-]{8,64}$/;
const ALLOWED_ORIGIN = /^https:\/\/([a-z0-9-]+\.)*bentruong\.dev$|^http:\/\/localhost(:\d+)?$/;

export class Counter extends DurableObject {
	constructor(ctx, env) {
		super(ctx, env);
		const sql = ctx.storage.sql;
		sql.exec("CREATE TABLE IF NOT EXISTS visitors (id TEXT PRIMARY KEY)");
		sql.exec("CREATE TABLE IF NOT EXISTS sessions (id TEXT PRIMARY KEY, seen INTEGER NOT NULL)");
	}

	ping(visitor, session) {
		const sql = this.ctx.storage.sql;
		const now = Date.now();
		if (visitor) sql.exec("INSERT OR IGNORE INTO visitors (id) VALUES (?)", visitor);
		if (session)
			sql.exec(
				"INSERT INTO sessions (id, seen) VALUES (?, ?) ON CONFLICT(id) DO UPDATE SET seen = excluded.seen",
				session,
				now,
			);
		sql.exec("DELETE FROM sessions WHERE seen < ?", now - LIVE_WINDOW_MS);
		return {
			total: sql.exec("SELECT COUNT(*) AS n FROM visitors").one().n,
			live: sql.exec("SELECT COUNT(*) AS n FROM sessions").one().n,
		};
	}
}

function cors(request) {
	const origin = request.headers.get("Origin") || "";
	return ALLOWED_ORIGIN.test(origin)
		? { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", Vary: "Origin" }
		: {};
}

async function visits(request, env) {
	const headers = { ...cors(request), "Content-Type": "application/json", "Cache-Control": "no-store" };
	if (request.method === "OPTIONS") return new Response(null, { status: 204, headers });

	const url = new URL(request.url);
	let site = url.searchParams.get("site");
	let visitor = null;
	let session = null;
	if (request.method === "POST") {
		const body = await request.json().catch(() => ({}));
		site = body.site;
		visitor = ID.test(body.visitor || "") ? body.visitor : null;
		session = ID.test(body.session || "") ? body.session : null;
	} else if (request.method !== "GET") {
		return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
	}
	if (!SITES.has(site)) return new Response(JSON.stringify({ error: "Unknown site" }), { status: 400, headers });

	const stub = env.COUNTER.get(env.COUNTER.idFromName(site));
	return new Response(JSON.stringify(await stub.ping(visitor, session)), { headers });
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if (url.pathname === "/api/visits") return visits(request, env);
		return env.ASSETS.fetch(request);
	},
};
