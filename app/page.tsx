import Features from "@/components/sections/features";
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
			<div className="bg-amber-400/10 mask-t-from-90% mask-t-to-100% mask-b-from-90% mask-b-to-100%">
				<div className="max-w-7xl mx-auto py-20  max-sm:px-1">
					<Features />
				</div>
			</div>
			<div className="h-screen"></div>
		</div>
	);
}
