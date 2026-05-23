const Footer = () => {
  return (
    <footer className="bg-[#0D2B52] text-white pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">

        <div>

          <img alt="Chefferie traditionnelle" className="md:w-full w-1/2 rounded-lg shadow-md" src="./src/assets/Logo_djidja10.png" />

          {/* <p className="mt-6 leading-8 text-gray-300">
            1 place de la mairie <br />
            12345 Saint-Clair <br />
            Tél. 01 23 45 67 89
          </p> */}

        </div>

        <div>
          <h3 className="font-bold mb-6">
            MA COMMUNE
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Présentation</li>
            <li>Histoire</li>
            <li>Budget</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6">
            VIE MUNICIPALE
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Conseil</li>
            <li>Commissions</li>
            <li>Participation</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6">
            ENFANCE
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Écoles</li>
            <li>Jeunesse</li>
            <li>Cantine</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-6">
            SOLIDARITÉ
          </h3>

          <ul className="space-y-3 text-gray-300">
            <li>Action sociale</li>
            <li>Seniors</li>
            <li>Santé</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-400">
        © Commune de Djidja - Tous droits réservés
      </div>

    </footer>
  );
};

export default Footer;