// Header.jsx
import React from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Header({ collapsed, setCollapsed, setMobileOpen }) {
	const theme = useTheme();
	const mdUp = useMediaQuery(theme.breakpoints.up("md"));

	return (
		<AppBar
			position="fixed"
			elevation={0}
			sx={{
				borderBottom: "1px solid rgba(0,0,0,0.1)",
				background:
					"linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
				color: "text.primary",
				zIndex: (t) => t.zIndex.drawer + 1,
			}}
		>
			<Toolbar>
				{/* Mobile: open the temporary drawer */}
				{!mdUp && (
					<Tooltip title="Menu">
						<IconButton
							edge="start"
							onClick={() => setMobileOpen(true)}
							sx={{ mr: 1 }}
						>
							<MenuIcon />
						</IconButton>
					</Tooltip>
				)}

				{/* Desktop: collapse/expand the rail */}
				{mdUp && (
					<Tooltip
						title={
							collapsed ? "Expand sidebar" : "Collapse sidebar"
						}
					>
						<IconButton
							edge="start"
							onClick={() => setCollapsed((v) => !v)}
							sx={{ mr: 1 }}
						>
							{collapsed ? (
								<ChevronRightIcon />
							) : (
								<ChevronLeftIcon />
							)}
						</IconButton>
					</Tooltip>
				)}

				<Typography variant="h6" sx={{ fontWeight: 700 }}>
					Huy<span style={{ color: "#1e88e5" }}>Truong</span>
				</Typography>
			</Toolbar>
		</AppBar>
	);
}
