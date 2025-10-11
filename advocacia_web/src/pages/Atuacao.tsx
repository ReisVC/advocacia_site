export default function Atuacao() {
  const areas = [
    { name: "Direito Civil", img: "https://images.unsplash.com/photo-1589820296156-2454bb8dfc5b?auto=format&fit=crop&w=1200&q=80" },
    { name: "Direito Empresarial", img: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=80" },
    { name: "Direito Trabalhista", img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" },
  ];

  return (
    <section className="p-16 bg-white min-h-screen text-center">
      <h2 className="text-4xl font-serif text-[#B19763] mb-8">
        Áreas de Atuação
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {areas.map((area) => (
          <div key={area.name} className="relative group overflow-hidden rounded-xl shadow-md">
            <img
              src={area.img}
              alt={area.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-[#B19763] text-xl font-semibold">{area.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
