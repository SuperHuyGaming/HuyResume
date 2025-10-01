// Contact.jsx
import React from "react";
import { Stack, Card, CardContent, Typography, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Section from "./Section";

export default function Contact() {
	return (
		<Section id="contact" title="Contact" space={2}>
			<Stack direction={{ xs: "column", md: "row" }} spacing={2}>
				<Card
					elevation={0}
					sx={{
						flex: 1,
						border: "1px solid rgba(15,23,42,0.08)",
						background: "rgba(255,255,255,0.6)",
					}}
				>
					<CardContent>
						<Typography
							gutterBottom
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								fontWeight: 700,
							}}
						>
							<EmailIcon fontSize="small" /> Email
						</Typography>
						<Link href="mailto:htruon5@gmu.edu">
							htruon5@gmu.edu
						</Link>
					</CardContent>
				</Card>

				<Card
					elevation={0}
					sx={{
						flex: 1,
						border: "1px solid rgba(15,23,42,0.08)",
						background: "rgba(255,255,255,0.6)",
					}}
				>
					<CardContent>
						<Typography
							gutterBottom
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								fontWeight: 700,
							}}
						>
							<LinkedInIcon fontSize="small" /> LinkedIn
						</Typography>
						<Link
							href="https://linkedin.com/in/huy-nm-truong"
							target="_blank"
							rel="noreferrer"
						>
							linkedin.com/in/huy-nm-truong
						</Link>
					</CardContent>
				</Card>

				<Card
					elevation={0}
					sx={{
						flex: 1,
						border: "1px solid rgba(15,23,42,0.08)",
						background: "rgba(255,255,255,0.6)",
					}}
				>
					<CardContent>
						<Typography
							gutterBottom
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 1,
								fontWeight: 700,
							}}
						>
							<GitHubIcon fontSize="small" /> GitHub
						</Typography>
						<Link
							href="https://github.com/SuperHuyGaming"
							target="_blank"
							rel="noreferrer"
						>
							github.com/SuperHuyGaming
						</Link>
					</CardContent>
				</Card>
			</Stack>

			<Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
				© {new Date().getFullYear()} Huy Truong
			</Typography>
		</Section>
	);
}
