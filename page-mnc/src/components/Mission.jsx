export default function Mission() {
  return (
    <section id="missao" className="bg-dark text-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center">Missão, Visão e Valores</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white text-gray-800 rounded-lg p-6">
            <h3 className="font-semibold">Missão</h3>
            <p className="mt-2">Expressar o amor de Cristo através de ações práticas que promovem dignidade e esperança.</p>
          </div>
          <div className="bg-white text-gray-800 rounded-lg p-6">
            <h3 className="font-semibold">Visão</h3>
            <p className="mt-2">Ser referência em compaixão cristã e transformação social através do serviço integral.</p>
          </div>
          <div className="bg-white text-gray-800 rounded-lg p-6">
            <h3 className="font-semibold">Valores</h3>
            <ul className="mt-2 list-disc ml-4">
              <li>Amor e compaixão</li>
              <li>Excelência no serviço</li>
              <li>Integridade e transparência</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary rounded-lg p-6 text-center mt-10">
          <p>Estamos comprometidos em ser as mãos e os pés de Cristo no mundo, servindo com excelência e amor.</p>
        </div>
      </div>
    </section>
  )
}
