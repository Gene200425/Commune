import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { useNavigate } from "react-router-dom";

interface Actualite {
  id: number;
  titre: string;
  contenu: string;
  image: string;
  date_publication: string;
}

const ActualitesPublic = () => {
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const navigate = useNavigate();

  const fetchActualites = async () => {
    const response = await fetch("http://localhost:5000/actualites");
    const data = await response.json();
    setActualites(
  data.sort((b: { date_publication: string | number | Date; }, a: { date_publication: string | number | Date; }) =>
    new Date(a.date_publication).getTime() -
    new Date(b.date_publication).getTime()
  )
);
  };

  useEffect(() => {
    fetchActualites();
  }, []);

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
            Actualités de la commune
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {actualites.map((actu) => (
              <div
                key={actu.id}
                className="bg-white rounded-xl shadow overflow-hidden"
              >
                {actu.image && (
                  <img
                    src={`http://localhost:5000/uploads/${actu.image}`}
                    alt={actu.titre}
                    className="w-full h-60 object-cover"
                  />
                )}

                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2">
                    {actu.titre}
                  </h2>

                  <p className="text-gray-600 line-clamp-4">
                    {actu.contenu}
                  </p>

                  <p className="text-sm text-gray-400 mt-3">
                    {new Date(actu.date_publication).toLocaleDateString()}
                  </p>

                  <button
                    onClick={() => navigate(`/actualites/${actu.id}`)}
                    className="mt-4 text-green-700 font-semibold hover:text-green-900"
                  >
                    Voir plus →
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </MainLayout>
  );
};

export default ActualitesPublic;