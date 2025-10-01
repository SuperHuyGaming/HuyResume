// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "light",
		primary: { main: "#1e88e5" }, // Blue
		secondary: { main: "#ff6d00" }, // Orange accent
		background: { default: "#f7fafc", paper: "#ffffff" },
		text: { primary: "#0f172a", secondary: "#475569" },
	},
	typography: {
		fontFamily: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans"`,
		h2: { fontWeight: 800, letterSpacing: -0.5, marginBottom: "0.35em" },
		h4: { fontWeight: 800, marginBottom: "0.25em" },
		body1: { fontSize: "0.95rem", lineHeight: 1.45 },
		button: { textTransform: "none", fontWeight: 600 },
	},
	shape: { borderRadius: 12 },
	components: {
		MuiButton: {
			defaultProps: { size: "medium" }, // smaller than large
			styleOverrides: {
				root: { paddingLeft: 16, paddingRight: 16 },
			},
		},
		MuiCard: {
			styleOverrides: {
				root: { borderRadius: 12, padding: "12px 16px" },
			},
		},
		MuiContainer: {
			styleOverrides: { root: { paddingLeft: 16, paddingRight: 16 } },
		},
		MuiTypography: {
			styleOverrides: {
				root: { marginTop: 0, marginBottom: "0.35em" },
			},
		},
	},
});

export default theme;
