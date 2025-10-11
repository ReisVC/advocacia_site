import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./shine.css";

interface Noticia {
  id: number;
  titulo: string;
  ementa: string;
  dataApresentacao: string;
  uri: string;
}

export default function Home() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        // ✅ Usa proxy para evitar erro de CORS
        const url =
          "https://api.allorigins.win/get?url=" +
          encodeURIComponent(
            "https://dadosabertos.camara.leg.br/api/v2/proposicoes?itens=5&ordenarPor=id&ordem=DESC"
          );

        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro na requisição: " + res.status);

        const data = await res.json();
        const original = JSON.parse(data.contents);

        if (!original.dados) {
          throw new Error("Resposta inesperada da API");
        }

        const lista: Noticia[] = original.dados.map((item: any) => ({
          id: item.id,
          titulo: `${item.siglaTipo || "Prop"} ${item.numero}/${item.ano}`,
          ementa: item.ementa || "Sem ementa disponível",
          dataApresentacao: item.dataApresentacao,
          uri: item.uri,
        }));

        setNoticias(lista);
      } catch (error: any) {
        console.error("Erro ao carregar notícias:", error);
        setError("Não foi possível carregar notícias no momento.");
      } finally {
        setLoading(false);
      }
    }

    fetchNoticias();
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center p-16 min-h-screen pt-40 md:pt-25 pb-70 md:pb-50 z-0">
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="https://cdn.coverr.co/videos/coverr-law-office-desk-4063/1080p.mp4"
      ></video>

      {/* 🪙 Título e subtítulo */}
      <div className="relative z-10 max-w-2xl mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="shine text-5xl font-serif text-[#B19763] mb-4 relative overflow-hidden"
        >
          Advocacia com Excelência
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-black text-lg font-serif italic "
        >
          Ética, compromisso e resultados em cada causa.
        </motion.p>
      </div>

      {/* 📰 Notícias */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 bg-[#f9e4bb] p-6 rounded-2xl shadow-lg max-w-3xl w-full text-left backdrop-blur-md shadow-[#B19763]"
      >
        <h2 className="text-2xl font-semibold text-[#000000] mb-4">
          Notícias Jurídicas Recentes
        </h2>

        {loading && <p className="text-gray-300">Carregando notícias...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && (
          <ul className="space-y-4 max-h-64 overflow-y-auto pr-2">
            <AnimatePresence>
              {noticias.map((n) => (
                <motion.li
                  key={n.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="border-b border-gray-700 pb-2 hover:text-[#6d6d6d] transition"
                >
                  <a
                    href={n.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <strong>{n.titulo}</strong>
                  </a>
                  <p className="text-sm text-black line-clamp-2">
                    {n.ementa}
                  </p>
                  <p className="text-xs text-black mt-1">
                    {new Date(n.dataApresentacao).toLocaleDateString("pt-BR")}
                  </p>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </motion.div>
    </section>
  );
}