// Intro.jsx
import React from "react";
import { Typography, Button, Stack, Grid, Chip } from "@mui/material";
import Section from "./Section";

// Point directly to the file in /public
const PROFILE_SRC = "public/ProfilePic.jpg";

export default function Intro() {
	const go = (id) => (e) => {
		e.preventDefault();
		const el = document.querySelector(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	return (
		<Section id="hero" space={2}>
			<Grid container spacing={{ xs: 2, md: 3 }} alignItems="center">
				<Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
					<Stack spacing={1.25}>
						<Typography variant="overline" className="accent">
							Available for internships / freelance
						</Typography>

						<Typography
							variant="h3"
							sx={{
								fontWeight: 800,
								lineHeight: 1.1,
								fontSize: {
									xs: "1.75rem",
									sm: "2.2rem",
									md: "2.6rem",
								},
							}}
						>
							Huy Truong —{" "}
							<span className="accent">Software Engineer</span>
						</Typography>

						<Typography
							variant="body1"
							color="text.secondary"
							sx={{ maxWidth: 820 }}
						>
							I build performant web apps, scalable backends, and
							delightful interfaces.
						</Typography>

						<Stack
							direction="row"
							spacing={1.25}
							flexWrap="wrap"
							sx={{ mt: 0.5 }}
						>
							<Button
								variant="contained"
								href="#projects"
								onClick={go("#projects")}
							>
								View Projects
							</Button>
							<Button
								variant="outlined"
								href="#contact"
								onClick={go("#contact")}
							>
								Contact Me
							</Button>
							<Chip label="React" size="small" />
							<Chip label="Node.js" size="small" />
							<Chip label="MongoDB" size="small" />
						</Stack>
					</Stack>
				</Grid>

				<Grid
					item
					xs={12}
					md={5}
					order={{ xs: 1, md: 2 }}
					sx={{ textAlign: { xs: "center", md: "right" } }}
				>
					<img
						className="hero-img"
						src={PROFILE_SRC}
						alt="Huy Truong"
						loading="eager"
						decoding="async"
						onError={(e) => {
							e.currentTarget.style.background =
								"linear-gradient(135deg, #1e88e5 0%, #ff6d00 100%)";
							e.currentTarget.src =
								"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
						}}
						style={{
							maxWidth: 260,
							width: "100%",
							borderRadius: 12,
						}}
					/>
				</Grid>
			</Grid>
		</Section>
	);
}
