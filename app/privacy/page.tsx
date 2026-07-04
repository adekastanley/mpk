import { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
	title: "Privacy Policy & Safety | My Period Kit",
	description:
		"Our commitment to your privacy, data security, and safeguarding. My Period Kit is built with a privacy-first approach.",
};

export default function PrivacyPage() {
	return (
		<div className="bg-slate-50 min-h-screen py-32">
			<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				
				{/* Header Section */}
				<div className="mb-16">
					<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
						<ShieldCheck className="h-8 w-8" aria-hidden="true" />
					</div>
					<h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-5xl mb-6">
						Privacy Policy & Safeguarding
					</h1>
					<p className="text-lg leading-relaxed text-slate-600">
						At My Period Kit, your privacy and safety are our highest priorities. Because our ecosystem serves adolescents and discusses sensitive topics like menstruation, SRHR, and emotional well-being, we have built our platform on strict data minimization and safeguarding principles.
					</p>
				</div>

				{/* Content Sections */}
				<div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-12 space-y-12">
					
					<section>
						<h2 className="text-2xl font-medium text-slate-900 mb-4">
							1. Safety and Medical Disclaimer
						</h2>
						<p className="text-slate-600 leading-relaxed mb-4">
							<strong>My Period Companion provides education and referral guidance but is not a replacement for emergency care or clinical consultation.</strong>
						</p>
						<p className="text-slate-600 leading-relaxed">
							Our platform is designed to offer friendly, stigma-free support. However, if you are experiencing severe pain, heavy bleeding, or a medical or safety emergency, please contact a local clinic or emergency service immediately. We maintain clear referral boundaries and provide safe guidance for urgent needs by routing users to approved local helplines and trusted professional partners.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-medium text-slate-900 mb-4">
							2. Information We Collect
						</h2>
						<p className="text-slate-600 leading-relaxed mb-4">
							We practice strict <strong>data minimization</strong>. This means we only collect the absolute minimum information required to provide you with support:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed">
							<li><strong>Website Usage:</strong> We collect basic, anonymous analytics (like page views and clicks on the "Start on WhatsApp" button) to understand how our site is used. We do not track you across the internet.</li>
							<li><strong>Forms & Enquiries:</strong> If you submit a partner, contact, or toolkit request form, we collect the name, organization, email, and message you provide. This requires your explicit consent via a checkbox.</li>
							<li><strong>Companion Usage:</strong> The public website does not collect sensitive adolescent health data or menstrual cycle histories. When you transition to our companion tools (like WhatsApp or IVR), data handling is governed by strict, age-appropriate consent protocols specific to those channels.</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-medium text-slate-900 mb-4">
							3. How We Use Your Information
						</h2>
						<p className="text-slate-600 leading-relaxed mb-4">
							Any information we do collect is used solely to:
						</p>
						<ul className="list-disc pl-5 space-y-2 text-slate-600 leading-relaxed">
							<li>Respond to your partnership, media, or support enquiries.</li>
							<li>Facilitate the distribution of the First Period Toolkit to schools and communities.</li>
							<li>Improve the accessibility and functionality of our digital platforms.</li>
						</ul>
						<p className="text-slate-600 leading-relaxed mt-4">
							<strong>We will never sell your personal data.</strong> We do not share personal information with third parties for marketing purposes.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-medium text-slate-900 mb-4">
							4. Data Security and Protection
						</h2>
						<p className="text-slate-600 leading-relaxed">
							We use industry-standard security measures, including secure hosting (HTTPS) and encrypted databases for form submissions. Access to enquiries and analytics is strictly limited to authorized My Period Kit team members who have undergone safeguarding training.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-medium text-slate-900 mb-4">
							5. Adolescent and Child Privacy
						</h2>
						<p className="text-slate-600 leading-relaxed">
							Our services are designed with young people in mind. Content is reviewed by health and safeguarding experts to ensure it is age-appropriate and culturally sensitive. We do not require account creation or sensitive disclosures to access our core educational articles on this website. 
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-medium text-slate-900 mb-4">
							6. Contact Us
						</h2>
						<p className="text-slate-600 leading-relaxed">
							If you have questions about this Privacy Policy, your data, or our safeguarding practices, please contact us at:
						</p>
						<p className="text-pink-600 font-medium mt-2">
							<a href="mailto:hello@myperiodkit.org" className="hover:underline">hello@myperiodkit.org</a>
						</p>
					</section>

					<div className="mt-8 pt-8 border-t border-slate-100 text-sm text-slate-400">
						Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
					</div>
				</div>
			</div>
		</div>
	);
}
