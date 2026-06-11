import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Actualite {
  id: number;
  titre: string;
  contenu: string;
  image: string;
  date_publication: string;
}

const News = () => {
  const [news, setNews] = useState<Actualite[]>([]);
  const navigate = useNavigate();

  const fetchNews = async () => {
    try {
      const res = await fetch("http://localhost:5000/actualites");
      const data = await res.json();
      setNews(data.slice(0, 2)); // 🔥 on affiche seulement 2 actualités
    } catch (error) {
      console.log("Erreur chargement news", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">

          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt={item.titre}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.titre}
                </h3>

                <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                  {item.contenu}
                </p>

                <button
                  onClick={() => navigate(`/actualites/${item.id}`)}
                  className="mt-4 text-green-700 font-semibold hover:text-green-900"
                >
                  Voir plus →
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* 🔥 BOUTON VOIR PLUS */}
        <button
          onClick={() => navigate("/actualitePublic")}
          className="mt-10 flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition mx-auto text-sm"
        >
          VOIR PLUS <ArrowRight />
        </button>

      </div>
    </section>
  );
};

export default News;