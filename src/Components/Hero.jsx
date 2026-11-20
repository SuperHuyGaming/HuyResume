import React from "react";
import { Box, Typography, Stack, Button, IconButton, Tooltip } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutline from "@mui/icons-material/MailOutline";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Reveal, { Shell, SplitText, Magnetic } from "./Reveal";
import DotField from "./DotField";
import { profile, RESUME_PDF } from "../data";
import { finePointer } from "../motion";

/** Profile photo that tilts toward the cursor. */
function Portrait() {
	const ref = React.useRef(null);
	const enabled = React.useMemo(finePointer, []);
	const move = (e) => {
		const r = ref.current.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - 0.5;
		const y = (e.clientY - r.top) / r.height - 0.5;
		ref.current.style.transform = `perspective(700px) rotateY(${x * 18}deg) rotateX(${-y * 18}deg) scale(1.04)`;
	};
	const leave = () => {
		ref.current.style.transform = "";
	};
	return (
		<Box
			ref={ref}
			onMouseMove={enabled ? move : undefined}
			onMouseLeave={enabled ? leave : undefined}
			component="img"
			src={profile.photo}
			alt={profile.name}
			sx={(t) => ({
				display: "block",
				width: { xs: 112, sm: 190, md: 240 },
				height: { xs: 112, sm: 190, md: 240 },
				borderRadius: "50%",
				objectFit: "cover",
				border: 4,
				borderColor: "background.paper",
				boxShadow: `0 0 0 2px ${t.palette.secondary.main}, 0 30px 70px -24px ${alpha(t.palette.primary.main, 0.6)}`,
				transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
			})}
		/>
	);
}

const LINKS = [
	{ label: "Email", href: `mailto:${profile.email}`, icon: <MailOutline /> },
	{ label: "GitHub", href: profile.github, icon: <GitHubIcon />, ext: true },
	{ label: "LinkedIn", href: profile.linkedin, icon: <LinkedInIcon />, ext: true },
];

export default function Hero() {
	const theme = useTheme();
	return (
		<Box
			component="section"
			id="top"
			sx={{
				position: "relative",
				overflow: "hidden",
				pt: { xs: 6, md: 11 },
				pb: { xs: 2, md: 4 },
			}}
		>
			<DotField color={theme.palette.primary.main} base={theme.palette.text.secondary} />
			<Shell sx={{ position: "relative", width: "100%" }}>
				<Stack
					direction={{ xs: "column-reverse", sm: "row" }}
					spacing={{ xs: 3, sm: 6 }}
					alignItems={{ xs: "flex-start", sm: "center" }}
					justifyContent="space-between"
				>
					<Box>
						<SplitText
							text={profile.name}
							component="h1"
							stagger={45}
							delay={100}
							sx={{
								m: 0,
								fontSize: { xs: "3.2rem", sm: "4.2rem", md: "5.6rem" },
								fontWeight: 800,
								letterSpacing: "-0.04em",
								lineHeight: 1,
							}}
						/>
						<Reveal delay={600}>
							<Typography sx={{ color: "primary.main", fontWeight: 600, fontSize: { xs: "1.2rem", md: "1.5rem" }, mt: 2 }}>
								{profile.title}
							</Typography>
						</Reveal>
						<Reveal delay={700}>
							<Typography color="text.secondary" sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, mt: 1, maxWidth: 480 }}>
								{profile.intro}
							</Typography>
						</Reveal>
						<Reveal delay={800}>
							<Stack direction="row" spacing={1} useFlexGap sx={{ mt: 4, flexWrap: "wrap" }} alignItems="center">
								<Magnetic>
									<Button variant="contained" size="large" href="#work" endIcon={<ArrowDownward />}>
										See my work
									</Button>
								</Magnetic>
								<Magnetic>
									<Button variant="outlined" size="large" href={RESUME_PDF} target="_blank">
										Resume
									</Button>
								</Magnetic>
								<Box sx={{ display: "flex", ml: { xs: -1, sm: 0.5 } }}>
									{LINKS.map((l) => (
										<Magnetic key={l.label} strength={0.5}>
											<Tooltip title={l.label}>
												<IconButton href={l.href} aria-label={l.label} {...(l.ext ? { target: "_blank", rel: "noreferrer" } : {})}>
													{l.icon}
												</IconButton>
											</Tooltip>
										</Magnetic>
									))}
								</Box>
							</Stack>
						</Reveal>
					</Box>

					<Reveal delay={300}>
						<Portrait />
					</Reveal>
				</Stack>
			</Shell>

		</Box>
	);
}
