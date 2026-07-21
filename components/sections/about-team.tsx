"use client";

import { motion } from "motion/react";

const teamMembers = [
	{
		name: "Dr. Amina Yusuf",
		role: "Chief Medical Officer",
		description: "Leading the clinical validation of our AI modules and reproductive health products.",
	},
	{
		name: "Samuel Osei",
		role: "Head of AI Engineering",
		description: "Architecting the secure, multi-lingual systems behind My Period Companion.",
	},
	{
		name: "Grace Njoroge",
		role: "Director of Operations",
		description: "Scaling our rural distribution networks and managing enterprise supply chains.",
	},
	{
		name: "David Okafor",
		role: "Policy & Advocacy Lead",
		description: "Driving legislative changes and mobilizing grassroots datasets for regional impact.",
	},
];

export default function AboutTeam() {
	return (
		<section id="team" className="py-24 sm:py-32 bg-white relative">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
					<div className="text-xs font-semibold tracking-widest text-pink-600 uppercase mb-4">Executive Leadership</div>
					<h2 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl">
						The minds behind the mission.
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
							className="group cursor-pointer"
						>
							<div className="relative aspect-[3/4] rounded-3xl bg-slate-100 mb-6 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
								{/* Placeholder for actual portraits */}
								<div className="absolute inset-0 bg-slate-200/50 flex items-center justify-center mix-blend-multiply group-hover:scale-110 transition-transform duration-700">
									<svg className="w-16 h-16 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
									</svg>
								</div>
							</div>
							<div className="px-2 text-center sm:text-left">
								<h3 className="text-xl font-medium text-slate-900 mb-1 group-hover:text-pink-600 transition-colors">
									{member.name}
								</h3>
								<div className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-3">
									{member.role}
								</div>
								<p className="text-sm text-slate-600 font-light leading-relaxed">
									{member.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
