// import React from "react";

import { ArrowRight } from "lucide-react";

// import { Link } from "lucide-react";


const News = () => {

  const news = [
    {
      title: "Lancement d’un nouveau projet",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070",
      button: "EN SAVOIR PLUS"
    },
    {
      title: "Réhabilitation des routes",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070",
      button: "EN SAVOIR PLUS"
    },

  ];

  return (
    <section className="py-0 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14 text-[#0D2B52]">
          
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt=""
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <button className="hover:text-green-800 text-green-700 text-sm font-semibold py-2 px-4 ">
                {item.button}
              </button>

            </div>
          ))}

        </div>

      </div>

      <button className="mt-10 flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition mx-auto text-sm">
        VOIR PLUS <ArrowRight />
      </button>
      
    </section>
  );
};

export default News;