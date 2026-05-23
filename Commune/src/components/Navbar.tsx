import { Link } from "react-router-dom";
import { Menu, Search } from "lucide-react";
import CommuneDropdown from "./CommuneDropdown";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link to="/">
          <div >

            <img
            src="./src/assets/Logo_djidja12.png"
            alt=""
            className="rounded-3xl w-20 h-20 object-cover"
          />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-semibold text-[#0D2B52]">

          <Link to="/Home">
            <li className="hover:text-green-700 transition cursor-pointer">
              ACCUEIL
            </li>
          </Link>

          <CommuneDropdown />

          <Link to="/administration">
            <li className="hover:text-green-700 transition cursor-pointer">
              ADMINISTRATION
            </li>
          </Link>

          <Link to="/actualites">
            <li className="hover:text-green-700 transition cursor-pointer">
              ACTUALITÉS
            </li>
          </Link>

          <Link to="/agenda">
            <li className="hover:text-green-700 transition cursor-pointer">
             
            </li>
          </Link>

          <Link to="/tourisme">
            <li className="hover:text-green-700 transition cursor-pointer">
              TOURISME
            </li>
          </Link>

          <Link to="/contact">
            <li className="hover:text-green-700 transition cursor-pointer">
              CONTACT
            </li>
          </Link>

        </ul>

        {/* Search */}
        <div className="hidden md:flex items-center bg-[#0D2B52] text-white px-6 py-4 rounded-xl gap-3 cursor-pointer">

          <Search size={20} />

          <span>Rechercher</span>

        </div>

        {/* Mobile */}
        <button className="lg:hidden">
          <Menu />
        </button>

      </div>

    </nav>
  );
};

export default Navbar;