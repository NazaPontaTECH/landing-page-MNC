export default function Contact() {
  return (
    <section id="contato" className="container mx-auto py-20 px-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Entre em Contato</h2>
      <p className="text-center text-gray-600 mt-2">
        Estamos prontos para ouvir você. Fale conosco para saber mais sobre nosso trabalho.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium">📞 Telefone</p>
            <p>(11) 1234-5678</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium">📧 E-mail</p>
            <p>contato@mcnazareno.org.br</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="font-medium">📍 Endereço</p>
            <p>Rua da Compaixão, 123 - São Paulo, SP</p>
          </div>
        </div>

        <form className="bg-white shadow-sm rounded-lg p-6 space-y-4">
          <input type="text" placeholder="Nome completo" className="w-full border rounded-md p-2" />
          <input type="email" placeholder="E-mail" className="w-full border rounded-md p-2" />
          <input type="tel" placeholder="Telefone" className="w-full border rounded-md p-2" />
          <textarea placeholder="Mensagem" rows="4" className="w-full border rounded-md p-2"></textarea>
          <button className="bg-primary text-white w-full py-2 rounded-md hover:bg-blue-700">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}
