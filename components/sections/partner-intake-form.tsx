"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function PartnerIntakeForm() {
	return (
		<section id="intake-form" className="py-24 sm:py-32 bg-white relative">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl mb-4">
						Initiate Strategic Partnership.
					</h2>
					<p className="text-slate-600 font-light text-lg">
						Please provide initial details below. Our enterprise relations team will respond within 48 hours.
					</p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					className="bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 rounded-[2rem] p-8 sm:p-12"
				>
					<form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							<div className="space-y-2">
								<label htmlFor="firstName" className="text-sm font-medium text-slate-900">First Name</label>
								<input type="text" id="firstName" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Jane" />
							</div>
							<div className="space-y-2">
								<label htmlFor="lastName" className="text-sm font-medium text-slate-900">Last Name</label>
								<input type="text" id="lastName" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Doe" />
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium text-slate-900">Institutional Email</label>
								<input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="jane@foundation.org" />
							</div>
							<div className="space-y-2">
								<label htmlFor="organization" className="text-sm font-medium text-slate-900">Organization Name</label>
								<input type="text" id="organization" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all" placeholder="Global Health Foundation" />
							</div>
						</div>

						<div className="space-y-2">
							<label htmlFor="tier" className="text-sm font-medium text-slate-900">Partnership Tier Interest</label>
							<div className="relative">
								<select id="tier" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all appearance-none text-slate-700">
									<option value="" disabled selected>Select an option...</option>
									<option value="tier1">Tier 1: Institutional Funder</option>
									<option value="tier2">Tier 2: Corporate CSR</option>
									<option value="tier3">Tier 3: Strategic Innovation Fund</option>
									<option value="other">Other Inquiry</option>
								</select>
								<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
									<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
								</div>
							</div>
						</div>

						<div className="space-y-2">
							<label htmlFor="message" className="text-sm font-medium text-slate-900">Strategic Objectives</label>
							<textarea id="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none" placeholder="Briefly describe your funding objectives or CSR requirements..."></textarea>
						</div>

						<Button type="submit" size="lg" className="w-full rounded-xl py-6 text-base bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10">
							Submit Inquiry
						</Button>
						
						<p className="text-center text-xs text-slate-500 font-light mt-6">
							By submitting this form, you agree to our <a href="#" className="underline hover:text-slate-900 transition-colors">Privacy Policy</a> and secure communications standards.
						</p>
					</form>
				</motion.div>
			</div>
		</section>
	);
}
