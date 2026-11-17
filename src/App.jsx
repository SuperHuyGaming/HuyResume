import React from "react";
import { CssBaseline, ThemeProvider, Box, useMediaQuery } from "@mui/material";
import getTheme from "./theme";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";

const STORAGE_KEY = "bt-color-mode";

function readStoredMode() {
	try {
		const v = localStorage.getItem(STORAGE_KEY);
		return v === "light" || v === "dark" ? v : null;
	} catch {
		return null;
	}
}

export default function App() {
	const prefersLight = useMediaQuery("(prefers-color-scheme: light)");
	const [stored, setStored] = React.useState(readStoredMode);
	const mode = stored ?? (prefersLight ? "light" : "dark");
	const theme = React.useMemo(() => getTheme(mode), [mode]);

	const toggleMode = () => {
		const next = mode === "dark" ? "light" : "dark";
		setStored(next);
		try {
			localStorage.setItem(STORAGE_KEY, next);
		} catch {
			/* storage unavailable, keep in memory only */
		}
	};

	React.useEffect(() => {
		document.documentElement.dataset.theme = mode;
	}, [mode]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<NavBar mode={mode} onToggleMode={toggleMode} />
			<Box component="main" sx={{ position: "relative" }}>
				<Hero />
				<Experience />
				<Projects />
				<Skills />
				<Education />
				<Contact />
			</Box>
		</ThemeProvider>
	);
}
