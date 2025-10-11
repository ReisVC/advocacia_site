import { motion } from "framer-motion";

interface NavbarProps {
  current: number;
  navigateTo: (index: number) => void;
  pages: { id: string; label: string }[];
}

export default function Navbar({ current, navigateTo, pages }: NavbarProps) {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md border-b border-[#B19763]/40"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-serif">
          <span className="text-[#B19763]">Souza & Lima</span> Advocacia
        </h1>
        <div className="flex space-x-6">
          {pages.map((p, i) => (
            <button
              key={p.id}
              onClick={() => navigateTo(i)}
              className={`hover:text-[#B19763] transition ${
                current === i ? "text-[#B19763]" : ""
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
