import React from "react";
import { Box, Typography } from "@mui/material";
import Reveal, { Shell, SplitText } from "./Reveal";

export default function Section({ id, index, title, children, tight }) {
	return (
		<Box
			component="section"
			id={id}
			sx={{ pt: tight ? { xs: 4, md: 6 } : { xs: 8, md: 12 }, pb: tight ? { xs: 5, md: 7 } : { xs: 8, md: 12 } }}
		>
			<Shell>
				{title && (
					<Box sx={{ mb: { xs: 4, md: 6 }, display: "flex", alignItems: "flex-end", gap: { xs: 2, md: 3 } }}>
						{index && (
							<Reveal>
								<Typography sx={{ color: "secondary.main", fontWeight: 700, fontSize: { xs: 13, md: 15 }, pb: { xs: 0.75, md: 1.25 } }}>
									{index}
								</Typography>
							</Reveal>
						)}
						<SplitText
							text={title}
							component="h2"
							sx={{
								m: 0,
								fontSize: { xs: "2.3rem", md: "3.4rem" },
								fontWeight: 800,
								letterSpacing: "-0.035em",
								lineHeight: 1,
								flexShrink: 0,
							}}
						/>
						<Reveal sx={{ flex: 1, pb: { xs: 1, md: 1.5 } }} delay={250}>
							<Box className="rule" sx={{ height: "1px", bgcolor: "divider" }} />
						</Reveal>
					</Box>
				)}
				{children}
			</Shell>
		</Box>
	);
}
