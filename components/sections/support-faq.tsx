"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	Plus,
	ShieldAlert,
	ArrowRight,
	ShieldCheck,
	LifeBuoy,
} from "lucide-react";
import Link from "next/link";

const FAQS = [
	{
		question: "How do I start using the WhatsApp companion?",
		answer:
			"Simply tap the 'Start on WhatsApp' button anywhere on our site, or scan the QR code found in the First Period Toolkit. The chatbot will safely guide you through a quick onboarding process.",
	},
	{
		question: "Is my health data and conversation private?",
		answer:
			"Yes. Your privacy is our highest priority. We do not sell or share your personal health conversations. All chats are secured, and we follow strict safeguarding guidelines to protect adolescent data.",
	},
	{
		question: "How do I request a First Period Toolkit for my school?",
		answer:
			"Schools and educators can request toolkits by visiting the 'Partners' page and submitting a partnership enquiry form. Our team will follow up to discuss distribution and implementation.",
	},
	{
		question: "What do I do if I need urgent medical help?",
		answer:
			"My Period Companion is for education and support, not emergencies. If you are experiencing severe pain, heavy bleeding, or a medical emergency, please contact a local clinic or emergency service immediately.",
	},
	{
		question: "Can parents or guardians use this?",
		answer:
			"Absolutely. We have specific resources designed to help parents and guardians navigate conversations about puberty, menstruation, and how to support their child.",
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
		<div className="border-b border-border last:border-0">
			<button
				onClick={onClick}
				className="flex w-full items-center justify-between py-6 text-left focus:outline-none group"
			>
				<span className="text-lg md:text-xl font-semibold text-foreground group-hover:text-mpk-primary transition-colors">
					{question}
				</span>
				<div
					className={`ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
						isOpen
							? "border-mpk-primary bg-mpk-primary text-white rotate-45"
							: "border-border bg-card text-muted-foreground group-hover:border-mpk-primary/50 group-hover:text-mpk-primary"
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
						<div className="pb-6 text-muted-foreground text-lg leading-relaxed">
							{answer}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export default function SupportFAQ() {
	const [openIndex, setOpenIndex] = useState<number>(0);

	return (
		<section className="relative w-full py-24 lg:py-32 bg-background ">
			<div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
					{/* ── Left Column: Sticky Safety Card ── */}
					<div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-8">
						<div>
							<p className="text-sm font-semibold tracking-[0.2em] uppercase text-mpk-primary mb-4">
								Support & Safety
							</p>
							<h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 text-foreground">
								Common Questions <br />
								<span className="text-muted-foreground">& Your Safety.</span>
							</h2>
						</div>

						{/* Safety Banner Card */}
						<div className="relative overflow-hidden rounded-[2rem] bg-mpk-primary/5 border border-mpk-primary/10 p-8 md:p-10">
							<div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
								<ShieldCheck className="w-32 h-32 text-mpk-primary" />
							</div>

							<div className="relative z-10">
								<div className="w-12 h-12 rounded-xl bg-mpk-primary/10 flex items-center justify-center mb-6 text-mpk-primary">
									<ShieldAlert className="w-6 h-6" />
								</div>

								<h3 className="text-xl font-bold mb-3 text-foreground">
									Safety Disclaimer
								</h3>
								<p className="text-muted-foreground leading-relaxed mb-6">
									My Period Companion provides education and referral guidance.
									It is{" "}
									<strong>
										not a replacement for emergency care or clinical
										consultation.
									</strong>{" "}
									Your privacy and safety are our highest priority.
								</p>

								<div className="flex flex-col sm:flex-row gap-4">
									<button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-foreground rounded-full hover:bg-foreground/90 transition-colors">
										Get Support
									</button>
									<button className="inline-flex items-center justify-center px-6 py-3 font-semibold text-foreground bg-card border border-border rounded-full hover:bg-muted transition-colors">
										Privacy Policy
									</button>
								</div>
							</div>
						</div>

						{/* Additional Contact Prompt */}
						<div className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border">
							<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
								<LifeBuoy className="w-5 h-5" />
							</div>
							<div>
								<h4 className="font-semibold text-foreground">
									Still have questions?
								</h4>
								<Link
									href="#"
									className="text-mpk-primary hover:underline font-medium text-sm inline-flex items-center gap-1 mt-1"
								>
									Contact our team <ArrowRight className="w-3 h-3" />
								</Link>
							</div>
						</div>
					</div>

					{/* ── Right Column: FAQs ── */}
					<div className="lg:col-span-7">
						<div className="rounded-[2rem] bg-card border border-border p-6 md:p-10">
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
