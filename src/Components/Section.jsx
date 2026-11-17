import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";
import { mono } from "../theme";

/** Section shell with a numbered mono label ("01 / experience") and a serif heading. */
export default function Section({ id, index, label, title, children, maxWidth = "lg" }) {
	return (
		<Box component="section" id={id} sx={{ position: "relative", py: { xs: 7, md: 10 } }}>
			<Container maxWidth={maxWidth}>
				{title && (
					<Stack spacing={1} sx={{ mb: { xs: 4, md: 5 } }}>
						<Stack direction="row" alignItems="center" spacing={1.5}>
							<Typography
								component="span"
								sx={{ fontFamily: mono, fontSize: 13, color: "secondary.main", letterSpacing: "0.08em" }}
							>
								{index} / {label}
							</Typography>
							<Box
								sx={{
									flex: 1,
									maxWidth: 160,
									height: "1px",
									background: (t) =>
										`linear-gradient(90deg, ${t.palette.secondary.main}, transparent)`,
								}}
							/>
						</Stack>
						<Typography variant="h2" component="h2" sx={{ fontSize: { xs: "2rem", md: "2.75rem" } }}>
							{title}
						</Typography>
					</Stack>
				)}
				{children}
			</Container>
		</Box>
	);
}

/** Renders text with **bold** segments highlighted in the primary color. */
export function Rich({ text }) {
	const parts = text.split(/\*\*(.+?)\*\*/g);
	return parts.map((part, i) =>
		i % 2 ? (
			<Box component="strong" key={i} sx={{ color: "text.primary", fontWeight: 650 }}>
				{part}
			</Box>
		) : (
			<React.Fragment key={i}>{part}</React.Fragment>
		)
	);
}
