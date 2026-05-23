import {
  Landmark,
  Music,
  Drum,
  Store,
  Newspaper,
  MapPin
} from "lucide-react";

const QuickServices = () => {

  const services = [
    {
  icon: <Landmark size={40} />,
  title: "ATOUTS",
},
{
  icon: <Music size={40} />,
  title: "CULTURE",
},
{
  icon: <Drum size={40} />,
  title: "TRADITIONS",
},
{
  icon: <Store size={40} />,
  title: "MARCHES",
},
{
  icon: <Newspaper size={40} />,
  title: "ACTUALITÉS",
},
    {
      icon: <MapPin size={40} />,
      title: "PLAN DE LA COMMUNE",
    },
  ];

  return (
    <section className="relative z-20 -mt-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl grid md:grid-cols-3 lg:grid-cols-6 overflow-hidden">

          {services.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition"
            >

              <div className="text-green-700 mb-5">
                {item.icon}
              </div>

              <h3 className="font-bold text-[#0D2B52] text-sm">
                {item.title}
              </h3>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default QuickServices;