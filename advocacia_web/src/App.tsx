import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

import Home from "./pages/Home";
import Escritorio from "./pages/Escritorio";
import Atuacao from "./pages/Atuacao";
import Equipe from "./pages/Equipe";
import Noticias from "./pages/Noticia";
import Contato from "./pages/Contato";

const slideVariants: Variants = {
  initial: (dir: number | undefined) => ({
    x: dir && dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: (dir: number | undefined) => ({
    x: dir && dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const pages = [
    { id: "home", label: "Home", component: <Home /> },
    { id: "escritorio", label: "Escritório", component: <Escritorio /> },
    { id: "atuacao", label: "Atuação", component: <Atuacao /> },
    { id: "equipe", label: "Equipe", component: <Equipe /> },
    { id: "noticias", label: "Notícias", component: <Noticias /> },
    { id: "contato", label: "Contato", component: <Contato /> },
  ];

  const navigateTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  return (
    <div className=" min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      <Navbar current={current} navigateTo={navigateTo} pages={pages} />
      <main className="relative flex-1  pt-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={direction}
            className="absolute w-full min-h-screen top-0 left-0 bg-white"
          >
            {pages[current].component}
          </motion.div>
        </AnimatePresence>
      </main>

    </div>
  );
}
