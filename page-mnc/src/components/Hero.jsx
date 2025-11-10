import heroBg from "../assets/hero-bg.jpg";
import { Heart } from "lucide-react";

export default function Hero() {
	return (
		<section
			id="inicio"
			className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
			style={{ backgroundImage: `url(${heroBg})` }}
		>
			<div className="absolute inset-0 bg-black/50"></div>
			<div className="relative z-10 p-8 rounded-lg text-white max-w-2xl">
				<div className="flex justify-center">
					<div className="inline-flex items-center justify-center w-20 h-20 bg-[#2174FF] rounded-full mb-6">
						<Heart className="w-10 h-10 text-[#FAFAFA]" fill="currentColor" />
					</div>
				</div>
        <h1 className="block font-bold text-5xl">
          Ministério de Compaixão
        </h1>
				<p className="text-3xl mt-1">Igreja do Nazareno</p>
				<p className="mt-3 text-lg">
					Transformando vidas através do amor de Cristo, levando esperança e dignidade às comunidades mais necessitadas.
				</p>
				<div className="flex gap-4 justify-center mt-6">
					<a
						href="#missao"
						className="bg-primary text-white px-5 py-2 rounded-md hover:bg-blue-700"
					>
						Conheça Nossa Missão
					</a>
					<a
						href="#contato"
						className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-primary"
					>
						Entre em Contato
					</a>
				</div>
			</div>
		</section>
	);
}
