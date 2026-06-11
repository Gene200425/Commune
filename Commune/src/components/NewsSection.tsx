import { useEffect, useState } from "react";
import AboutSection from "./AboutSection";
import News from "./News";
import { useNavigate } from "react-router-dom";

interface Actualite {
  id: number;
  titre: string;
  contenu: string;
  image: string;
  date_publication: string;
}

const NewsSection = () => {
  const [featured, setFeatured] = useState<Actualite | null>(null);
  const navigate = useNavigate();

  const fetchFeatured = async () => {
    const res = await fetch("http://localhost:5000/actualites");
    const data = await res.json();

    if (data.length > 0) {
      setFeatured(data[0]); // 🔥 la plus récente = à la une
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, []);

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        <AboutSection />

        {/* ACTUALITÉ À LA UNE */}
        <div>

          <h2 className="text-3xl font-bold text-[#0D2B52] mb-10">
            ACTUALITÉS
          </h2>

          {featured && (
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

              <img
                src={`http://localhost:5000/uploads/${featured.image}`}
                alt={featured.titre}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  À LA UNE
                </span>

                <h3 className="text-2xl font-bold text-[#0D2B52] mt-6">
                  {featured.titre}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {featured.contenu}
                </p>

                <button
                  onClick={() => navigate(`/actualites/${featured.id}`)}
                  className="mt-4 text-green-700 font-semibold hover:text-green-900"
                >
                  Voir plus →
                </button>

              </div>

            </div>
          )}

          {/* LISTE DES AUTRES ACTUALITÉS */}
          <News />
        </div>

      </div>
    </section>
  );
};

export default NewsSection;