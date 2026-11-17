import React from "react";
import { Box, Container, Typography, Stack, Button, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutline from "@mui/icons-material/MailOutline";
import { profile, RESUME_PDF } from "../data";

export default function Hero() {
	return (
		<Box component="section" id="top" sx={{ pt: { xs: 5, md: 9 }, pb: { xs: 4, md: 6 } }}>
			<Container maxWidth="md">
				<Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 3, sm: 5 }} alignItems={{ sm: "center" }}>
					<Box
						component="img"
						src={profile.photo}
						alt={profile.name}
						sx={{
							width: { xs: 120, sm: 150 },
							height: { xs: 120, sm: 150 },
							borderRadius: "50%",
							objectFit: "cover",
							flexShrink: 0,
							border: 3,
							borderColor: "secondary.main",
						}}
					/>
					<Box>
						<Typography variant="h1" sx={{ fontSize: { xs: "2.2rem", md: "2.8rem" } }}>
							{profile.name}
						</Typography>
						<Typography sx={{ color: "primary.main", fontWeight: 600, fontSize: "1.1rem", mt: 0.5 }}>
							{profile.title}
						</Typography>
					</Box>
				</Stack>

				<Box sx={{ mt: 4, maxWidth: 680 }}>
					{profile.intro.map((p) => (
						<Typography key={p} color="text.secondary" sx={{ fontSize: "1.05rem", mb: 1.5 }}>
							{p}
						</Typography>
					))}
				</Box>

				<Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: "wrap", rowGap: 1.5 }} alignItems="center">
					<Button variant="contained" href={`mailto:${profile.email}`} startIcon={<MailOutline />}>
						Email me
					</Button>
					<Button variant="outlined" href={RESUME_PDF} target="_blank">
						Resume (PDF)
					</Button>
					<Link href={profile.github} target="_blank" rel="noreferrer" color="text.secondary" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, ml: 1 }}>
						<GitHubIcon fontSize="small" /> GitHub
					</Link>
					<Link href={profile.linkedin} target="_blank" rel="noreferrer" color="text.secondary" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, ml: 1 }}>
						<LinkedInIcon fontSize="small" /> LinkedIn
					</Link>
				</Stack>
			</Container>
		</Box>
	);
}
