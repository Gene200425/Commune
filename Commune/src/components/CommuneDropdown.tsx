import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const CommuneDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      {/* Menu principal */}
      <div className="flex items-center gap-1 cursor-pointer font-semibold hover:text-green-700 transition">
        <span>COMMUNE</span>
        <ChevronDown size={18} />
      </div>

      {/* Sous-menu */}
      <div
        className={`absolute top-10 left-0 bg-white shadow-xl rounded-2xl w-64 overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >

        <ul className="text-[#0D2B52] font-medium">

            <Link to="/commune">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Decouvrez la commune 
            </li>
          </Link>

          <Link to="/arrondissements">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Arrondissements
            </li>
          </Link>

          <Link to="/atouts">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Atouts
            </li>
          </Link>

          <Link to="/cultures">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Cultures
            </li>
          </Link>

          <Link to="/traditions">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Traditions
            </li>
          </Link>

          <Link to="/marches">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Marchés
            </li>
          </Link>

          <Link to="/actualites">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Actualités
            </li>
          </Link>

          <Link to="/plan-commune">
            <li className="px-5 py-4 hover:bg-green-50 hover:text-green-700 transition">
              Plan de la commune
            </li>
          </Link>

        </ul>

      </div>
    </div>
  );
};

export default CommuneDropdown;