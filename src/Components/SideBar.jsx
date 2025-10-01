// SideBar.jsx
import React from "react";
import {
	Drawer,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Divider,
	Box,
	IconButton,
	Tooltip,
	useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export const drawerWidthExpanded = 200;
export const drawerWidthCollapsed = 72;

const SECTIONS = [
	{ id: "hero", label: "Home", icon: <HomeIcon /> },
	{ id: "about", label: "About", icon: <InfoIcon /> },
	{ id: "experience", label: "Experience", icon: <WorkIcon /> },
	{ id: "projects", label: "Projects", icon: <CodeIcon /> },
	{ id: "contact", label: "Contact", icon: <ContactMailIcon /> },
];

function DrawerContent({ collapsed, onToggle, onNavigate }) {
	return (
		<Box sx={{ width: "100%", boxSizing: "border-box" }}>
			<Toolbar
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: collapsed ? "center" : "space-between",
					px: 1,
				}}
			>
				{!collapsed && <Box sx={{ fontWeight: 800 }}>Navigation</Box>}
				<Tooltip title={collapsed ? "Expand" : "Collapse"}>
					<IconButton onClick={onToggle} size="small">
						{collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</Tooltip>
			</Toolbar>
			<Divider />
			<List>
				{SECTIONS.map((s) => (
					<ListItemButton key={s.id} onClick={() => onNavigate(s.id)}>
						<ListItemIcon>{s.icon}</ListItemIcon>
						{!collapsed && <ListItemText primary={s.label} />}
					</ListItemButton>
				))}
			</List>
		</Box>
	);
}

export default function Sidebar({
	mobileOpen,
	setMobileOpen,
	collapsed,
	onToggle,
}) {
	const theme = useTheme();
	const mdUp = useMediaQuery(theme.breakpoints.up("md"));
	const width = collapsed ? drawerWidthCollapsed : drawerWidthExpanded;

	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
		if (!mdUp) setMobileOpen(false);
	};

	return (
		<>
			{/* Permanent drawer on desktop */}
			<Drawer
				variant="permanent"
				open
				sx={{
					display: { xs: "none", md: "block" },
					width,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width,
						transition: "width 0.3s",
						borderRight: "1px solid rgba(0,0,0,0.12)",
						background:
							"linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))",
						boxSizing: "border-box",
					},
				}}
			>
				<DrawerContent
					collapsed={collapsed}
					onToggle={onToggle}
					onNavigate={scrollTo}
				/>
			</Drawer>

			{/* Temporary drawer on mobile */}
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={() => setMobileOpen(false)}
				ModalProps={{ keepMounted: true }}
				sx={{
					display: { xs: "block", md: "none" },
					"& .MuiDrawer-paper": {
						width: drawerWidthExpanded,
						boxSizing: "border-box",
					},
				}}
			>
				<DrawerContent
					collapsed={false}
					onToggle={() => {}}
					onNavigate={scrollTo}
				/>
			</Drawer>
		</>
	);
}
