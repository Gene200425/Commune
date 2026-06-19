import { useEffect, useState } from "react";

interface Message {
  id: number;
  nom: string;
  email: string;
  message: string;
  date: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/messages"
      );

      const data = await response.json();

      setMessages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const supprimerMessage = async (id: number) => {
    const confirmation = window.confirm(
      "Supprimer ce message ?"
    );

    if (!confirmation) return;

    try {
      await fetch(
        `http://localhost:5000/messages/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchMessages();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="p-8 ml-90 ">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Messages reçus
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden ">

        <table className="w-full ">

          <thead className="bg-green-800 text-white">

            <tr>
              <th className="p-4 text-left">Nom</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Message</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {messages.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center"
                >
                  Aucun message reçu.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr
                  key={msg.id}
                  className="border-b"
                >
                  <td className="p-4">
                    {msg.nom}
                  </td>

                  <td className="p-4">
                    {msg.email}
                  </td>

                  <td className="p-4">
                    {msg.message}
                  </td>

                  <td className="p-4">
                    {new Date(
                      msg.date
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() =>
                        supprimerMessage(msg.id)
                      }
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Messages;