import { Linkedin, Facebook } from "lucide-react";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Equipe() {
  return (
    <section className=" text-center bg-gray-50 min-h-screen pt-40 md:pt-25 pb-50">
      <h2 className="text-4xl font-serif text-[#B19763] mb-6">Nossa Equipe</h2>

      {/* SEÇÃO ADVOGADO JORGE BEN LIMA */}
      <div className="bg-[url('https://images.pexels.com/photos/7876050/pexels-photo-7876050.jpeg')] bg-cover bg-center h-100 rounded-xl relative mt-10 mb-10 ">
        <div className="absolute bottom-5 right-10 text-white font-normal font-serif italic hover:text-[#B19763]">
          OAB/SP 123456
        </div>
        <div className="h-[100%] w-[100%] bg-[#000000d8] rounded-xl flex justify-center gap-10 p-5">
          <img
            src="https://storage.alboom.ninja/sites/72006/albuns/1176933/retrato-corporativo-advogado-valmir-bh-mg-0001.jpg?t=1683641216"
            alt=""
            className="h-90 rounded-full saturate-150 bg-cover bg-bottom border-[#B19763]/80 border-4 shadow-[inset_0_0_50px_rgba(0,0,0,0.7)]"
          />
          <div id="details" className="mt-4">
            <h1 className="text-white font-serif text-6xl text-left">
              Jorge Ben Lima
            </h1>
            <p className="w-200 text-white italic font-serif text-left mt-6">
              Advogado especializado em Direito Civil e Empresarial, com atuação
              voltada à defesa dos interesses de seus clientes de forma
              estratégica e ética. Comprometido com a excelência jurídica,
              oferece soluções personalizadas e eficazes em cada caso, prezando
              pela transparência e pelo resultado.
            </p>
            <div id="contato" className="flex mt-30">
              <a href="#" className="hover:text-[#B19763] text-blue-100">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-[#B19763] text-blue-100">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO ADVOGADO PATRÍCIA RASMUSSEN */}
      <div
        className="bg-[url('https://images.pexels.com/photos/7641842/pexels-photo-7641842.jpeg')]
       bg-cover bg-center h-100 rounded-xl relative mt-10 mb-10"
      >
        <div className="absolute bottom-5 right-10 text-white font-normal font-serif italic hover:text-[#B19763]">
          OAB/PR 45678
        </div>
        <div className="h-[100%] w-[100%] bg-[#000000d8] rounded-xl flex justify-center gap-10 p-5">
          <img
            src="https://advocaciasma.com.br/wp-content/uploads/2021/06/Priscila_1-e1695995826312.png"
            alt=""
            className="h-90 rounded-full saturate-150 bg-cover bg-bottom border-[#B19763]/80 border-4 shadow-[inset_0_0_50px_rgba(0,0,0,0.7)]"
          />
          <div id="details" className="mt-4">
            <h1 className="text-white font-serif text-6xl text-left">
              Patrícia Rasmussen
            </h1>
            <p className="w-200 text-white italic font-serif text-left mt-6">
              Advogada especializada em Direito de Família e Sucessões, dedicada
              a oferecer orientação humanizada e soluções jurídicas eficazes em
              momentos delicados. Atua com empatia, ética e discrição, buscando
              sempre proteger os direitos e os interesses de seus clientes,
              promovendo acordos justos e resultados duradouros.
            </p>
            <div id="contato" className="flex mt-30">
              <a href="#" className="hover:text-[#B19763] text-blue-100">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-[#B19763] text-blue-100">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO ADVOGADO ROGÉRIO MACEDO */}
      <div
        className="bg-[url('https://images.pexels.com/photos/8729929/pexels-photo-8729929.jpeg')]
       bg-cover bg-center h-100 rounded-xl relative mt-10 mb-10"
      >
        <div className="absolute bottom-5 right-10 text-white font-normal font-serif italic hover:text-[#B19763]">
          OAB/MG 98765
        </div>
        <div className="h-[100%] w-[100%] bg-[#000000d8] rounded-xl flex justify-center gap-10 p-5">
          <img
            src="https://storage.alboom.ninja/sites/2257/albuns/1217628/20230125_pablo_alexandre_retrato_20-edit.jpg?t=1690564751"
            alt=""
            className="h-90 rounded-full saturate-150 bg-cover bg-bottom border-[#B19763]/80 border-4 shadow-[inset_0_0_50px_rgba(0,0,0,0.7)] "
          />
          <div id="details" className="mt-4">
            <h1 className="text-white font-serif text-6xl text-left">
              Rogério Macedo
            </h1>
            <p className="w-200 text-white italic font-serif text-left mt-6">
              Advogado especializado em Direito Financeiro e Tributário, com
              ampla experiência em planejamento fiscal, compliance e gestão de
              riscos empresariais. Atua de forma estratégica para garantir
              segurança jurídica nas operações financeiras, auxiliando empresas
              e profissionais a manterem a conformidade legal e a otimização de
              resultados com ética e transparência.
            </p>
            <div id="contato" className="flex mt-30">
              <a href="#" className="hover:text-[#B19763] text-blue-100">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-[#B19763] text-blue-100">
                <Facebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </section>
  );
}
