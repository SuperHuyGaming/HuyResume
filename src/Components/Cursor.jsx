import React from "react";
import { Box } from "@mui/material";
import { finePointer } from "../motion";

const INTERACTIVE = "a, button, [role='button'], label, summary, [data-cursor]";

/**
 * A small dot that tracks the mouse exactly plus a ring that trails behind it.
 * The ring grows over anything clickable and can show a short label from
 * `data-cursor="Label"`. Only on mouse and trackpad devices.
 */
export default function Cursor() {
	const dot = React.useRef(null);
	const ring = React.useRef(null);
	const label = React.useRef(null);
	const [enabled] = React.useState(finePointer);

	React.useEffect(() => {
		if (!enabled) return;
		const root = document.documentElement;
		root.classList.add("has-cursor");
		const pos = { x: -100, y: -100 };
		const trail = { x: -100, y: -100 };
		let frame = 0;
		let visible = false;

		const tick = () => {
			trail.x += (pos.x - trail.x) * 0.2;
			trail.y += (pos.y - trail.y) * 0.2;
			ring.current.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0)`;
			frame = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			pos.x = e.clientX;
			pos.y = e.clientY;
			dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
			if (!visible) {
				visible = true;
				trail.x = pos.x;
				trail.y = pos.y;
				root.classList.add("cursor-visible");
			}
		};
		const onOver = (e) => {
			const t = e.target.closest?.(INTERACTIVE);
			const text = t?.getAttribute("data-cursor") || "";
			ring.current.classList.toggle("is-hover", !!t);
			ring.current.classList.toggle("has-label", !!text);
			label.current.textContent = text;
		};
		const onDown = () => ring.current.classList.add("is-down");
		const onUp = () => ring.current.classList.remove("is-down");
		const onLeave = () => {
			visible = false;
			root.classList.remove("cursor-visible");
		};

		frame = requestAnimationFrame(tick);
		window.addEventListener("mousemove", onMove, { passive: true });
		document.addEventListener("mouseover", onOver);
		window.addEventListener("mousedown", onDown);
		window.addEventListener("mouseup", onUp);
		document.addEventListener("mouseleave", onLeave);
		return () => {
			cancelAnimationFrame(frame);
			root.classList.remove("has-cursor", "cursor-visible");
			window.removeEventListener("mousemove", onMove);
			document.removeEventListener("mouseover", onOver);
			window.removeEventListener("mousedown", onDown);
			window.removeEventListener("mouseup", onUp);
			document.removeEventListener("mouseleave", onLeave);
		};
	}, [enabled]);

	if (!enabled) return null;
	return (
		<>
			<Box ref={ring} className="cursor-ring" aria-hidden="true">
				<Box className="cursor-ring-inner">
					<span ref={label} className="cursor-label" />
				</Box>
			</Box>
			<Box ref={dot} className="cursor-dot" aria-hidden="true" />
		</>
	);
}
