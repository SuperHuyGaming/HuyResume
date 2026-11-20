import React from "react";
import { Box, Container } from "@mui/material";
import { useInView, finePointer } from "../motion";

/** Fades and slides its children up the first time they scroll into view. */
export default function Reveal({ children, delay = 0, sx, ...rest }) {
	const ref = React.useRef(null);
	const seen = useInView(ref);
	return (
		<Box
			ref={ref}
			className={`reveal${seen ? " is-visible" : ""}`}
			style={{ transitionDelay: seen ? `${delay}ms` : "0ms" }}
			sx={sx}
			{...rest}
		>
			{children}
		</Box>
	);
}

/**
 * Text whose letters (or words) slide up out of a mask, one after another,
 * when it scrolls into view. Screen readers get the plain text.
 */
export function SplitText({ text, component = "span", by = "char", stagger = 28, delay = 0, sx, ...rest }) {
	const ref = React.useRef(null);
	const seen = useInView(ref, { threshold: 0.2, rootMargin: "0px" });
	const words = text.split(" ");
	let i = 0;
	return (
		<Box component={component} ref={ref} aria-label={text} className={`split${seen ? " is-visible" : ""}`} sx={sx} {...rest}>
			{words.map((w, wi) => (
				<React.Fragment key={wi}>
					<span className="split-word" aria-hidden="true">
						{(by === "char" ? [...w] : [w]).map((c, ci) => (
							<span className="split-mask" key={ci}>
								<span className="split-char" style={{ transitionDelay: `${delay + i++ * stagger}ms` }}>
									{c}
								</span>
							</span>
						))}
					</span>
					{wi < words.length - 1 && " "}
				</React.Fragment>
			))}
		</Box>
	);
}

/** Pulls its child toward the cursor while hovered, then springs back. */
export function Magnetic({ children, strength = 0.35 }) {
	const ref = React.useRef(null);
	const enabled = React.useMemo(finePointer, []);
	const move = (e) => {
		const el = ref.current;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - (r.left + r.width / 2)) * strength;
		const y = (e.clientY - (r.top + r.height / 2)) * strength;
		el.style.transition = "transform .15s ease-out";
		el.style.transform = `translate(${x}px, ${y}px)`;
	};
	const leave = () => {
		const el = ref.current;
		el.style.transition = "transform .6s cubic-bezier(.2,1.6,.4,1)";
		el.style.transform = "translate(0, 0)";
	};
	return (
		<Box
			component="span"
			ref={ref}
			onMouseMove={enabled ? move : undefined}
			onMouseLeave={enabled ? leave : undefined}
			sx={{ display: "inline-flex", willChange: "transform" }}
		>
			{children}
		</Box>
	);
}

/** Page-width container shared by every section so left edges line up. */
export function Shell({ children, sx }) {
	return (
		<Container maxWidth={false} sx={{ maxWidth: 1080, px: { xs: 2, sm: 3 }, ...sx }}>
			{children}
		</Container>
	);
}
