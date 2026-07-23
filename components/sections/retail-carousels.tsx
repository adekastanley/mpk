"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const products = [
	{
		title: "Premium Reusable Pads",
		category: "Menstrual Care",
		price: "N15.00",
		tag: "Bestseller",
		color: "bg-pink-50",
	},
	{
		title: "First-Menarche Packs",
		category: "Period Kits",
		price: "N35.00",
		tag: "School Provisioning",
		color: "bg-purple-50",
	},
	{
		title: "Leak-Proof Tech Panties",
		category: "Wearables",
		price: "N28.00",
		tag: "New Arrival",
		color: "bg-amber-50",
	},
	{
		title: "Nutritional Wellness Bundles",
		category: "Wellness Elements",
		price: "N45.00",
		tag: "Subscription Ready",
		color: "bg-teal-50",
	},
];

export default function RetailCarousels() {
	return (
		<section className="bg-slate-50 py-24 sm:py-32 overflow-hidden border-t border-slate-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
					<div className="max-w-2xl">
						<h2 className="text-3xl font-light tracking-tight text-slate-900 sm:text-5xl mb-4">
							Purpose-Driven Commerce.
						</h2>
						<p className="text-lg text-slate-600 font-light leading-relaxed">
							Every purchase directly subsidizes rural distribution networks.
							Subscribe or buy in bulk to amplify your impact.
						</p>
					</div>
					<Button
						asChild
						variant="outline"
						className="rounded-full px-8 shrink-0"
					>
						<Link href="/shop">View Full Catalog</Link>
					</Button>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
					{products.map((product, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-50px" }}
							transition={{
								duration: 0.6,
								delay: idx * 0.1,
								ease: [0.19, 1, 0.22, 1],
							}}
							className="group cursor-pointer"
						>
							<div
								className={`relative aspect-[4/5] rounded-3xl ${product.color} mb-6 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-xl`}
							>
								<div className="absolute top-4 left-4">
									<span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-slate-800">
										{product.tag}
									</span>
								</div>
								{/* Placeholder for Product Image */}
								<div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
									<svg
										className="w-24 h-24 text-slate-900"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M20 8h-3V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H4v14h16V8zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6v-10h12v10z" />
									</svg>
								</div>
							</div>
							<div className="px-2">
								<div className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-2">
									{product.category}
								</div>
								<h3 className="text-lg font-medium text-slate-900 mb-1 group-hover:text-pink-600 transition-colors">
									{product.title}
								</h3>
								<div className="text-slate-600">{product.price}</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
