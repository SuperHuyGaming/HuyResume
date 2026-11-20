import React from "react";
import {
	AppBar,
	Toolbar,
	Box,
	Button,
	IconButton,
	Tooltip,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	useScrollTrigger,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import { Shell } from "./Reveal";
import { profile, RESUME_PDF } from "../data";

const LINKS = [
	{ id: "work", label: "Work" },
	{ id: "experience", label: "Experience" },
	{ id: "education", label: "Education" },
	{ id: "contact", label: "Contact" },
];

/** Which section is in the middle of the screen. */
function useActiveSection() {
	const [active, setActive] = React.useState(null);
	React.useEffect(() => {
		const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
		const obs = new IntersectionObserver(
			(entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
			{ rootMargin: "-45% 0px -50% 0px" }
		);
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);
	return active;
}

/** Thin bar along the bottom of the nav showing how far down the page you are. */
function ScrollProgress() {
	const ref = React.useRef(null);
	React.useEffect(() => {
		let frame = 0;
		const update = () => {
			frame = 0;
			const max = document.documentElement.scrollHeight - window.innerHeight;
			if (ref.current) ref.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
		};
		const onScroll = () => frame || (frame = requestAnimationFrame(update));
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			cancelAnimationFrame(frame);
		};
	}, []);
	return (
		<Box
			ref={ref}
			sx={{
				position: "absolute",
				left: 0,
				right: 0,
				bottom: 0,
				height: 2,
				bgcolor: "primary.main",
				transform: "scaleX(0)",
				transformOrigin: "left",
			}}
		/>
	);
}

/** Hides the nav while scrolling down, brings it back on any scroll up. */
function useHideOnScroll() {
	const [hidden, setHidden] = React.useState(false);
	React.useEffect(() => {
		let last = window.scrollY;
		const onScroll = () => {
			const y = window.scrollY;
			if (Math.abs(y - last) < 6) return;
			setHidden(y > last && y > 240);
			last = y;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return hidden;
}

export default function NavBar({ mode, onToggleMode }) {
	const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
	const hidden = useHideOnScroll();
	const active = useActiveSection();
	const [open, setOpen] = React.useState(false);

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={(t) => ({
				color: "text.primary",
				bgcolor: alpha(t.palette.background.default, scrolled ? 0.75 : 1),
				backdropFilter: "saturate(180%) blur(12px)",
				border: 0,
				borderBottom: 1,
				borderColor: scrolled ? "divider" : "transparent",
				transform: hidden && !open ? "translateY(-100%)" : "none",
				transition: "transform .45s cubic-bezier(.2,.8,.2,1), background-color .3s ease, border-color .3s ease",
			})}
		>
			<Shell>
				<Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 }, gap: 0.5 }}>
					<Box
						component="a"
						href="#top"
						sx={{ fontWeight: 700, fontSize: 17, color: "text.primary", textDecoration: "none", mr: "auto" }}
					>
						{profile.name}
					</Box>

					<Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
						{LINKS.map((l) => {
							const on = active === l.id;
							return (
								<Button
									key={l.id}
									href={`#${l.id}`}
									size="small"
									sx={{
										color: on ? "text.primary" : "text.secondary",
										fontWeight: 500,
										position: "relative",
										"&::after": {
											content: '""',
											position: "absolute",
											left: 10,
											right: 10,
											bottom: 2,
											height: 2,
											borderRadius: 1,
											bgcolor: "primary.main",
											transform: on ? "scaleX(1)" : "scaleX(0)",
											transition: "transform .3s ease",
										},
										"&:hover::after": { transform: "scaleX(1)" },
									}}
								>
									{l.label}
								</Button>
							);
						})}
						<Button size="small" href={RESUME_PDF} target="_blank" sx={{ fontWeight: 600 }}>
							Resume
						</Button>
					</Box>

					<Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
						<IconButton onClick={onToggleMode} aria-label="Toggle color mode" size="small">
							{mode === "dark" ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
						</IconButton>
					</Tooltip>
					<IconButton sx={{ display: { md: "none" } }} onClick={() => setOpen(true)} aria-label="Open menu">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</Shell>
			<ScrollProgress />

			<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
				<List sx={{ width: 220, pt: 2 }}>
					{LINKS.map((l) => (
						<ListItemButton key={l.id} component="a" href={`#${l.id}`} onClick={() => setOpen(false)}>
							<ListItemText primary={l.label} />
						</ListItemButton>
					))}
					<ListItemButton component="a" href={RESUME_PDF} target="_blank">
						<ListItemText primary="Resume (PDF)" />
					</ListItemButton>
				</List>
			</Drawer>
		</AppBar>
	);
}
