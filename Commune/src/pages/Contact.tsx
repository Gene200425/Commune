
import { motion } from "framer-motion";
import { useState } from "react";

import {
    Phone,
    Mail,
    MapPin,
    //   Facebook,
    //   Instagram,
    //   Linkedin,
} from "lucide-react";
import MainLayout from "../components/MainLayout";

const ContactSection = () => {

    const [nom, setNom] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const envoyerMessage = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:5000/messages",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nom,
                    email,
                    message,
                }),
            }
        );

        const data = await response.json();

        if (data.success) {
            alert("Message envoyé avec succès");

            setNom("");
            setEmail("");
            setMessage("");
        }
    };

    return (
        <MainLayout>
            <section className=" py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Titre */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-green-900 mb-4">
                            Contact Rapide
                        </h2>

                        <p className="text-green-900 max-w-2xl mx-auto">
                            Contactez facilement la mairie pour toute information ou demande.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-10">

                        {/* Informations */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl p-10 shadow-2xl"
                        >

                            <h3 className="text-3xl font-bold text-green-900 mb-8">
                                Informations
                            </h3>

                            <div className="space-y-6">

                                {/* Téléphone */}
                                <div className="flex items-start gap-4">
                                    <Phone className="text-green-800 mt-1" size={28} />

                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">
                                            Téléphone
                                        </h4>

                                        <p className="text-gray-600">
                                            +229 01 90 00 00 00
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <Mail className="text-green-800 mt-1" size={28} />

                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">
                                            Email
                                        </h4>

                                        <p className="text-gray-600">
                                            contact@mairie-djidja.bj
                                        </p>
                                    </div>
                                </div>

                                {/* Adresse */}
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-green-800 mt-1" size={28} />

                                    <div>
                                        <h4 className="font-bold text-lg text-gray-800">
                                            Adresse
                                        </h4>

                                        <p className="text-gray-600">
                                            Mairie de Djidja, Département du Zou, Bénin
                                        </p>
                                    </div>
                                </div>

                            </div>

                            {/* Réseaux sociaux */}
                            <div className="mt-10">

                                <h4 className="font-bold text-lg text-gray-800 mb-4">
                                    Réseaux sociaux
                                </h4>

                                <div className="flex gap-4">

                                    <a
                                        href="#"
                                        className="bg-green-100 hover:bg-green-200 transition p-4 rounded-full"
                                    >
                                        f {/* <Facebook className="text-green-800" /> */}
                                    </a>

                                    <a
                                        href="#"
                                        className="bg-green-100 hover:bg-green-200 transition p-4 rounded-full"
                                    >
                                        Ins {/* <Instagram className="text-green-800" /> */}
                                    </a>

                                    <a
                                        href="#"
                                        className="bg-green-100 hover:bg-green-200 transition p-4 rounded-full"
                                    >
                                        lin  {/* <Linkedin className="text-green-800" /> */}
                                    </a>

                                </div>
                            </div>

                        </motion.div>

                        {/* Formulaire */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-3xl p-10 shadow-2xl"
                        >

                            <h3 className="text-3xl font-bold text-green-900 mb-8">
                                Envoyer un message
                            </h3>

                            <form onSubmit={envoyerMessage}
                                className="space-y-6">

                                {/* Nom */}
                                <div>
                                    <label className="block mb-2 font-medium text-gray-700">
                                        Nom complet
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Votre nom"
                                        value={nom}
                                        onChange={(e) =>
                                            setNom(e.target.value)
                                        }
                                        className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-700"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-2 font-medium text-gray-700">
                                        Adresse email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Votre email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-700"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block mb-2 font-medium text-gray-700">
                                        Message
                                    </label>

                                    <textarea
                                        rows={5}
                                        placeholder="Votre message..."
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-green-700"
                                    ></textarea>
                                </div>

                                {/* Bouton */}
                                <button
                                    type="submit"
                                    className="bg-green-800 hover:bg-green-900 transition text-white px-8 py-4 rounded-xl font-semibold w-full"
                                >
                                    Envoyer le message
                                </button>

                            </form>

                        </motion.div>

                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default ContactSection;