export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center p-16 h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://cdn.coverr.co/videos/coverr-law-office-desk-4063/1080p.mp4"
      ></video>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-serif text-[#B19763] mb-4">
          Advocacia com Excelência
        </h1>
        <p className="text-gray-100 text-lg">
          Ética, compromisso e resultados em cada causa.
        </p>
      </div>
    </section>
  );
}
