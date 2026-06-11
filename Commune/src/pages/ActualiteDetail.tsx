import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Actualite {
  id: number;
  titre: string;
  contenu: string;
  image: string;
  date_publication: string;
}

const ActualiteDetail = () => {
  const { id } = useParams();
  const [actualite, setActualite] = useState<Actualite | null>(null);

  const fetchActualite = async () => {
    const res = await fetch(`http://localhost:5000/actualites/${id}`);
    const data = await res.json();
    setActualite(data);
  };

  useEffect(() => {
    fetchActualite();
  }, [id]);

  if (!actualite) {
    return <p className="p-10">Chargement...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 ">
      <img
        src={`http://localhost:5000/uploads/${actualite.image}`}
        className="w-full h-96 rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {actualite.titre}
      </h1>

      <p className="text-gray-500 mt-2 ">
        {new Date(actualite.date_publication).toLocaleDateString()}
      </p>

      <p className="text-gray-600 mt-4 leading-relaxed break-words whitespace-pre-wrap">
        {actualite.contenu}
      </p>
    </div>
  );
};

export default ActualiteDetail;