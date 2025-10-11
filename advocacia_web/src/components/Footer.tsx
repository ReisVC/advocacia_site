import { Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-6 mt-20 fixed w-full bottom-0 overflow-y-visible">
      <div className="max-w-6xl mx-auto text-center space-y-4 p-0">
        <p>Central São Paulo: (11) 3456-7890 -  Rio de Janeiro: (21) 2345-6789</p>
        <div className="flex justify-center space-x-6 text-gray-400 mt-4">
          <a href="#" className="hover:text-[#B19763]"><Linkedin /></a>
          <a href="#" className="hover:text-[#B19763]"><Facebook /></a>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          © 2025 Souza & Lima Advocacia — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
