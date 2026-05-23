// import React from "react";
import { FileText, Building2, Landmark } from "lucide-react";

const Services = () => {

  const data = [
    {
      icon: <FileText size={40} />,
      title: "Documents",
      desc: "Demande d'actes administratifs",
    },
    {
      icon: <Building2 size={40} />,
      title: "Urbanisme",
      desc: "Informations sur les terrains",
    },
    {
      icon: <Landmark size={40} />,
      title: "Administration",
      desc: "Services municipaux",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Nos Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-3xl hover:shadow-2xl transition"
            >
              <div className="text-green-700 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;