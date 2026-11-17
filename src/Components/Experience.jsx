import React from "react";
import { Box, Typography, Stack, Chip, Link } from "@mui/material";
import { alpha } from "@mui/material/styles";
import OpenInNew from "@mui/icons-material/OpenInNew";
import Section, { Rich } from "./Section";
import { mono } from "../theme";
import { experience } from "../data";

export default function Experience() {
	return (
		<Section id="experience" index="01" label="experience" title="Where I've shipped">
			<Box sx={{ position: "relative", pl: { xs: 3, md: 0 } }}>
				{/* timeline rail */}
				<Box
					sx={(t) => ({
						position: "absolute",
						top: 8,
						bottom: 8,
						left: { xs: 5, md: "calc(220px + 23px)" },
						width: "2px",
						background: `linear-gradient(${t.palette.primary.main}, ${t.palette.secondary.main} 60%, transparent)`,
						opacity: 0.6,
					})}
				/>
				<Stack spacing={{ xs: 5, md: 6 }}>
					{experience.map((job) => (
						<Box
							key={job.org + job.role}
							sx={{
								display: "grid",
								gridTemplateColumns: { xs: "1fr", md: "220px 48px 1fr" },
								position: "relative",
							}}
						>
							<Typography
								sx={{
									fontFamily: mono,
									fontSize: 13,
									color: "text.secondary",
									pt: { md: 0.75 },
									mb: { xs: 0.5, md: 0 },
									textAlign: { md: "right" },
								}}
							>
								{job.dates}
							</Typography>
							{/* node */}
							<Box
								sx={(t) => ({
									position: { xs: "absolute", md: "relative" },
									left: { xs: -24, md: 0 },
									top: { xs: 4 },
									justifySelf: "center",
									width: 14,
									height: 14,
									mt: { md: 0.9 },
									borderRadius: "50%",
									bgcolor: "background.default",
									border: `3px solid ${t.palette.secondary.main}`,
									boxShadow: `0 0 0 4px ${alpha(t.palette.secondary.main, 0.15)}`,
								})}
							/>
							<Box>
								<Typography variant="h5" component="h3">
									{job.role}
								</Typography>
								<Typography sx={{ color: "primary.main", fontWeight: 600, mt: 0.25 }}>
									{job.link ? (
										<Link href={job.link} target="_blank" rel="noreferrer" color="inherit" sx={{ display: "inline-flex", alignItems: "center", gap: 0.5 }}>
											{job.org} <OpenInNew sx={{ fontSize: 15 }} />
										</Link>
									) : (
										job.org
									)}
								</Typography>
								<Box component="ul" sx={{ m: 0, mt: 1.5, pl: 2.25, color: "text.secondary", "& li": { mb: 0.75 }, "& li::marker": { color: "secondary.main" } }}>
									{job.bullets.map((b) => (
										<li key={b}>
											<Typography variant="body2" component="span" sx={{ fontSize: "0.95rem" }}>
												<Rich text={b} />
											</Typography>
										</li>
									))}
								</Box>
								<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75, mt: 1.5 }}>
									{job.tech.map((t) => (
										<Chip key={t} label={t} size="small" variant="outlined" color="primary" />
									))}
								</Stack>
							</Box>
						</Box>
					))}
				</Stack>
			</Box>
		</Section>
	);
}
