import React from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import Section from "./Section";
import Reveal from "./Reveal";
import { education, leadership } from "../data";

const Label = ({ children }) => (
	<Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.1em" }}>
		{children}
	</Typography>
);

export default function Education() {
	return (
		<Section id="education" index="03" title="Education">
			<Grid container spacing={{ xs: 5, md: 8 }}>
				<Grid size={{ xs: 12, md: 7 }}>
					<Reveal>
						<Typography sx={{ fontWeight: 800, fontSize: { xs: "1.4rem", md: "1.7rem" }, letterSpacing: "-0.02em" }}>
							George Mason University
						</Typography>
					</Reveal>
					<Stack sx={{ mt: 2 }}>
						{education.map((e, i) => (
							<Reveal key={e.degree} delay={100 + i * 100}>
								<Stack
									direction="row"
									justifyContent="space-between"
									spacing={2}
									sx={{ py: 1.5, borderTop: 1, borderColor: "divider" }}
								>
									<Box>
										<Typography sx={{ fontWeight: 600 }}>{e.degree}</Typography>
										{e.note && (
											<Typography variant="body2" color="text.secondary">
												{e.note}
											</Typography>
										)}
									</Box>
									<Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0, pt: 0.3 }}>
										{e.dates}
									</Typography>
								</Stack>
							</Reveal>
						))}
					</Stack>
				</Grid>
				<Grid size={{ xs: 12, md: 5 }}>
					<Reveal delay={150}>
						<Label>Leadership</Label>
						<Stack sx={{ mt: 1 }}>
							{leadership.map((l) => (
								<Typography key={l} sx={{ py: 1.25, borderTop: 1, borderColor: "divider" }}>
									{l}
								</Typography>
							))}
						</Stack>
					</Reveal>
				</Grid>
			</Grid>
		</Section>
	);
}
