import { Heart, Instagram, Facebook, Youtube, Mail, Phone, MapPin, MailCheck } from 'lucide-react';
import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Footer() {
  const { staggerContainer, fadeInUp, staggerChild } = useScrollAnimation()

  return (
    <motion.footer 
      className="bg-dark text-gray-400"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
			{/* Footer principal */}
			<motion.div 
        className="container mx-auto max-w-5xl px-6 py-16"
        variants={staggerChild}
      >
				<motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChild}
        >
					{/* Coluna 1 - Sobre */}
					<motion.div 
            className="space-y-4"
            variants={fadeInUp}
          >
						<div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2174FF] rounded-full">
                <Heart
                  className="w-6 h-6 text-[#FAFAFA]"
                  fill="currentColor"
                />
              </div>
							<div>
								<h3 className="text-white font-bold text-lg">
									Ministério de Compaixão
								</h3>
								<p className="text-sm text-gray-400">Igreja do Nazareno</p>
							</div>
						</div>
						<p className="text-sm leading-relaxed">
							Transformando vidas através do amor de Cristo desde 1908, levando
							esperança e dignidade às comunidades que mais precisam.
						</p>
						<div className="flex gap-4 pt-4">
							{/* Redes Sociais - Preline Icons */}
							<a
								href="#"
								className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors group"
							>
								<Instagram className='w-5 h-5'/>
							</a>
							<a
								href="#"
								className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors group"
							>
								<Facebook className='w-5 h-5'/>
							</a>
							<a
								href="#"
								className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors group"
							>
								<Youtube className='w-5 h-5'/>
							</a>
							<a
								href="#"
								className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors group"
							>
								<Mail className='w-5 h-5'/>
							</a>
						</div>
					</motion.div>

					{/* Coluna 2 - Links Rápidos */}
					<motion.div
            variants={fadeInUp}
          >
						<h4 className="text-white font-semibold text-lg mb-6">
							Links Rápidos
						</h4>
						<nav className="space-y-3">
							<a
								href="#inicio"
								className="block hover:text-white transition-colors text-sm group"
							>
								<span className="inline-flex items-center gap-2">
									<span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
									Início
								</span>
							</a>
							<a
								href="#sobre"
								className="block hover:text-white transition-colors text-sm group"
							>
								<span className="inline-flex items-center gap-2">
									<span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
									Sobre Nós
								</span>
							</a>
							<a
								href="#missao"
								className="block hover:text-white transition-colors text-sm group"
							>
								<span className="inline-flex items-center gap-2">
									<span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
									Missão e Valores
								</span>
							</a>
							<a
								href="#contato"
								className="block hover:text-white transition-colors text-sm group"
							>
								<span className="inline-flex items-center gap-2">
									<span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
									Contato
								</span>
							</a>
						</nav>
					</motion.div>

					{/* Coluna 4 - Newsletter */}
					{/* Coluna 3 - Newsletter */}
					<motion.div
            variants={fadeInUp}
          >
						<h4 className="text-white font-semibold text-lg mb-6">
							Newsletter
						</h4>
						<p className="text-sm mb-4">
							Receba novidades sobre nossos projetos e como você pode ajudar a
							transformar vidas.
						</p>

						{/* Formulário Newsletter - Preline Form */}
						<form className="space-y-3">
							<div className="relative">
								<input
									type="email"
									placeholder="Seu e-mail"
									className="w-full py-2.5 px-3 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors"
									required
								/>
							</div>
							<button
								type="submit"
								className="w-full py-2.5 px-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition-colors"
							>
								<MailCheck className="h-5 w-5 inline-block mr-2" />Inscrever-se
							</button>
						</form>

						<p className="text-xs text-gray-500 mt-3">
							Não enviamos spam. Você pode cancelar a qualquer momento.
						</p>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Footer inferior */}
			<motion.div 
        className="border-t border-gray-700"
        variants={fadeInUp}
      >
				<div className="container mx-auto px-6 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex flex-col md:flex-row items-center gap-4 text-sm">
							<p>© 2025 Ministério de Compaixão - Igreja do Nazareno</p>
							<span className="hidden md:block text-gray-600">•</span>
							<p>Feito com 💙 para servir</p>
						</div>

						<div className="flex items-center gap-6 text-xs">
							<a href="#" className="hover:text-white transition-colors">
								Política de Privacidade
							</a>
							<span className="text-gray-600">•</span>
							<a href="#" className="hover:text-white transition-colors">
								Termos de Uso
							</a>
							<span className="text-gray-600">•</span>
							<a href="#" className="hover:text-white transition-colors">
								Transparência
							</a>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.footer>
	)
}
