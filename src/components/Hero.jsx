import heroBg from "../assets/hero-bg.jpg";
import { Heart } from "lucide-react";
import { motion } from 'framer-motion';
import { fadeInUp, scaleIn, staggerContainer, staggerChild } from '../hooks/useScrollAnimation';

export default function Hero() {
	return (
		<section
			id="inicio"
			className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
			style={{ backgroundImage: `url(${heroBg})` }}
		>
			<div className="absolute inset-0 bg-black/50"></div>
			<motion.div 
				className="relative z-10 p-8 rounded-lg text-white max-w-2xl"
				variants={staggerContainer}
				initial="hidden"
				animate="visible"
			>
				<motion.div 
					className="flex justify-center"
					variants={staggerChild}
				>
					<motion.div 
						className="inline-flex items-center justify-center w-20 h-20 bg-[#2174FF] rounded-full mb-6"
						variants={scaleIn}
					>
						<Heart className="w-10 h-10 text-[#FAFAFA]" fill="currentColor" />
					</motion.div>
				</motion.div>

				<motion.h1 
					className="block font-bold text-5xl"
					variants={staggerChild}
				>
					Ministério de Compaixão
				</motion.h1>

				<motion.p 
					className="text-3xl mt-1"
					variants={staggerChild}
				>
					Igreja do Nazareno
				</motion.p>

				<motion.p 
					className="mt-3 text-lg"
					variants={staggerChild}
				>
					Transformando vidas através do amor de Cristo, levando esperança e dignidade às comunidades mais necessitadas.
				</motion.p>

				<motion.div 
					className="flex gap-4 justify-center mt-6"
					variants={staggerChild}
				>
					<motion.a
						href="#missao"
						className="bg-[#2563eb] text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Conheça Nossa Missão
					</motion.a>
					<motion.a
						href="#contato"
						className="border border-white px-5 py-2 rounded-md hover:bg-white hover:text-[#2563eb] transition-colors duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Entre em Contato
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
}
