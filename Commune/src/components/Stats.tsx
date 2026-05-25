import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const arrondissements = [
    "Agondji",
    "Agouna",
    "Dan",
    "Djidja centre",
    "Dohouinmè",
    "Gobè",
    "Oungbegame",
    "Mougnon",
    "Monsourou",
    "Outo",
    "Sèto",
    "Zounkon",
];


const stats = [
    {
        number: 168000,
        label: "Population",
        suffix: "+",
    },
    {
        number: 2184,
        label: "Superficie (km²)",
    },
    {
        number: 120,
        label: "Écoles",
        suffix: "+",
    },
    {
        number: 18,
        label: "Centres de santé",
    },
    {
        number: 12,
        label: "Arrondissements",
    },
];

const Counter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 12;

        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end]);

    return (
        <span>
            {count.toLocaleString()}
            {suffix}
        </span>
    );
};

const Stats = () => {
    return (
        <><section className="bg-green-900 py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Titre */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Chiffres Clés
                    </h2>

                    <p className="text-green-100 max-w-2xl mx-auto">
                        Quelques statistiques importantes de la commune.
                    </p>
                </motion.div>

                {/* Cartes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.2,
                            }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-xl"
                        >
                            <h3 className="text-4xl font-bold text-green-800 mb-3">
                                <Counter
                                    end={stat.number}
                                    suffix={stat.suffix} />
                            </h3>

                            <p className="text-gray-600 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section><section className="py-20 bg-gray-100 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Titre */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-4xl font-bold text-green-900 mb-4">
                            Localisation de la Commune
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Découvrez la position géographique de la commune ainsi que ses arrondissements.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-10 items-center">

                        {/* Carte Google Maps */}
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="overflow-hidden rounded-3xl shadow-2xl"
                        >
                            <iframe
                                title="Carte Djidja"
                                src="https://www.google.com/maps?q=Djidja,Benin&output=embed"
                                width="100%"
                                height="450"
                                allowFullScreen
                                loading="lazy"
                                className="border-0 w-full"
                            ></iframe>
                        </motion.div>

                        {/* Informations */}
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white rounded-3xl shadow-xl p-8">

                                <div className="flex items-center gap-3 mb-6">
                                    <MapPin className="text-green-800" size={32} />

                                    <h3 className="text-2xl font-bold text-green-900">
                                        Arrondissements
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {arrondissements.map((arrondissement, index) => (
                                        <div
                                            key={index}
                                            className="bg-green-50 hover:bg-green-100 transition p-4 rounded-xl text-gray-700 font-medium"
                                        >
                                            {arrondissement}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </section></>


    );
};

export default Stats;