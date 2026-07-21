"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function AboutGovernance() {
	return (
		<section id="governance" className="py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
			{/* Decorative background */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-1/2 -right-1/4 w-full h-full max-w-3xl bg-pink-600/10 blur-[120px] rounded-full mix-blend-screen" />
				<div className="absolute -bottom-1/2 -left-1/4 w-full h-full max-w-3xl bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen" />
			</div>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
					>
						<div className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">Operational Standards</div>
						<h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl mb-6">
							Uncompromising Operational Transparency.
						</h2>
						<p className="text-lg leading-relaxed text-slate-300 font-light mb-8">
							MPK operates under a strict multi-tiered governance structure, composed of clinical advisors, international legal experts, and community leaders. Our financial reporting processes follow clear international auditing metrics, ensuring absolute clarity and strategic impact for every dollar invested.
						</p>

						<div className="flex flex-col sm:flex-row gap-4">
							<Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 hover:text-pink-600 font-medium transition-colors shadow-lg shadow-white/10">
								Review Strategic Framework
							</Button>
							<Button size="lg" variant="outline" className="rounded-full border-slate-700 text-white hover:bg-slate-800 hover:text-white transition-colors">
								Download Annual Audit
							</Button>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
						className="grid grid-cols-1 sm:grid-cols-2 gap-6"
					>
						{[
							{ title: "Clinical Advisors", desc: "Medical professionals ensuring scientific validity of all AI outputs and products." },
							{ title: "Legal Experts", desc: "Overseeing data privacy, IP protection, and multi-region compliance." },
							{ title: "Community Leaders", desc: "Ensuring cultural resonance and directing rural distribution channels." },
							{ title: "Auditing Boards", desc: "Maintaining transparent ESG metrics and financial accountability." },
						].map((item, idx) => (
							<div key={idx} className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800 transition-colors">
								<div className="h-10 w-10 rounded-full bg-slate-700/50 flex items-center justify-center text-pink-400 mb-4">
									<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
								<h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
								<p className="text-sm text-slate-400 font-light leading-relaxed">{item.desc}</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
