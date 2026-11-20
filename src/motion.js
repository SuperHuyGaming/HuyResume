import React from "react";

export const prefersReducedMotion = () =>
	typeof window !== "undefined" && !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Calls back once when the element first scrolls into view. */
export function useInView(ref, { threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = {}) {
	const [seen, setSeen] = React.useState(false);
	React.useEffect(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setSeen(true);
			return;
		}
		const obs = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setSeen(true);
					obs.disconnect();
				}
			},
			{ threshold, rootMargin }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, [ref, threshold, rootMargin]);
	return seen;
}

/** True on devices with a mouse or trackpad (custom cursor, tilt and magnetic effects). */
export const finePointer = () =>
	typeof window !== "undefined" && !!window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;

/**
 * Runs `onFrame(rect, viewportHeight)` on every scroll frame while mounted, for
 * scroll-linked effects. Large-motion effects are skipped with reduced motion
 * unless `essential` is set (e.g. a progress line).
 */
export function useScrollFrame(ref, onFrame, essential = false) {
	const cb = React.useRef(onFrame);
	React.useLayoutEffect(() => {
		cb.current = onFrame;
	});
	React.useEffect(() => {
		const el = ref.current;
		if (!el || (!essential && prefersReducedMotion())) return;
		let frame = 0;
		const update = () => {
			frame = 0;
			cb.current(el.getBoundingClientRect(), window.innerHeight);
		};
		const schedule = () => frame || (frame = requestAnimationFrame(update));
		update();
		window.addEventListener("scroll", schedule, { passive: true });
		window.addEventListener("resize", schedule);
		return () => {
			window.removeEventListener("scroll", schedule);
			window.removeEventListener("resize", schedule);
			cancelAnimationFrame(frame);
		};
	}, [ref, essential]);
}

export const clamp01 = (v) => Math.min(1, Math.max(0, v));
