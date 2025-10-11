export default function Equipe() {
  return (
    <section className="p-16 text-center bg-gray-50 min-h-screen pt-40 md:pt-25 pb-70 md:pb-40">
      <h2 className="text-4xl font-serif text-[#B19763] mb-6">Nossa Equipe</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto"></div>
      <div className="bg-[url('https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg')]
       bg-cover bg-center h-100 rounded-xl ">
        <div className="h-[100%] w-[100%] bg-[#000000d8] bg-op rounded-xl flex items-center justify-around">
        <img src="https://storage.alboom.ninja/sites/72006/albuns/1176933/retrato-corporativo-advogado-valmir-bh-mg-0001.jpg?t=1683641216" alt="" 
        className="h-70 rounded-4xl"/>
        <h1 className="font-black">Jorge Ben Lima</h1>
        </div>
      </div>
    </section>
  );
}
