import { Metadata } from "next";
import ContactHero from "@/components/sections/contact-hero";
import ContactFormSection from "@/components/sections/contact-form-section";
import ContactDetails from "@/components/sections/contact-details";

export const metadata: Metadata = {
	title: "Contact Us | My Period Kit",
	description:
		"Get in touch with the My Period Kit team for general enquiries, media, partnerships, and support.",
};

export default function ContactPage() {
	return (
		<div className="bg-white overflow-hidden">
			<ContactHero />
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
					<ContactDetails />
					<ContactFormSection />
				</div>
			</div>
		</div>
	);
}
