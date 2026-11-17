import React from "react";
import { Grid, Paper, Typography, Stack, Chip, Button, Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import Launch from "@mui/icons-material/Launch";
import FolderOutlined from "@mui/icons-material/FolderOutlined";
import Section from "./Section";
import { mono } from "../theme";
import { projects, profile } from "../data";

function ProjectCard({ p }) {
	return (
		<Paper
			elevation={0}
			sx={(t) => ({
				height: "100%",
				p: { xs: 2.5, md: 3.5 },
				display: "flex",
				flexDirection: "column",
				position: "relative",
				overflow: "hidden",
				bgcolor: alpha(t.palette.background.paper, 0.7),
				backdropFilter: "blur(6px)",
				transition: "transform .25s, border-color .25s, box-shadow .25s",
				"&::before": {
					content: '""',
					position: "absolute",
					inset: "0 0 auto 0",
					height: "2px",
					background: `linear-gradient(90deg, ${t.palette.primary.main}, ${t.palette.secondary.main})`,
					opacity: p.featured ? 1 : 0.4,
				},
				"&:hover": {
					transform: "translateY(-4px)",
					borderColor: alpha(t.palette.secondary.main, 0.5),
					boxShadow: `0 18px 40px -20px ${alpha(t.palette.primary.main, 0.45)}`,
				},
			})}
		>
			<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
				<FolderOutlined sx={{ color: "secondary.main", fontSize: 32 }} />
				{p.featured && (
					<Typography sx={{ fontFamily: mono, fontSize: 12, color: "secondary.main" }}>★ featured</Typography>
				)}
			</Stack>
			<Typography variant="h4" component="h3" sx={{ fontSize: { xs: "1.45rem", md: "1.7rem" }, mb: 1 }}>
				{p.name}
			</Typography>
			<Typography color="text.secondary" sx={{ flex: 1, fontSize: "0.95rem" }}>
				{p.blurb}
			</Typography>
			<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75, mt: 2.5 }}>
				{p.tech.map((t) => (
					<Chip key={t} label={t} size="small" sx={(th) => ({ bgcolor: alpha(th.palette.primary.main, 0.12), color: "primary.main" })} />
				))}
			</Stack>
			{(p.github || p.live) && (
				<Stack direction="row" spacing={1} sx={{ mt: 2.5 }}>
					{p.github && (
						<Button size="small" href={p.github} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />} sx={{ color: "text.primary" }}>
							Code
						</Button>
					)}
					{p.live && (
						<Button size="small" color="secondary" href={p.live} target="_blank" rel="noreferrer" startIcon={<Launch />}>
							Live
						</Button>
					)}
				</Stack>
			)}
		</Paper>
	);
}

export default function Projects() {
	return (
		<Section id="projects" index="02" label="projects" title="Things I've built">
			<Grid container spacing={3}>
				{projects.map((p) => (
					<Grid key={p.name} size={{ xs: 12, md: 6 }}>
						<ProjectCard p={p} />
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
