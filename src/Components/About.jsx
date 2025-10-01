// About.jsx
import React from "react";
import { Grid, Chip, Stack, Paper, Typography } from "@mui/material";
import Section from "./Section";

const skills = [
	"React",
	"Node.js",
	"Express",
	"Prisma",
	"MongoDB",
	"MySQL",
	"Java",
	"Python",
];

export default function About() {
	return (
		<Section id="about" title="About" space={2}>
			<Grid container spacing={3} alignItems="stretch">
				<Grid item xs={12} md={7}>
					<Typography paragraph>
						I'm a student at George Mason University with a focus on
						full-stack development, backend APIs, and data-driven
						apps. I enjoy designing systems that are robust,
						well-tested, and easy to maintain.
					</Typography>
					<Typography paragraph>
						Recently, I've been working on a GMU Marketplace
						subsystem (payments & transactions), and a Vietnamese
						Club website with interactive media.
					</Typography>
				</Grid>
				<Grid item xs={12} md={5}>
					<Paper
						elevation={0}
						sx={{
							p: 2,
							background: "rgba(255,255,255,0.6)",
							border: "1px solid rgba(15,23,42,0.08)",
						}}
					>
						<Typography
							variant="subtitle1"
							gutterBottom
							sx={{ fontWeight: 700 }}
						>
							Skills
						</Typography>
						<Stack direction="row" flexWrap="wrap" gap={1}>
							{skills.map((s) => (
								<Chip key={s} label={s} />
							))}
						</Stack>
					</Paper>
				</Grid>
			</Grid>
		</Section>
	);
}
