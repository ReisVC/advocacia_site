export default function Escritorio() {
  return (
    <section className="p-16 text-center bg-gray-50 min-h-screen pt-40 md:pt-25 pb-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif text-[#B19763] mb-6">
          Nosso Escritório
        </h2>
        <p className="text-gray-700">
          Localizado em São Paulo, nosso escritório combina tradição e modernidade, 
          oferecendo uma estrutura confortável e tecnológica para atender nossos clientes.
        </p>
        <img
          src="https://images.pexels.com/photos/6077861/pexels-photo-6077861.jpeg"
          alt="Escritório"
          className="rounded-xl shadow-lg mb-8 pt-10"
        />
      </div>
    </section>
  );
}
