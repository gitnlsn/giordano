import Link from "next/link";
import Image from "next/image";
import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "~/components/ui/dialog";
import GoogleFormEmbed from '~/components/GoogleFormEmbed';

export default function Home() {
	const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScMNIoFabQgdCVQCK2igKPZCDLj4HadCboLQldHSa8U4asSWQ/viewform?embedded=true";

	return (
		<div className="min-h-screen bg-stone-50">
			{/* Header */}
			<header className="bg-stone-50 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold text-slate-800">Secfi</h1>
						</div>
						<nav className="hidden md:flex space-x-8">
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									For Employees
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									For Executives
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									For Investors
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									Tools
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									Resources
								</button>
							</div>
						</nav>
						<div className="flex items-center space-x-4">
							<Link href="#" className="text-slate-600 hover:text-slate-800 text-sm font-medium">
								Log in
							</Link>
						
						</div>
					</div>
				</div>
			</header>

			{/* Floating Modal Button */}
			<Dialog>
				<DialogTrigger asChild>
					<div className="fixed bottom-8 right-8 z-20">
						<button
							className="bg-slate-700 hover:bg-slate-800 text-white font-bold py-3 px-5 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:ring-opacity-50"
						>
							Solicite seu Orçamento
						</button>
					</div>
				</DialogTrigger>
				<DialogContent className="p-0 sm:max-w-[800px]" removeCloseButton>
					<GoogleFormEmbed formSrc={googleFormUrl} />
				</DialogContent>
			</Dialog>

			{/* Hero Section */}
			<section className="bg-stone-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8">
						Things are just different when{" "}
						<span className="italic">you have equity</span>
					</h1>
					<p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
						Secfi delivers liquidity and wealth management services to help employees and shareholders of innovative companies achieve their financial goals.
					</p>
				</div>
			</section>

			{/* Solutions Section */}
			<section className="bg-stone-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							You need solutions built for <span className="italic">your</span> unique needs
						</h2>
					</div>
					
					{/* Secfi Liquidity Section */}
					<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
						<div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 rounded-2xl h-[700px] flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-slate-800 mb-2">Secfi Liquidity</h3>
							<p className="text-lg text-slate-600 mb-6">Liquidity for your pre-IPO shares and options</p>
							<p className="text-slate-700 mb-6">
								Ready to turn your equity into cash? Our flexible liquidity products help you unlock the value of your pre-IPO shares while looking to optimizing for taxes and long-term gains, so you get to keep more of your hard-earned money.
							</p>
							<Link href="#" className="text-slate-700 font-medium hover:text-slate-800">
								Learn more →
							</Link>
							<div className="mt-6 space-y-2">
								<div className="text-sm text-slate-600">• Secondary Sale</div>
								<div className="text-sm text-slate-600">• Non-recourse Financing</div>
							</div>
						</div>
						
						<div className="flex justify-center">
							<div className="bg-white rounded-2xl shadow-lg border border-stone-200 h-[700px] w-full flex items-center justify-center overflow-hidden">
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
							<div className="bg-white rounded-2xl shadow-lg border border-stone-200 h-[700px] w-full flex items-center justify-center overflow-hidden">
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
						
						<div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 rounded-2xl lg:order-2 h-[700px] flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-slate-800 mb-2">Secfi Wealth</h3>
							<p className="text-lg text-slate-600 mb-6">Financial planning and investment management</p>
							<p className="text-slate-700 mb-6">
								Get personalized financial planning and guidance from experienced advisors. Whether you work at a private startup or a public company, our tailored strategies can help you grow and protect your wealth with confidence.
							</p>
							<Link href="#" className="text-slate-700 font-medium hover:text-slate-800">
								Learn more →
							</Link>
							<div className="mt-6">
								<p className="text-sm font-medium text-slate-800 mb-2">Your financial peace of mind is our priority</p>
								<div className="space-y-1 text-sm text-slate-600">
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
			<section className="bg-stone-100 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl font-bold text-slate-800 mb-4">
						Leave the calculations to us
					</h2>
					<p className="text-xl text-slate-600 mb-12">
						Equity and tax planning can be overwhelming. Our tools do the heavy lifting so you can focus on what matters.
					</p>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
							<h3 className="font-semibold text-slate-800 mb-2">AMT Calculator</h3>
							<p className="text-slate-600 text-sm">Exercise incentive stock options without paying the alternative minimum tax.</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
							<h3 className="font-semibold text-slate-800 mb-2">Equity Planner</h3>
							<p className="text-slate-600 text-sm">Exercise now or at IPO? Sell on the secondary market or hold? Understand your options in less than 5 minutes.</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
							<h3 className="font-semibold text-slate-800 mb-2">Stock Options Tax Calculator</h3>
							<p className="text-slate-600 text-sm">Calculate the costs to exercise your stock options - including taxes.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Partnership Section */}
			<section className="bg-stone-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-8">
							Choose a partner that <span className="italic">gets you</span>
						</h2>
					</div>
					
					<div className="grid md:grid-cols-3 gap-12">
						<div className="text-center">
							<h3 className="text-xl font-bold text-slate-800 mb-4">We've been in your shoes before</h3>
							<p className="text-slate-600">
								Secfi was built with tech professionals in mind. Whether navigating stock options or maximizing equity, we help guide you through every step of your financial journey.
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-xl font-bold text-slate-800 mb-4">We meet you where you're at</h3>
							<p className="text-slate-600">
								Whether you're at a private startup or a public company, we provide personalized strategies that fit your unique needs.
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-xl font-bold text-slate-800 mb-4">Big opportunities, no big minimums</h3>
							<p className="text-slate-600">
								We believe you don't need millions to benefit from smart financial planning. We strive to take a holistic approach to your finances, considering stock options and other assets to help you save time, cut costs, and grow your wealth.
							</p>
						</div>
					</div>
				</div>
			</section>


			{/* Newsletter Section */}
			<section className="bg-gradient-to-r from-slate-700 to-slate-800 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl font-bold text-white mb-4">
								Transforme a gestão do seu <span className="italic">condomínio</span> hoje mesmo
							</h2>
							<div className="space-y-4">
								<div>
									<h3 className="text-xl font-semibold text-white mb-2">Giordano Administração</h3>
									<p className="text-stone-200 mb-4">Soluções completas em gestão condominial</p>
									<ul className="space-y-2 text-stone-200 text-sm">
										<li>• Administração profissional e transparente</li>
										<li>• Tecnologia de ponta para gestão eficiente</li>
										<li>• Assessoria jurídica especializada</li>
										<li>• Atendimento personalizado aos condôminos</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="bg-white p-8 rounded-2xl">
							<h3 className="text-2xl font-bold text-slate-800 mb-2">Solicite seu Orçamento</h3>
							<p className="text-slate-600 mb-6">Entre em contato para uma proposta personalizada</p>
							<p className="text-slate-700 mb-6">
								Descubra como nossa experiência e tecnologia podem otimizar a administração do seu condomínio com total transparência e eficiência.
							</p>
							<Dialog>
								<DialogTrigger asChild>
									<button className="bg-slate-700 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 w-full">
										Solicitar Orçamento Gratuito
									</button>
								</DialogTrigger>
								<DialogContent className="p-0 sm:max-w-[800px]" removeCloseButton>
									<GoogleFormEmbed formSrc={googleFormUrl} />
								</DialogContent>
							</Dialog>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-800 text-white py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-lg font-semibold mb-4">For Employees</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">Liquidity Solutions</Link></li>
								<li><Link href="#" className="hover:text-white">Secondary Sale</Link></li>
								<li><Link href="#" className="hover:text-white">Non-Recourse Financing</Link></li>
								<li><Link href="#" className="hover:text-white">Financial Advice</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">For Executives</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">Full-Service Liquidity</Link></li>
								<li><Link href="#" className="hover:text-white">Wealth Management</Link></li>
								<li><Link href="#" className="hover:text-white">Employee Benefits</Link></li>
								<li><Link href="#" className="hover:text-white">Equity Education</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Tools</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">AMT Calculator</Link></li>
								<li><Link href="#" className="hover:text-white">Equity Planner</Link></li>
								<li><Link href="#" className="hover:text-white">Tax Calculator</Link></li>
								<li><Link href="#" className="hover:text-white">Exit Calculator</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Resources</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">Secfi Learn</Link></li>
								<li><Link href="#" className="hover:text-white">Case Studies</Link></li>
								<li><Link href="#" className="hover:text-white">Newsletter</Link></li>
								<li><Link href="#" className="hover:text-white">About Secfi</Link></li>
							</ul>
						</div>
					</div>
					<div className="border-t border-slate-700 mt-8 pt-8 text-center text-stone-400">
						<p>&copy; 2024 Secfi. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
