import aboutImg from "../assets/about.jpg";

export default function About() {
  return (
    <section id="sobre" className="bg-gray-50 py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
          
          {/* Barrinha divisória azul */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O Ministério de Compaixão é um braço de ação social da Igreja do Nazareno, expressando o amor de Deus através de ações práticas e transformadoras.
          </p>
        </div>

        {/* Grid principal - História + Imagem */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-primary rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">Nossa História</h3>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Há mais de um século, a Igreja do Nazareno tem sido reconhecida por servir aos mais vulneráveis. Iniciamos nossa jornada em 1908 com o compromisso de levar esperança e dignidade às comunidades que mais precisam.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Atuamos com programas educacionais, saúde comunitária e projetos de desenvolvimento social em diversas regiões do Brasil, sempre guiados pelos princípios cristãos de amor, compaixão e serviço ao próximo.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-primary mb-1">115+</div>
                <div className="text-sm text-gray-600">Anos de História</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-gray-600">Famílias Impactadas</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
            <img 
              src={aboutImg} 
              alt="Voluntários em ação" 
              className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* FAQ/Accordion Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Perguntas Frequentes</h3>
            <p className="text-gray-600">Saiba mais sobre nossa missão e atuação</p>
          </div>

          <div className="hs-accordion-group max-w-4xl mx-auto space-y-4">
            {/* Pergunta 1 */}
            <div className="hs-accordion bg-gray-50 border border-gray-200 rounded-xl overflow-hidden" id="hs-about-heading-one">
              <button 
                className="hs-accordion-toggle py-4 px-6 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 hover:text-primary focus:outline-none focus:text-primary transition-colors" 
                aria-expanded="false" 
                aria-controls="hs-about-collapse-one"
              >
                <span className="text-lg">Quando começamos nosso trabalho?</span>
                <svg className="hs-accordion-active:hidden block shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <svg className="hs-accordion-active:block hidden shrink-0 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"></path>
                </svg>
              </button>
              <div 
                id="hs-about-collapse-one" 
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" 
                role="region" 
                aria-labelledby="hs-about-heading-one"
              >
                <div className="pb-6 px-6">
                  <p className="text-gray-700 leading-relaxed">
                    Nosso ministério iniciou em <strong>1908</strong> com o coração voltado para servir as comunidades mais necessitadas, seguindo o exemplo de Jesus Cristo. Desde então, temos dedicado nossa existência a levar amor, esperança e dignidade a milhares de famílias.
                  </p>
                </div>
              </div>
            </div>

            {/* Pergunta 2 */}
            <div className="hs-accordion bg-gray-50 border border-gray-200 rounded-xl overflow-hidden" id="hs-about-heading-two">
              <button 
                className="hs-accordion-toggle py-4 px-6 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 hover:text-primary focus:outline-none focus:text-primary transition-colors" 
                aria-expanded="false" 
                aria-controls="hs-about-collapse-two"
              >
                <span className="text-lg">Como atuamos hoje?</span>
                <svg className="hs-accordion-active:hidden block shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <svg className="hs-accordion-active:block hidden shrink-0 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"></path>
                </svg>
              </button>
              <div 
                id="hs-about-collapse-two" 
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" 
                role="region" 
                aria-labelledby="hs-about-heading-two"
              >
                <div className="pb-6 px-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Programas Educacionais</h4>
                      <p className="text-gray-700 text-sm">Oferecemos cursos profissionalizantes, alfabetização de adultos e reforço escolar.</p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Saúde Comunitária</h4>
                      <p className="text-gray-700 text-sm">Campanhas de vacinação, atendimento médico básico e educação em saúde.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pergunta 3 */}
            <div className="hs-accordion bg-gray-50 border border-gray-200 rounded-xl overflow-hidden" id="hs-about-heading-three">
              <button 
                className="hs-accordion-toggle py-4 px-6 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 hover:text-primary focus:outline-none focus:text-primary transition-colors" 
                aria-expanded="false" 
                aria-controls="hs-about-collapse-three"
              >
                <span className="text-lg">Qual é nosso impacto na comunidade?</span>
                <svg className="hs-accordion-active:hidden block shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
                <svg className="hs-accordion-active:block hidden shrink-0 w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 15l-6-6-6 6"></path>
                </svg>
              </button>
              <div 
                id="hs-about-collapse-three" 
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" 
                role="region" 
                aria-labelledby="hs-about-heading-three"
              >
                <div className="pb-6 px-6">
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Já impactamos <strong>mais de 1.000 famílias</strong> com programas de alimentação, educação e desenvolvimento comunitário sustentável. Nosso trabalho se estende por várias cidades do Brasil.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Além disso, formamos mais de 500 jovens em cursos profissionalizantes e mantemos 3 centros comunitários ativos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
