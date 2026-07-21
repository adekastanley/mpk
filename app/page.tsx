import Hero from "@/components/sections/hero";
import EnterprisePillars from "@/components/sections/enterprise-pillars";
import ImpactDataStrip from "@/components/sections/impact-data-strip";
import CompanionPreview from "@/components/sections/companion-preview";
import RetailCarousels from "@/components/sections/retail-carousels";

export default function Home() {
	return (
		<div className="bg-white">
			<Hero />
			<EnterprisePillars />
			<ImpactDataStrip />
			<CompanionPreview />
			<RetailCarousels />
		</div>
	);
}
