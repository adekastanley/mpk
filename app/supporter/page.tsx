import { Metadata } from "next";
import SupporterHero from "@/components/sections/supporter-hero";
import SupporterImpact from "@/components/sections/supporter-impact";
import SupporterTiers from "@/components/sections/supporter-tiers";
import SupporterFAQ from "@/components/sections/supporter-faq";

export const metadata: Metadata = {
	title: "Become a Supporter | My Period Kit",
	description:
		"Join our mission to provide private, safe, and inclusive period care. Find ways to donate, partner, or volunteer.",
};

export default function SupporterPage() {
	return (
		<div className="bg-white overflow-hidden">
			<SupporterHero />
			<SupporterImpact />
			<SupporterTiers />
			<SupporterFAQ />
		</div>
	);
}
