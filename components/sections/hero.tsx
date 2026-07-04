"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Magnetic } from "../motion-primitives/magnetic";
import { motion } from "motion/react";

export default function Hero() {
	const springOptions = { bounce: 0.1 };
	return (
		<div className="relative overflow-hidden bg-slate-50 pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32">
			{/* Animated Background Blobs (Optimized for Performance) */}
			<div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						x: [0, 50, 0],
						y: [0, -30, 0],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute left-[10%] top-[10%] h-[600px] w-[600px] bg-[radial-gradient(circle,rgba(249,168,212,0.3)_0%,rgba(249,168,212,0)_70%)]"
				/>
				<motion.div
					animate={{
						scale: [1, 1.5, 1],
						x: [0, -70, 0],
						y: [0, 50, 0],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
					className="absolute right-[5%] top-[15%] h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(216,180,254,0.3)_0%,rgba(216,180,254,0)_70%)]"
				/>
				<motion.div
					animate={{
						scale: [1, 1.3, 1],
						x: [0, 30, 0],
						y: [0, 60, 0],
					}}
					transition={{
						duration: 9,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
					className="absolute left-[25%] bottom-[-10%] h-[700px] w-[700px] bg-[radial-gradient(circle,rgba(252,211,77,0.2)_0%,rgba(252,211,77,0)_70%)]"
				/>
			</div>

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
				
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
					className="mb-8"
				>
					<Badge
						variant={"outline"}
						className="border-pink-200 bg-white/50 px-4 py-2 text-sm font-medium tracking-wide text-pink-600 uppercase shadow-sm backdrop-blur-md"
					>
						My Period Companion
					</Badge>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
					className="max-w-4xl text-5xl font-light tracking-tight text-slate-900 sm:text-7xl lg:text-8xl"
				>
					A friendly period companion, always close by.
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
					className="mx-auto mt-8 max-w-2xl text-lg font-light leading-relaxed text-slate-600 sm:text-xl"
				>
					Access private, safe support through WhatsApp, IVR voice calls, SMS,
					or the First Period Toolkit.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
					className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
				>
					<Magnetic
						intensity={0.2}
						springOptions={springOptions}
						actionArea="global"
						range={200}
					>
						<Button
							size={"lg"}
							className="rounded-full px-8 py-7 text-base bg-pink-600 hover:bg-pink-500 text-white shadow-lg shadow-pink-600/20 transition-all duration-300 ease-in-out hover:-translate-y-1"
						>
							Get The App
						</Button>
					</Magnetic>

					<Button
						size={"lg"}
						variant={"outline"}
						className="rounded-full px-8 py-7 text-base border-slate-200 bg-white hover:bg-slate-50 hover:text-pink-600 text-slate-900 shadow-sm transition-all duration-300 ease-in-out"
					>
						Get Help
					</Button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.5 }}
					className="mt-20 sm:mt-24 w-full max-w-lg mx-auto"
				>
					<div className="relative aspect-square w-full rounded-[3rem] bg-gradient-to-b from-pink-100/50 to-transparent p-4 sm:p-8">
						<Image
							src={"/images/hand1.png"}
							width={500}
							height={500}
							alt="period companion chat"
							className="object-contain drop-shadow-2xl mix-blend-multiply"
							priority
						/>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
