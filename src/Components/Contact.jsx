import React from "react";
import { Box, Container, Paper, Typography, Stack, Button, Divider, Link } from "@mui/material";
import { alpha } from "@mui/material/styles";
import MailOutline from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import { mono } from "../theme";
import { profile, RESUME_PDF } from "../data";

export default function Contact() {
	return (
		<Box component="section" id="contact" sx={{ py: { xs: 7, md: 10 }, position: "relative" }}>
			<Container maxWidth="md">
				<Paper
					elevation={0}
					sx={(t) => ({
						p: { xs: 3.5, md: 6 },
						textAlign: "center",
						position: "relative",
						overflow: "hidden",
						bgcolor: alpha(t.palette.background.paper, 0.8),
						borderColor: alpha(t.palette.secondary.main, 0.35),
						backgroundImage: `radial-gradient(600px 240px at 50% -20%, ${alpha(t.palette.primary.main, 0.18)}, transparent 70%)`,
					})}
				>
					<Typography sx={{ fontFamily: mono, fontSize: 13, color: "secondary.main", mb: 1.5 }}>
						05 / contact
					</Typography>
					<Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "2.9rem" } }}>
						Let's build something.
					</Typography>
					<Typography color="text.secondary" sx={{ mt: 2, maxWidth: 520, mx: "auto" }}>
						Open to software engineering and AI/ML internships and new-grad roles. My inbox is always open —
						for opportunities, collaborations, or a badminton match.
					</Typography>
					<Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mt: 4 }}>
						<Button variant="contained" size="large" href={`mailto:${profile.email}`} startIcon={<MailOutline />}>
							{profile.email}
						</Button>
						<Button variant="outlined" color="secondary" size="large" href={RESUME_PDF} target="_blank" startIcon={<DescriptionOutlined />}>
							Download résumé
						</Button>
					</Stack>
					<Stack direction="row" spacing={3} justifyContent="center" sx={{ mt: 3 }}>
						<Link href={profile.linkedin} target="_blank" rel="noreferrer" color="text.secondary" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
							<LinkedInIcon fontSize="small" /> LinkedIn
						</Link>
						<Link href={profile.github} target="_blank" rel="noreferrer" color="text.secondary" sx={{ display: "inline-flex", alignItems: "center", gap: 0.75 }}>
							<GitHubIcon fontSize="small" /> GitHub
						</Link>
					</Stack>
				</Paper>
			</Container>

			<Container maxWidth="lg" sx={{ mt: { xs: 7, md: 10 } }}>
				<Divider />
				<Stack
					direction={{ xs: "column", sm: "row" }}
					justifyContent="space-between"
					spacing={1}
					sx={{ py: 3, fontFamily: mono, fontSize: 12, color: "text.secondary" }}
				>
					<span>© {new Date().getFullYear()} {profile.name}</span>
					<span>
						built with React + MUI · <Box component="span" sx={{ color: "secondary.main" }}>{profile.handle}</Box>
					</span>
				</Stack>
			</Container>
		</Box>
	);
}
