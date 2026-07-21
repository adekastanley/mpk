"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function CompanionHero() {
	return (
		<section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 bg-slate-50 overflow-hidden">
			{/* Decorative grid */}
			<div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50" />
			
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					className="mb-8"
				>
					<span className="inline-block px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold tracking-widest uppercase">
						AI Value Proposition
					</span>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
					className="max-w-4xl mx-auto text-5xl font-light tracking-tight text-slate-900 sm:text-7xl lg:text-8xl mb-8"
				>
					Private, Localized, and Always Available Health Guidance.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
					className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-slate-600 sm:text-xl mb-12"
				>
					My Period Companion redefines how communities access essential health insights. Developed alongside clinical specialists and native language researchers, this platform provides immediate, medically vetted guidance while protecting user privacy. It operates with clear data safety guardrails—requiring no personal identifying information—ensuring every conversation remains secure and confidential.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Button size="lg" className="rounded-full px-8 py-6 text-base bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 w-full sm:w-auto">
						Launch Mobile Web Companion
					</Button>
					<Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-slate-200 text-slate-900 hover:bg-slate-100 w-full sm:w-auto">
						Download Technical Whitepaper
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
