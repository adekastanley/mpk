"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "motion/react";
import { School, Stethoscope, HandHeart, Globe2, ArrowRight } from "lucide-react";

// A component to smoothly animate numbers counting up
function Counter({
	from,
	to,
	suffix = "",
	duration = 2.5,
}: {
	from: number;
	to: number;
	suffix?: string;
	duration?: number;
}) {
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: "-50px" });

	useEffect(() => {
		if (inView && ref.current) {
			const controls = animate(from, to, {
				duration,
				ease: "easeOut",
				onUpdate(value) {
					if (ref.current) {
						// Format the number with commas and append the suffix
						ref.current.textContent = Math.round(value).toLocaleString() + suffix;
					}
				},
			});
			return () => controls.stop();
		}
	}, [inView, from, to, duration, suffix]);

	return (
		<span ref={ref} className="tabular-nums">
			{from}
			{suffix}
		</span>
	);
}

const PARTNER_TYPES = [
	{
		title: "Schools & Educators",
		description: "Implement the First Period Toolkit and digital curriculum to reduce absenteeism and build confidence.",
		icon: School,
		color: "from-blue-500/5 to-indigo-600/5",
		accent: "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20",
		border: "hover:border-blue-500/30",
		colSpan: "md:col-span-2 lg:col-span-2",
	},
	{
		title: "Clinics & Pharmacies",
		description: "Become a verified supply point and referral center for adolescent health.",
		icon: Stethoscope,
		color: "from-teal-500/5 to-emerald-600/5",
		accent: "text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20",
		border: "hover:border-teal-500/30",
		colSpan: "md:col-span-1 lg:col-span-1",
	},
	{
		title: "NGOs & CSOs",
		description: "Integrate our digital companion into your existing field programs and community outreach.",
		icon: HandHeart,
		color: "from-mpk-primary/5 to-purple-600/5",
		accent: "text-mpk-primary bg-mpk-primary/10",
		border: "hover:border-mpk-primary/30",
		colSpan: "md:col-span-1 lg:col-span-1",
	},
	{
		title: "Funders & Accelerators",
		description: "Support our roadmap to scale across West Africa and drive measurable, systemic impact.",
		icon: Globe2,
		color: "from-amber-500/5 to-orange-600/5",
		accent: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20",
		border: "hover:border-amber-500/30",
		colSpan: "md:col-span-2 lg:col-span-2",
	},
];

export default function PartnershipImpact() {
	return (
		<section className="relative w-full py-24 lg:py-32 bg-background text-foreground overflow-hidden">
			{/* Decorative background glows */}
			<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-mpk-primary/5 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

			<div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
				
				{/* ── Header Area ── */}
				<div className="flex flex-col lg:flex-row gap-12 justify-between items-start mb-20">
					<div className="max-w-2xl">
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="text-sm font-semibold tracking-[0.2em] uppercase text-mpk-primary mb-4"
						>
							Partnership & Impact
						</motion.p>
						<motion.h2 
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-6"
						>
							Scale Our Impact. <br />
							<span className="text-muted-foreground">Together.</span>
						</motion.h2>
						<motion.p 
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
							className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
						>
							Join schools, clinics, NGOs, and funders in delivering safe, private menstrual health support to adolescents across the region.
						</motion.p>
					</div>

					{/* ── Impact Metrics ── */}
					<div className="flex flex-col sm:flex-row gap-8 lg:gap-16 pt-4 lg:pt-12">
						<motion.div 
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
							className="flex flex-col"
						>
							<div className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground mb-2">
								<Counter from={0} to={10000} suffix="+" duration={2.5} />
							</div>
							<p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
								Target Girls Reached
							</p>
						</motion.div>
						
						<motion.div 
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
							className="flex flex-col"
						>
							<div className="text-5xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-mpk-primary to-purple-400 mb-2">
								<Counter from={0} to={50} suffix="+" duration={2} />
							</div>
							<p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">
								Partner Schools & Clinics
							</p>
						</motion.div>
					</div>
				</div>

				{/* ── Bento Grid for Partners ── */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
					{PARTNER_TYPES.map((partner, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 * index }}
							className={`group relative overflow-hidden rounded-[2rem] bg-card border border-border p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${partner.border} ${partner.colSpan}`}
						>
							{/* Hover Gradient Background */}
							<div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
							
							<div className="relative z-10 flex flex-col h-full">
								<div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${partner.accent}`}>
									<partner.icon className="w-7 h-7" />
								</div>
								
								<h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-foreground">
									{partner.title}
								</h3>
								
								<p className="text-muted-foreground leading-relaxed text-lg mt-auto transition-colors duration-500">
									{partner.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* ── CTA Area ── */}
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="flex flex-col sm:flex-row items-center justify-between p-8 md:p-12 rounded-[2rem] bg-mpk-primary/5 border border-mpk-primary/10"
				>
					<div className="mb-6 sm:mb-0 text-center sm:text-left">
						<h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Ready to make a difference?</h3>
						<p className="text-muted-foreground">Join our growing network of verified partners.</p>
					</div>
					<button className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-mpk-primary rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
						<span className="relative z-10 flex items-center gap-2">
							Become a Partner
							<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
						</span>
						{/* Button hover flare */}
						<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
					</button>
				</motion.div>

			</div>
		</section>
	);
}
