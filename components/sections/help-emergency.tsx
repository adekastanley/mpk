"use client";

import { motion } from "motion/react";
import { AlertTriangle, Info } from "lucide-react";

export default function HelpEmergency() {
	return (
		<section className="bg-white py-12">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
					className="rounded-3xl bg-amber-50 border border-amber-200 p-8 sm:p-10 shadow-sm"
				>
					<div className="flex flex-col sm:flex-row gap-6 items-start">
						<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
							<AlertTriangle className="h-7 w-7" aria-hidden="true" />
						</div>
						<div>
							<h2 className="text-2xl font-semibold text-amber-900 mb-3">
								Safety & Medical Disclaimer
							</h2>
							<p className="text-amber-800 leading-relaxed mb-4">
								My Period Companion provides education and referral guidance but is{" "}
								<strong>not a replacement for emergency care or clinical consultation.</strong>
							</p>
							<p className="text-amber-700/80 leading-relaxed text-sm">
								If you are experiencing severe pain, abnormally heavy bleeding, or a medical emergency, please do not wait. Contact a local clinic, hospital, or emergency service immediately. If you are in immediate physical danger, contact local authorities.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
