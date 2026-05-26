import { motion } from "framer-motion";

import {
  Building2,
  Users,
  FileText,
  Phone,
  Mail,
  Clock,
  MapPin,
} from "lucide-react";

import marie from "../assets/mairie.png";
import admin from "../assets/admin.png"
import MainLayout from "../components/MainLayout";

const teamMembers = [
  {
    name: "M. Jean Dupont",
    role: "Maire de la Commune",
  },
  {
    name: "Mme Sophie Alavo",
    role: "1ère Adjointe au Maire",
  },
  {
    name: "M. Pierre Hounkpe",
    role: "Secrétaire Exécutif",
  },
];

const services = [
  {
    icon: <FileText size={32} />,
    title: "État Civil",
    description:
      "Gestion des actes de naissance, mariage et décès.",
  },
  {
    icon: <Building2 size={32} />,
    title: "Urbanisme",
    description:
      "Permis de construire et aménagement urbain.",
  },
  {
    icon: <Users size={32} />,
    title: "Affaires Sociales",
    description:
      "Accompagnement et aides sociales aux citoyens.",
  },
];

const documents = [
  "Budget Communal 2026",
  "Rapport Annuel",
  "Plan de Développement",
  "Formulaire Administratif",
];

const Administration = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50">

        {/* HERO */}
        <section
          className="relative h-[40vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${admin})`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Administration Communale
            </h1>

            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez l’organisation administrative et les
              services de la mairie de Djidja.
            </p>
          </motion.div>
        </section>

        {/* MOT DU MAIRE */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={marie}
                alt="Maire"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="uppercase tracking-widest text-green-700 font-semibold">
                Mot du Maire
              </span>

              <h2 className="text-4xl font-bold text-green-900 mt-4 mb-6">
                Bienvenue à la mairie de Djidja
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">
                La mairie de Djidja œuvre chaque jour pour
                améliorer les conditions de vie des citoyens,
                renforcer le développement local et promouvoir
                les richesses culturelles de la commune.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Notre ambition est de construire une commune
                moderne, inclusive et dynamique au service de tous.
              </p>

              <div>
                <h3 className="font-bold text-xl text-green-900">
                  M. Jean Dupont
                </h3>

                <p className="text-gray-500">
                  Maire de la Commune
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ÉQUIPE MUNICIPALE */}
        <section className="py-20 px-6 bg-green-50">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Équipe Municipale
              </h2>

              <p className="text-gray-600">
                Découvrez les principaux responsables administratifs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-3xl p-8 shadow-xl text-center"
                >
                  <div className="w-28 h-28 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users
                      size={50}
                      className="text-green-800"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-green-900 mb-2">
                    {member.name}
                  </h3>

                  <p className="text-gray-600">
                    {member.role}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-green-900 mb-4">
                Services Administratifs
              </h2>

              <p className="text-gray-600">
                Les principaux services proposés par la mairie.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  whileHover={{ y: -10 }}
                  className="bg-green-50 rounded-3xl p-8 shadow-lg"
                >
                  <div className="text-green-800 mb-6">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-green-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="py-20 px-6 bg-green-900">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Documents Officiels
              </h2>

              <p className="text-green-100">
                Consultez et téléchargez les documents administratifs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-xl"
                >
                  <FileText
                    size={42}
                    className="text-green-800 mx-auto mb-4"
                  />

                  <h3 className="font-bold text-gray-800 mb-4">
                    {doc}
                  </h3>

                  <button className="bg-green-800 hover:bg-green-900 transition text-white px-5 py-3 rounded-xl">
                    Télécharger
                  </button>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* HORAIRES & CONTACT */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 rounded-3xl p-10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <Clock
                  size={40}
                  className="text-green-800"
                />

                <h2 className="text-3xl font-bold text-green-900">
                  Horaires
                </h2>
              </div>

              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  <strong>Lundi - Vendredi :</strong>
                  <br />
                  08h00 - 17h30
                </p>

                <p>
                  <strong>Samedi :</strong>
                  <br />
                  09h00 - 13h00
                </p>

                <p>
                  <strong>Dimanche :</strong>
                  <br />
                  Fermé
                </p>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 rounded-3xl p-10 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-green-900 mb-8">
                Contact Administratif
              </h2>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <Phone className="text-green-800" />

                  <p className="text-gray-700">
                    +229 01 90 00 00 00
                  </p>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-green-800" />

                  <p className="text-gray-700">
                    contact@mairie-djidja.bj
                  </p>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-green-800" />

                  <p className="text-gray-700">
                    Djidja, Département du Zou, Bénin
                  </p>
                </div>

              </div>
            </motion.div>

          </div>
        </section>

      </div>
    </MainLayout>
  );
};

export default Administration;