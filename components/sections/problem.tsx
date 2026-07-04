"use client";

import { motion } from "motion/react";

export default function Problem() {
	return (
		<section className="bg-white py-24 sm:py-32 overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center flex flex-col items-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
						className="mb-4 text-sm font-semibold tracking-[0.2em] uppercase text-pink-600"
					>
						The Reality for Millions
					</motion.h2>
					
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
						className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-8"
					>
						Menstruation shouldn't be a barrier to education, dignity, or health.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
						className="mx-auto max-w-2xl text-lg sm:text-xl font-light leading-relaxed text-slate-600"
					>
						For millions of adolescent girls, managing a natural monthly cycle
						comes with silent challenges. Due to a lack of clear information,
						social taboos, and systemic gaps, navigating the first period is often
						a source of anxiety rather than a milestone of growth.
					</motion.p>
				</div>
			</div>
		</section>
	);
}
