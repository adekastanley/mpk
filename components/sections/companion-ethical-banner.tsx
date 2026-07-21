"use client";

import { motion } from "motion/react";

const protocols = [
	{
		title: "Complete Anonymity by Design",
		description: "Our systems eliminate identity tracking by scrubbing metadata and IP points instantly at the API level.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
			</svg>
		),
	},
	{
		title: "Clinically Guardrailed Content",
		description: "The companion cross-references all queries against verified medical standards and local guidelines, systematically blocking unverified medical claims.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
			</svg>
		),
	},
	{
		title: "Localized Cultural Adaptability",
		description: "The application processes nuanced regional dialogues, supporting several local African languages to bypass literacy barriers.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
			</svg>
		),
	},
];

export default function CompanionEthicalBanner() {
	return (
		<section className="bg-slate-900 py-24 sm:py-32 relative overflow-hidden border-t border-slate-800">
			{/* Decorative elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-0 right-0 w-full h-full max-w-2xl bg-pink-600/10 blur-[120px] mix-blend-screen rounded-full" />
			</div>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl mb-4">
						Responsible AI Protocols.
					</h2>
					<p className="text-slate-400 font-light leading-relaxed">
						We hold ourselves to the highest technical and ethical standards.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{protocols.map((protocol, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
							className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl"
						>
							<div className="h-14 w-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6">
								{protocol.icon}
							</div>
							<h3 className="text-xl font-medium text-white mb-3">
								{protocol.title}
							</h3>
							<p className="text-slate-400 font-light leading-relaxed">
								{protocol.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
