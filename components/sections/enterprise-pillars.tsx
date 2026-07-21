"use client";

import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const pillars = [
	{
		title: "Innovative Products",
		description:
			"Engineering premium, sustainable, and culturally resonant period solutions that honor body health and ecosystem integrity.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
			</svg>
		),
	},
	{
		title: "Responsible AI Technology",
		description:
			"Deploying localized, anonymous, and medically accurate generative frameworks that bypass traditional educational blockades.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
	},
	{
		title: "Structural Advocacy",
		description:
			"Mobilizing grassroots datasets to update regional frameworks, eliminate systemic luxury taxes on hygiene items, and fund continuous field research.",
		icon: (
			<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
			</svg>
		),
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } },
};

export default function EnterprisePillars() {
	return (
		<section className="relative bg-white py-24 sm:py-32 overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
					<Badge
						variant={"outline"}
						className="mb-6 border-slate-200 text-slate-500 bg-slate-50 uppercase tracking-widest text-xs py-1.5 px-4"
					>
						The Vision Pillars
					</Badge>
					<h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
						Three pillars driving our ecosystem.
					</h2>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, margin: "-100px" }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
				>
					{pillars.map((pillar, idx) => (
						<motion.div
							key={idx}
							variants={itemVariants}
							className="group relative flex flex-col items-start p-8 sm:p-10 rounded-[2rem] bg-slate-50 transition-all duration-500 hover:bg-slate-100/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-100/50"
						>
							<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-pink-600 shadow-sm mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
								{pillar.icon}
							</div>
							<h3 className="text-xl font-medium text-slate-900 mb-4 tracking-tight">
								{pillar.title}
							</h3>
							<p className="text-slate-600 leading-relaxed font-light">
								{pillar.description}
							</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
