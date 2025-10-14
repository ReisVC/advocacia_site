import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./shine.css";

interface Noticia {
  id: number;
  titulo: string;
  ementa: string;
  dataApresentacao?: string;
  uri: string;
  imagem: string;
}

export default function Noticia() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        const url =
          "https://api.allorigins.win/get?url=" +
          encodeURIComponent(
            "https://dadosabertos.camara.leg.br/api/v2/proposicoes?itens=6&ordenarPor=id&ordem=DESC"
          );

        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro na requisição: " + res.status);

        const data = await res.json();
        const original = JSON.parse(data.contents);

        if (!original.dados) throw new Error("Resposta inesperada da API");

        const lista: Noticia[] = original.dados.map((item: any, index: number) => ({
          id: item.id,
          titulo: `${item.siglaTipo || "Prop"} ${item.numero}/${item.ano}`,
          ementa: item.ementa || "Sem ementa disponível",
          dataApresentacao: item.dataApresentacao,
          uri: item.uri,
          // usa seed no Unsplash para imagem consistente e confiável
          imagem: `https://source.unsplash.com/600x400/?law,justice,advocacy,${encodeURIComponent(
            item.siglaTipo || "law"
          )}`
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

  const formatarData = (data?: string) => {
    if (!data) return "Data indisponível";
    const date = new Date(data);
    return isNaN(date.getTime())
      ? "Data indisponível"
      : date.toLocaleDateString("pt-BR");
  };

  return (
    <section className="relative flex flex-col items-center justify-center text-center p-16 pb-24 min-h-screen">
      {/* 🎥 Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="https://cdn.coverr.co/videos/coverr-law-office-desk-4063/1080p.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🪙 Título e subtítulo */}
      <div className="relative z-10 max-w-2xl mb-12 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="shine text-5xl font-serif text-[#B19763] mb-4"
        >
          Advocacia com Excelência
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-200 text-lg"
        >
          Ética, compromisso e resultados em cada causa.
        </motion.p>
      </div>

      {/* 📰 Grid de notícias */}
      <div className="relative z-10 bg-neutral-900/70 p-8 rounded-2xl shadow-lg max-w-6xl w-full backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-[#B19763] mb-6 text-left">
          Notícias Jurídicas Recentes
        </h2>

        {loading && <p className="text-gray-300">Carregando notícias...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {noticias.map((n, index) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-b from-neutral-900 to-neutral-800 border border-[#b19763]/40 hover:border-[#b19763] hover:shadow-lg hover:shadow-[#b19763]/30 rounded-xl overflow-hidden transition-all duration-300"
              >
                <a
                  href={n.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {/* Imagem */}
                  <div className="relative w-full h-40 overflow-hidden">
                    <img
                      src={n.imagem}
                      alt={n.titulo}
                      loading="lazy"
                      onError={(e) =>
                        ((e.target as HTMLImageElement).src =
                          "https://source.unsplash.com/600x400/?justice,balance")
                      }
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-semibold text-[#B19763] mb-2 line-clamp-1">
                      {n.titulo}
                    </h3>
                    <p className="text-sm text-gray-300 mb-3 line-clamp-3">
                      {n.ementa}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatarData(n.dataApresentacao)}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
