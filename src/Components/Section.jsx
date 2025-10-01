// Section.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Section({ id, title, subtitle, children, space = 2 }) {
	return (
		<Box
			id={id}
			component="section"
			sx={{
				pt: { xs: space, md: space + 0.5 },
				pb: { xs: space + 0.5, md: space + 1 },
			}}
		>
			<div className="container">
				{title && (
					<Typography
						variant="h5"
						sx={{ fontWeight: 800, mb: 1, lineHeight: 1.2 }}
					>
						{title}
					</Typography>
				)}
				{subtitle && (
					<Typography color="text.secondary" sx={{ mb: 1.5 }}>
						{subtitle}
					</Typography>
				)}
				{children}
			</div>
		</Box>
	);
}
