import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 mt-auto">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-800 pb-14">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-4 mb-6">

              <img
                src="./src/assets/Logo_djidja10.png"
                alt="Logo Djidja"
                className="w-16 h-16 rounded-xl object-cover"
              />

              <div>
                <h2 className="font-bold text-xl">
                  Commune de Djidja
                </h2>

                <p className="text-slate-400 text-sm">
                  République du Bénin
                </p>
              </div>

            </div>

            <p className="text-slate-400 text-sm leading-7">
              Portail officiel de la Commune de Djidja.
              Retrouvez les actualités, informations administratives
              et services municipaux.
            </p>

            <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-xl hover:bg-blue-600 transition"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="#"
                className="bg-slate-800 p-3 rounded-xl hover:bg-pink-600 transition"
              >
                <FaInstagram size={18} />
              </a>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="font-bold mb-6 uppercase tracking-wider">
              Navigation
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link to="/home" className="hover:text-white">
                  Accueil
                </Link>
              </li>

              <li>
                <Link to="/commune" className="hover:text-white">
                  Commune
                </Link>
              </li>

              <li>
                <Link to="/administration" className="hover:text-white">
                  Administration
                </Link>
              </li>

              <li>
                <Link to="/actualitePublic" className="hover:text-white">
                  Actualités
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="font-bold mb-6 uppercase tracking-wider">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Informations municipales</li>

              <li>Vie communale</li>

              <li>Documents administratifs</li>

              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-bold mb-6 uppercase tracking-wider">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+229 XX XX XX XX</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>contact@mairie-djidja.bj</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>Djidja, Département du Zou, Bénin</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bas du footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-8 text-slate-500 text-sm">

          <p>
            © {new Date().getFullYear()} Commune de Djidja.
            Tous droits réservés.
          </p>

          <div className="flex gap-6">

            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>

            <span>
              République du Bénin 🇧🇯
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;