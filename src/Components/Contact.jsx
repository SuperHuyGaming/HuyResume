import React from "react";
import { Box, Typography, Stack, Button, Divider, IconButton, Snackbar } from "@mui/material";
import { alpha } from "@mui/material/styles";
import ContentCopy from "@mui/icons-material/ContentCopy";
import NorthEast from "@mui/icons-material/NorthEast";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Reveal, { Shell, SplitText, Magnetic } from "./Reveal";
import { profile, RESUME_PDF } from "../data";
import { startVisits } from "../visits";

export default function Contact() {
	const [total, setTotal] = React.useState(null);
	const [copied, setCopied] = React.useState(false);
	React.useEffect(() => startVisits("resume", (d) => setTotal(d.total)), []);

	const copy = () => {
		navigator.clipboard?.writeText(profile.email).then(
			() => setCopied(true),
			() => {}
		);
	};

	return (
		<Box component="section" id="contact" sx={{ pt: { xs: 8, md: 12 }, position: "relative", overflow: "hidden" }}>
			<Shell>
				<Stack direction="row" alignItems="flex-end" spacing={{ xs: 2, md: 3 }}>
					<Reveal>
						<Typography sx={{ color: "secondary.main", fontWeight: 700, fontSize: { xs: 13, md: 15 }, pb: { xs: 1, md: 2 } }}>04</Typography>
					</Reveal>
					<SplitText
						text="Get in touch"
						component="h2"
						stagger={35}
						sx={{
							m: 0,
							fontSize: { xs: "3rem", sm: "4.5rem", md: "6.5rem" },
							fontWeight: 800,
							letterSpacing: "-0.045em",
							lineHeight: 1,
						}}
					/>
				</Stack>
				<Reveal delay={300}>
					<Typography color="text.secondary" sx={{ mt: 2.5, fontSize: { md: "1.1rem" } }}>
						Open to software engineering and machine learning roles.
					</Typography>
				</Reveal>

				<Reveal delay={400}>
					<Box
						component="a"
						href={`mailto:${profile.email}`}
						data-cursor="Email"
						sx={(t) => ({
							display: "inline-flex",
							alignItems: "center",
							gap: { xs: 1, md: 2 },
							mt: { xs: 4, md: 5 },
							color: "text.primary",
							textDecoration: "none",
							fontWeight: 700,
							fontSize: { xs: "1.25rem", sm: "2rem", md: "2.75rem" },
							letterSpacing: "-0.02em",
							position: "relative",
							wordBreak: "break-all",
							"&::after": {
								content: '""',
								position: "absolute",
								left: 0,
								right: 0,
								bottom: -4,
								height: { xs: 2, md: 3 },
								bgcolor: alpha(t.palette.text.primary, 0.15),
							},
							"&::before": {
								content: '""',
								position: "absolute",
								left: 0,
								right: 0,
								bottom: -4,
								height: { xs: 2, md: 3 },
								bgcolor: "primary.main",
								transform: "scaleX(0)",
								transformOrigin: "right",
								transition: "transform .6s cubic-bezier(.2,.8,.2,1)",
								zIndex: 1,
							},
							"&:hover": { color: "primary.main" },
							"&:hover::before": { transform: "scaleX(1)", transformOrigin: "left" },
							"&:hover .mail-arrow": { transform: "translate(4px, -4px) rotate(0deg)" },
							transition: "color .3s ease",
						})}
					>
						{profile.email}
						<NorthEast className="mail-arrow" sx={{ fontSize: "0.8em", transition: "transform .4s ease", transform: "rotate(45deg)" }} />
					</Box>
				</Reveal>

				<Reveal delay={500}>
					<Stack direction="row" spacing={1.5} useFlexGap sx={{ mt: { xs: 4, md: 5 }, flexWrap: "wrap" }}>
						<Magnetic>
							<Button variant="outlined" size="large" onClick={copy} startIcon={<ContentCopy />}>
								Copy email
							</Button>
						</Magnetic>
						<Magnetic>
							<Button variant="contained" size="large" href={RESUME_PDF} target="_blank">
								Resume (PDF)
							</Button>
						</Magnetic>
					</Stack>
				</Reveal>

				<Divider sx={{ mt: { xs: 8, md: 12 } }} />
				<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 2.5 }}>
					<Typography variant="body2" color="text.secondary">
						© {new Date().getFullYear()} {profile.name}
						{total != null && ` · ${total.toLocaleString()} ${total === 1 ? "visitor" : "visitors"}`}
					</Typography>
					<Stack direction="row">
						<IconButton size="small" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
							<GitHubIcon fontSize="small" />
						</IconButton>
						<IconButton size="small" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
							<LinkedInIcon fontSize="small" />
						</IconButton>
					</Stack>
				</Stack>
			</Shell>
			<Snackbar
				open={copied}
				autoHideDuration={2000}
				onClose={() => setCopied(false)}
				message="Email copied"
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			/>
		</Box>
	);
}
