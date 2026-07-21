"use client";

import { motion } from "motion/react";
import { useRef } from "react";

const timelineEvents = [
	{
		year: "2016",
		title: "Grassroots Initiative",
		description: "Launched as a localized response to address deep systemic gaps in reproductive wellness infrastructure in rural communities.",
	},
	{
		year: "2019",
		title: "Product Innovation",
		description: "Expanded our focus beyond single product drop-offs, investing in sustainable material science for reusable sanitary pads.",
	},
	{
		year: "2022",
		title: "AI Integration",
		description: "Began development of the My Period Companion AI module to bypass traditional educational blockades using localized dialects.",
	},
	{
		year: "2026",
		title: "Enterprise Ecosystem",
		description: "Scaled into an advanced social enterprise embedding data analytics, material innovation, and legislative change into a unified model for lasting impact.",
	},
];

export default function AboutStory() {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<section id="story" className="py-24 sm:py-32 bg-white relative">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mb-20">
					<div className="text-xs font-semibold tracking-widest text-pink-600 uppercase mb-4">Our Story</div>
					<h2 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
						From a Localized Response to a Continental Catalyst.
					</h2>
					<p className="text-xl text-slate-600 font-light leading-relaxed">
						Founded to address deep systemic gaps in reproductive wellness infrastructure, My Period Kit realized early on that addressing period poverty requires far more than single product drop-offs. It demands institutional transformation.
					</p>
				</div>

				<div ref={containerRef} className="relative">
					{/* Vertical Line */}
					<div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform sm:-translate-x-1/2"></div>

					<div className="space-y-16 sm:space-y-24">
						{timelineEvents.map((event, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
								className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""} group`}
							>
								{/* Center Node */}
								<div className="absolute left-4 sm:left-1/2 top-0 sm:top-6 w-3 h-3 bg-white border-2 border-pink-500 rounded-full transform -translate-x-[5px] sm:-translate-x-1.5 shadow-[0_0_0_4px_white] z-10 group-hover:scale-150 group-hover:bg-pink-500 transition-all duration-300"></div>

								{/* Content */}
								<div className={`ml-12 sm:ml-0 sm:w-1/2 ${idx % 2 === 0 ? "sm:pl-16" : "sm:pr-16 text-left sm:text-right"}`}>
									<span className="inline-block text-5xl font-light text-slate-200 mb-4 tracking-tighter">
										{event.year}
									</span>
									<h3 className="text-2xl font-medium text-slate-900 mb-3">{event.title}</h3>
									<p className="text-slate-600 leading-relaxed font-light">{event.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
