import { Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bg-gray-900 bottom-0 h-20 z-50 text-gray-300 w-screen py-4 border-t border-gray-800   p-4 border shadow-[0_0_15px_#0a0a0a] ">
     

      <div className="relative max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        {/* Telefones */}
        <div className="text-sm">
          <span className="text-[#B19763] font-medium">São Paulo:</span> (11) 3456-7890&nbsp;&nbsp;|&nbsp;&nbsp;
          <span className="text-[#B19763] font-medium">Rio de Janeiro:</span> (21) 2345-6789
        </div>

        {/* Ícones sociais */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-[#B19763] transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-400 hover:text-[#B19763] transition-colors"
          >
            <Facebook size={18} />
          </a>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="relative mt-3 text-center text-xs text-gray-500">
        © 2025 <span className="text-[#B19763] font-medium">Souza & Lima Advocacia</span> — Todos os direitos reservados.
      </div>
    </footer>
  );
}
