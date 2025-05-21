import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "~/components/ui/dialog";
import GoogleFormEmbed from '../components/GoogleFormEmbed';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
	const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScMNIoFabQgdCVQCK2igKPZCDLj4HadCboLQldHSa8U4asSWQ/viewform?embedded=true";

	return (
		<>
			<Header />
			<main>
				<section id="hero" className="relative h-screen w-full overflow-hidden">
					<Image
						src="/assets/condominium-external.jpg"
						alt="Condomínio Vista Externa"
						layout="fill"
						objectFit="cover"
						priority
						className="blur-sm"
					/>
					<div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
					<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
						<h1 className="font-extrabold text-4xl tracking-tight sm:text-[4rem] mb-6">
							Giordano Administração
						</h1>
						<p className="text-xl text-gray-300 mb-8">
							Gerenciamento completo, digital e eficiente para a paz dos síndicos e condôminos.
						</p>
					</div>
				</section>

				{/* Botão para abrir o modal Adicionado Abaixo */}
				<Dialog>
					<DialogTrigger asChild>
						<div className="fixed bottom-8 right-8 z-20">
							<button
								className="bg-[hsl(210,100%,70%)] hover:bg-[hsl(210,100%,60%)] text-white font-bold py-3 px-5 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[hsl(210,100%,70%)] focus:ring-opacity-50"
							>
								Solicite seu Orçamento
							</button>
						</div>
					</DialogTrigger>
					<DialogContent className="p-0 sm:max-w-[800px]" removeCloseButton>
						<GoogleFormEmbed formSrc={googleFormUrl} />
					</DialogContent>
				</Dialog>

				<HydrateClient>

					{/* "Sobre" Section */}
					<section id="sobre" className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0A1931] to-[#0A2342] text-white py-16">
						<div className="container flex flex-col items-center justify-center gap-12 px-4 text-center">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-10">
								Sobre
							</h2>
							<div className="w-full max-w-3xl text-base text-gray-300 space-y-6">
								<p>
									A DECISÃO Administração de Condomínios surgiu da união de profissionais oriundos de empresas nacionais e multinacionais de Auditoria, Consultoria e Vendas, aonde, ao longo de 12 anos com seriedade e profissionalismo, desenvolveram competências essenciais para atuar em diversos segmentos. Atuamos com soluções nas áreas de Auditoria, Consultoria, Capital Humano e Administração de Pessoal, levando para sua empresa as melhores práticas de mercado, considerando as necessidades específicas.
								</p>
								<p>
									Fundada em 2014, a DECISÃO tem se fortalecido e se preparando para buscar novos clientes e atender de maneira significativa o mercado de atuação. Acreditamos que o reconhecimento obtido é recompensa do que foi plantado no começo de tudo.
								</p>
								<p>
									Somos uma empresa prestadora de serviços na área de Consultoria "Econômica-Financeira" e "Administrativa" para empresas e condomínios, com o foco voltado para construtoras de "Empreendimentos Imobiliários" da Engenharia Civil e Gestão na Administração de Condomínios, atuando em obras residenciais, comerciais e industriais.
								</p>
								<p>
									Temos como missão viabilizar os negócios de cada empresa, administrando e gerenciando com qualidade e desempenhando as suas habilidades para direcionar cada parceiro para a obtenção dos resultados almejados, com o menor custo, gerando o melhor ganho e satisfação. A DECISÃO tem como objetivo trabalhar focada na satisfação de todos, pois o conceito, confiança e fidelidade que é adquirido junto aos clientes é o maior objetivo.
								</p>
							</div>
						</div>
					</section>

					<section id="services" className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0A2342] to-[#0A1931] text-white py-16">
						<div className="container flex flex-col items-center justify-center gap-12 px-4">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
								Serviços
							</h2>

							<div className="text-base text-gray-300 space-y-6 text-center">
								<p>
									Nossa empresa oferece os melhores serviços para cuidar do seu condomínio, seja ele comercial ou residencial, de forma discreta e eficaz. Nossa empresa conta parceiros qualificados e técnicos, sempre acompanhando as tendências de mercado com novas tecnologias e trazendo conforto e agilidade aos nossos clientes. Solicite um orçamento ou agende uma visita.
								</p>
								<p>
									Temos uma proposta nova e moderna de relacionamento com o cliente que garante velocidade de resposta, atenção, disponibilidade e conforto. Entregamos aos clientes satisfação e economia.
								</p>
								<p>
									Cuide do seu patrimônio sem perder tempo, valorize seu imóvel. Juntos, atingimos a meta!
								</p>
							</div>

							<div className="w-full max-w-2xl">
								<ul className="space-y-6 text-lg text-gray-200">
									<li className="flex items-center p-4 bg-white/10 rounded-lg shadow-md">
										<span className="mr-3 text-xl text-[hsl(210,100%,70%)]">✓</span>Assessoria Administrativa
									</li>
									<li className="flex items-center p-4 bg-white/10 rounded-lg shadow-md">
										<span className="mr-3 text-xl text-[hsl(210,100%,70%)]">✓</span>Contabilidade
									</li>
									<li className="flex items-center p-4 bg-white/10 rounded-lg shadow-md">
										<span className="mr-3 text-xl text-[hsl(210,100%,70%)]">✓</span>Planejamento Estratégico e Organização
									</li>
									<li className="flex items-center p-4 bg-white/10 rounded-lg shadow-md">
										<span className="mr-3 text-xl text-[hsl(210,100%,70%)]">✓</span>Sustentabilidade
									</li>
									<li className="flex items-center p-4 bg-white/10 rounded-lg shadow-md">
										<span className="mr-3 text-xl text-[hsl(210,100%,70%)]">✓</span>Orçamentos e Compras
									</li>
								</ul>

							</div>
						</div>
					</section>

					{/* New Section with Alterdata info and YouTube Video */}
					<section id="alterdata" className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0A2342] to-[#0A1931] text-white flex flex-col items-center justify-center p-4 md:p-8">
						<div className="container mx-auto text-center flex flex-col items-center justify-center">
							<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-6">
								Excelência em Gestão Condominial
							</h2>
							<p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 max-w-3xl">
								Somos sua referência em eficiência, proporcionando uma gestão condominial completa e transparente.
							</p>
							<p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 max-w-3xl">
								Potencializamos nossos resultados com a robusta plataforma Alterdata, assegurando uma administração precisa e confiável para o seu condomínio.
							</p>
							<div className="w-full max-w-2xl lg:max-w-3xl aspect-video shadow-2xl rounded-lg overflow-hidden">
								<iframe
									src="https://www.youtube.com/embed/Lb7WjaDXTtA"
									title="Gestão de Condomínios com Alterdata"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									className="w-full h-full"
								></iframe>
							</div>
						</div>
					</section>
				</HydrateClient>
			</main>
			<Footer />
		</>
	);
}
