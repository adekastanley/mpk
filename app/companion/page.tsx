import { Metadata } from "next";
import CompanionHero from "@/components/sections/companion-hero";
import CompanionFeatureMatrix from "@/components/sections/companion-feature-matrix";
import CompanionEthicalBanner from "@/components/sections/companion-ethical-banner";
import CompanionFAQ from "@/components/sections/companion-faq";

export const metadata: Metadata = {
	title: "My Period Companion | Private Ethical AI for SRHR Insights",
	description: "Access secure, private, and localized AI-guided reproductive guidance. Learn about our strict data privacy policies and regional deployment pilots.",
	keywords: "SRHR chatbot, anonymous period tracking, health AI Africa, private medical diagnostics",
};

export default function CompanionPage() {
	return (
		<div className="bg-white overflow-hidden">
			<CompanionHero />
			<CompanionFeatureMatrix />
			<CompanionEthicalBanner />
			<CompanionFAQ />
		</div>
	);
}
