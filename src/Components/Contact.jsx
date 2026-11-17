import React from "react";
import { Box, Container, Typography, Stack, Button, Link, Divider } from "@mui/material";
import MailOutline from "@mui/icons-material/MailOutline";
import Section from "./Section";
import { profile, RESUME_PDF } from "../data";

export default function Contact() {
	return (
		<>
			<Section id="contact" title="Contact">
				<Typography color="text.secondary" sx={{ maxWidth: 600 }}>
					I'm looking for software engineering and machine learning internships and new grad roles. The best way to
					reach me is email.
				</Typography>
				<Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: "wrap", rowGap: 1.5 }}>
					<Button variant="contained" href={`mailto:${profile.email}`} startIcon={<MailOutline />}>
						{profile.email}
					</Button>
					<Button variant="outlined" href={RESUME_PDF} target="_blank">
						Resume (PDF)
					</Button>
				</Stack>
				<Stack direction="row" spacing={3} sx={{ mt: 2.5 }}>
					<Link href={profile.linkedin} target="_blank" rel="noreferrer">
						LinkedIn
					</Link>
					<Link href={profile.github} target="_blank" rel="noreferrer">
						GitHub
					</Link>
				</Stack>
			</Section>
			<Container maxWidth="md">
				<Divider />
				<Box sx={{ py: 3 }}>
					<Typography variant="body2" color="text.secondary">
						© {new Date().getFullYear()} {profile.name}
					</Typography>
				</Box>
			</Container>
		</>
	);
}
