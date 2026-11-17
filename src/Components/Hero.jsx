import React from "react";
import { Box, Container, Grid, Typography, Stack, Button, IconButton, Paper, Tooltip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutline from "@mui/icons-material/MailOutline";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { mono } from "../theme";
import { profile, stats } from "../data";

function Portrait() {
	return (
		<Box sx={{ position: "relative", width: { xs: 200, md: 260 }, aspectRatio: "1", mx: "auto" }}>
			<Box
				className="spin"
				sx={(t) => ({
					position: "absolute",
					inset: -6,
					borderRadius: "50%",
					background: `conic-gradient(from 0deg, ${t.palette.primary.main}, ${t.palette.secondary.main}, ${t.palette.primary.dark}, ${t.palette.secondary.light}, ${t.palette.primary.main})`,
					animation: "spin 14s linear infinite",
					filter: "saturate(1.1)",
				})}
			/>
			<Box
				component="img"
				src={profile.photo}
				alt={profile.name}
				sx={{
					position: "relative",
					width: "100%",
					height: "100%",
					objectFit: "cover",
					borderRadius: "50%",
					border: (t) => `5px solid ${t.palette.background.default}`,
				}}
			/>
		</Box>
	);
}

function TerminalCard() {
	return (
		<Paper
			elevation={0}
			sx={(t) => ({
				mt: 4,
				overflow: "hidden",
				bgcolor: alpha(t.palette.background.paper, 0.75),
				backdropFilter: "blur(8px)",
				fontFamily: mono,
				fontSize: 13,
			})}
		>
			<Box sx={{ display: "flex", alignItems: "center", gap: 0.75, px: 1.5, py: 1, borderBottom: 1, borderColor: "divider" }}>
				{["#E5675B", "#E2BC55", "#35C27F"].map((c) => (
					<Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: c }} />
				))}
				<Box component="span" sx={{ ml: 1, color: "text.secondary", fontSize: 12 }}>
					~/huy — whoami
				</Box>
			</Box>
			<Box sx={{ p: 2, display: "grid", gap: 0.75 }}>
				{profile.now.map(([k, v]) => (
					<Box key={k} sx={{ display: "flex", gap: 1.5, lineHeight: 1.5 }}>
						<Box component="span" sx={{ color: "secondary.main", minWidth: 44 }}>
							{k}
						</Box>
						<Box component="span" sx={{ color: "text.secondary" }}>
							{v}
						</Box>
					</Box>
				))}
			</Box>
		</Paper>
	);
}

export default function Hero() {
	return (
		<Box component="section" id="top" sx={{ position: "relative", pt: { xs: 6, md: 10 }, pb: { xs: 6, md: 8 } }}>
			<Container maxWidth="lg">
				<Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
					<Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
						<Typography sx={{ fontFamily: mono, color: "primary.main", fontSize: 14, mb: 2 }}>
							<Box component="span" sx={{ color: "secondary.main" }}>
								&gt;
							</Box>{" "}
							hello, world
							<span className="cursor">_</span>
						</Typography>
						<Typography variant="h1" sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "5rem" } }}>
							{profile.name.split(" ")[0]}{" "}
							<Box
								component="span"
								sx={(t) => ({
									fontStyle: "italic",
									background: `linear-gradient(100deg, ${t.palette.secondary.light}, ${t.palette.secondary.main} 45%, ${t.palette.secondary.dark})`,
									WebkitBackgroundClip: "text",
									backgroundClip: "text",
									color: "transparent",
								})}
							>
								{profile.name.split(" ").slice(1).join(" ")}
							</Box>
						</Typography>
						<Typography variant="h5" component="p" sx={{ mt: 1.5, fontWeight: 600 }}>
							{profile.title}{" "}
							<Box component="span" sx={{ color: "text.secondary", fontWeight: 400 }}>
								— {profile.tagline}
							</Box>
						</Typography>
						<Typography color="text.secondary" sx={{ mt: 2.5, maxWidth: 600, fontSize: "1.05rem" }}>
							{profile.summary}
						</Typography>

						<Stack direction="row" spacing={1.5} sx={{ mt: 4, flexWrap: "wrap", rowGap: 1.5 }} alignItems="center">
							<Button variant="contained" size="large" href="#projects" endIcon={<ArrowForward />}>
								See my work
							</Button>
							<Button variant="outlined" color="secondary" size="large" href={`mailto:${profile.email}`}>
								Get in touch
							</Button>
							<Stack direction="row" spacing={0.5}>
								<Tooltip title="GitHub">
									<IconButton href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
										<GitHubIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title="LinkedIn">
									<IconButton href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
										<LinkedInIcon />
									</IconButton>
								</Tooltip>
								<Tooltip title={profile.email}>
									<IconButton href={`mailto:${profile.email}`} aria-label="Email">
										<MailOutline />
									</IconButton>
								</Tooltip>
							</Stack>
						</Stack>
					</Grid>

					<Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
						<Portrait />
						<Box sx={{ display: { xs: "none", md: "block" } }}>
							<TerminalCard />
						</Box>
					</Grid>
				</Grid>

				<Grid container spacing={2} sx={{ mt: { xs: 6, md: 9 } }}>
					{stats.map((s) => (
						<Grid key={s.label} size={{ xs: 6, md: 3 }}>
							<Box
								sx={{
									height: "100%",
									pl: 2,
									borderLeft: 2,
									borderColor: "secondary.main",
								}}
							>
								<Typography
									sx={{ fontFamily: mono, fontWeight: 600, fontSize: { xs: "1.6rem", md: "2.1rem" }, color: "primary.main", lineHeight: 1.1 }}
								>
									{s.value}
								</Typography>
								<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
									{s.label}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
