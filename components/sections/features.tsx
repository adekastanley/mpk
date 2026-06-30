// export default function Features() {
// 	return <div>features</div>;
// }
"use client";
import { motion } from "motion/react";
import {
	MessageSquare,
	Calendar,
	BookOpen,
	ShieldAlert,
	Sparkles,
	HeartHandshake,
} from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: <MessageSquare className="w-6 h-6 text-mpk-primary" />,
			title: "Big Sister Mode",
			type: "content",
			description:
				"A private, safe space to ask sensitive questions about periods, body changes, and safety. Get immediate, non-judgmental answers in plain language whenever you need guidance.",
		},

		{
			icon: <Calendar className="w-6 h-6 text-mpk-primary" />,
			title: "Period Tracker Lite",
			type: "content",
			description:
				"Log your cycles easily using lightweight entries via WhatsApp, voice, or text. Stay prepared with friendly reminders sent directly to your preferred channel before your period starts.",
		},
		{
			icon: <BookOpen className="w-6 h-6 text-mpk-primary" />,
			title: "Edutainment Hub",
			type: "content",
			description:
				"Learn about menstrual health through relatable, engaging stories and localized audio dramas. Full written transcripts are always available to ensure learning is accessible to everyone.",
		},
		{
			icon: <Sparkles className="w-6 h-6 text-mpk-primary" />,
			title: "Toolkit Builder",
			type: "content",
			description:
				"Understand exactly what to pack in your first care kit, how to properly look after your products, and how to safely navigate your very first period with confidence.",
		},
		{
			icon: <HeartHandshake className="w-6 h-6 text-mpk-primary" />,
			title: "Emotional Wellbeing",
			type: "content",
			description:
				"Check in with your feelings and receive gentle, practical coping tips for dealing with mood shifts, menstrual cramps, anxiety, or societal stigma.",
		},
		{
			icon: <ShieldAlert className="w-6 h-6 text-mpk-primary" />,
			title: "Safe Referral Pathways",
			type: "content",
			description:
				"Connect safely with vetted support networks, local health points, and protective resources if you face severe distress, stigma, or urgent personal challenges.",
		},
	];
	const cardVariants = {
		initial: {
			scale: 1,
			backgroundColor: "var(--color-card)", // your default card bg
		},
		parentHovered: {
			scale: 1.02, // The parent scales up smoothly
			backgroundColor: "#fef9ff", // The parent background changes
		},
	};

	const iconVariants = {
		initial: {
			scale: 1,
			// backgroundColor: "oklch(from var(--color-mpk-primary) l c h / 0.1)", // matching your bg-mpk-primary/10
			color: "var(--color-mpk-primary)",
		},
		parentHovered: {
			scale: 1.1, // The icon scales up independently when the parent is hovered!
			// backgroundColor: "#ef4444", // The icon background turns red

			color: "#ffffff",
		},
	};
	return (
		<section id="features" className="relative w-full py-20 overflow-hidden ">
			{/* Background Circular Gradient Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,var(--color-mpk-primary)_0%,transparent_70%)] opacity-10 blur-3xl pointer-events-none" />

			<div className="container relative z-10 px-4 mx-auto max-w-6xl">
				{/* Section Header */}
				<div className="text-center max-w-2xl mx-auto mb-16">
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
						Safe, Private, and Supportive Features
					</h2>

					<p className="text-muted-foreground text-lg leading-relaxed">
						My Period Companion provides essential tools designed around user
						privacy, convenience, and complete cultural sensitivity.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							// initial={{ scale: 1 }}
							// whileHover={{
							// 	scale: 1.02,
							// 	backgroundColor: "#fef9ff",
							// }}
							variants={cardVariants}
							initial="initial"
							whileHover="parentHovered"
							key={index}
							className="flex flex-col p-6 rounded-2xl  bg-card border border-border/60 shadow-sm transition-all duration-300 hover:shadow-md hover:border-mpk-primary/30"
						>
							<motion.div
								// whileHover={{
								// 	scale: 1.02,
								// 	backgroundColor: "red",
								// }}
								variants={iconVariants}
								className="p-3 w-fit rounded-xl  mb-5"
							>
								{feature.icon}
							</motion.div>
							<h3 className="text-xl font-semibold text-foreground mb-2">
								{feature.title}
							</h3>
							<p className="text-muted-foreground text-sm leading-relaxed mt-auto">
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>

				{/* Strict Medical Disclaimer Footnote */}
				<div className="mt-16 p-4 rounded-xl bg-muted/40 border border-border text-center max-w-3xl mx-auto">
					<p className="text-xs text-muted-foreground leading-relaxed">
						<span className="font-semibold text-foreground">
							Important Safety Note:
						</span>
						My Period Companion provides trusted menstrual health education and
						supportive guidance. It does not provide medical diagnoses, clinical
						treatments, or emergency response services. Always consult a
						qualified healthcare professional or clinic for medical needs.
					</p>
				</div>
			</div>
		</section>
	);
}
