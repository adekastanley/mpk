"use client";

import { motion } from "motion/react";
import { MessageCircleHeart, Shield, PhoneCall, Stethoscope } from "lucide-react";
import Link from "next/link";

const resources = [
	{
		title: "General Period Questions",
		description: "Have a question about puberty, your cycle, or period products? Our Big Sister companion is available 24/7.",
		icon: MessageCircleHeart,
		color: "text-pink-600",
		bgColor: "bg-pink-100",
		actionText: "Chat on WhatsApp",
		href: "#whatsapp",
		isPrimary: true,
	},
	{
		title: "Abuse & Gender-Based Violence",
		description: "If you or someone you know is facing abuse, help is available. NAPTIP (Nigeria) offers confidential support.",
		icon: Shield,
		color: "text-purple-600",
		bgColor: "bg-purple-100",
		actionText: "Call 0800 CALL NAPTIP",
		href: "tel:08002255627847",
		isPrimary: false,
	},
	{
		title: "Emotional Distress",
		description: "Feeling overwhelmed, anxious, or depressed? Speak to a trained counselor in confidence.",
		icon: PhoneCall,
		color: "text-blue-600",
		bgColor: "bg-blue-100",
		actionText: "Mentally Aware Nigeria",
		href: "https://www.mentallyaware.org/",
		isPrimary: false,
	},
	{
		title: "Medical & Clinic Locator",
		description: "For prescriptions, severe cramps, or clinical concerns, please visit a certified healthcare provider.",
		icon: Stethoscope,
		color: "text-emerald-600",
		bgColor: "bg-emerald-100",
		actionText: "Find a Clinic Near You",
		href: "#",
		isPrimary: false,
	},
];

export default function HelpResources() {
	return (
		<section className="bg-slate-50 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
						className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl"
					>
						Directory of Support
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
						className="mt-6 text-lg leading-relaxed text-slate-600"
					>
						Depending on what you are going through, select the option below that best fits your needs. All external helplines are confidential.
					</motion.p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
					{resources.map((resource, index) => (
						<motion.div
							key={resource.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: index * 0.1 }}
							className={`relative flex flex-col rounded-3xl bg-white p-8 sm:p-10 transition-all hover:-translate-y-1 hover:shadow-xl ${
								resource.isPrimary ? "ring-2 ring-pink-500 shadow-lg" : "ring-1 ring-slate-200 shadow-sm"
							}`}
						>
							<div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
								<div className={`flex h-10 w-10 items-center justify-center rounded-full ${resource.bgColor} ${resource.color}`}>
									<resource.icon className="h-5 w-5" aria-hidden="true" />
								</div>
							</div>
							
							<h3 className="mb-4 text-xl font-medium text-slate-900">
								{resource.title}
							</h3>
							
							<p className="flex-auto text-base leading-relaxed text-slate-600 mb-8">
								{resource.description}
							</p>
							
							<div className="mt-auto">
								<Link
									href={resource.href}
									className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors w-full sm:w-auto ${
										resource.isPrimary
											? "bg-pink-600 text-white hover:bg-pink-500"
											: "bg-slate-100 text-slate-900 hover:bg-slate-200"
									}`}
								>
									{resource.actionText}
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
