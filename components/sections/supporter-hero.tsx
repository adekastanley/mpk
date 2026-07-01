"use client";

import { motion } from "motion/react";
import { useRef } from "react";

export default function SupporterHero() {
	const containerRef = useRef(null);

	const textLines = [
		"Help us make",
		"period care accessible",
		"for every adolescent.",
	];

	return (
		<section
			ref={containerRef}
			className="relative overflow-hidden flex min-h-[85vh] flex-col justify-center overflow-hidden bg-white px-4 sm:px-6 lg:px-20 pt-32 pb-16"
		>
			<div className="absolute left-0 top-20 -z-10 h-96 w-96 rounded-full bg-pink-100/60 blur-[120px] opacity-70" />
			<div className="absolute right-0 bottom-10 -z-10 h-96 w-96 rounded-full bg-purple-100/60 blur-[120px] opacity-70" />

			<div className="mx-auto w-full max-w-7xl">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
					className="mb-8 inline-block rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium tracking-wide text-pink-600 uppercase"
				>
					Become a Supporter
				</motion.div>

				<div className="space-y-2 sm:space-y-4">
					{textLines.map((line, i) => (
						<div key={i} className="overflow-hidden pb-2 sm:pb-4">
							<motion.h1
								initial={{ y: "120%", rotate: 2, opacity: 0 }}
								animate={{ y: "0%", rotate: 0, opacity: 1 }}
								transition={{
									duration: 1.2,
									ease: [0.19, 1, 0.22, 1],
									delay: i * 0.15 + 0.2,
								}}
								className="text-5xl font-light tracking-tight text-slate-900 sm:text-7xl lg:text-8xl xl:text-9xl"
							>
								{line}
							</motion.h1>
						</div>
					))}
				</div>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.8 }}
					className="mt-12 max-w-2xl text-lg font-light leading-relaxed text-slate-500 sm:text-2xl"
				>
					Your support directly funds educational kits, maintains our private companion app, and expands our reach to communities in need.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 1 }}
					className="mt-12 flex flex-col sm:flex-row gap-4"
				>
					<a
						href="#tiers"
						className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
					>
						View Support Options
					</a>
				</motion.div>
			</div>
		</section>
	);
}
