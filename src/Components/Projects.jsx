import React from "react";
import { Grid, Paper, Typography, Stack, Chip, Button, Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import Launch from "@mui/icons-material/Launch";
import AutoAwesomeOutlined from "@mui/icons-material/AutoAwesomeOutlined";
import Section from "./Section";
import { mono } from "../theme";
import { featuredProjects, aiProjects, profile } from "../data";

const hostOf = (url) => {
	try {
		return new URL(url).host;
	} catch {
		return url;
	}
};

/** Muted looping demo that only plays while on screen (and not at all with reduced motion). */
function DemoVideo({ src, poster, title, url }) {
	const ref = React.useRef(null);
	React.useEffect(() => {
		const v = ref.current;
		if (!v) return;
		const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
		if (reduce) return;
		const obs = new IntersectionObserver(
			([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
			{ threshold: 0.35 }
		);
		obs.observe(v);
		return () => obs.disconnect();
	}, []);

	return (
		<Paper
			elevation={0}
			sx={(t) => ({
				overflow: "hidden",
				borderColor: alpha(t.palette.secondary.main, 0.3),
				boxShadow: `0 30px 60px -30px ${alpha(t.palette.primary.main, 0.55)}`,
			})}
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: 0.75, px: 1.5, py: 1, borderBottom: 1, borderColor: "divider" }}>
				{["#E5675B", "#E2BC55", "#35C27F"].map((c) => (
					<Box key={c} sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: c }} />
				))}
				<Box
					sx={{
						ml: 1,
						flex: 1,
						px: 1.25,
						py: 0.25,
						borderRadius: 1,
						bgcolor: "action.hover",
						fontFamily: mono,
						fontSize: 11.5,
						color: "text.secondary",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}
				>
					{hostOf(url)}
				</Box>
			</Box>
			<Box
				component="video"
				ref={ref}
				src={src}
				poster={poster}
				muted
				loop
				playsInline
				controls
				preload="metadata"
				aria-label={`${title} demo video`}
				sx={{ display: "block", width: "100%", aspectRatio: "16 / 9", bgcolor: "#000" }}
			/>
		</Paper>
	);
}

function Featured({ p, flip }) {
	return (
		<Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
			<Grid size={{ xs: 12, md: 7 }} order={{ xs: 1, md: flip ? 2 : 1 }}>
				<DemoVideo src={p.video} poster={p.poster} title={p.name} url={p.live} />
			</Grid>
			<Grid size={{ xs: 12, md: 5 }} order={{ xs: 2, md: flip ? 1 : 2 }}>
				<Typography sx={{ fontFamily: mono, fontSize: 12.5, color: "secondary.main", mb: 1 }}>{p.kicker}</Typography>
				<Typography variant="h3" component="h3" sx={{ fontSize: { xs: "1.75rem", md: "2.1rem" }, mb: 1.5 }}>
					{p.name}
				</Typography>
				<Typography color="text.secondary" sx={{ fontSize: "0.98rem" }}>
					{p.blurb}
				</Typography>
				<Box component="ul" sx={{ m: 0, mt: 2, pl: 2.25, color: "text.secondary", "& li": { mb: 0.5 }, "& li::marker": { color: "secondary.main" } }}>
					{p.highlights.map((h) => (
						<Typography key={h} component="li" variant="body2">
							{h}
						</Typography>
					))}
				</Box>
				<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75, mt: 2.5 }}>
					{p.tech.map((t) => (
						<Chip key={t} label={t} size="small" sx={(th) => ({ bgcolor: alpha(th.palette.primary.main, 0.12), color: "primary.main" })} />
					))}
				</Stack>
				<Stack direction="row" spacing={1.5} sx={{ mt: 3 }}>
					<Button variant="contained" href={p.live} target="_blank" rel="noreferrer" endIcon={<Launch />}>
						Open app
					</Button>
					<Button variant="outlined" color="secondary" href={p.github} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />}>
						Code
					</Button>
				</Stack>
			</Grid>
		</Grid>
	);
}

function AiCard({ p }) {
	return (
		<Paper
			elevation={0}
			sx={(t) => ({
				height: "100%",
				p: 3,
				display: "flex",
				flexDirection: "column",
				bgcolor: alpha(t.palette.background.paper, 0.7),
				backdropFilter: "blur(6px)",
				transition: "transform .25s, border-color .25s",
				"&:hover": { transform: "translateY(-3px)", borderColor: alpha(t.palette.secondary.main, 0.5) },
			})}
		>
			<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1.5 }}>
				<AutoAwesomeOutlined sx={{ color: "secondary.main" }} />
				<Typography sx={{ fontFamily: mono, fontSize: 11.5, color: "text.secondary" }}>{p.status}</Typography>
			</Stack>
			<Typography variant="h6" component="h4" sx={{ mb: 1 }}>
				{p.name}
			</Typography>
			<Typography variant="body2" color="text.secondary" sx={{ flex: 1 }}>
				{p.blurb}
			</Typography>
			<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75, mt: 2 }}>
				{p.tech.map((t) => (
					<Chip key={t} label={t} size="small" variant="outlined" sx={{ borderColor: "divider" }} />
				))}
			</Stack>
			{p.github && (
				<Button size="small" href={p.github} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />} sx={{ mt: 2, alignSelf: "flex-start", color: "text.primary" }}>
					Code
				</Button>
			)}
		</Paper>
	);
}

export default function Projects() {
	return (
		<Section id="projects" index="02" label="projects" title="Things I've built">
			<Stack spacing={{ xs: 8, md: 12 }}>
				{featuredProjects.map((p, i) => (
					<Featured key={p.name} p={p} flip={i % 2 === 1} />
				))}
			</Stack>

			<Stack direction="row" alignItems="center" spacing={1.5} sx={{ mt: { xs: 10, md: 14 }, mb: 3 }}>
				<Typography variant="h4" component="h3" sx={{ fontSize: { xs: "1.5rem", md: "1.9rem" } }}>
					More AI work
				</Typography>
				<Box sx={{ flex: 1, height: "1px", bgcolor: "divider" }} />
			</Stack>
			<Grid container spacing={2.5}>
				{aiProjects.map((p) => (
					<Grid key={p.name} size={{ xs: 12, sm: 6, lg: 4 }}>
						<AiCard p={p} />
					</Grid>
				))}
			</Grid>
			<Box sx={{ textAlign: "center", mt: 5 }}>
				<Button variant="outlined" color="secondary" href={profile.github} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />}>
					More on GitHub
				</Button>
			</Box>
		</Section>
	);
}
