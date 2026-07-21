import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Shop | My Period Kit",
};

export default function Page() {
	return (
		<div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto text-center">
				<h1 className="text-4xl font-light tracking-tight text-slate-900 sm:text-6xl mb-6">
					Shop
				</h1>
				<p className="text-xl text-slate-600 font-light leading-relaxed">
					Coming Soon. Subscribe to our newsletter to be notified when our premium, purpose-driven products launch.
				</p>
			</div>
		</div>
	);
}
