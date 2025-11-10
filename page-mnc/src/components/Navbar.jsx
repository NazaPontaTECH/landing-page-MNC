import { Heart } from 'lucide-react';

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
						<p className="text-xs text-gray-500">Igreja do Nazareno</p>
					</div>
				</div>

				<ul className="hidden md:flex gap-6 text-sm text-gray-700">
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

				<a
					href="/login"
					className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700"
				>
					Acessar Sistema
				</a>
			</nav>
		</header>
	);
}
