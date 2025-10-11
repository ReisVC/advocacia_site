export default function Equipe() {
  return (
    <section className="p-16 text-center bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-serif text-[#B19763] mb-6">Nossa Equipe</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {["Dr. João Souza", "Dra. Maria Lima", "Dr. Ricardo Alves"].map((adv, i) => (
          <div key={i} className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt={adv}
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
            />
            <h4 className="text-[#B19763] text-lg font-semibold">{adv}</h4>
            <p className="text-sm text-gray-600 mt-2">Advogado Especialista</p>
          </div>
        ))}
      </div>
    </section>
  );
}
