import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          
          {/* Barrinha divisória azul */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-primary rounded-full"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para ouvir você. Fale conosco para saber mais sobre nosso trabalho ou como você pode fazer parte dessa missão.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cards de Contato */}
          <div className="lg:col-span-1 space-y-6">
            {/* Telefone */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Phone className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                  <p className="text-gray-600">(11) 1234-5678</p>
                  <p className="text-sm text-gray-500">Seg à Sex, 8h às 17h</p>
                </div>
              </div>
            </div>

            {/* E-mail */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <Mail className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                  <p className="text-gray-600">contato@mcnazareno.org.br</p>
                  <p className="text-sm text-gray-500">Respondemos em 24h</p>
                </div>
              </div>
            </div>

            {/* Endereço */}
            <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <MapPin className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Endereço</h3>
                  <p className="text-gray-600">Rua da Compaixão, 123</p>
                  <p className="text-gray-600">São Paulo, SP - CEP 01234-567</p>
                </div>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="bg-primary text-white p-6 rounded-2xl">
              <h3 className="font-semibold mb-3 text-lg">Horário de Atendimento</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Segunda à Sexta</span>
                  <span>8:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>8:00 - 12:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Envie sua Mensagem</h3>
                <p className="text-gray-600">Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
              </div>

              <form className="space-y-6">
                {/* Linha 1: Nome e Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome completo <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      className="w-full py-3 px-4 border border-gray-200 rounded-xl text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50 disabled:pointer-events-none" 
                      placeholder="Digite seu nome completo"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      className="w-full py-3 px-4 border border-gray-200 rounded-xl text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50 disabled:pointer-events-none" 
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Linha 2: Telefone e Assunto */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      className="w-full py-3 px-4 border border-gray-200 rounded-xl text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50 disabled:pointer-events-none" 
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        id="subject"
                        name="subject"
                        className="w-full py-3 px-4 pe-9 border border-gray-200 rounded-xl text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50 disabled:pointer-events-none appearance-none bg-white"
                        required
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="volunteer">🙋‍♀️ Quero ser voluntário</option>
                        <option value="donate">💝 Quero fazer doação</option>
                        <option value="partnership">🤝 Parceria</option>
                        <option value="info">ℹ️ Informações gerais</option>
                        <option value="visit">🏠 Visitar nossa sede</option>
                        <option value="other">📝 Outros</option>
                      </select>
                      <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="5" 
                    className="w-full py-3 px-4 border border-gray-200 rounded-xl text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50 disabled:pointer-events-none resize-none" 
                    placeholder="Digite sua mensagem aqui. Quanto mais detalhes, melhor poderemos ajudá-lo!"
                    required
                  ></textarea>
                </div>

                {/* Checkbox de consentimento */}
                <div className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    id="consent"
                    name="consent"
                    className="mt-1 w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                    required
                  />
                  <label htmlFor="consent" className="text-sm text-gray-600">
                    Concordo em receber comunicações do Ministério de Compaixão e declaro que as informações fornecidas são verdadeiras. <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Botões */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="submit"
                    className="flex-1 py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl border border-transparent bg-primary text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 focus:ring-2 focus:ring-primary/10 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <Send className="h-5 w-5 inline-block mr-1" />
                    Enviar Mensagem
                  </button>
                  <button 
                    type="reset"
                    className="sm:w-auto py-3 px-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-xl border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:ring-2 focus:ring-gray-200 transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Limpar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
