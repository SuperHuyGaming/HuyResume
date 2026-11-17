import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Section from "./Section";
import { skills } from "../data";

export default function Skills() {
	return (
		<Section id="skills" title="Skills">
			<Stack spacing={2}>
				{skills.map((s) => (
					<Box key={s.group} sx={{ display: { sm: "grid" }, gridTemplateColumns: "170px 1fr", gap: 2 }}>
						<Typography sx={{ fontWeight: 600 }}>{s.group}</Typography>
						<Typography color="text.secondary">{s.items.join(", ")}</Typography>
					</Box>
				))}
			</Stack>
		</Section>
	);
}
