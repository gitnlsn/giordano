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
							<h1 className="text-2xl font-bold text-slate-800">Giordano Administração</h1>
						</div>
						<nav className="hidden md:flex space-x-8">
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									Para Condôminos
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									Para Síndicos
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									Para Construtoras
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									Serviços
								</button>
							</div>
							<div className="relative group">
								<button className="text-slate-600 hover:text-slate-800 px-3 py-2 text-sm font-medium">
									Recursos
								</button>
							</div>
						</nav>
						<div className="flex items-center space-x-4">
							<Link href="#" className="text-slate-600 hover:text-slate-800 text-sm font-medium">
								Portal do Condômino
							</Link>
						
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-stone-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-8">
						A gestão do seu condomínio{" "}
						<span className="italic">nunca foi tão eficiente</span>
					</h1>
					<p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
						A Giordano oferece soluções completas em administração predial e gestão condominial para garantir tranquilidade, transparência e valorização do seu patrimônio.
					</p>
				</div>
			</section>

			{/* Solutions Section */}
			<section className="bg-stone-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-4">
							Soluções pensadas para <span className="italic">suas</span> necessidades específicas
						</h2>
					</div>
					
					{/* Administração Predial Section */}
					<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
						<div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 rounded-2xl h-[700px] flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-slate-800 mb-2">Administração Predial</h3>
							<p className="text-lg text-slate-600 mb-6">Gestão completa e profissional do seu condomínio</p>
							<p className="text-slate-700 mb-6">
								Nossa equipe especializada cuida de todos os aspectos administrativos do seu condomínio. Desde a gestão financeira até a manutenção predial, oferecemos um serviço completo que garante eficiência, transparência e valorização do seu patrimônio.
							</p>
							<Link href="#" className="text-slate-700 font-medium hover:text-slate-800">
								Saiba mais →
							</Link>
							<div className="mt-6 space-y-2">
								<div className="text-sm text-slate-600">• Gestão Financeira e Contábil</div>
								<div className="text-sm text-slate-600">• Administração de Pessoal</div>
								<div className="text-sm text-slate-600">• Manutenção Preventiva e Corretiva</div>
							</div>
						</div>
						
						<div className="flex justify-center">
							<div className="bg-white rounded-2xl shadow-lg border border-stone-200 h-[700px] w-full flex items-center justify-center overflow-hidden">
								<Image
									src="assets/gifs/landing-page-image-1.gif"
									alt="Administração Predial"
									width={1}
									height={1}
									className="rounded-xl object-cover w-full h-full"
									unoptimized
								/>
							</div>
						</div>
					</div>

					{/* Consultoria Especializada Section */}
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="flex justify-center lg:order-1">
							<div className="bg-white rounded-2xl shadow-lg border border-stone-200 h-[700px] w-full flex items-center justify-center overflow-hidden">
								<Image
									src="assets/gifs/landing-page-image-2.gif"
									alt="Consultoria Especializada"
									width={1}
									height={1}
									className="rounded-xl object-cover w-full h-full"
									unoptimized
								/>
							</div>
						</div>
						
						<div className="bg-gradient-to-br from-stone-100 to-stone-200 p-8 rounded-2xl lg:order-2 h-[700px] flex flex-col justify-center">
							<h3 className="text-2xl font-bold text-slate-800 mb-2">Consultoria Especializada</h3>
							<p className="text-lg text-slate-600 mb-6">Assessoria jurídica e técnica especializada</p>
							<p className="text-slate-700 mb-6">
								Conte com nossa equipe de especialistas para orientação em questões jurídicas, técnicas e administrativas. Oferecemos suporte completo para tomada de decisões estratégicas que garantem o melhor para seu condomínio.
							</p>
							<Link href="#" className="text-slate-700 font-medium hover:text-slate-800">
								Saiba mais →
							</Link>
							<div className="mt-6">
								<p className="text-sm font-medium text-slate-800 mb-2">Sua tranquilidade é nossa prioridade</p>
								<div className="space-y-1 text-sm text-slate-600">
									<div>• Assessoria jurídica especializada em direito condominial</div>
									<div>• Consultoria técnica em engenharia e arquitetura</div>
									<div>• Suporte na elaboração de regulamentos internos</div>
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
						Tecnologia a serviço da gestão
					</h2>
					<p className="text-xl text-slate-600 mb-12">
						Utilizamos as mais modernas ferramentas tecnológicas para otimizar a gestão do seu condomínio e facilitar o dia a dia dos condôminos.
					</p>
					
					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
							<h3 className="font-semibold text-slate-800 mb-2">Portal do Condômino</h3>
							<p className="text-slate-600 text-sm">Acesse boletos, extratos, comunicados e documentos importantes de forma rápida e segura.</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
							<h3 className="font-semibold text-slate-800 mb-2">Gestão de Ocorrências</h3>
							<p className="text-slate-600 text-sm">Sistema integrado para abertura, acompanhamento e resolução de solicitações de manutenção.</p>
						</div>
						<div className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
							<h3 className="font-semibold text-slate-800 mb-2">Relatórios Financeiros</h3>
							<p className="text-slate-600 text-sm">Acompanhe a situação financeira do condomínio com relatórios detalhados e transparentes.</p>
						</div>
					</div>
				</div>
			</section>

			{/* Partnership Section */}
			<section className="bg-stone-50 py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-slate-800 mb-8">
							Escolha quem <span className="italic">entende</span> do seu condomínio
						</h2>
					</div>
					
					<div className="grid md:grid-cols-3 gap-12">
						<div className="text-center">
							<h3 className="text-xl font-bold text-slate-800 mb-4">Experiência comprovada</h3>
							<p className="text-slate-600">
								Com anos de experiência no mercado, a Giordano é especialista em administração predial e conhece os desafios únicos de cada tipo de condomínio.
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-xl font-bold text-slate-800 mb-4">Atendimento personalizado</h3>
							<p className="text-slate-600">
								Cada condomínio é único, por isso oferecemos soluções personalizadas que atendem às necessidades específicas do seu empreendimento.
							</p>
						</div>
						<div className="text-center">
							<h3 className="text-xl font-bold text-slate-800 mb-4">Transparência total</h3>
							<p className="text-slate-600">
								Acreditamos que a transparência é fundamental. Por isso, disponibilizamos todas as informações financeiras e administrativas de forma clara e acessível.
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
							<h3 className="text-lg font-semibold mb-4">Para Condôminos</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">Portal do Condômino</Link></li>
								<li><Link href="#" className="hover:text-white">Segunda Via de Boletos</Link></li>
								<li><Link href="#" className="hover:text-white">Solicitação de Serviços</Link></li>
								<li><Link href="#" className="hover:text-white">Comunicados</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Para Síndicos</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">Gestão Administrativa</Link></li>
								<li><Link href="#" className="hover:text-white">Relatórios Financeiros</Link></li>
								<li><Link href="#" className="hover:text-white">Assessoria Jurídica</Link></li>
								<li><Link href="#" className="hover:text-white">Treinamentos</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Serviços</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">Administração Predial</Link></li>
								<li><Link href="#" className="hover:text-white">Consultoria Especializada</Link></li>
								<li><Link href="#" className="hover:text-white">Gestão de Facilities</Link></li>
								<li><Link href="#" className="hover:text-white">Auditoria Condominial</Link></li>
							</ul>
						</div>
						<div>
							<h3 className="text-lg font-semibold mb-4">Recursos</h3>
							<ul className="space-y-2 text-stone-300">
								<li><Link href="#" className="hover:text-white">Central de Ajuda</Link></li>
								<li><Link href="#" className="hover:text-white">Cases de Sucesso</Link></li>
								<li><Link href="#" className="hover:text-white">Newsletter</Link></li>
								<li><Link href="#" className="hover:text-white">Sobre a Giordano</Link></li>
							</ul>
						</div>
					</div>
					<div className="border-t border-slate-700 mt-8 pt-8 text-center text-stone-400">
						<p>&copy; 2024 Giordano Administração. Todos os direitos reservados.</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
