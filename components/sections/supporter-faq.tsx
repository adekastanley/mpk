"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	Plus,
	HeartHandshake,
	ArrowRight,
	Receipt,
} from "lucide-react";
import Link from "next/link";

const FAQS = [
	{
		question: "Are my donations tax-deductible?",
		answer:
			"Yes! My Period Kit is a registered non-profit organization. All donations made are fully tax-deductible to the extent allowed by law. You will receive an automated receipt via email upon completing your donation.",
	},
	{
		question: "Can I cancel my monthly pledge at any time?",
		answer:
			"Absolutely. If you become a monthly contributor, you can pause, change, or cancel your recurring donation at any time through our supporter portal or by contacting our team.",
	},
	{
		question: "How are corporate partnerships structured?",
		answer:
			"We tailor our corporate partnerships to align with both your brand values and our mission. This can range from co-branding our First Period Toolkits to sponsoring educational workshops. Please use the 'Contact Us' button to start a conversation.",
	},
	{
		question: "Where exactly does my money go?",
		answer:
			"We prioritize transparency. 85% of all funds directly support kit production, distribution, and educational content creation. The remaining 15% goes toward necessary operational and tech maintenance costs to keep our companion app safe and free.",
	},
	{
		question: "Can I donate physical supplies instead of money?",
		answer:
			"At this time, for hygiene and logistical reasons, we prefer financial contributions to ensure all kits meet our strict health standards and contain uniform, high-quality products. However, if you are a manufacturer, please reach out via our partnerships form.",
	},
];

function AccordionItem({
	question,
	answer,
	isOpen,
	onClick,
}: {
	question: string;
	answer: string;
	isOpen: boolean;
	onClick: () => void;
}) {
	return (
		<div className="border-b border-slate-200 last:border-0">
			<button
				onClick={onClick}
				className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
			>
				<span className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-pink-600 transition-colors">
					{question}
				</span>
				<div
					className={`ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
						isOpen
							? "border-pink-600 bg-pink-600 text-white rotate-45"
							: "border-slate-200 bg-white text-slate-500 group-hover:border-pink-300 group-hover:text-pink-600"
					}`}
				>
					<Plus className="h-5 w-5" />
				</div>
			</button>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="overflow-hidden"
					>
						<div className="pb-6 text-slate-600 text-lg leading-relaxed">
							{answer}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default function SupporterFAQ() {
	const [openIndex, setOpenIndex] = useState<number>(0);

	return (
		<section className="relative w-full py-24 lg:py-32 bg-slate-50 ">
			<div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
					{/* ── Left Column: Contact/Trust Card ── */}
					<div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-8">
						<div>
							<p className="text-sm font-semibold tracking-[0.2em] uppercase text-pink-600 mb-4">
								Questions & Transparency
							</p>
							<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.1] mb-6 text-slate-900">
								Frequently Asked <br />
								<span className="text-slate-500">Questions.</span>
							</h2>
						</div>

						{/* Trust Card */}
						<div className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 p-8 md:p-10 shadow-sm">
							<div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
								<Receipt className="w-32 h-32 text-pink-600" />
							</div>

							<div className="relative z-10">
								<div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center mb-6 text-pink-600">
									<HeartHandshake className="w-6 h-6" />
								</div>

								<h3 className="text-xl font-medium mb-3 text-slate-900">
									Donor Promise
								</h3>
								<p className="text-slate-600 leading-relaxed mb-6">
									We are committed to full financial transparency. Our annual impact reports are publicly available, ensuring you always know how your contributions are making a difference.
								</p>

								<div className="flex flex-col sm:flex-row gap-4">
									<button className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors">
										Contact Partnerships
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* ── Right Column: FAQs ── */}
					<div className="lg:col-span-7">
						<div className="rounded-[2rem] bg-white border border-slate-200 p-6 md:p-10 shadow-sm">
							{FAQS.map((faq, index) => (
								<AccordionItem
									key={index}
									question={faq.question}
									answer={faq.answer}
									isOpen={openIndex === index}
									onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
