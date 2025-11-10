import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section id="sobre" className="container mx-auto py-20 px-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Sobre Nós</h2>
      <p className="text-center text-gray-600 mt-2">
        O Ministério de Compaixão é um braço de ação social da Igreja do Nazareno, expressando o amor de Deus através de ações práticas e transformadoras.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
        <div>
          <h3 className="font-semibold text-gray-800">Nossa História</h3>
          <p className="mt-2 text-gray-600">
            Há mais de um século, a Igreja do Nazareno tem sido reconhecida por servir aos mais vulneráveis. Atuamos com programas educacionais, saúde e projetos comunitários.
          </p>
        </div>
        <img src={aboutImg} alt="Voluntários em ação" className="rounded-lg shadow-md" />
      </div>
    </section>
  )
}
