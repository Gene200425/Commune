import { motion } from "framer-motion";

import CommuneImage from "../assets/ville_Djidja.png";

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

const AboutSection = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid  gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={CommuneImage}
              alt="Commune de Djidja"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />

            {/* Carte flottante */}
            <div className="absolute bottom-6 left-6 bg-white shadow-xl rounded-2xl px-6 py-4">
              <h3 className="text-3xl font-bold text-green-800">
                168 000+
              </h3>

              <p className="text-gray-600">
                Habitants
              </p>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-green-700 font-semibold uppercase tracking-widest">
              À propos
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mt-4 mb-6 leading-tight">
              Découvrez la commune de Djidja
            </h2>

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