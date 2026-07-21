import { Metadata } from "next";
import PartnerHero from "@/components/sections/partner-hero";
import PartnerPillars from "@/components/sections/partner-pillars";
import PartnerIntakeForm from "@/components/sections/partner-intake-form";

export const metadata: Metadata = {
	title: "Institutional Partnerships & Investment Readiness | MPK Enterprise",
	description: "Partner with Africa's leading SRHR innovator. Access multi-tiered CSR solutions, institutional funding pipelines, and global impact models.",
	keywords: "SRHR investments, corporate CSR health Africa, global foundation funding, investment-ready social enterprise",
};

export default function PartnerPage() {
	return (
		<div className="bg-white overflow-hidden">
			<PartnerHero />
			<PartnerPillars />
			<PartnerIntakeForm />
		</div>
	);
}
