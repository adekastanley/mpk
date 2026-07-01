"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const tiers = [
	{
		name: "Monthly Contributor",
		id: "tier-monthly",
		href: "#",
		priceMonthly: "Custom",
		description: "Help us sustain our platform and keep it free for adolescents.",
		features: [
			"Continuous support for server costs",
			"Fund new educational content",
			"Receive a quarterly impact report",
		],
		mostPopular: true,
		buttonText: "Start Monthly Gift",
	},
	{
		name: "One-Time Donation",
		id: "tier-onetime",
		href: "#",
		priceMonthly: "Any Amount",
		description: "Make a direct impact today by funding a specific initiative.",
		features: [
			"Directly funds My Period Kits",
			"Supports community outreach",
			"Tax-deductible receipt provided",
		],
		mostPopular: false,
		buttonText: "Donate Now",
	},
	{
		name: "Corporate Partner",
		id: "tier-corporate",
		href: "#",
		priceMonthly: "Let's Talk",
		description: "Align your brand with our mission for widespread impact.",
		features: [
			"Co-branded educational campaigns",
			"Large-scale kit distribution",
			"Dedicated partnership manager",
			"Prominent feature on our partners page",
		],
		mostPopular: false,
		buttonText: "Contact Us",
	},
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export default function SupporterTiers() {
	return (
		<section id="tiers" className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
						className="text-base font-medium tracking-tight text-pink-600 uppercase"
					>
						Ways to Give
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-100px" }}
						transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
						className="mt-2 text-4xl font-light tracking-tight text-slate-900 sm:text-5xl"
					>
						Choose how you'd like to support
					</motion.p>
				</div>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
					className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-600"
				>
					Whether it's a one-time gift, a monthly pledge, or a corporate partnership, every contribution moves us closer to a world without period poverty.
				</motion.p>
				
				<div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
					{tiers.map((tier, index) => (
						<motion.div
							key={tier.id}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{
								duration: 0.8,
								ease: [0.19, 1, 0.22, 1],
								delay: index * 0.15 + 0.2,
							}}
							className={classNames(
								tier.mostPopular
									? "ring-2 ring-pink-500 bg-white"
									: "ring-1 ring-slate-200 bg-white/60",
								"rounded-3xl p-8 xl:p-10 relative flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 hover:bg-white"
							)}
						>
							{tier.mostPopular && (
								<div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
									<span className="inline-flex rounded-full bg-pink-100 px-4 py-1 text-sm font-medium tracking-wide text-pink-700 uppercase ring-1 ring-inset ring-pink-600/20">
										Most Helpful
									</span>
								</div>
							)}
							<div>
								<div className="flex items-center justify-between gap-x-4">
									<h3
										id={tier.id}
										className={classNames(
											tier.mostPopular ? "text-pink-600" : "text-slate-900",
											"text-lg font-medium leading-8"
										)}
									>
										{tier.name}
									</h3>
								</div>
								<p className="mt-4 text-sm leading-6 text-slate-600">
									{tier.description}
								</p>
								<p className="mt-6 flex items-baseline gap-x-1">
									<span className="text-4xl font-light tracking-tight text-slate-900">
										{tier.priceMonthly}
									</span>
								</p>
								<ul
									role="list"
									className="mt-8 space-y-3 text-sm leading-6 text-slate-600"
								>
									{tier.features.map((feature) => (
										<li key={feature} className="flex gap-x-3">
											<Check
												className={classNames(
													tier.mostPopular ? "text-pink-500" : "text-slate-400",
													"h-6 w-5 flex-none"
												)}
												aria-hidden="true"
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>
							<a
								href={tier.href}
								aria-describedby={tier.id}
								className={classNames(
									tier.mostPopular
										? "bg-pink-600 text-white hover:bg-pink-500 shadow-sm"
										: "text-slate-900 ring-1 ring-inset ring-slate-200 hover:ring-slate-300 hover:bg-slate-50",
									"mt-8 block rounded-full py-2.5 px-3.5 text-center text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 transition-colors"
								)}
							>
								{tier.buttonText}
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
