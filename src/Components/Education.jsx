import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Section from "./Section";
import { education, coursework, leadership } from "../data";

export default function Education() {
	return (
		<Section id="education" title="Education">
			<Typography variant="h6" component="h3">
				George Mason University
			</Typography>
			<Stack spacing={1} sx={{ mt: 1.5 }}>
				{education.map((e) => (
					<Stack key={e.degree} direction={{ xs: "column", sm: "row" }} justifyContent="space-between" spacing={0.5}>
						<Typography>
							{e.degree}
							{e.note && (
								<Box component="span" sx={{ color: "text.secondary" }}>
									{` (${e.note})`}
								</Box>
							)}
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0 }}>
							{e.dates}
						</Typography>
					</Stack>
				))}
			</Stack>
			<Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
				<Box component="span" sx={{ color: "text.primary", fontWeight: 600 }}>
					Coursework:
				</Box>{" "}
				{coursework.join(", ")}
			</Typography>

			<Typography variant="h6" component="h3" sx={{ mt: 5 }}>
				Leadership and awards
			</Typography>
			<Box component="ul" sx={{ m: 0, mt: 1.5, pl: 2.5, "& li": { mb: 0.75 } }}>
				{leadership.map((l) => (
					<Typography key={l} component="li" color="text.secondary">
						{l}
					</Typography>
				))}
			</Box>
		</Section>
	);
}
