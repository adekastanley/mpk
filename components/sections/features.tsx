"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
	MessageSquare,
	Calendar,
	BookOpen,
	ShieldAlert,
	Sparkles,
	HeartHandshake,
} from "lucide-react";

const FEATURES = [
	{
		icon: MessageSquare,
		title: "Big Sister Mode",
		description:
			"A private, safe space to ask sensitive questions about periods, body changes, and safety. Get immediate, non-judgmental answers in plain language whenever you need guidance.",
		image:
			"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=1200",
		accent: "#8b5cf6",
		gradient: "from-violet-500/60 to-purple-700/60",
	},
	{
		icon: Calendar,
		title: "Period Tracker Lite",
		description:
			"Log your cycles easily using lightweight entries via WhatsApp, voice, or text. Stay prepared with friendly reminders before your period starts.",
		image:
			"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200",
		accent: "#ec4899",
		gradient: "from-pink-500/60 to-rose-700/60",
	},
	{
		icon: BookOpen,
		title: "Edutainment Hub",
		description:
			"Learn about menstrual health through relatable stories and localized audio dramas. Full transcripts ensure learning is accessible to everyone.",
		image:
			"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200",
		accent: "#f59e0b",
		gradient: "from-amber-500/60 to-orange-700/60",
	},
	{
		icon: Sparkles,
		title: "Toolkit Builder",
		description:
			"Understand exactly what to pack in your first care kit and how to safely navigate your very first period with confidence.",
		image:
			"https://images.unsplash.com/photo-1584308666744-24d5e45a0b41?auto=format&fit=crop&q=80&w=1200",
		accent: "#10b981",
		gradient: "from-emerald-500/60 to-teal-700/60",
	},
	{
		icon: HeartHandshake,
		title: "Emotional Wellbeing",
		description:
			"Check in with your feelings and receive gentle, practical coping tips for mood shifts, cramps, anxiety, or societal stigma.",
		image:
			"https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1200",
		accent: "#06b6d4",
		gradient: "from-cyan-500/60 to-indigo-700/60",
	},
	{
		icon: ShieldAlert,
		title: "Safe Referral Pathways",
		description:
			"Connect safely with vetted support networks, local health points, and protective resources if you face severe distress or urgent challenges.",
		image:
			"https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
		accent: "#ef4444",
		gradient: "from-red-500/60 to-orange-700/60",
	},
];

// ─── Shared card ──────────────────────────────────────────────────────────────
function FeatureCard({
	feature,
	index,
	alwaysShowDesc = false,
}: {
	feature: (typeof FEATURES)[number];
	index: number;
	alwaysShowDesc?: boolean;
}) {
	const Icon = feature.icon;
	return (
		<div className="relative rounded-[2rem] overflow-hidden group shadow-2xl w-full h-full">
			<img
				src={feature.image}
				alt={feature.title}
				className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
			/>
			<div
				className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} mix-blend-multiply`}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

			<div className="relative z-10 p-7 md:p-9 h-full flex flex-col justify-end text-white">
				<div
					className="mb-4 p-3 rounded-2xl w-fit border border-white/25 shadow-lg backdrop-blur-sm"
					style={{ backgroundColor: `${feature.accent}55` }}
				>
					<Icon className="w-6 h-6 text-white" />
				</div>
				<h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
					{feature.title}
				</h3>
				<p
					className={`text-sm text-white/80 leading-relaxed max-w-sm transition-all duration-500 ${
						alwaysShowDesc
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"
					}`}
				>
					{feature.description}
				</p>
				<span className="absolute top-6 right-7 text-6xl font-black text-white/10 select-none leading-none">
					{String(index + 1).padStart(2, "0")}
				</span>
			</div>
		</div>
	);
}

// ─── Mobile: native snap carousel ────────────────────────────────────────────
function MobileCarousel() {
	return (
		<section id="features" className="md:hidden w-full py-16 bg-background ">
			<div className="px-6 mb-8">
				<p className="text-xs font-semibold tracking-[0.2em] uppercase text-mpk-primary mb-3">
					What we offer
				</p>
				<h2 className="text-4xl font-bold tracking-tighter text-foreground leading-none mb-4">
					Safe. Private. <span className="text-mpk-primary">Supportive.</span>
				</h2>
				<p className="text-muted-foreground text-base leading-relaxed">
					Essential tools designed around privacy, convenience, and cultural
					sensitivity.
				</p>
			</div>

			<div
				className="flex gap-5 px-6 overflow-x-auto snap-x snap-mandatory pb-4"
				style={{ scrollbarWidth: "none" }}
			>
				{FEATURES.map((feature, index) => (
					<div
						key={index}
						className="snap-center flex-shrink-0"
						style={{ width: "82vw", height: "56vw", minHeight: 400 }}
					>
						<FeatureCard feature={feature} index={index} alwaysShowDesc />
					</div>
				))}
			</div>

			<div className="flex justify-center gap-2 mt-6">
				{FEATURES.map((_, i) => (
					<div key={i} className="w-1.5 h-1.5 rounded-full bg-mpk-primary/40" />
				))}
			</div>

			<div className="mt-8 mx-6 p-4 rounded-2xl bg-muted/50 border border-border">
				<p className="text-[10px] text-muted-foreground leading-relaxed text-center">
					<span className="font-semibold text-foreground">
						Important Safety Note:{" "}
					</span>
					Not a substitute for medical advice. Always consult a healthcare
					professional.
				</p>
			</div>
		</section>
	);
}

// ─── Desktop: sticky horizontal parallax ─────────────────────────────────────
function DesktopHorizontalScroll() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const trackRef = useRef<HTMLDivElement>(null);

	// Both measurements live in a single state object so they update atomically
	const [dims, setDims] = useState({ scrollPx: 0, winH: 0 });

	useEffect(() => {
		function measure() {
			if (!trackRef.current) return;
			// scrollWidth of the track minus viewport width = how far we need to
			// push it left to reveal every card.
			const scrollPx = trackRef.current.scrollWidth - window.innerWidth;
			setDims({ scrollPx, winH: window.innerHeight });
		}

		// Defer one frame so all cards have rendered their natural widths
		const raf = requestAnimationFrame(measure);
		window.addEventListener("resize", measure);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", measure);
		};
	}, []);

	const { scrollPx, winH } = dims;

	// sectionHeight must satisfy:
	//   scrollYProgress goes 0→1  over  (sectionHeight - winH) px of vertical scroll
	// We want that to equal scrollPx, so:
	//   sectionHeight = scrollPx + winH
	//
	// Before measurement (scrollPx = 0, winH = 0) fall back to 100vh so the
	// section at least shows something during the first paint.
	const sectionHeight = scrollPx > 0 && winH > 0 ? scrollPx + winH : "100vh";

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	// Translate the track from 0 → -scrollPx as the user scrolls
	const x = useTransform(scrollYProgress, [0, 1], [0, -scrollPx]);

	return (
		<section
			ref={sectionRef}
			id="features"
			// overflow-x: clip prevents the translating track from creating a
			// horizontal scrollbar. Unlike overflow: hidden it does NOT create a
			// new scroll container, so position:sticky still works correctly.
			style={{ height: sectionHeight, overflowX: "clip" }}
			className="hidden md:block relative w-full bg-background"
		>
			<div className="sticky top-0 h-screen flex flex-col justify-center gap-0">
				{/* ── Header ── */}
				<div className="px-10 lg:px-20 mb-8 lg:mb-10 flex-shrink-0">
					<p className="text-xs lg:text-sm font-semibold tracking-[0.2em] uppercase text-mpk-primary mb-3">
						What we offer
					</p>
					<h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground leading-none mb-3">
						Safe. Private.
						<br />
						<span className="text-mpk-primary">Supportive.</span>
					</h2>
					<p className="text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
						Essential tools designed around privacy, convenience, and complete
						cultural sensitivity.
					</p>
				</div>

				{/* ── Scrolling card track ── */}
				<motion.div
					ref={trackRef}
					style={{ x }}
					// w-max: track is exactly as wide as its children — this is what
					// scrollWidth reads back.  No right padding here; we use a trailing
					// spacer card instead so it's included in scrollWidth correctly.
					className="flex gap-6 lg:gap-8 pl-10 lg:pl-20 w-max flex-shrink-0 will-change-transform"
				>
					{FEATURES.map((feature, index) => (
						<div
							key={index}
							className="flex-shrink-0 lg:w-[38vw] lg:h-[56vh] md:w-[48vw] md:h-[52vh]"
						>
							<FeatureCard feature={feature} index={index} />
						</div>
					))}

					{/*
					 * Right-edge breathing room. Width here IS included in scrollWidth,
					 * so the last card ends this many px from the viewport's right edge
					 * when fully scrolled — giving it a nice framed look.
					 */}
					<div className="flex-shrink-0 w-[5vw]" aria-hidden />
				</motion.div>

				{/* ── Progress bar ── */}
				<div className="flex-shrink-0 px-10 lg:px-20 mt-6">
					<div className="relative h-[1px] bg-border w-48">
						<motion.div
							className="absolute inset-0 origin-left bg-mpk-primary"
							style={{ scaleX: scrollYProgress }}
						/>
					</div>
				</div>

				{/* ── Disclaimer ── */}
				<div className="flex-shrink-0 mt-3 px-10 lg:px-20">
					<p className="text-[10px] text-muted-foreground max-w-lg leading-relaxed">
						<span className="font-semibold text-foreground">
							Important Safety Note:{" "}
						</span>
						My Period Companion provides education and guidance — not medical
						diagnoses or emergency services. Always consult a healthcare
						professional.
					</p>
				</div>
			</div>
		</section>
	);
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function Features() {
	return (
		<>
			<MobileCarousel />
			<DesktopHorizontalScroll />
		</>
	);
}
