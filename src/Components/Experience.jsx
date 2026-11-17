import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";
import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
	return (
		<Section id="experience" title="Experience">
			<Stack spacing={5}>
				{experience.map((job) => (
					<Box key={job.org + job.role}>
						<Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems={{ sm: "baseline" }} spacing={0.5}>
							<Typography variant="h6" component="h3">
								{job.role}
								<Box component="span" sx={{ color: "text.secondary", fontWeight: 400 }}>
									{" at "}
									{job.link ? (
										<Link href={job.link} target="_blank" rel="noreferrer">
											{job.org}
										</Link>
									) : (
										job.org
									)}
								</Box>
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0 }}>
								{job.dates}
							</Typography>
						</Stack>
						<Box component="ul" sx={{ m: 0, mt: 1.25, pl: 2.5, "& li": { mb: 0.75 } }}>
							{job.bullets.map((b) => (
								<Typography key={b} component="li" variant="body1" color="text.secondary">
									{b}
								</Typography>
							))}
						</Box>
						<Typography variant="body2" sx={{ mt: 1, color: "text.secondary" }}>
							<Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
								Tools:
							</Box>{" "}
							{job.tools}
						</Typography>
					</Box>
				))}
			</Stack>
		</Section>
	);
}
