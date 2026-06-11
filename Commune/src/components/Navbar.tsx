
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import CommuneDropdown from "./CommuneDropdown";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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

          <Link to="/actualitePublic">
            <li className="hover:text-green-700 transition cursor-pointer">
              ACTUALITÉS
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
        {/* Mobile */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-[#0D2B52]"
        >
          <Menu size={30} />
        </button>
      </div>


      {/* Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setOpen(false)}
      ></div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
        <div className="flex items-center justify-between p-6 border-b">

          <h2 className="text-xl font-bold text-[#0D2B52]">
            Menu
          </h2>

          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>

        </div>

        <div className="flex flex-col gap-6 p-6 font-semibold text-[#0D2B52]">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            ACCUEIL
          </Link>

          <Link
            to="/administration"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            ADMINISTRATION
          </Link>

          <Link
            to="/actualitePublic"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            ACTUALITÉS
          </Link>

          <Link
            to="/tourisme"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            TOURISME
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-green-700"
          >
            CONTACT
          </Link>

        </div>
      </div>

    </nav>

  );
};

export default Navbar;