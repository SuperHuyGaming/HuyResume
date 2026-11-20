import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Section from "./Section";
import Reveal from "./Reveal";
import { useScrollFrame, clamp01 } from "../motion";
import { experience } from "../data";

/** Timeline whose line draws itself as you scroll; each dot lights up when the line reaches it. */
export default function Experience() {
	const list = React.useRef(null);
	const fill = React.useRef(null);

	useScrollFrame(list, (r, vh) => {
		const p = clamp01((vh * 0.65 - r.top) / r.height);
		fill.current.style.transform = `scaleY(${p})`;
		const reach = p * r.height;
		list.current.classList.add("armed");
		list.current.querySelectorAll("[data-node]").forEach((n) => {
			n.classList.toggle("is-on", n.offsetTop <= reach);
		});
	}, true);

	return (
		<Section id="experience" index="02" title="Experience">
			<Box ref={list} sx={{ position: "relative", pl: { xs: 4, sm: 5 } }}>
				<Box sx={{ position: "absolute", left: 6, top: 10, bottom: 10, width: "2px", bgcolor: "divider", borderRadius: 1 }}>
					<Box
						ref={fill}
						className="timeline-fill"
						sx={{ position: "absolute", inset: 0, bgcolor: "primary.main", transformOrigin: "top", borderRadius: 1 }}
					/>
				</Box>
				{experience.map((job, i) => {
					const current = /now/i.test(job.dates);
					return (
						<Box
							key={job.org + job.role}
							data-node
							sx={(t) => ({
								position: "relative",
								pb: i === experience.length - 1 ? 0 : { xs: 4, md: 5 },
								"& .node": {
									position: "absolute",
									left: { xs: -32, sm: -40 },
									top: 6,
									width: 14,
									height: 14,
									borderRadius: "50%",
									bgcolor: current ? "primary.main" : "background.default",
									border: 2,
									borderColor: "primary.main",
									transition: "all .4s ease",
									"--pulse-color": alpha(t.palette.primary.main, 0.55),
								},
								".armed &:not(.is-on) .node": { borderColor: "divider", bgcolor: "background.default", animation: "none" },
								".armed &:not(.is-on) .role": { color: "text.secondary" },
							})}
						>
							<span className={`node${current ? " bt-pulse" : ""}`} />
							<Reveal delay={60}>
								<Box
									sx={(t) => ({
										p: { xs: 0, md: 2 },
										mx: { md: -2 },
										mt: { md: -2 },
										borderRadius: 2,
										transition: "background-color .3s ease, transform .3s ease",
										"&:hover": { bgcolor: { md: alpha(t.palette.primary.main, 0.05) }, transform: { md: "translateX(6px)" } },
									})}
								>
									<Box sx={{ display: { sm: "flex" }, justifyContent: "space-between", alignItems: "baseline", gap: 2 }}>
										<Typography className="role" sx={{ fontWeight: 700, fontSize: { xs: "1.05rem", md: "1.2rem" }, color: "text.primary", transition: "color .4s ease" }}>
											{job.role}
											<Box component="span" sx={{ color: "text.secondary", fontWeight: 500 }}>
												{" · "}
												{job.link ? (
													<Link href={job.link} target="_blank" rel="noreferrer">
														{job.org}
													</Link>
												) : (
													job.org
												)}
											</Box>
										</Typography>
										<Typography variant="body2" color="text.secondary" sx={{ flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>
											{job.dates}
										</Typography>
									</Box>
									<Typography color="text.secondary" sx={{ mt: 0.5, maxWidth: 680 }}>
										{job.line}
									</Typography>
								</Box>
							</Reveal>
						</Box>
					);
				})}
			</Box>
		</Section>
	);
}
