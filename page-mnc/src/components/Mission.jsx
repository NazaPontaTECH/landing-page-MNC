import { Target, Eye, Gem, Heart, Users, Star, CheckCircle } from 'lucide-react';

export default function Mission() {
  return (
    <section id="missao" className="relative bg-dark text-white py-24 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nossos Fundamentos</h2>

          {/* Barrinha divisória azul */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Conheça os valores que nos guiam há mais de 115 anos na missão de transformar vidas através do amor de Cristo.
          </p>
        </div>

        {/* Grid principal - Cards MVV */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Card Missão */}
          <div className="group relative bg-gradient-to-br from-white to-gray-50 text-gray-800 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                Nossa Missão
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Expressar o amor de Cristo através de ações práticas que promovem dignidade e esperança às comunidades mais necessitadas.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ação social transformadora</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Amor incondicional</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Dignidade humana</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Visão */}
          <div className="group relative bg-gradient-to-br from-white to-gray-50 text-gray-800 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-bl-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                Nossa Visão
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Ser referência em compaixão cristã e transformação social através do serviço integral às comunidades.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Excelência reconhecida</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Transformação sustentável</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>Impacto nacional</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Valores */}
          <div className="group relative bg-gradient-to-br from-white to-gray-50 text-gray-800 rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
            <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gem className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors">
                Nossos Valores
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Princípios fundamentais que norteiam cada ação e decisão em nossa jornada de serviço.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-red-500 shrink-0" />
                  <span className="font-medium text-gray-700">Amor e compaixão</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="font-medium text-gray-700">Excelência no serviço</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="font-medium text-gray-700">Integridade e transparência</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="font-medium text-gray-700">Comunidade e união</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
