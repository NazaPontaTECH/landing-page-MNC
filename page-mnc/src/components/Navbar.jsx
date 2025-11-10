import { Heart, Menu } from 'lucide-react';

export default function Navbar() {
	return (
		<header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
			<nav className="container mx-auto flex items-center justify-between py-4 px-6">
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
							<a href="#inicio" className="hover:text-primary">
								Início
							</a>
						</li>
						<li>
							<a href="#sobre" className="hover:text-primary">
								Sobre
							</a>
						</li>
						<li>
							<a href="#missao" className="hover:text-primary">
								Missão
							</a>
						</li>
						<li>
							<a href="#contato" className="hover:text-primary">
								Contato
							</a>
						</li>
					</ul>

					{/* Botão Desktop */}
					<a
						href="/login"
						className="hidden md:block bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700"
					>
						Acessar Sistema
					</a>

					{/* Menu Mobile - Preline Dropdown */}
					<div className="md:hidden">
						<div className="hs-dropdown relative inline-flex">
							<button 
								type="button" 
								className="hs-dropdown-toggle p-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
								aria-haspopup="menu" 
								aria-expanded="false" 
								aria-label="Menu"
							>
								<Menu className="w-4 h-4" />
							</button>

							<div className="hs-dropdown-menu transition-opacity duration-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2" role="menu" aria-orientation="vertical">
								<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#inicio">
									Início
								</a>
								<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#sobre">
									Sobre
								</a>
								<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#missao">
									Missão
								</a>
								<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100" href="#contato">
									Contato
								</a>
								<div className="border-t border-gray-200 my-2"></div>
								<a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-primary font-medium hover:bg-gray-100" href="/login">
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
