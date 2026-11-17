// theme.js — green & gold: classic serif display type, modern sans body, mono for the "tech" layer.
import { createTheme, alpha } from "@mui/material/styles";

const serif = `"Fraunces", Georgia, "Times New Roman", serif`;
const sans = `"Inter", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif`;
export const mono = `"JetBrains Mono", ui-monospace, "SFMono-Regular", Consolas, monospace`;

const palettes = {
	dark: {
		primary: { main: "#35C27F", light: "#6FE0A8", dark: "#1F8A57", contrastText: "#04120B" },
		secondary: { main: "#E2BC55", light: "#F0D58C", dark: "#B8912B", contrastText: "#1A1405" },
		background: { default: "#06120D", paper: "#0C1D15" },
		text: { primary: "#E9F1EB", secondary: "#9BB3A5" },
		divider: "rgba(226, 188, 85, 0.16)",
	},
	light: {
		primary: { main: "#0F6B43", light: "#2E9466", dark: "#0A4A2E", contrastText: "#FFFFFF" },
		secondary: { main: "#A67C1A", light: "#C9A24A", dark: "#7D5C0F", contrastText: "#FFFFFF" },
		background: { default: "#F6F3E8", paper: "#FFFDF7" },
		text: { primary: "#0F1E17", secondary: "#4A5D52" },
		divider: "rgba(15, 107, 67, 0.16)",
	},
};

export default function getTheme(mode) {
	const p = palettes[mode];
	return createTheme({
		palette: { mode, ...p },
		shape: { borderRadius: 14 },
		typography: {
			fontFamily: sans,
			h1: { fontFamily: serif, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.02 },
			h2: { fontFamily: serif, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.1 },
			h3: { fontFamily: serif, fontWeight: 600, letterSpacing: "-0.01em" },
			h4: { fontFamily: serif, fontWeight: 600 },
			h5: { fontWeight: 700, letterSpacing: "-0.01em" },
			h6: { fontWeight: 700, letterSpacing: "-0.005em" },
			overline: { fontFamily: mono, letterSpacing: "0.12em", fontWeight: 500 },
			button: { textTransform: "none", fontWeight: 600, letterSpacing: 0 },
			body1: { lineHeight: 1.65 },
			body2: { lineHeight: 1.6 },
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					html: { scrollBehavior: "smooth" },
					"::selection": { background: alpha(p.secondary.main, 0.35) },
				},
			},
			MuiButton: {
				defaultProps: { disableElevation: true },
				styleOverrides: {
					root: { borderRadius: 10, paddingInline: 18 },
					containedPrimary: {
						backgroundImage: `linear-gradient(135deg, ${p.primary.light}, ${p.primary.main} 55%, ${p.primary.dark})`,
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundImage: "none",
						border: `1px solid ${p.divider}`,
					},
				},
			},
			MuiChip: {
				styleOverrides: {
					root: { fontFamily: mono, fontSize: "0.75rem", borderRadius: 8 },
				},
			},
			MuiLink: { defaultProps: { underline: "hover" } },
		},
	});
}
