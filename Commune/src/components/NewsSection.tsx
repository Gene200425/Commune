import News from "./News";

const NewsSection = () => {
  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* Featured */}
        <div>

          <h2 className="text-3xl font-bold text-[#0D2B52] mb-10">
            À LA UNE
          </h2>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070"
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="p-8">

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                CADRE DE VIE
              </span>

              <h3 className="text-2xl font-bold text-[#0D2B52] mt-6">
                Fleurissement de la commune
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Découvrez les actions menées pour embellir notre cadre de vie.
              </p>

            </div>

          </div>

        </div>

        <News />

        {/* News */}
        {/* <div>

          <h2 className="text-3xl font-bold text-[#0D2B52] mb-10">
            ACTUALITÉS
          </h2>

          <div className="space-y-6">

            {[1,2,3].map((item) => (
              <div
                key={item}
                className="flex items-start gap-5 border-b pb-6"
              >

                <div className="bg-gray-100 p-4 rounded-xl text-center min-w-[70px]">

                  <p className="font-bold text-green-700 text-2xl">
                    15
                  </p>

                  <span className="text-sm text-gray-500">
                    MAI
                  </span>

                </div>

                <div>

                  <h3 className="font-bold text-[#0D2B52]">
                    Réunion publique
                  </h3>

                  <p className="text-gray-600 mt-2">
                    Présentation des projets 2026
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div> */}

      </div>

    </section>
  );
};

export default NewsSection;