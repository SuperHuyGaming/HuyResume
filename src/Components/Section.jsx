import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Section({ id, title, children, maxWidth = "md" }) {
	return (
		<Box component="section" id={id} sx={{ py: { xs: 6, md: 8 } }}>
			<Container maxWidth={maxWidth}>
				{title && (
					<Box sx={{ mb: { xs: 3, md: 4 } }}>
						<Typography variant="h2" sx={{ fontSize: { xs: "1.6rem", md: "1.9rem" } }}>
							{title}
						</Typography>
						<Box sx={{ width: 40, height: 3, bgcolor: "secondary.main", borderRadius: 2, mt: 1 }} />
					</Box>
				)}
				{children}
			</Container>
		</Box>
	);
}
