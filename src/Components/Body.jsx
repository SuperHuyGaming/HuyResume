// Body.jsx
import React from "react";
import { Box } from "@mui/material";
import Sidebar, { drawerWidthExpanded, drawerWidthCollapsed } from "./SideBar";
import Header from "./Header";

import Intro from "./Intro";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Body() {
	const [collapsed, setCollapsed] = React.useState(false);
	const [mobileOpen, setMobileOpen] = React.useState(false);

	return (
		<Box sx={{ display: "flex" }}>
			<Header
				collapsed={collapsed}
				setCollapsed={setCollapsed}
				setMobileOpen={setMobileOpen}
			/>
			<Sidebar
				collapsed={collapsed}
				mobileOpen={mobileOpen}
				setMobileOpen={setMobileOpen}
				onToggle={() => setCollapsed((v) => !v)}
			/>

			<Box
				component="main"
				sx={{
					flexGrow: 1,
					mt: "64px",
					ml: {
						xs: 0,
						md: collapsed
							? `${drawerWidthCollapsed}px`
							: `${drawerWidthExpanded}px`,
					},
					transition: "margin-left 0.3s",
					p: { xs: 1.25, md: 1.5 },
				}}
			>
				<Intro />
				<About />
				<Experience />
				<Projects />
				<Contact />
			</Box>
		</Box>
	);
}
