"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function PartnerHero() {
	return (
		<section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 bg-slate-900 overflow-hidden text-center">
			<div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-10 [mask-image:radial-gradient(circle_at_center,white,transparent)] pointer-events-none" />
			
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					className="mb-8"
				>
					<span className="inline-block px-4 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-slate-300 text-xs font-semibold tracking-widest uppercase shadow-sm">
						Investment Apparatus
					</span>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
					className="max-w-4xl mx-auto text-5xl font-light tracking-tight text-white sm:text-7xl lg:text-8xl mb-8"
				>
					Scaling Measured Health Impacts Through Strategic Capital.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
					className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-slate-400 sm:text-xl mb-12"
				>
					My Period Kit provides institutional funders, family offices, and enterprise CSR programs with a fully compliant, high-impact framework for strategic investment. We move beyond traditional charity models by running a data-driven enterprise that treats public health development as a clear, measurable outcome. When you back our regional innovations, you invest in scalable supply chains, advanced technology platforms, and long-term economic independence.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Button size="lg" className="rounded-full px-8 py-6 text-base bg-white text-slate-900 hover:bg-slate-100 shadow-xl shadow-white/10 w-full sm:w-auto">
						Initiate Strategic Partnership
					</Button>
					<Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-slate-700 text-white hover:bg-slate-800 hover:text-white w-full sm:w-auto">
						Download Investment Portfolio
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
