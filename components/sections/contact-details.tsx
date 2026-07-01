"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";

export default function ContactDetails() {
	return (
		<motion.div
			initial={{ opacity: 0, x: -40 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
			className="flex flex-col justify-center"
		>
			<h2 className="text-3xl font-light tracking-tight text-slate-900 mb-6">
				Reach out directly
			</h2>
			<p className="text-lg leading-relaxed text-slate-600 mb-12">
				Prefer to send an email or need to find our offices? Here are the best ways to reach the My Period Kit team directly.
			</p>

			<div className="space-y-10">
				<div className="flex gap-x-6">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
						<Mail className="h-6 w-6" aria-hidden="true" />
					</div>
					<div>
						<h3 className="text-base font-semibold leading-7 text-slate-900">
							Email Us
						</h3>
						<p className="mt-2 leading-7 text-slate-600">
							For general enquiries, partnerships, and press.
						</p>
						<p className="mt-4">
							<a
								href="mailto:hello@myperiodkit.org"
								className="font-medium text-pink-600 hover:text-pink-500"
							>
								hello@myperiodkit.org
							</a>
						</p>
					</div>
				</div>

				<div className="flex gap-x-6">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
						<MessageSquare className="h-6 w-6" aria-hidden="true" />
					</div>
					<div>
						<h3 className="text-base font-semibold leading-7 text-slate-900">
							Companion Support
						</h3>
						<p className="mt-2 leading-7 text-slate-600">
							If you are experiencing technical issues with our WhatsApp companion.
						</p>
						<p className="mt-4">
							<a
								href="mailto:support@myperiodkit.org"
								className="font-medium text-blue-600 hover:text-blue-500"
							>
								support@myperiodkit.org
							</a>
						</p>
					</div>
				</div>

				<div className="flex gap-x-6">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
						<MapPin className="h-6 w-6" aria-hidden="true" />
					</div>
					<div>
						<h3 className="text-base font-semibold leading-7 text-slate-900">
							Headquarters
						</h3>
						<p className="mt-2 leading-7 text-slate-600">
							We are based in Nigeria, operating across West Africa.
						</p>
						<address className="mt-4 not-italic font-medium text-slate-900">
							Abuja, Nigeria<br />
							(Office visits by appointment only)
						</address>
					</div>
				</div>

				<div className="flex gap-x-6">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
						<Phone className="h-6 w-6" aria-hidden="true" />
					</div>
					<div>
						<h3 className="text-base font-semibold leading-7 text-slate-900">
							IVR Phone Line
						</h3>
						<p className="mt-2 leading-7 text-slate-600">
							Access our voice-first companion features (Coming soon).
						</p>
						<p className="mt-4 font-medium text-slate-900">
							Number TBA
						</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
