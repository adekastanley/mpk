import { Metadata } from "next";
import AboutStickyNav from "@/components/sections/about-sticky-nav";
import AboutStory from "@/components/sections/about-story";
import AboutFounder from "@/components/sections/about-founder";
import AboutTeam from "@/components/sections/about-team";
import AboutGovernance from "@/components/sections/about-governance";

export const metadata: Metadata = {
	title: "Our Institutional Architecture & Story | My Period Kit",
	description: "Discover the history, leadership, and rigorous governance structures driving MPK's continental SRHR operations.",
	keywords: "MPK Governance, Menstrual health executive team, SRHR leaders Africa",
};

export default function AboutPage() {
	return (
		<div className="bg-white overflow-hidden">
			{/* Page Header */}
			<div className="bg-slate-50 pt-32 pb-16 sm:pt-40 sm:pb-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl font-light tracking-tight text-slate-900 sm:text-7xl lg:text-8xl mb-6">
						Our Institutional Architecture.
					</h1>
					<p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-slate-600 sm:text-xl">
						My Period Kit is an African social enterprise transforming Sexual and Reproductive Health and Rights through innovative products, responsible AI, and strategic partnerships.
					</p>
				</div>
			</div>

			<AboutStickyNav />
			<AboutStory />
			<AboutFounder />
			<AboutTeam />
			<AboutGovernance />
		</div>
	);
}
