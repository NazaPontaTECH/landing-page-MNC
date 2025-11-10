import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Função para scroll suave
	const smoothScrollTo = (elementId) => {
		const element = document.getElementById(elementId);
		if (element) {
			const navbarHeight = 80; // Altura aproximada do navbar
			const elementPosition = element.offsetTop - navbarHeight;
			
			window.scrollTo({
				top: elementPosition,
				behavior: 'smooth'
			});
		}
	};

	// Handler para clique nos links
	const handleNavClick = (e, targetId) => {
		e.preventDefault();
		smoothScrollTo(targetId);
		setIsMenuOpen(false); // Fecha o menu após clique
	};

	// Toggle do menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
			<nav className="container mx-auto max-w-5xl flex items-center justify-between py-4 px-6">
				<div className="flex items-center gap-2">
					<div className="w-12 h-12 bg-[#2174FF] rounded-full flex items-center justify-center">
						<Heart className="w-6 h-6 text-[#FAFAFA]" fill="currentColor" />
					</div>
					<div>
						<h1 className="font-semibold text-gray-800">
							Ministério de Compaixão
						</h1>
						<p className="text-sm text-gray-500">Igreja do Nazareno</p>
					</div>
				</div>
				<div className="flex items-center gap-6">
					{/* Menu Desktop */}
					<ul className="hidden md:flex gap-6 text-md text-gray-800">
						<li>
							<a 
								href="#inicio" 
								onClick={(e) => handleNavClick(e, 'inicio')}
								className="relative hover:text-primary transition-colors cursor-pointer group py-2"
							>
								Início
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
						</li>
						<li>
							<a 
								href="#sobre" 
								onClick={(e) => handleNavClick(e, 'sobre')}
								className="relative hover:text-primary transition-colors cursor-pointer group py-2"
							>
								Sobre
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
						</li>
						<li>
							<a 
								href="#missao" 
								onClick={(e) => handleNavClick(e, 'missao')}
								className="relative hover:text-primary transition-colors cursor-pointer group py-2"
							>
								Missão
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
						</li>
						<li>
							<a 
								href="#contato" 
								onClick={(e) => handleNavClick(e, 'contato')}
								className="relative hover:text-primary transition-colors cursor-pointer group py-2"
							>
								Contato
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
							</a>
						</li>
					</ul>

					{/* Botão Desktop */}
					<a
						href="/login"
						className="hidden md:block bg-[#2563eb] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
					>
						Acessar Sistema
					</a>

					{/* Botão do Menu Mobile */}
					<button
						onClick={toggleMenu}
						className="md:hidden p-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
						aria-label="Menu"
					>
						{isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
					</button>
				</div>
			</nav>

			{/* Menu Mobile Lateral */}
			<div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
				isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}>
				{/* Overlay */}
				<div 
					className={`fixed inset-0 bg-black transition-opacity duration-300 ${
						isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
					}`}
					onClick={() => setIsMenuOpen(false)}
				></div>
				
				{/* Menu lateral */}
				<div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
					{/* Header do menu */}
					<div className="flex items-center justify-between p-6 border-b border-gray-200">
						<div className="flex items-center gap-2">
							<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
								<Heart className="w-5 h-5 text-white" fill="currentColor" />
							</div>
							<div>
								<h2 className="font-semibold text-gray-800 text-sm">Ministério de Compaixão</h2>
								<p className="text-xs text-gray-500">Igreja do Nazareno</p>
							</div>
						</div>
						<button
							onClick={() => setIsMenuOpen(false)}
							className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
						>
							<X className="w-5 h-5" />
						</button>
					</div>

					{/* Links do menu */}
					<nav className="py-6">
						<ul className="space-y-2">
							<li>
								<a
									href="#inicio"
									onClick={(e) => handleNavClick(e, 'inicio')}
									className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors group"
								>
									<span className="font-medium">Início</span>
									<span className="ml-auto w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
							</li>
							<li>
								<a
									href="#sobre"
									onClick={(e) => handleNavClick(e, 'sobre')}
									className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors group"
								>
									<span className="font-medium">Sobre</span>
									<span className="ml-auto w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
							</li>
							<li>
								<a
									href="#missao"
									onClick={(e) => handleNavClick(e, 'missao')}
									className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors group"
								>
									<span className="font-medium">Missão</span>
									<span className="ml-auto w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
							</li>
							<li>
								<a
									href="#contato"
									onClick={(e) => handleNavClick(e, 'contato')}
									className="flex items-center px-6 py-3 text-gray-800 hover:bg-gray-50 hover:text-primary transition-colors group"
								>
									<span className="font-medium">Contato</span>
									<span className="ml-auto w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
							</li>
						</ul>

						{/* Divider */}
						<div className="border-t border-gray-200 my-4"></div>

						{/* Botão de acesso */}
						<div className="px-6">
							<a
								href="/login"
								className="w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 text-center block"
							>
								Acessar Sistema
							</a>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
