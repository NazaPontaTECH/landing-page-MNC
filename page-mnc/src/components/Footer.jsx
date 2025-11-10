export default function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-6 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <h4 className="text-white font-semibold">Ministério de Compaixão</h4>
          <p>Transformando vidas através do amor de Cristo desde 1908.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Links Rápidos</h4>
          <ul>
            <li><a href="#inicio" className="hover:text-white">Início</a></li>
            <li><a href="#sobre" className="hover:text-white">Sobre Nós</a></li>
            <li><a href="#missao" className="hover:text-white">Missão e Valores</a></li>
            <li><a href="#contato" className="hover:text-white">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contato</h4>
          <p>📧 contato@mcnazareno.org.br</p>
          <p>📞 (11) 1234-5678</p>
          <p>📍 Rua da Compaixão, 123 - São Paulo, SP</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-6">
        © 2025 Ministério de Compaixão - Igreja do Nazareno. Feito com 💙 para servir.
      </p>
    </footer>
  )
}
