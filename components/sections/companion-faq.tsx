"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
	{
		question: "How does the AI ensure medical accuracy?",
		answer: "All generative responses are cross-referenced against a clinically approved database of reproductive health information. The system is programmed to never provide formal diagnoses, and will always recommend seeing a qualified healthcare professional for severe symptoms.",
	},
	{
		question: "What happens to my data?",
		answer: "Your privacy is our absolute priority. We employ a zero-data-retention policy for personally identifying information. Metadata and IP addresses are scrubbed instantly at the API level before your query is ever processed by the AI.",
	},
	{
		question: "Which languages are supported?",
		answer: "Currently, My Period Companion supports English, French, Swahili, and Hausa, with active development for Yoruba, Amharic, and Zulu. Our localized models understand regional slang and cultural idioms to ensure comfortable communication.",
	},
	{
		question: "Is the service free to use?",
		answer: "Yes. Core functionality, including symptom logging and basic AI guidance, is completely free for end users. The platform is subsidized through our enterprise product sales and institutional funding partners.",
	},
];

export default function CompanionFAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section className="py-24 sm:py-32 bg-slate-50 relative">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl mb-4">
						Frequently Asked Questions.
					</h2>
					<p className="text-slate-600 font-light">
						Algorithmic logic, security protocols, and diagnostic guardrails explained.
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
						>
							<button
								onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
								className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
								aria-expanded={openIndex === idx}
							>
								<span className="text-lg font-medium text-slate-900">{faq.question}</span>
								<div className={`ml-4 h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${openIndex === idx ? "rotate-180 bg-pink-50" : ""}`}>
									<svg className={`w-5 h-5 ${openIndex === idx ? "text-pink-600" : "text-slate-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
									</svg>
								</div>
							</button>
							<AnimatePresence>
								{openIndex === idx && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3, ease: "easeInOut" }}
									>
										<div className="px-6 pb-6 text-slate-600 font-light leading-relaxed border-t border-slate-100 pt-4">
											{faq.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
