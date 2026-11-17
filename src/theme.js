import { createTheme } from "@mui/material/styles";

const font = `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`;

const palettes = {
	light: {
		primary: { main: "#0B5D3B", dark: "#08472D", light: "#2E7D57", contrastText: "#FFFFFF" },
		secondary: { main: "#B08A2E", dark: "#8A6A1E", light: "#CFAE5C", contrastText: "#FFFFFF" },
		background: { default: "#FAFAF7", paper: "#FFFFFF" },
		text: { primary: "#16211B", secondary: "#55625A" },
		divider: "#E3E6E1",
	},
	dark: {
		primary: { main: "#4CC38A", dark: "#2E9E6A", light: "#7AD7A9", contrastText: "#06120C" },
		secondary: { main: "#D9B45A", dark: "#B08A2E", light: "#E8CD88", contrastText: "#1A1405" },
		background: { default: "#0E1512", paper: "#141D18" },
		text: { primary: "#E8EEEA", secondary: "#A2B1A8" },
		divider: "#25312A",
	},
};

export default function getTheme(mode) {
	const p = palettes[mode];
	return createTheme({
		palette: { mode, ...p },
		shape: { borderRadius: 10 },
		typography: {
			fontFamily: font,
			h1: { fontWeight: 700, letterSpacing: "-0.02em" },
			h2: { fontWeight: 700, letterSpacing: "-0.01em" },
			h3: { fontWeight: 700 },
			h4: { fontWeight: 700 },
			h5: { fontWeight: 600 },
			h6: { fontWeight: 600 },
			button: { textTransform: "none", fontWeight: 600 },
			body1: { lineHeight: 1.7 },
			body2: { lineHeight: 1.65 },
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: { html: { scrollBehavior: "smooth" } },
			},
			MuiButton: { defaultProps: { disableElevation: true } },
			MuiPaper: {
				styleOverrides: { root: { backgroundImage: "none", border: `1px solid ${p.divider}` } },
			},
			MuiChip: { styleOverrides: { root: { borderRadius: 6, fontWeight: 500 } } },
			MuiLink: { defaultProps: { underline: "hover" } },
		},
	});
}
