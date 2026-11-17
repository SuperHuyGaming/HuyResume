import React from "react";
import { Grid, Paper, Typography, Stack, Chip, Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import SchoolOutlined from "@mui/icons-material/SchoolOutlined";
import Groups2Outlined from "@mui/icons-material/Groups2Outlined";
import Section from "./Section";
import { mono } from "../theme";
import { education, coursework, leadership } from "../data";

const card = (t) => ({ p: { xs: 2.5, md: 3 }, height: "100%", bgcolor: alpha(t.palette.background.paper, 0.7) });

export default function Education() {
	return (
		<Section id="education" index="04" label="education" title="Education & leadership">
			<Grid container spacing={2.5}>
				<Grid size={{ xs: 12, md: 7 }}>
					<Paper elevation={0} sx={card}>
						<Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2.5 }}>
							<SchoolOutlined sx={{ color: "secondary.main" }} />
							<Typography variant="h6" component="h3">George Mason University</Typography>
						</Stack>
						<Stack spacing={2.5}>
							{education.map((e) => (
								<Box key={e.degree} sx={{ pl: 2, borderLeft: 2, borderColor: "primary.main" }}>
									<Typography sx={{ fontWeight: 600 }}>{e.degree}</Typography>
									<Typography sx={{ fontFamily: mono, fontSize: 13, color: "text.secondary", mt: 0.25 }}>
										{e.dates}
										{e.note && (
											<Box component="span" sx={{ color: "secondary.main" }}>
												{" · "}
												{e.note}
											</Box>
										)}
									</Typography>
								</Box>
							))}
						</Stack>
						<Typography sx={{ fontFamily: mono, fontSize: 12, color: "text.secondary", mt: 3, mb: 1 }}>
							{"// coursework"}
						</Typography>
						<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75 }}>
							{coursework.map((c) => (
								<Chip key={c} label={c} size="small" variant="outlined" sx={{ borderColor: "divider" }} />
							))}
						</Stack>
					</Paper>
				</Grid>
				<Grid size={{ xs: 12, md: 5 }}>
					<Paper elevation={0} sx={card}>
						<Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2.5 }}>
							<Groups2Outlined sx={{ color: "secondary.main" }} />
							<Typography variant="h6" component="h3">Leadership</Typography>
						</Stack>
						<Stack spacing={2.5}>
							{leadership.map((l) => (
								<Box key={l.org}>
									<Typography sx={{ fontWeight: 600 }}>
										{l.role}{" "}
										<Box component="span" sx={{ color: "primary.main" }}>
											@ {l.org}
										</Box>
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{l.detail}
									</Typography>
								</Box>
							))}
							<Box>
								<Typography sx={{ fontWeight: 600 }}>
									Outstanding TA Award{" "}
									<Box component="span" sx={{ color: "primary.main" }}>
										@ GMU CS
									</Box>
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Recognized for leading weekly algorithms labs in C
								</Typography>
							</Box>
						</Stack>
					</Paper>
				</Grid>
			</Grid>
		</Section>
	);
}
