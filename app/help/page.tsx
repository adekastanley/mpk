import { Metadata } from "next";
import HelpHero from "@/components/sections/help-hero";
import HelpEmergency from "@/components/sections/help-emergency";
import HelpResources from "@/components/sections/help-resources";

export const metadata: Metadata = {
	title: "Get Help & Safety | My Period Kit",
	description:
		"Access support resources, helplines, and safe guidance. My Period Kit is here to help you find the right support.",
};

export default function HelpPage() {
	return (
		<div className="bg-white overflow-hidden">
			<HelpHero />
			<HelpEmergency />
			<HelpResources />
		</div>
	);
}
