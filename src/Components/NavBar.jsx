import React from "react";
import {
	AppBar,
	Toolbar,
	Container,
	Box,
	Button,
	IconButton,
	Tooltip,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	Typography,
	useScrollTrigger,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import { mono } from "../theme";
import { profile, RESUME_PDF } from "../data";

const LINKS = [
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "education", label: "Education" },
	{ id: "contact", label: "Contact" },
];

function useActiveSection() {
	const [active, setActive] = React.useState("");
	React.useEffect(() => {
		const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
			},
			{ rootMargin: "-45% 0px -50% 0px" }
		);
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);
	return active;
}

export default function NavBar({ mode, onToggleMode }) {
	const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 12 });
	const active = useActiveSection();
	const [open, setOpen] = React.useState(false);

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={(t) => ({
				color: "text.primary",
				background: scrolled ? alpha(t.palette.background.default, 0.78) : "transparent",
				backdropFilter: scrolled ? "blur(14px)" : "none",
				border: 0,
				borderBottom: `1px solid ${scrolled ? t.palette.divider : "transparent"}`,
				transition: "background .25s, border-color .25s",
			})}
		>
			<Container maxWidth="lg">
				<Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 68 }, gap: 1 }}>
					<Box
						component="a"
						href="#top"
						sx={{
							fontFamily: mono,
							fontWeight: 600,
							fontSize: 16,
							color: "text.primary",
							textDecoration: "none",
							display: "flex",
							alignItems: "center",
							gap: 1,
							mr: "auto",
						}}
					>
						<Box
							component="span"
							sx={{
								width: 30,
								height: 30,
								borderRadius: "8px",
								display: "grid",
								placeItems: "center",
								fontSize: 13,
								color: "secondary.contrastText",
								background: (t) =>
									`linear-gradient(135deg, ${t.palette.secondary.light}, ${t.palette.secondary.dark})`,
							}}
						>
							BT
						</Box>
						<span>
							bentruong<Box component="span" sx={{ color: "secondary.main" }}>.dev</Box>
						</span>
					</Box>

					<Box sx={{ display: { xs: "none", md: "flex" }, gap: 0.5 }}>
						{LINKS.map((l) => (
							<Button
								key={l.id}
								href={`#${l.id}`}
								size="small"
								sx={{
									color: active === l.id ? "primary.main" : "text.secondary",
									fontWeight: 500,
									position: "relative",
									"&::after": {
										content: '""',
										position: "absolute",
										left: 14,
										right: 14,
										bottom: 2,
										height: "2px",
										borderRadius: 2,
										bgcolor: "secondary.main",
										transform: active === l.id ? "scaleX(1)" : "scaleX(0)",
										transition: "transform .25s",
									},
								}}
							>
								{l.label}
							</Button>
						))}
					</Box>

					<Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
						<IconButton onClick={onToggleMode} aria-label="Toggle color mode" size="small">
							{mode === "dark" ? <LightModeOutlined fontSize="small" /> : <DarkModeOutlined fontSize="small" />}
						</IconButton>
					</Tooltip>
					<Button
						variant="outlined"
						color="secondary"
						size="small"
						href={RESUME_PDF}
						target="_blank"
						startIcon={<DescriptionOutlined />}
						sx={{ display: { xs: "none", sm: "inline-flex" } }}
					>
						Résumé
					</Button>
					<IconButton
						sx={{ display: { md: "none" } }}
						onClick={() => setOpen(true)}
						aria-label="Open menu"
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</Container>

			<Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
				<Box sx={{ width: 260, p: 2 }}>
					<Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
						<Typography sx={{ fontFamily: mono, flex: 1 }}>{profile.handle}</Typography>
						<IconButton onClick={() => setOpen(false)} aria-label="Close menu">
							<CloseIcon />
						</IconButton>
					</Box>
					<List>
						{LINKS.map((l) => (
							<ListItemButton
								key={l.id}
								component="a"
								href={`#${l.id}`}
								onClick={() => setOpen(false)}
								selected={active === l.id}
								sx={{ borderRadius: 2 }}
							>
								<ListItemText primary={l.label} />
							</ListItemButton>
						))}
						<ListItemButton component="a" href={RESUME_PDF} target="_blank" sx={{ borderRadius: 2 }}>
							<ListItemText primary="Résumé (PDF)" />
						</ListItemButton>
					</List>
				</Box>
			</Drawer>
		</AppBar>
	);
}
