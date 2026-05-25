import MainLayout from "../components/MainLayout";

const Administration = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">

        <section className="bg-[#0D2B52] py-24 text-white text-center">

          <h1 className="text-6xl font-bold">
            Administration
          </h1>

        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Conseil Communal",
              "Services Municipaux",
              "Documents Administratifs",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >

                <h2 className="text-2xl font-bold text-[#0D2B52]">
                  {item}
                </h2>

                <p className="mt-6 text-gray-600">
                  Informations administratives officielles.
                </p>

              </div>
            ))}

          </div>

        </section>

      </div>
    </MainLayout>
  );
};

export default Administration;