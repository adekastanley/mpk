"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompanionPreview() {
	return (
		<section className="bg-white py-24 sm:py-32 overflow-hidden border-t border-slate-100">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
						className="max-w-xl"
					>
						<h2 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl mb-6">
							Meet My Period Companion.
						</h2>
						<p className="text-lg leading-relaxed text-slate-600 mb-8 font-light">
							Our localized, anonymous AI module delivers medically accurate guidance instantly. Built with strict data safety guardrails to ensure your conversations remain entirely secure and confidential.
						</p>
						<ul className="space-y-4 mb-10">
							{[
								"Complete Anonymity by Design",
								"Clinically Guardrailed Content",
								"Localized Cultural Adaptability",
							].map((item, idx) => (
								<li key={idx} className="flex items-center gap-3 text-slate-700">
									<div className="flex-shrink-0 h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-pink-600">
										<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
										</svg>
									</div>
									<span className="font-medium">{item}</span>
								</li>
							))}
						</ul>
						<Button asChild size="lg" className="rounded-full px-8 py-6 text-base bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20">
							<Link href="/companion">Explore The Portal</Link>
						</Button>
					</motion.div>

					{/* Image/Mockup */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
						className="relative"
					>
						<div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-purple-200 rounded-[3rem] transform rotate-3 scale-105 opacity-50 blur-2xl"></div>
						<div className="relative rounded-[3rem] bg-slate-50 border border-slate-100 p-8 shadow-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
							{/* Placeholder for actual App UI Mockup */}
							<div className="text-center space-y-4">
								<div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center text-pink-600">
									<svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
									</svg>
								</div>
								<div className="text-slate-400 font-medium tracking-widest uppercase text-sm">Interactive AI Module Preview</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
