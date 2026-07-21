"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

const stats = [
	{ label: "Women & Girls Reached", value: "2M+", highlight: true },
	{ label: "Community Partners", value: "450+" },
	{ label: "Active AI Sessions", value: "85K+" },
	{ label: "Countries Deployed", value: "14" },
];

export default function ImpactDataStrip() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	return (
		<section className="bg-slate-900 py-16 sm:py-20 relative overflow-hidden">
			{/* Subtle background glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
					{stats.map((stat, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
							className={`flex flex-col items-center justify-center text-center px-4 ${
								idx === 0 ? "border-l-0" : ""
							}`}
						>
							<div
								className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tighter mb-2 ${
									stat.highlight ? "text-pink-500" : "text-white"
								}`}
							>
								{isVisible ? stat.value : "0"}
							</div>
							<div className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-medium">
								{stat.label}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
