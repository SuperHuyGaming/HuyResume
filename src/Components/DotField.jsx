import React from "react";
import { Box } from "@mui/material";
import { prefersReducedMotion } from "../motion";

function hexToRgb(hex) {
	const h = hex.replace("#", "");
	const n = parseInt(h.length === 3 ? [...h].map((c) => c + c).join("") : h, 16);
	return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/**
 * Grid of dots behind the hero. Dots near the cursor light up in the accent
 * color, grow and get pushed outward; the rest ripple slowly. Fades out
 * toward the edges. No ambient ripple with reduced motion.
 */
export default function DotField({ color, base }) {
	const canvasRef = React.useRef(null);

	React.useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const accent = hexToRgb(color);
		const muted = hexToRgb(base);
		const GAP = 26;
		const RADIUS = 150;
		const reduced = prefersReducedMotion();
		let w = 0;
		let h = 0;
		let frame = 0;
		let running = false;
		const mouse = { x: -9999, y: -9999, sx: -9999, sy: -9999, active: false };

		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			const r = canvas.getBoundingClientRect();
			w = r.width;
			h = r.height;
			canvas.width = Math.round(w * dpr);
			canvas.height = Math.round(h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			if (!running) draw(0);
		};

		const draw = (t) => {
			ctx.clearRect(0, 0, w, h);
			mouse.sx += (mouse.x - mouse.sx) * 0.12;
			mouse.sy += (mouse.y - mouse.sy) * 0.12;
			const cx = w * 0.5;
			const cy = h * 0.45;
			const time = t / 1000;
			for (let x = GAP / 2; x < w; x += GAP) {
				for (let y = GAP / 2; y < h; y += GAP) {
					// Fade toward the edges in an ellipse.
					const ex = (x - cx) / (w * 0.62);
					const ey = (y - cy) / (h * 0.7);
					const edge = Math.max(0, 1 - (ex * ex + ey * ey));
					if (edge <= 0.01) continue;
					const wave = reduced ? 0 : Math.sin(time * 1.2 + x * 0.018 + y * 0.024) * 0.5 + 0.5;
					let px = x;
					let py = y;
					let f = 0;
					if (mouse.active) {
						const dx = x - mouse.sx;
						const dy = y - mouse.sy;
						const d = Math.hypot(dx, dy);
						if (d < RADIUS) {
							f = (1 - d / RADIUS) ** 2;
							px += (dx / (d || 1)) * f * 14;
							py += (dy / (d || 1)) * f * 14;
						}
					}
					const [r, g, b] = f > 0.02 ? accent : muted;
					const alpha = edge * (0.2 + wave * 0.16 + f * 0.8);
					ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(1, alpha)})`;
					ctx.beginPath();
					ctx.arc(px, py, 1.1 + f * 2.2, 0, Math.PI * 2);
					ctx.fill();
				}
			}
		};

		const loop = (t) => {
			draw(t);
			frame = requestAnimationFrame(loop);
		};
		const start = () => {
			if (running) return;
			running = true;
			frame = requestAnimationFrame(loop);
		};
		const stop = () => {
			running = false;
			cancelAnimationFrame(frame);
		};

		const onMove = (e) => {
			const r = canvas.getBoundingClientRect();
			mouse.x = e.clientX - r.left;
			mouse.y = e.clientY - r.top;
			if (!mouse.active) {
				mouse.sx = mouse.x;
				mouse.sy = mouse.y;
			}
			mouse.active = mouse.y > -RADIUS && mouse.y < h + RADIUS;
		};

		const ro = new ResizeObserver(resize);
		ro.observe(canvas);
		const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
		io.observe(canvas);
		window.addEventListener("pointermove", onMove, { passive: true });
		resize();
		return () => {
			stop();
			ro.disconnect();
			io.disconnect();
			window.removeEventListener("pointermove", onMove);
		};
	}, [color, base]);

	return (
		<Box
			component="canvas"
			ref={canvasRef}
			aria-hidden="true"
			sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
		/>
	);
}
