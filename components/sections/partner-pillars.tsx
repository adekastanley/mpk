"use client";

import { motion } from "motion/react";

const tiers = [
	{
		title: "Institutional Funders",
		tier: "Tier 1",
		description: "Large-scale grants and strategic capital allocations directed toward regional expansion, technology upgrades, and multi-year field research initiatives.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
		),
	},
	{
		title: "Corporate CSR Partnerships",
		tier: "Tier 2",
		description: "Turnkey corporate solutions including employee wellness initiatives, sustainable workplace products, and co-branded regional impact campaigns.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
			</svg>
		),
	},
	{
		title: "Strategic Innovation Fund",
		tier: "Tier 3",
		description: "High-impact investments dedicated entirely to testing next-generation bio-materials and expanding our localized AI language models.",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
			</svg>
		),
	},
];

export default function PartnerPillars() {
	return (
		<section className="py-24 sm:py-32 bg-slate-50 relative border-t border-slate-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
					<h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl mb-4">
						Partnership Tiers.
					</h2>
					<p className="text-slate-600 font-light text-lg">
						Structured collaboration pathways for institutional and corporate capital.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{tiers.map((tier, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
							className="relative group bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-100/50 hover:-translate-y-2 flex flex-col h-full"
						>
							<div className="flex justify-between items-start mb-8">
								<div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
									{tier.icon}
								</div>
								<span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold tracking-wider uppercase">
									{tier.tier}
								</span>
							</div>
							
							<h3 className="text-xl font-medium text-slate-900 mb-4">{tier.title}</h3>
							<p className="text-slate-600 font-light leading-relaxed flex-grow">
								{tier.description}
							</p>
							
							<div className="mt-8 pt-6 border-t border-slate-100">
								<a href="#intake-form" className="text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors inline-flex items-center gap-2">
									Explore Collaboration
									<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
