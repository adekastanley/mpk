"use client";

import { motion } from "motion/react";

export default function ContactHero() {
	return (
		<section className="relative overflow-hidden bg-slate-50 px-4 sm:px-6 lg:px-20 pt-32 pb-16 lg:pb-24">
			<div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-pink-100/50 blur-[100px] opacity-70" />
			<div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-100/50 blur-[100px] opacity-70" />

			<div className="mx-auto w-full max-w-7xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
					className="mb-8 inline-block rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-medium tracking-wide text-pink-600 uppercase"
				>
					Get in Touch
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
					className="text-5xl font-light tracking-tight text-slate-900 sm:text-7xl"
				>
					We'd love to hear from you.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
					className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-600 sm:text-xl"
				>
					Whether you have a question about our First Period Toolkits, want to partner with us, or are a member of the media, our team is ready to answer your questions.
				</motion.p>
			</div>
		</section>
	);
}
