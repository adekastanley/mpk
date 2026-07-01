"use client";

import { motion } from "motion/react";

const problems = [
	{
		title: "Stigma",
		description:
			"Silence and shame surrounding menstruation limit adolescent confidence.",
	},
	{
		title: "Misinformation",
		description:
			"Lack of accurate, age-appropriate health information creates confusion and anxiety.",
	},
	{
		title: "Lack of Access",
		description: "Limited access to period products and hygienic facilities.",
	},
	{
		title: "School Absenteeism",
		description:
			"Many students miss school due to cramps, lack of products, or fear of leaks.",
	},
];

const solutions = [
	{
		title: "Digital Companion",
		description:
			"Private Q&A, period reminders, and emotional check-ins via WhatsApp, SMS, or IVR.",
	},
	{
		title: "First Period Toolkit",
		description:
			"A physical gateway that helps girls prepare, packed with essentials and guidance.",
	},
	{
		title: "Accessibility First",
		description:
			"Built for inclusion with voice-first support, transcripts, and low-literacy design.",
	},
	{
		title: "Trusted Partners",
		description:
			"Collaborating with schools, clinics, and NGOs to provide verified support.",
	},
];

export default function AboutProblemSolution() {
	return (
		<section className="bg-slate-900 py-32 text-white overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* The Problem */}
				<div className="mb-32">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					>
						<h2 className="mb-6 text-4xl font-light tracking-tight sm:text-6xl text-pink-400">
							The Challenge
						</h2>
						<p className="mb-16 max-w-2xl text-lg font-light leading-relaxed text-slate-300 sm:text-2xl">
							Millions of adolescents face their first period without adequate
							support, leading to anxiety, missed opportunities, and health
							risks.
						</p>
					</motion.div>

					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{problems.map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.8,
									delay: i * 0.1,
									ease: [0.19, 1, 0.22, 1],
								}}
								className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-800/50 p-8 transition-colors hover:bg-slate-800"
							>
								<div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-pink-600/10 blur-2xl transition-all group-hover:bg-pink-600/20" />
								<h3 className="mb-4 text-xl font-medium text-white">
									{item.title}
								</h3>
								<p className="text-sm font-light leading-relaxed text-slate-400">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				{/* The Solution */}
				<div>
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					>
						<h2 className="mb-6 text-4xl font-light tracking-tight sm:text-6xl text-white">
							Our Solution
						</h2>
						<p className="mb-16 max-w-2xl text-lg font-light leading-relaxed text-slate-300 sm:text-2xl">
							We bridge the gap with a hybrid ecosystem that meets adolescents
							wherever they are, regardless of internet access or literacy
							levels.
						</p>
					</motion.div>

					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{solutions.map((item, i) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{
									duration: 0.8,
									delay: i * 0.1,
									ease: [0.19, 1, 0.22, 1],
								}}
								className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-800/50 p-8 transition-colors hover:bg-slate-800"
							>
								<div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal-500/10 blur-2xl transition-all group-hover:bg-teal-500/20" />
								<h3 className="mb-4 text-xl font-medium text-white">
									{item.title}
								</h3>
								<p className="text-sm font-light leading-relaxed text-slate-400">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
