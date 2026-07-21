"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function CompanionFeatureMatrix() {
	return (
		<section className="py-24 sm:py-32 bg-white relative">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					
					{/* Features List */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
					>
						<h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl mb-12">
							High-Fidelity Health Interactions.
						</h2>
						
						<div className="space-y-10">
							<div>
								<h3 className="text-xl font-medium text-slate-900 mb-3 flex items-center gap-3">
									<div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
										</svg>
									</div>
									Advanced Interactive Symptoms Logging
								</h3>
								<p className="text-slate-600 font-light leading-relaxed pl-11">
									An intuitive, iconography-driven interface that enables rapid cycle and wellness logging without heavy text entry. Perfect for low-literacy environments and quick daily updates.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-slate-900 mb-3 flex items-center gap-3">
									<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
										</svg>
									</div>
									Multilingual Core Systems
								</h3>
								<p className="text-slate-600 font-light leading-relaxed pl-11">
									Deep integration of regional dialects designed to ensure high-fidelity interactions across diverse communities, bridging the gap between clinical terminology and local understanding.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-slate-900 mb-3 flex items-center gap-3">
									<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
										</svg>
									</div>
									Clinical Governance Framework
								</h3>
								<p className="text-slate-600 font-light leading-relaxed pl-11">
									A dedicated medical advisory panel, regular clinical reviews, and automated safeguards ensure that all health guidance is safe, accurate, and up-to-date.
								</p>
							</div>
						</div>
					</motion.div>

					{/* Visual Mockup */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
						className="relative"
					>
						<div className="absolute inset-0 bg-slate-100 rounded-[3rem] transform rotate-3 scale-105"></div>
						<div className="relative rounded-[3rem] bg-slate-50 border border-slate-200 p-8 shadow-2xl overflow-hidden aspect-square flex flex-col items-center justify-center">
							<Image
								src="/images/hand1.png"
								alt="App UI Wireframe"
								width={400}
								height={400}
								className="object-contain mix-blend-multiply drop-shadow-2xl"
							/>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
