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
	useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import { profile, RESUME_PDF } from "../data";

const LINKS = [
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "skills", label: "Skills" },
	{ id: "education", label: "Education" },
	{ id: "contact", label: "Contact" },
];

export default function NavBar({ mode, onToggleMode }) {
	const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });
	const [open, setOpen] = React.useState(false);

	return (
		<AppBar
			position="sticky"
			elevation={0}
			sx={{
				color: "text.primary",
				bgcolor: "background.default",
				border: 0,
				borderBottom: 1,
				borderColor: scrolled ? "divider" : "transparent",
			}}
		>
			<Container maxWidth="md">
				<Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 }, gap: 0.5 }}>
					<Box
						component="a"
						href="#top"
						sx={{ fontWeight: 700, fontSize: 17, color: "text.primary", textDecoration: "none", mr: "auto" }}
					>
						{profile.name}
					</Box>

					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{LINKS.map((l) => (
							<Button key={l.id} href={`#${l.id}`} size="small" sx={{ color: "text.secondary", fontWeight: 500 }}>
								{l.label}
							</Button>
						))}
						<Button size="small" href={RESUME_PDF} target="_blank" sx={{ fontWeight: 500 }}>
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
			</Container>

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
