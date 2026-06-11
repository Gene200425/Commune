import { useEffect, useState } from "react";

interface Actualite {
  id: number;
  titre: string;
  contenu: string;
  image: string;
  date_publication: string;
}

const Actualites = () => {
  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [actualites, setActualites] = useState<Actualite[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  // 🔄 Charger les actualités
  const fetchActualites = async () => {
    const response = await fetch("http://localhost:5000/actualites");
    const data = await response.json();
    setActualites(data);
  };

  useEffect(() => {
    fetchActualites();
  }, []);

  // 🧠 Ajouter ou modifier
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("contenu", contenu);

    if (image) {
      formData.append("image", image);
    }

    // ✏️ MODE MODIFICATION
    if (editId) {
      const response = await fetch(
        `http://localhost:5000/actualites/${editId}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Actualité modifiée");

        setEditId(null);
        setTitre("");
        setContenu("");
        setImage(null);

        fetchActualites();
      }
    }

    // ➕ MODE AJOUT
    else {
      const response = await fetch(
        "http://localhost:5000/actualites",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Actualité publiée");

        setTitre("");
        setContenu("");
        setImage(null);

        fetchActualites();
      }
    }
  };

  // 🗑️ Supprimer
  const supprimerActualite = async (id: number) => {
    const confirmation = window.confirm("Supprimer cette actualité ?");
    if (!confirmation) return;

    await fetch(`http://localhost:5000/actualites/${id}`, {
      method: "DELETE",
    });

    fetchActualites();
  };

  // ✏️ Charger données dans formulaire pour modifier
  const handleEdit = (actu: Actualite) => {
    setEditId(actu.id);
    setTitre(actu.titre);
    setContenu(actu.contenu);
    setImage(null);
  };

  // ❌ Annuler modification
  const cancelEdit = () => {
    setEditId(null);
    setTitre("");
    setContenu("");
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Gestion des actualités
        </h1>

        {/* FORMULAIRE */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow mb-10"
        >
          <h2 className="text-2xl font-semibold mb-5">
            {editId ? "Modifier l'actualité" : "Ajouter une actualité"}
          </h2>

          <input
            type="text"
            placeholder="Titre"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            required
          />

          <textarea
            placeholder="Contenu"
            value={contenu}
            onChange={(e) => setContenu(e.target.value)}
            className="w-full border p-3 rounded mb-4"
            rows={5}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setImage(e.target.files ? e.target.files[0] : null)
            }
            className="mb-4"
          />

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded"
            >
              {editId ? "Modifier" : "Publier"}
            </button>

            {editId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-500 text-white px-6 py-3 rounded"
              >
                Annuler
              </button>
            )}
          </div>
          
        </form>

        {/* LISTE */}
        <div className="space-y-6">
          {actualites.map((actu) => (
            <div
              key={actu.id}
              className="bg-white p-5 rounded-xl shadow"
            >
              <img
                src={`http://localhost:5000/uploads/${actu.image}`}
                alt={actu.titre}
                className="w-full h-60 object-cover rounded mb-4"
              />

              <h2 className="text-2xl font-bold">{actu.titre}</h2>

              <p className="text-gray-600 mt-2">{actu.contenu}</p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => handleEdit(actu)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Modifier
                </button>

                <button
                  onClick={() => supprimerActualite(actu.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Actualites;