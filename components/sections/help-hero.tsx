"use client";

import { motion } from "motion/react";

export default function HelpHero() {
	return (
		<section className="relative overflow-hidden bg-white px-4 sm:px-6 lg:px-20 pt-32 pb-16">
			<div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-slate-100/80 blur-[120px]" />

			<div className="mx-auto w-full max-w-4xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
					className="mb-8 inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium tracking-wide text-slate-900 uppercase"
				>
					Support & Safety
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
					className="text-5xl font-light tracking-tight text-slate-900 sm:text-7xl"
				>
					You are not alone.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
					className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-600 sm:text-xl"
				>
					Whether you have questions about your body, are feeling overwhelmed, or need urgent help, we can guide you to the right place. 
				</motion.p>
			</div>
		</section>
	);
}
