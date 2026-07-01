"use client";

import { motion } from "motion/react";
import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simulate a network request
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			
			// Reset form success message after a few seconds
			setTimeout(() => setIsSubmitted(false), 5000);
		}, 1500);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: 40 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
			className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12 ring-1 ring-slate-100"
		>
			<h2 className="text-3xl font-light tracking-tight text-slate-900 mb-8">
				Send us a message
			</h2>
			
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div>
						<label htmlFor="first-name" className="block text-sm font-medium leading-6 text-slate-900">
							First name
						</label>
						<div className="mt-2">
							<input
								type="text"
								name="first-name"
								id="first-name"
								autoComplete="given-name"
								required
								className="block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 transition-all"
								placeholder="Jane"
							/>
						</div>
					</div>
					<div>
						<label htmlFor="last-name" className="block text-sm font-medium leading-6 text-slate-900">
							Last name
						</label>
						<div className="mt-2">
							<input
								type="text"
								name="last-name"
								id="last-name"
								autoComplete="family-name"
								required
								className="block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 transition-all"
								placeholder="Doe"
							/>
						</div>
					</div>
				</div>

				<div>
					<label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-900">
						Email address
					</label>
					<div className="mt-2">
						<input
							type="email"
							name="email"
							id="email"
							autoComplete="email"
							required
							className="block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 transition-all"
							placeholder="jane@example.com"
						/>
					</div>
				</div>

				<div>
					<label htmlFor="topic" className="block text-sm font-medium leading-6 text-slate-900">
						What can we help you with?
					</label>
					<div className="mt-2">
						<select
							id="topic"
							name="topic"
							required
							className="block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 transition-all bg-white"
						>
							<option value="">Select a topic...</option>
							<option value="general">General Enquiry</option>
							<option value="partnership">School/NGO Partnership</option>
							<option value="media">Media & Press</option>
							<option value="support">App Support</option>
							<option value="other">Other</option>
						</select>
					</div>
				</div>

				<div>
					<label htmlFor="message" className="block text-sm font-medium leading-6 text-slate-900">
						Message
					</label>
					<div className="mt-2">
						<textarea
							name="message"
							id="message"
							rows={4}
							required
							className="block w-full rounded-xl border-0 py-3 px-4 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 transition-all"
							placeholder="How can we help you?"
						/>
					</div>
				</div>

				<div className="flex items-start">
					<div className="flex h-6 items-center">
						<input
							id="privacy"
							name="privacy"
							type="checkbox"
							required
							className="h-4 w-4 rounded border-slate-300 text-pink-600 focus:ring-pink-600"
						/>
					</div>
					<div className="ml-3 text-sm leading-6">
						<label htmlFor="privacy" className="text-slate-600">
							By selecting this, you agree to our{" "}
							<a href="#" className="font-medium text-pink-600 hover:text-pink-500">
								privacy policy
							</a>
							.
						</label>
					</div>
				</div>

				<div className="pt-4">
					<button
						type="submit"
						disabled={isSubmitting}
						className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
					>
						{isSubmitting ? (
							"Sending..."
						) : isSubmitted ? (
							"Message Sent!"
						) : (
							<>
								Send Message
								<Send className="h-4 w-4" />
							</>
						)}
					</button>
				</div>
				
				{isSubmitted && (
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center text-sm font-medium text-emerald-600 mt-4"
					>
						Thank you! We will get back to you shortly.
					</motion.p>
				)}
			</form>
		</motion.div>
	);
}
