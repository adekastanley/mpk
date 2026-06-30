import Features from "@/components/sections/features";
import PartnershipImpact from "@/components/sections/partnership-impact";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/howItWorks";
import Problem from "@/components/sections/problem";

export default function Home() {
	return (
		<div className=" max-sm:px-1">
			<Hero />
			<div className="max-w-7xl mx-auto  max-sm:px-1">
				<Problem />
				<HowItWorks />
			</div>
			{/* Features needs full viewport width for horizontal scroll — no constraining wrapper */}
		<Features />
		<PartnershipImpact />
			<div className="h-screen"></div>
		</div>
	);
}
