import React from "react";
import { Grid, Typography, Stack, Chip, Button, Box, Link } from "@mui/material";
import { alpha } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import Launch from "@mui/icons-material/Launch";
import NorthEast from "@mui/icons-material/NorthEast";
import Section from "./Section";
import Reveal, { Magnetic } from "./Reveal";
import { finePointer, useScrollFrame, clamp01 } from "../motion";
import { featuredProjects, otherProjects, profile } from "../data";

/** Muted demo video that plays while it is on screen. */
function DemoVideo({ src, poster, title }) {
	const ref = React.useRef(null);
	React.useEffect(() => {
		const v = ref.current;
		if (!v) return;
		const obs = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), {
			threshold: 0.4,
		});
		obs.observe(v);
		return () => obs.disconnect();
	}, []);

	return (
		<Box
			component="video"
			ref={ref}
			src={src}
			poster={poster}
			muted
			loop
			playsInline
			controls
			preload="metadata"
			aria-label={`${title} demo video`}
			sx={{ display: "block", width: "100%", aspectRatio: "16 / 9", bgcolor: "#000" }}
		/>
	);
}

/**
 * The demo video inside a browser window. It rises out of a 3D tilt as it scrolls
 * into view, then leans toward the mouse while hovered.
 */
function BrowserFrame({ p, flip }) {
	const outer = React.useRef(null);
	const host = new URL(p.live).host;
	const tilt = React.useMemo(finePointer, []);

	useScrollFrame(outer, (r, vh) => {
		const enter = clamp01((vh - r.top) / (vh * 0.75));
		outer.current.style.setProperty("--enter", enter.toFixed(3));
	});

	const move = (e) => {
		const r = outer.current.getBoundingClientRect();
		const x = (e.clientX - r.left) / r.width - 0.5;
		const y = (e.clientY - r.top) / r.height - 0.5;
		outer.current.style.setProperty("--ry", `${x * 6}deg`);
		outer.current.style.setProperty("--rx", `${-y * 6}deg`);
	};
	const leave = () => {
		outer.current.style.setProperty("--ry", "0deg");
		outer.current.style.setProperty("--rx", "0deg");
	};

	return (
		<Box ref={outer} onMouseMove={tilt ? move : undefined} onMouseLeave={tilt ? leave : undefined} sx={{ perspective: "1400px" }}>
			<Box
				sx={(t) => ({
					"--side": flip ? "-1" : "1",
					borderRadius: 3,
					overflow: "hidden",
					border: 1,
					borderColor: "divider",
					bgcolor: "background.paper",
					transformOrigin: "50% 100%",
					transform: `rotateX(calc((1 - var(--enter, 1)) * 22deg + var(--rx, 0deg)))
						rotateY(calc((1 - var(--enter, 1)) * var(--side) * -10deg + var(--ry, 0deg)))
						scale(calc(0.86 + var(--enter, 1) * 0.14))`,
					opacity: "calc(0.25 + var(--enter, 1) * 0.75)",
					transition: "transform .2s ease-out, box-shadow .4s ease",
					boxShadow: `0 40px 80px -40px ${alpha(t.palette.mode === "dark" ? "#000" : t.palette.primary.dark, 0.55)}`,
					"&:hover": { boxShadow: `0 50px 90px -40px ${alpha(t.palette.primary.main, 0.55)}` },
				})}
			>
				<Stack direction="row" alignItems="center" spacing={0.75} sx={{ px: 1.5, py: 1, borderBottom: 1, borderColor: "divider" }}>
					{["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
						<Box key={c} sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: c, opacity: 0.85 }} />
					))}
					<Link
						href={p.live}
						target="_blank"
						rel="noreferrer"
						underline="none"
						data-cursor="Visit"
						sx={{
							flex: 1,
							mx: 2,
							textAlign: "center",
							fontSize: 12,
							color: "text.secondary",
							bgcolor: "action.hover",
							borderRadius: 1.5,
							py: 0.4,
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							"&:hover": { color: "primary.main" },
						}}
					>
						{host}
					</Link>
				</Stack>
				<DemoVideo src={p.video} poster={p.poster} title={p.name} />
			</Box>
		</Box>
	);
}

function Featured({ p, i }) {
	const flip = i % 2 === 1;
	return (
		<Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
			<Grid size={{ xs: 12, md: 8 }} order={{ md: flip ? 2 : 1 }}>
				<BrowserFrame p={p} flip={flip} />
			</Grid>
			<Grid size={{ xs: 12, md: 4 }} order={{ md: flip ? 1 : 2 }}>
				<Reveal>
					<Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.08em" }}>
						{p.metric}
					</Typography>
				</Reveal>
				<Reveal delay={80}>
					<Typography variant="h4" component="h3" sx={{ mt: 1, fontWeight: 800, letterSpacing: "-0.02em", fontSize: { xs: "1.6rem", md: "1.9rem" } }}>
						{p.name}
					</Typography>
				</Reveal>
				<Reveal delay={160}>
					<Typography color="text.secondary" sx={{ mt: 1.25 }}>
						{p.blurb}
					</Typography>
				</Reveal>
				<Stack direction="row" sx={{ flexWrap: "wrap", gap: 0.75, mt: 2 }}>
					{p.tech.map((t, ti) => (
						<Reveal key={t} delay={220 + ti * 50}>
							<Chip label={t} size="small" variant="outlined" />
						</Reveal>
					))}
				</Stack>
				<Reveal delay={300}>
					<Stack direction="row" spacing={1} sx={{ mt: 3 }}>
						<Magnetic>
							<Button variant="contained" href={p.live} target="_blank" rel="noreferrer" endIcon={<Launch />}>
								Open app
							</Button>
						</Magnetic>
						<Magnetic>
							<Button variant="outlined" href={p.github} target="_blank" rel="noreferrer" startIcon={<GitHubIcon />}>
								Code
							</Button>
						</Magnetic>
					</Stack>
				</Reveal>
			</Grid>
		</Grid>
	);
}

function SmallProject({ p }) {
	const Wrapper = p.github ? Link : Box;
	const linkProps = p.github
		? { href: p.github, target: "_blank", rel: "noreferrer", underline: "none", "data-cursor": "Code" }
		: {};
	return (
		<Wrapper
			{...linkProps}
			className="card"
			sx={(t) => ({
				position: "relative",
				display: "flex",
				flexDirection: "column",
				height: "100%",
				p: 3,
				borderRadius: 3,
				border: 1,
				borderColor: "divider",
				bgcolor: "background.paper",
				color: "inherit",
				overflow: "hidden",
				transition: "transform .4s cubic-bezier(.2,.8,.2,1), border-color .3s ease",
				"&::after": {
					content: '""',
					position: "absolute",
					left: 0,
					bottom: 0,
					height: 3,
					width: "100%",
					bgcolor: "primary.main",
					transform: "scaleX(0)",
					transformOrigin: "left",
					transition: "transform .5s cubic-bezier(.2,.8,.2,1)",
				},
				"&:hover": { transform: "translateY(-6px)", borderColor: alpha(t.palette.primary.main, 0.5) },
				"&:hover::after": { transform: "scaleX(1)" },
				"&:hover .card-arrow": { transform: "translate(3px, -3px)", color: "primary.main" },
				"@media (prefers-reduced-motion: reduce)": { "&:hover": { transform: "none" } },
			})}
		>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography variant="caption" sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
					{p.tag}
				</Typography>
				{p.status && (
					<Stack direction="row" alignItems="center" spacing={0.75}>
						<Box className="bt-pulse" sx={{ width: 7, height: 7, borderRadius: "50%", bgcolor: "primary.main" }} />
						<Typography variant="caption" color="text.secondary">
							{p.status}
						</Typography>
					</Stack>
				)}
				{p.github && <NorthEast className="card-arrow" sx={{ fontSize: 18, color: "text.secondary", transition: "all .3s ease" }} />}
			</Stack>
			<Typography sx={{ fontWeight: 700, fontSize: "1.1rem", mt: 1.5 }}>{p.name}</Typography>
			<Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, flex: 1 }}>
				{p.blurb}
			</Typography>
			<Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
				{p.tech.join(" · ")}
			</Typography>
		</Wrapper>
	);
}

export default function Projects() {
	return (
		<Section id="work" index="01" title="Work" tight>
			<Stack spacing={{ xs: 10, md: 16 }}>
				{featuredProjects.map((p, i) => (
					<Featured key={p.name} p={p} i={i} />
				))}
			</Stack>

			<Grid container spacing={2} sx={{ mt: { xs: 10, md: 16 } }}>
				{otherProjects.map((p, i) => (
					<Grid key={p.name} size={{ xs: 12, sm: 4 }}>
						<Reveal delay={i * 120} sx={{ height: "100%" }}>
							<SmallProject p={p} />
						</Reveal>
					</Grid>
				))}
			</Grid>
			<Reveal>
				<Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
					More on{" "}
					<Link href={profile.github} target="_blank" rel="noreferrer">
						GitHub
					</Link>
				</Typography>
			</Reveal>
		</Section>
	);
}
