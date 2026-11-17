import React from "react";
import { Grid, Paper, Typography, Stack, Chip, Button, Box, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Launch from "@mui/icons-material/Launch";
import Section from "./Section";
import { featuredProjects, otherProjects, profile } from "../data";

/** Muted demo video that plays while it's on screen (not at all with reduced motion). */
function DemoVideo({ src, poster, title }) {
	const ref = React.useRef(null);
	React.useEffect(() => {
		const v = ref.current;
		if (!v) return;
		if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
		const obs = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), {
			threshold: 0.4,
		});
		obs.observe(v);
		return () => obs.disconnect();
	}, []);

	return (
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
			sx={{ display: "block", width: "100%", aspectRatio: "16 / 9", bgcolor: "#000", borderRadius: 2, border: 1, borderColor: "divider" }}
		/>
	);
}

function Featured({ p }) {
	return (
		<Box>
			<DemoVideo src={p.video} poster={p.poster} title={p.name} />
			<Typography variant="h5" component="h3" sx={{ mt: 2.5 }}>
				{p.name}
			</Typography>
			<Typography color="text.secondary" sx={{ mt: 1 }}>
				{p.blurb}
			</Typography>
			<Box component="ul" sx={{ m: 0, mt: 1.5, pl: 2.5, color: "text.secondary" }}>
				{p.highlights.map((h) => (
					<li key={h}>
						<Typography variant="body2" component="span">
							{h}
						</Typography>
					</li>
				))}
			</Box>
			<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75, mt: 2 }}>
				{p.tech.map((t) => (
					<Chip key={t} label={t} size="small" variant="outlined" />
				))}
			</Stack>
			<Stack direction="row" spacing={1.5} sx={{ mt: 2.5 }}>
				<Button variant="contained" href={p.live} target="_blank" rel="noreferrer" endIcon={<Launch />}>
					Open app
				</Button>
				<Button variant="outlined" href={p.github} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />}>
					Code
				</Button>
			</Stack>
		</Box>
	);
}

export default function Projects() {
	return (
		<Section id="projects" title="Projects">
			<Stack spacing={{ xs: 7, md: 9 }}>
				{featuredProjects.map((p) => (
					<Featured key={p.name} p={p} />
				))}
			</Stack>

			<Typography variant="h6" component="h3" sx={{ mt: { xs: 8, md: 10 }, mb: 2 }}>
				Other projects
			</Typography>
			<Grid container spacing={2}>
				{otherProjects.map((p) => (
					<Grid key={p.name} size={{ xs: 12, sm: 4 }}>
						<Paper elevation={0} sx={{ p: 2.5, height: "100%", display: "flex", flexDirection: "column" }}>
							<Typography variant="body2" color="secondary.dark" sx={{ fontWeight: 600 }}>
								{p.note}
							</Typography>
							<Typography variant="subtitle1" component="h4" sx={{ fontWeight: 700, mt: 0.5 }}>
								{p.name}
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ mt: 1, flex: 1 }}>
								{p.blurb}
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
								{p.tech.join(", ")}
							</Typography>
							{p.github && (
								<Link href={p.github} target="_blank" rel="noreferrer" variant="body2" sx={{ mt: 1, fontWeight: 600 }}>
									View code
								</Link>
							)}
						</Paper>
					</Grid>
				))}
			</Grid>
			<Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
				More on{" "}
				<Link href={profile.github} target="_blank" rel="noreferrer">
					GitHub
				</Link>
				.
			</Typography>
		</Section>
	);
}
