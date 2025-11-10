import { Heart, Menu } from 'lucide-react';

export default function Navbar() {
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

					{/* Menu Mobile - Preline Dropdown */}
					<div className="md:hidden">
						<div className="hs-dropdown relative inline-flex">
							<button 
								type="button" 
								className="hs-dropdown-toggle p-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
								aria-haspopup="menu" 
								aria-expanded="false" 
								aria-label="Menu"
							>
								<Menu className="w-4 h-4" />
							</button>

							<div className="hs-dropdown-menu transition-opacity duration-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2" role="menu" aria-orientation="vertical">
								<a 
									className="relative flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors group" 
									href="#inicio"
									onClick={(e) => handleNavClick(e, 'inicio')}
								>
									Início
									<span className="absolute bottom-1 left-3 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
								<a 
									className="relative flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors group" 
									href="#sobre"
									onClick={(e) => handleNavClick(e, 'sobre')}
								>
									Sobre
									<span className="absolute bottom-1 left-3 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
								<a 
									className="relative flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors group" 
									href="#missao"
									onClick={(e) => handleNavClick(e, 'missao')}
								>
									Missão
									<span className="absolute bottom-1 left-3 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
								<a 
									className="relative flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors group" 
									href="#contato"
									onClick={(e) => handleNavClick(e, 'contato')}
								>
									Contato
									<span className="absolute bottom-1 left-3 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6"></span>
								</a>
								<div className="border-t border-gray-200 my-2"></div>
								<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-primary font-medium hover:bg-gray-100 transition-colors" href="/login">
									Acessar Sistema
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
