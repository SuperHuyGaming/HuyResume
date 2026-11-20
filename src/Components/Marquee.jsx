import React from "react";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Storage from "@mui/icons-material/Storage";
import ManageSearch from "@mui/icons-material/ManageSearch";
import Psychology from "@mui/icons-material/Psychology";
import {
	siPython,
	siOpenjdk,
	siC,
	siJavascript,
	siReact,
	siNodedotjs,
	siExpress,
	siSpringboot,
	siPytorch,
	siScikitlearn,
	siLangchain,
	siAmazonwebservices,
	siDocker,
	siGithubactions,
	siMongodb,
	siRedis,
	siApachekafka,
	siSupabase,
} from "simple-icons";
import { useScrollFrame } from "../motion";
import { skills } from "../data";

// Logo for each skill name in data.js. Skills without a brand logo get a plain icon.
const LOGOS = {
	Python: siPython,
	Java: siOpenjdk,
	C: siC,
	JavaScript: siJavascript,
	React: siReact,
	"Node.js": siNodedotjs,
	Express: siExpress,
	"Spring Boot": siSpringboot,
	PyTorch: siPytorch,
	"scikit-learn": siScikitlearn,
	LangGraph: siLangchain,
	AWS: siAmazonwebservices,
	Docker: siDocker,
	"GitHub Actions": siGithubactions,
	MongoDB: siMongodb,
	Redis: siRedis,
	Kafka: siApachekafka,
	Supabase: siSupabase,
};
const FALLBACK = { SQL: Storage, RAG: ManageSearch, "LLM APIs": Psychology };

/** Brand colors that are too dark (or too light) for the current theme fall back to the accent. */
function readable(hex, dark) {
	const n = parseInt(hex, 16);
	const lum = (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
	if (dark && lum < 0.3) return null;
	if (!dark && lum > 0.8) return null;
	return `#${hex}`;
}

function Pill({ name }) {
	const logo = LOGOS[name];
	const Fallback = FALLBACK[name];
	return (
		<Box
			sx={(t) => {
				const brand = logo ? readable(logo.hex, t.palette.mode === "dark") : null;
				const hover = brand || t.palette.primary.main;
				return {
					display: "inline-flex",
					alignItems: "center",
					gap: 1.25,
					flexShrink: 0,
					px: { xs: 2, md: 2.5 },
					py: { xs: 1.1, md: 1.4 },
					mr: { xs: 1.25, md: 1.5 },
					borderRadius: 999,
					border: 1,
					borderColor: "divider",
					bgcolor: "background.paper",
					color: "text.secondary",
					transition: "color .3s ease, border-color .3s ease, background-color .3s ease, transform .3s ease",
					"& svg": { width: { xs: 18, md: 22 }, height: { xs: 18, md: 22 }, fill: "currentColor", transition: "fill .3s ease" },
					"&:hover": {
						color: "text.primary",
						borderColor: alpha(hover, 0.6),
						bgcolor: alpha(hover, 0.08),
						transform: "translateY(-3px)",
						"& svg": { fill: hover },
					},
				};
			}}
		>
			{logo ? (
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d={logo.path} />
				</svg>
			) : (
				Fallback && <Fallback />
			)}
			<Typography component="span" sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", md: "1.05rem" }, whiteSpace: "nowrap" }}>
				{name}
			</Typography>
		</Box>
	);
}

function Row({ items, reverse }) {
	return (
		<Box className={`marquee-row${reverse ? " reverse" : ""}`} sx={{ display: "flex", width: "max-content" }}>
			{/* Four copies; the animation slides by half, so the loop is seamless on wide screens. */}
			{[...items, ...items, ...items, ...items].map((s, i) => (
				<Pill key={i} name={s} />
			))}
		</Box>
	);
}

/** Two rows of tech logos sliding in opposite directions; scrolling nudges them along. */
export default function Marquee() {
	const ref = React.useRef(null);
	const half = Math.ceil(skills.length / 2);

	useScrollFrame(ref, (r, vh) => {
		ref.current.style.setProperty("--shift", `${((vh - r.top) * 0.15).toFixed(1)}px`);
	});

	return (
		<Box ref={ref} component="section" aria-label="Tech stack" sx={{ pt: { xs: 1, md: 2 }, pb: { xs: 4, md: 5 }, overflow: "hidden" }}>
			<Typography
				variant="overline"
				sx={{ display: "block", textAlign: "center", color: "text.secondary", fontWeight: 700, letterSpacing: "0.2em", mb: { xs: 2, md: 3 } }}
			>
				What I build with
			</Typography>
			<Box component="ul" sx={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)", m: 0, p: 0 }}>
				{skills.map((s) => (
					<li key={s}>{s}</li>
				))}
			</Box>
			<Box
				aria-hidden="true"
				sx={{
					maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
					WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
					display: "flex",
					flexDirection: "column",
					gap: { xs: 1.25, md: 1.5 },
				}}
			>
				<Box sx={{ transform: "translateX(calc(var(--shift, 0px) * -1))" }}>
					<Row items={skills.slice(0, half)} />
				</Box>
				<Box sx={{ transform: "translateX(var(--shift, 0px))" }}>
					<Row items={skills.slice(half)} reverse />
				</Box>
			</Box>
		</Box>
	);
}
