"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const navItems = [
	{ name: "Our Story", href: "#story" },
	{ name: "Founder", href: "#founder" },
	{ name: "Team", href: "#team" },
	{ name: "Governance", href: "#governance" },
];

export default function AboutStickyNav() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY + 150; // offset for sticky nav

			for (const item of navItems) {
				const element = document.querySelector(item.href) as HTMLElement;
				if (element) {
					const top = element.offsetTop;
					const bottom = top + element.offsetHeight;

					if (scrollPosition >= top && scrollPosition < bottom) {
						setActiveSection(item.name);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTo = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			window.scrollTo({
				top: element.getBoundingClientRect().top + window.scrollY - 100,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<nav className="flex space-x-8 overflow-x-auto py-4 hide-scrollbar">
					{navItems.map((item) => (
						<button
							key={item.name}
							onClick={() => scrollTo(item.href)}
							className={`relative whitespace-nowrap text-sm font-medium tracking-wide uppercase transition-colors px-1 py-2 ${
								activeSection === item.name ? "text-pink-600" : "text-slate-500 hover:text-slate-900"
							}`}
						>
							{item.name}
							{activeSection === item.name && (
								<motion.div
									layoutId="activeTab"
									className="absolute -bottom-4 left-0 right-0 h-0.5 bg-pink-600"
									transition={{ type: "spring", stiffness: 300, damping: 30 }}
								/>
							)}
						</button>
					))}
				</nav>
			</div>
		</div>
	);
}
