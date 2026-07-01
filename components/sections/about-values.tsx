"use client";

import { motion } from "motion/react";

export default function AboutValues() {
	return (
		<section className="bg-slate-50 py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Values & Safeguarding Grid */}
				<div className="mb-32 grid gap-16 lg:grid-cols-2 lg:gap-24">
					{/* Values */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					>
						<h2 className="mb-8 text-4xl font-light tracking-tight text-slate-900 sm:text-5xl">
							Our Core Values
						</h2>
						<ul className="space-y-8">
							<li className="flex gap-4">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-medium text-slate-900">
										Privacy First
									</h3>
									<p className="mt-2 text-slate-600 leading-relaxed">
										We minimize data collection and prioritize absolute privacy
										for every adolescent, ensuring they can ask questions
										safely.
									</p>
								</div>
							</li>
							<li className="flex gap-4">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<h3 className="text-xl font-medium text-slate-900">
										Adolescent Friendly
									</h3>
									<p className="mt-2 text-slate-600 leading-relaxed">
										We use simple, warm, and non-judgmental language without
										sounding clinical or childish.
									</p>
								</div>
							</li>
						</ul>
					</motion.div>

					{/* Safeguarding */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
						className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12"
					>
						<div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white">
							<svg
								className="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								/>
							</svg>
						</div>
						<h2 className="mb-6 text-3xl font-light tracking-tight text-slate-900">
							Our Safeguarding Commitment
						</h2>
						<p className="text-lg font-light leading-relaxed text-slate-600 mb-6">
							My Period Companion provides education and referral guidance but
							is{" "}
							<strong>
								not a replacement for emergency care or clinical consultation.
							</strong>
						</p>
						<p className="text-slate-500 leading-relaxed">
							We maintain clear referral boundaries and provide safe guidance
							for urgent needs, abuse, or violence by routing users to approved
							local helplines and trusted professional partners.
						</p>
					</motion.div>
				</div>

				{/* Founder / Team Note */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					className="overflow-hidden rounded-3xl bg-pink-600 text-white lg:flex"
				>
					<div className="p-10 sm:p-16 lg:w-1/2 lg:p-20">
						<h2 className="mb-8 text-4xl font-light tracking-tight sm:text-5xl">
							A note from our team
						</h2>
						<p className="mb-8 text-lg font-light leading-relaxed text-pink-100 sm:text-2xl">
							"We believe that no adolescent should feel alone, ashamed, or
							confused when navigating their menstrual health. Our ecosystem was
							built to be the companion we all wished we had."
						</p>
						<div className="flex items-center gap-4">
							<div className="h-[1px] w-12 bg-pink-300" />
							<span className="text-sm font-medium tracking-widest text-pink-200 uppercase">
								The My Period Kit Team
							</span>
						</div>
					</div>
					<div className="relative h-96 lg:h-auto lg:w-1/2 bg-pink-700">
						{/* Placeholder image for Founder/Team */}
						<div className="absolute inset-0 flex items-center justify-center overflow-hidden">
							<div className="absolute inset-0 bg-pink-800/20 mix-blend-multiply z-10" />
							<svg
								className="h-32 w-32 text-pink-400 opacity-50"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1"
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
							<p className="absolute bottom-4 right-4 text-xs font-medium text-pink-400 z-20">
								Image Placeholder
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
