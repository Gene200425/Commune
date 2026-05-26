// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import historique from "../assets/Historique.jpg";
import admin from "../assets/admin.png";
import coton from "../assets/Coton.jpg";
import DjidjaDo from "../assets/DjidjaDo.jpg";
import { motion, AnimatePresence } from "framer-motion";

// import CommuneImage from "../assets/ville_Djidja.png";

const stats = [
    {
        number: "12",
        label: "Arrondissements",
    },
    {
        number: "200+",
        label: "Villages",
    },
    {
        number: "Agriculture",
        label: "Activité dominante",
    },
];

const images = [historique, admin, coton, DjidjaDo];



const AboutSection = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1); // toujours vers la droite
            setCurrentImage((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-2 bg-white px-6">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mt-0 mb-6 leading-tight">
                    A propos de DJIDJA
                </h2>

                <div className="grid gap-14 items-center">

                    {/* IMAGE SLIDER */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl">

                            <AnimatePresence mode="wait">

                                <motion.img
                                    key={currentImage}
                                    src={images[currentImage]}
                                    alt="Commune de Djidja"

                                    initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}

                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                    }}

                                    className="absolute w-full h-full object-cover"
                                />

                            </AnimatePresence>

                        </div>

                        {/* Carte flottante */}
                        <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4">
                            <h3 className="text-xl font-bold text-green-800">
                                3ème plus grande commune du Bénin
                            </h3>

                            <p className="text-gray-600">
                                180 000 Habitants
                            </p>
                        </div>
                    </motion.div>

                    {/* Texte */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >


                        <p className="text-gray-600 leading-relaxed mb-6">
                            Située au cœur du département du Zou au Bénin,
                            la commune de Djidja est reconnue pour sa richesse
                            culturelle, son dynamisme agricole et son hospitalité.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-10">
                            Avec ses nombreux villages et arrondissements,
                            Djidja joue un rôle important dans le développement
                            économique local grâce à l’agriculture, au commerce
                            et aux initiatives communautaires.
                        </p>

                        {/* Statistiques */}
                        <div className="grid sm:grid-cols-3 gap-6">

                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-green-50 rounded-2xl p-6 text-center"
                                >
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                                        {stat.number}
                                    </h3>

                                    <p className="text-gray-600 text-sm">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}

                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;