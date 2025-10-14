import { motion } from "framer-motion";
import LogoAdv from "../assets/LogoAdv.png"

interface NavbarProps {
  current: number;
  navigateTo: (index: number) => void;
  pages: { id: string; label: string }[];
}

export default function Navbar({ current, navigateTo, pages }: NavbarProps) {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-[0_0_15px_#0a0a0a]  border-b border-gray-800"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <img src={LogoAdv} alt="" className="h-19"/>
        <h1 className="text-2xl font-serif">
          
          <span className="text-[#b98434]">Alexandre Reis</span> Advocacia
        </h1>
        <div className="flex space-x-6">
          {pages.map((p, i) => (
            <button
              key={p.id}
              onClick={() => navigateTo(i)}
              className={`hover:text-[#b98434] transition ${
                current === i ? "text-[#b98434]" : ""
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
