// Projects.jsx
import React from "react";
import {
	Box,
	Typography,
	Grid,
	Card,
	CardContent,
	CardActions,
	Button,
	Chip,
} from "@mui/material";
import Section from "./Section";

const ALL_PROJECTS = [
	{
		name: "NOVA Bookstore",
		desc: "Full-stack MERN bookstore app with React Router navigation, Express APIs, and MongoDB persistence.",
		image: "your_image_link_here",
		links: [{ label: "GitHub", href: "#" }],
	},
	{
		name: "NVIS Club Website",
		desc: "Responsive React website with secure authentication, CRUD posts/comments, deployed on Render.",
		image: "your_image_link_here",
		links: [
			{ label: "Live Demo", href: "https://nvis-frontend.onrender.com/" },
		],
	},
	{
		name: "Appointment Scheduling System",
		desc: "Java OOP system using HashMaps for O(1) lookups, CSV persistence, and efficient appointment management.",
		image: "your_image_link_here",
		links: [{ label: "GitHub", href: "#" }],
	},
];

export default function Projects({ limit }) {
	const projects =
		typeof limit === "number" ? ALL_PROJECTS.slice(0, limit) : ALL_PROJECTS;

	return (
		<Section id="projects" title="Projects" space={2}>
			<Grid container spacing={2}>
				{projects.map((p, idx) => (
					<Grid item xs={12} md={6} key={idx}>
						<Card
							elevation={0}
							sx={{
								height: "100%",
								border: "1px solid rgba(15,23,42,0.08)",
								background: "rgba(255,255,255,0.6)",
								position: "relative",
								overflow: "hidden",
							}}
						>
							<CardContent sx={{ pt: 1.5, pb: 1, px: 1.5 }}>
								{p.image && (
									<img
										src={p.image}
										alt={p.name}
										style={{
											width: "100%",
											maxHeight: 160,
											objectFit: "cover",
											borderRadius: 8,
											marginBottom: 10,
										}}
									/>
								)}
								<Typography
									variant="h6"
									sx={{ fontWeight: 800, mb: 0.25 }}
								>
									{p.name}
								</Typography>
								<Typography
									color="text.secondary"
									variant="body2"
								>
									{p.desc}
								</Typography>
							</CardContent>
							<CardActions sx={{ pt: 0, px: 1.5, pb: 1.25 }}>
								{p.links.map((l, i) => (
									<Button
										key={i}
										size="small"
										href={l.href}
										target="_blank"
										rel="noreferrer"
									>
										{l.label}
									</Button>
								))}
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Section>
	);
}
