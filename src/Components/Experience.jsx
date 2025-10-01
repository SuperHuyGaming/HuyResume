// Experience.jsx
import React from "react";
import {
	Grid,
	Typography,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemText,
	Avatar,
} from "@mui/material";
import Section from "./Section";

const ITEMS = [
	{
		title: "Front-End Research Assistant — GMU",
		time: "June 2025 – Present",
		image: "your_image_link_here",
		bullets: [
			"Engineered AI-powered chat tools for SeeCodeRun platform with OpenAI integration",
			"Developed responsive React front-end and Node.js/Express APIs",
			"Implemented MongoDB storage for scalable performance",
		],
	},
	{
		title: "Outstanding Undergraduate Teaching Assistant — GMU CS Dept.",
		time: "January 2025 – Present",
		image: "your_image_link_here",
		bullets: [
			"Tutored 50+ students per semester in data structures and algorithms",
			"Led review sessions raising exam scores by 15% on average",
			"Provided personalized debugging guidance for stronger problem-solving skills",
		],
	},
	{
		title: "President — GMU NVIS Club",
		time: "April 2025 – Present",
		image: "your_image_link_here",
		bullets: [
			"Founded and led development of the club’s React-based website",
			"Coordinated officers to promote Vietnamese culture and community",
			"Secured funding and organized member engagement initiatives",
		],
	},
	{
		title: "Event Manager — Google Developer Group on Campus",
		time: "August 2024 – June 2025",
		image: "your_image_link_here",
		bullets: [
			"Directed event logistics and marketing campaigns",
			"Secured speakers/partnerships to boost community learning",
			"Drove attendance and growth through promotional strategies",
		],
	},
];


export default function Experience() {
	return (
		<Section id="experience" title="Experience" space={2}>
			<Grid container spacing={2}>
				{ITEMS.map((it, idx) => (
					<Grid item xs={12} key={idx}>
						<Card
							elevation={0}
							sx={{
								border: "1px solid rgba(15,23,42,0.08)",
								background: "rgba(255,255,255,0.6)",
							}}
						>
							<CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
								<Grid
									container
									spacing={1.5}
									alignItems="flex-start"
								>
									<Grid item xs="auto">
										<Avatar
											variant="rounded"
											src={it.image || undefined}
											alt={it.title}
											sx={{ width: 56, height: 56 }}
										/>
									</Grid>
									<Grid item xs>
										<Typography
											variant="h6"
											sx={{ fontWeight: 800, mb: 0.25 }}
										>
											{it.title}
										</Typography>
										<Typography
											variant="caption"
											color="text.secondary"
											sx={{ display: "block", mb: 0.5 }}
										>
											{it.time}
										</Typography>
										<List dense sx={{ pl: 0, mt: -0.5 }}>
											{it.bullets.map((b, i) => (
												<ListItem
													key={i}
													sx={{ py: 0 }}
												>
													<ListItemText
														primaryTypographyProps={{
															variant: "body2",
														}}
														primary={b}
													/>
												</ListItem>
											))}
										</List>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Section>
	);
}
