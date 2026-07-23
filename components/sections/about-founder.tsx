"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function AboutFounder() {
	return (
		<section
			id="founder"
			className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Portrait Area */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
						className="relative"
					>
						<div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-[3rem] transform -rotate-3 scale-105 opacity-50 blur-2xl"></div>
						<div className="relative aspect-[4/5] rounded-[3rem] bg-white border border-slate-100 p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col justify-end pb-12">
							{/* Placeholder for editorial portrait photography */}
							<div className="absolute inset-0 bg-slate-200/50 flex items-center justify-center mix-blend-multiply">
								<svg
									className="w-32 h-32 text-slate-400"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
								</svg>
							</div>
							<div className="relative z-10 text-center px-4">
								<div className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
									<p className="text-sm font-semibold tracking-wider text-pink-600 uppercase">
										CEOs name
									</p>
									<p className="text-xs text-slate-500">Founder & CEO</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
						className="max-w-xl"
					>
						<div className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
							Founder Profile
						</div>
						<h2 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl mb-8">
							A Message on Institutional Urgency.
						</h2>

						<blockquote className="relative">
							<svg
								className="absolute -top-6 -left-8 w-16 h-16 text-pink-100 transform -scale-x-100"
								fill="currentColor"
								viewBox="0 0 32 32"
							>
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
							<p className="relative z-10 text-xl sm:text-2xl font-light leading-relaxed text-slate-700 italic">
								"True progress in African public health occurs when we dismantle
								structural obstacles to basic dignity. At MPK, we build
								ecosystems where next-generation ethical AI tools and enterprise
								supply networks work together to ensure that no African
								menstruator is held back by systemic health taboos."
							</p>
						</blockquote>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
