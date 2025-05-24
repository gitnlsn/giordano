import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold text-gray-900">Secfi</h1>
						</div>
						<nav className="hidden md:flex space-x-8">
							<div className="relative group">
								<button className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
									For Employees
								</button>
							</div>
							<div className="relative group">
								<button className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
									For Executives
								</button>
							</div>
							<div className="relative group">
								<button className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
									For Investors
								</button>
							</div>
							<div className="relative group">
								<button className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
									Tools
								</button>
							</div>
							<div className="relative group">
								<button className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
									Resources
								</button>
							</div>
						</nav>
						<div className="flex items-center space-x-4">
							<Link href="#" className="text-gray-500 hover:text-gray-900 text-sm font-medium">
								Log in
							</Link>
							<Link 
								href="#" 
								className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
							>
								Get started
							</Link>
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
						Things are just different when{" "}
						<span className="italic">you have equity</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
						Secfi delivers liquidity and wealth management services to help employees and shareholders of innovative companies achieve their financial goals.
					</p>
					<Link 
						href="#" 
						className="bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 inline-block"
					>
						Get started
					</Link>
				</div>
			</section>

			{/* Solutions Section */}
			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							You need solutions built for <span className="italic">your</span> unique needs
						</h2>
					</div>
					
					{/* Secfi Liquidity Section */}
					<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
						<div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl h-[700px] flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Secfi Liquidity</h3>
							<p className="text-lg text-gray-600 mb-6">Liquidity for your pre-IPO shares and options</p>
							<p className="text-gray-700 mb-6">
								Ready to turn your equity into cash? Our flexible liquidity products help you unlock the value of your pre-IPO shares while looking to optimizing for taxes and long-term gains, so you get to keep more of your hard-earned money.
							</p>
							<Link href="#" className="text-blue-600 font-medium hover:text-blue-700">
								Learn more →
							</Link>
							<div className="mt-6 space-y-2">
								<div className="text-sm text-gray-600">• Secondary Sale</div>
								<div className="text-sm text-gray-600">• Non-recourse Financing</div>
							</div>
						</div>
						
						<div className="flex justify-center">
							<div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-[700px] w-full flex items-center justify-center overflow-hidden">
								<Image
									src="assets/gifs/landing-page-image-1.gif"
									alt="Secfi Liquidity Animation"
									width={1}
									height={1}
									className="rounded-xl object-cover w-full h-full"
									unoptimized
								/>
							</div>
						</div>
					</div>

					{/* Secfi Wealth Section */}
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="flex justify-center lg:order-1">
							<div className="bg-white rounded-2xl shadow-lg border border-gray-100 h-[700px] w-full flex items-center justify-center overflow-hidden">
								<Image
									src="assets/gifs/landing-page-image-2.gif"
									alt="Secfi Wealth Animation"
									width={1}
									height={1}
									className="rounded-xl object-cover w-full h-full"
									unoptimized
								/>
							</div>
						</div>
						
						<div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl lg:order-2 h-[700px] flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Secfi Wealth</h3>
							<p className="text-lg text-gray-600 mb-6">Financial planning and investment management</p>
							<p className="text-gray-700 mb-6">
								Get personalized financial planning and guidance from experienced advisors. Whether you work at a private startup or a public company, our tailored strategies can help you grow and protect your wealth with confidence.
							</p>
							<Link href="#" className="text-blue-600 font-medium hover:text-blue-700">
								Learn more →
							</Link>
							<div className="mt-6">
								<p className="text-sm font-medium text-gray-900 mb-2">Your financial peace of mind is our priority</p>
								<div className="space-y-1 text-sm text-gray-600">
									<div>• A financial plan aligned with your needs and values</div>
									<div>• A flexible, iterative approach</div>
									<div>• A portfolio built just for you</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Tools Section */}
			<section className="bg-gray-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Leave the calculations to us
					</h2>
					<p className="text-xl text-gray-600 mb-12">
						Equity and tax planning can be overwhelming. Our tools do the heavy lifting so you can focus on what matters.
					</p>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<h3 className="font-semibold text-gray-900 mb-2">AMT Calculator</h3>
							<p className="text-gray-600 text-sm">Exercise incentive stock options without paying the alternative minimum tax.</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<h3 className="font-semibold text-gray-900 mb-2">Equity Planner</h3>
							<p className="text-gray-600 text-sm">Exercise now or at IPO? Sell on the secondary market or hold? Understand your options in less than 5 minutes.</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm">
							<h3 className="font-semibold text-gray-900 mb-2">Stock Options Tax Calculator</h3>
							<p className="text-gray-600 text-sm">Calculate the costs to exercise your stock options - including taxes.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Partnership Section */}
			<section className="bg-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-8">
							Choose a partner that <span className="italic">gets you</span>
						</h2>
					</div>
					
					<div className="grid md:grid-cols-3 gap-12">
						<div className="text-center">
							<h3 className="text-xl font-bold text-gray-900 mb-4">We've been in your shoes before</h3>
							<p className="text-gray-600">
								Secfi was built with tech professionals in mind. Whether navigating stock options or maximizing equity, we help guide you through every step of your financial journey.
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-xl font-bold text-gray-900 mb-4">We meet you where you're at</h3>
							<p className="text-gray-600">
								Whether you're at a private startup or a public company, we provide personalized strategies that fit your unique needs.
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-xl font-bold text-gray-900 mb-4">Big opportunities, no big minimums</h3>
							<p className="text-gray-600">
								We believe you don't need millions to benefit from smart financial planning. We strive to take a holistic approach to your finances, considering stock options and other assets to help you save time, cut costs, and grow your wealth.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-white mb-4">
								We love this stuff <span className="italic">so much</span> we write about it every month
							</h2>
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-semibold text-white mb-2">Secfi Learn</h3>
									<p className="text-blue-100 mb-4">Our collection of educational content</p>
									<ul className="space-y-2 text-blue-100 text-sm">
										<li>• What is the alternative minimum tax (AMT)?</li>
										<li>• What is the 83(b) election – and when should you file it?</li>
										<li>• Should You Exercise Your Vested Stock Options After Leaving Your Company?</li>
										<li>• When should you hire a financial advisor?</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="bg-white p-8 rounded-2xl">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">Founders & Funders</h3>
							<p className="text-gray-600 mb-6">Subscribe to our newsletter</p>
							<p className="text-gray-700 mb-6">
								Join 30k+ people getting insights on what's happening in startups, venture capital, public markets, and more.
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<input 
									type="email" 
									placeholder="Enter your email" 
									className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								<button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
									Subscribe
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-4">For Employees</h3>
							<ul className="space-y-2 text-gray-300">
								<li><Link href="#" className="hover:text-white">Liquidity Solutions</Link></li>
								<li><Link href="#" className="hover:text-white">Secondary Sale</Link></li>
								<li><Link href="#" className="hover:text-white">Non-Recourse Financing</Link></li>
								<li><Link href="#" className="hover:text-white">Financial Advice</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">For Executives</h3>
							<ul className="space-y-2 text-gray-300">
								<li><Link href="#" className="hover:text-white">Full-Service Liquidity</Link></li>
								<li><Link href="#" className="hover:text-white">Wealth Management</Link></li>
								<li><Link href="#" className="hover:text-white">Employee Benefits</Link></li>
								<li><Link href="#" className="hover:text-white">Equity Education</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Tools</h3>
							<ul className="space-y-2 text-gray-300">
								<li><Link href="#" className="hover:text-white">AMT Calculator</Link></li>
								<li><Link href="#" className="hover:text-white">Equity Planner</Link></li>
								<li><Link href="#" className="hover:text-white">Tax Calculator</Link></li>
								<li><Link href="#" className="hover:text-white">Exit Calculator</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Resources</h3>
							<ul className="space-y-2 text-gray-300">
								<li><Link href="#" className="hover:text-white">Secfi Learn</Link></li>
								<li><Link href="#" className="hover:text-white">Case Studies</Link></li>
								<li><Link href="#" className="hover:text-white">Newsletter</Link></li>
								<li><Link href="#" className="hover:text-white">About Secfi</Link></li>
							</ul>
						</div>
					</div>
					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>&copy; 2024 Secfi. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
