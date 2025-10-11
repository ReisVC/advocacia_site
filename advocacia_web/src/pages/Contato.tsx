export default function Contato() {
  return (
    <section className="p-16 text-center bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-serif text-[#B19763] mb-6">Fale Conosco</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input type="text" placeholder="Seu nome" className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Seu e-mail" className="w-full p-3 border rounded-md" />
        <textarea placeholder="Mensagem" className="w-full p-3 border rounded-md h-32" />
        <button className="bg-[#B19763] text-white px-6 py-3 rounded-md hover:bg-[#9c8654] transition">
          Enviar
        </button>
      </form>
    </section>
  );
}
