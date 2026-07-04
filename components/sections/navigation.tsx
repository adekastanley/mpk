"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
	{ name: "About", href: "/about" },
	{ name: "Become a Supporter", href: "/supporter" },
	{ name: "Contact", href: "/contact" },
	{ name: "Get Help", href: "/help" },
];

// Easing for smooth Awwards feel
const transition = { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const };

const menuVariants = {
	initial: { y: "-100%" },
	animate: { y: "0%", transition },
	exit: { y: "-100%", transition },
};

const containerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
	exit: {
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
};

const linkVariants = {
	initial: { y: "120%", opacity: 0, rotate: 3 },
	animate: {
		y: "0%",
		opacity: 1,
		rotate: 0,
		transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const },
	},
	exit: {
		y: "120%",
		opacity: 0,
		rotate: -3,
		transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const },
	},
};

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<>
			{/* Fixed Menu Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="fixed top-6 right-6 z-50 flex h-12 md:h-16 w-12 md:w-16 items-center justify-center rounded-full bg-pink-600 text-white shadow-xl transition-transform hover:scale-105 active:scale-95"
				aria-label="Toggle Menu"
			>
				<div className="relative flex h-6 w-6 flex-col justify-between overflow-hidden">
					<span
						className={`h-[2px] w-full bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
							isOpen ? "translate-y-[11px] rotate-45" : ""
						}`}
					/>
					<span
						className={`h-[2px] w-full bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
							isOpen ? "opacity-0 translate-x-8" : "opacity-100"
						}`}
					/>
					<span
						className={`h-[2px] w-full bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
							isOpen ? "-translate-y-[11px] -rotate-45" : ""
						}`}
					/>
				</div>
			</button>

			{/* Full Screen Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						variants={menuVariants}
						initial="initial"
						animate="animate"
						exit="exit"
						className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/95 backdrop-blur-2xl"
					>
						<motion.nav
							variants={containerVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							className="flex w-full max-w-5xl flex-col px-8"
						>
							{navLinks.map((link) => (
								<div key={link.name} className="overflow-hidden py-1 sm:py-2">
									<motion.div variants={linkVariants}>
										<Link
											href={link.href}
											onClick={() => setIsOpen(false)}
											className="group flex items-center text-4xl font-light tracking-tight text-white transition-colors duration-300 hover:text-pink-500 sm:text-6xl lg:text-7xl xl:text-8xl"
										>
											<span className="mr-4 inline-block w-0 overflow-hidden opacity-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-12 group-hover:opacity-100 sm:group-hover:w-20">
												—
											</span>
											{link.name}
										</Link>
									</motion.div>
								</div>
							))}

							{/* App CTA Button */}
							<div className="mt-12 overflow-hidden py-2 sm:mt-16">
								<motion.div variants={linkVariants}>
									<Link
										href="#"
										onClick={() => setIsOpen(false)}
										className="inline-flex items-center gap-4 rounded-full bg-pink-600 px-8 py-5 text-xl font-medium text-white shadow-xl transition-all duration-300 hover:bg-white hover:text-pink-600 hover:shadow-2xl sm:text-2xl"
									>
										Go to the App
										<svg
											className="h-6 w-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</Link>
								</motion.div>
							</div>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
