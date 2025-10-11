export default function Escritorio() {
  return (
    <section className="p-16 text-center bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1590608897129-79da98d159a9?auto=format&fit=crop&w=1200&q=80"
          alt="Escritório"
          className="rounded-xl shadow-lg mb-8"
        />
        <h2 className="text-4xl font-serif text-[#B19763] mb-6">
          Nosso Escritório
        </h2>
        <p className="text-gray-700">
          Localizado em São Paulo, nosso escritório combina tradição e modernidade, 
          oferecendo uma estrutura confortável e tecnológica para atender nossos clientes.
        </p>
      </div>
    </section>
  );
}
