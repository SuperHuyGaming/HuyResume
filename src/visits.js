// Visitor counter client. A random visitor ID (localStorage) counts toward the total once;
// a random session ID (sessionStorage) sends a heartbeat every 30s while the tab is visible.
function storedId(storage, key) {
	try {
		let v = storage.getItem(key);
		if (!v) {
			v = crypto.randomUUID();
			storage.setItem(key, v);
		}
		return v;
	} catch {
		return crypto.randomUUID();
	}
}

export function startVisits(site, onUpdate, api = "/api/visits") {
	const visitor = storedId(localStorage, "bt-visitor");
	const session = storedId(sessionStorage, "bt-session");
	let stopped = false;
	const ping = () =>
		fetch(api, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ site, visitor, session }),
		})
			.then((r) => (r.ok ? r.json() : null))
			.then((d) => d && !stopped && onUpdate(d))
			.catch(() => {});
	const onVisible = () => document.visibilityState === "visible" && ping();
	ping();
	const timer = setInterval(onVisible, 30_000);
	document.addEventListener("visibilitychange", onVisible);
	return () => {
		stopped = true;
		clearInterval(timer);
		document.removeEventListener("visibilitychange", onVisible);
	};
}
