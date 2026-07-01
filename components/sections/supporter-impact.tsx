"use client";

import { motion } from "motion/react";
import { Heart, BookOpen, ShieldCheck } from "lucide-react";

const impactAreas = [
	{
		title: "Provide Essential Kits",
		description:
			"Your contributions help us distribute My Period Kits to adolescents in underserved communities, ensuring they have the physical supplies they need.",
		icon: Heart,
		color: "text-pink-600",
		bgColor: "bg-pink-100",
	},
	{
		title: "Fund Educational Content",
		description:
			"We work with healthcare professionals to continuously update our curriculum, making sure every adolescent receives medically accurate, easy-to-understand information.",
		icon: BookOpen,
		color: "text-purple-600",
		bgColor: "bg-purple-100",
	},
	{
		title: "Maintain a Safe Space",
		description:
			"Support allows us to keep our digital companion ad-free, completely private, and secure, safeguarding vulnerable youth seeking guidance.",
		icon: ShieldCheck,
		color: "text-blue-600",
		bgColor: "bg-blue-100",
	},
];

export default function SupporterImpact() {
	return (
		<section className="bg-slate-50 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
						className="text-base font-medium tracking-tight text-pink-600 uppercase"
					>
						Your Impact
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
						className="mt-2 text-3xl font-light tracking-tight text-slate-900 sm:text-5xl"
					>
						Where does your support go?
					</motion.p>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
						className="mt-6 text-lg leading-relaxed text-slate-600"
					>
						We believe in radical transparency. Every dollar or partnership directly translates into better access to menstrual health resources.
					</motion.p>
				</div>

				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{impactAreas.map((area, index) => (
							<motion.div
								key={area.title}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{
									duration: 0.8,
									ease: [0.19, 1, 0.22, 1],
									delay: index * 0.15,
								}}
								className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md"
							>
								<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
									<div className={`flex h-10 w-10 items-center justify-center rounded-full ${area.bgColor} ${area.color}`}>
										<area.icon className="h-5 w-5" aria-hidden="true" />
									</div>
								</div>
								<h3 className="mb-3 text-xl font-medium text-slate-900">
									{area.title}
								</h3>
								<p className="flex-auto text-base leading-relaxed text-slate-600">
									{area.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
