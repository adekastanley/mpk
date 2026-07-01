import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-white text-slate-800 border-t border-slate-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					{/* Brand & Newsletter */}
					<div className="space-y-8 xl:col-span-1">
						<Link href="/" className="flex items-center gap-2">
							<span className="text-2xl font-bold text-pink-600 font-sans tracking-tight">
								My Period Kit
							</span>
						</Link>
						<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
							Empowering individuals with comprehensive, accessible, and
							high-quality period care. Because your comfort is our priority.
						</p>
						<div className="flex space-x-5">
							{/* Instagram */}
							<a
								href="#"
								className="text-slate-400 hover:text-pink-500 transition-colors"
							>
								<span className="sr-only">Instagram</span>
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									viewBox="0 0 24 24"
								>
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
								</svg>
							</a>
							{/* Twitter / X */}
							<a
								href="#"
								className="text-slate-400 hover:text-pink-500 transition-colors"
							>
								<span className="sr-only">Twitter</span>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
								</svg>
							</a>
							{/* Facebook */}
							<a
								href="#"
								className="text-slate-400 hover:text-pink-500 transition-colors"
							>
								<span className="sr-only">Facebook</span>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"></path>
								</svg>
							</a>
							{/* LinkedIn */}
							<a
								href="#"
								className="text-slate-400 hover:text-pink-500 transition-colors"
							>
								<span className="sr-only">LinkedIn</span>
								<svg
									className="h-5 w-5"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
								</svg>
							</a>
						</div>
					</div>

					{/* Links */}
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
									Product
								</h3>
								<ul role="list" className="mt-4 space-y-3">
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Features
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											How It Works
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Pricing
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Reviews
										</Link>
									</li>
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
									Company
								</h3>
								<ul role="list" className="mt-4 space-y-3">
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											About Us
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Impact
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Partnerships
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Contact
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
									Support
								</h3>
								<ul role="list" className="mt-4 space-y-3">
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Help Center
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											FAQ
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Shipping & Returns
										</Link>
									</li>
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">
									Legal
								</h3>
								<ul role="list" className="mt-4 space-y-3">
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-sm text-slate-500 hover:text-pink-600 transition-colors"
										>
											Terms of Service
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-16 border-t border-slate-200 pt-8 sm:mt-20 lg:mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-slate-400">
						&copy; {new Date().getFullYear()} My Period Kit. All rights
						reserved.
					</p>
					<div className="flex items-center gap-2 text-sm text-slate-400">
						Powered by{" "}
						<span className="text-pink-500">
							<Link href="https://www/t4ef.org">T4EF</Link>
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
