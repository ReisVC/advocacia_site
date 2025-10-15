export default function Noticias() {
  const news = [
    {
      title: "Novas Diretrizes do STF",
      img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80",
      date: "10/10/2025",
    },
    {
      title: "Tributação Empresarial: o que muda?",
      img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1200&q=80",
      date: "07/10/2025",
    },
  ];

  return (
    <section className="p-16 bg-white min-h-screen text-center pt-40 md:pt-25 pb-70 md:pt-20">
      <h2 className="text-4xl font-serif text-[#B19763] mb-6">Notícias</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {news.map((n, i) => (
          <div key={i} className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <img src={n.img} alt={n.title} className="h-64 w-full object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-[#B19763] font-semibold text-lg mb-2">{n.title}</h3>
              <p className="text-sm text-gray-500">{n.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
