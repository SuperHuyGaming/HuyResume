import React from "react";
import { Grid, Paper, Typography, Stack, Chip } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Section from "./Section";
import { mono } from "../theme";
import { skills } from "../data";

export default function Skills() {
	return (
		<Section id="skills" index="03" label="skills" title="Toolbox">
			<Grid container spacing={2.5}>
				{skills.map((s, i) => (
					<Grid key={s.group} size={{ xs: 12, sm: 6 }}>
						<Paper
							elevation={0}
							sx={(t) => ({ p: 3, height: "100%", bgcolor: alpha(t.palette.background.paper, 0.7) })}
						>
							<Typography sx={{ fontFamily: mono, fontSize: 13, color: "secondary.main", mb: 0.5 }}>
								{String(i + 1).padStart(2, "0")}
							</Typography>
							<Typography variant="h6" component="h3" sx={{ mb: 2 }}>
								{s.group}
							</Typography>
							<Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
								{s.items.map((it) => (
									<Chip key={it} label={it} variant="outlined" sx={{ borderColor: "divider" }} />
								))}
							</Stack>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Section>
	);
}
