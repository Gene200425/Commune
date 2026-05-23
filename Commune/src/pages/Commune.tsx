import MainLayout from "../components/MainLayout";
import { motion } from "framer-motion";

const Commune = () => {
    return (
        <MainLayout>

            {/* HERO SECTION */}
            <section
                className="relative h-[600px] bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('./src/assets/coton.jpg')",
                }}
            >

                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-white max-w-3xl"
                    >

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                            Découvrez la Commune de Djidja
                        </h1>

                        <p className="mt-8 text-xl leading-8">
                            Située au cœur du département du Zou au Bénin,
                            la commune de Djidja séduit par sa richesse culturelle,
                            son potentiel agricole et l’hospitalité de sa population.
                        </p>

                    </motion.div>

                </div>

            </section>

            {/* PRESENTATION */}
            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    <img
                        src="./src/assets/DjidjaDo.jpg"
                        alt=""
                        className="rounded-3xl shadow-2xl"
                    />

                    <div>

                        <h2 className="text-5xl font-bold text-[#0D2B52] mb-10">
                            La Ville de Djidja
                        </h2>

                        <p className="text-gray-600 leading-9 text-lg">
                            La commune de Djidja est l’une des importantes communes du département du Zou,
                            au centre du Bénin. Reconnue pour son dynamisme agricole,
                            son patrimoine culturel et ses traditions ancestrales,
                            elle constitue un territoire de grande valeur historique et humaine.
                        </p>

                        <p className="text-gray-600 leading-9 text-lg mt-8">
                            Djidja offre un cadre paisible où se mêlent harmonieusement
                            nature, culture et développement local.
                        </p>

                    </div>

                </div>

            </section>

            {/* TOURISME */}
            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h2 className="text-5xl font-bold text-[#0D2B52]">
                            Tourisme à Djidja
                        </h2>

                        <p className="mt-6 text-gray-600 text-lg">
                            Découvrez les richesses naturelles et culturelles de la commune.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                        {[
                            {
                                title: "Sites Naturels",
                                text: "Collines verdoyantes, forêts sacrées et paysages ruraux.",
                            },
                            {
                                title: "Chefferies Traditionnelles",
                                text: "Patrimoine historique et culturel ancestral.",
                            },
                            {
                                title: "Marchés Locaux",
                                text: "Produits agricoles et artisanat traditionnel.",
                            },
                            {
                                title: "Festivals Culturels",
                                text: "Danses, chants et manifestations populaires.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition"
                            >

                                <h3 className="text-2xl font-bold text-[#0D2B52] mb-6">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-8">
                                    {item.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* CULTURE */}
            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                    <div>

                        <h2 className="text-5xl font-bold text-[#0D2B52] mb-10">
                            Culture et Traditions
                        </h2>

                        <p className="text-gray-600 leading-9 text-lg text-justify">
                            Djidja est majoritairement peuplée de populations fon,
                            reconnues pour la richesse de leurs traditions et leurs valeurs ancestrales.
                        </p>

                        <p className="text-gray-600 leading-9 text-lg mt-8 text-justify">
                            Les cérémonies traditionnelles, les danses folkloriques,
                            les chants et l’artisanat local constituent un patrimoine culturel vivant.
                        </p>

                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=2070"
                        alt=""
                        className="rounded-3xl shadow-2xl"
                    />

                </div>

            </section>

            {/* HISTOIRE */}
            <section className="py-24 bg-gray-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h2 className="text-5xl font-bold text-[#0D2B52]">
                            Histoire de Djidja
                        </h2>

                    </div>

                    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                        <img
                            src="./src/assets/Historique.jpg"
                            alt=""
                            className="rounded-3xl shadow-2xl object-cover h-[70vh]"
                        />

                        <p className="text-gray-600 leading-10 text-lg text-justify">
                            La commune de Djidja, située dans le département du Zou au centre du Bénin,
                            est riche d'une histoire marquée par la tradition, la résilience et l'évolution administrative.
                            <br/>
                            Autrefois simple regroupement de villages, Djidja s'est structuré progressivement
                            autour de la chefferie traditionnelle et des échanges agricoles. Elle tire son nom de
                            l'expression fon, <strong style={{ color: "green" }}>Dji-djè</strong>, qui signifie littéralement <strong style={{ color: "green" }}>la recolte à donnée</strong>
                            offre ainsi la fertilité territoriale de djidja.
                            <br/> 
                            Sous la colonisation, Djidja faisait partie du cercle d'Abomey. Elle a été établie
                            en commune à part entière à la faveur de la réforme administrative de 1978, puis consolidée
                            par la décentralisation de 2002.
                            <br/>
                            Aujourd'hui, Djidja est reconnue pour sa diversité culturelle, son dynamisme agricole et
                            ses efforts en matière de gouvernance locale. Elle continue d'écrire son histoire à travers
                            ses projets de développement et l'engagement de sa population.

                        </p>

                    </div>

                </div>

            </section>

            {/* ATOUTS */}
            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h2 className="text-5xl font-bold text-[#0D2B52]">
                            Les Atouts de Djidja
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-3 gap-10">

                        {[
                            {
                                title: "Agriculture",
                                text: "Production du maïs, manioc, igname et haricot.",
                            },
                            {
                                title: "Élevage",
                                text: "Présence importante de bovins, volailles et caprins.",
                            },
                            {
                                title: "Accessibilité",
                                text: "Position stratégique sur l’axe Bohicon–Dogbo.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-3xl p-10"
                            >

                                <h3 className="text-2xl font-bold text-[#0D2B52] mb-6">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-8">
                                    {item.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* MAIRIE */}
            <section className="py-24 bg-[#0D2B52] text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h2 className="text-5xl font-bold">
                            La Mairie de Djidja
                        </h2>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">

                        <div>

                            <h3 className="text-3xl font-bold mb-8">
                                Le Maire
                            </h3>

                            <p className="leading-9 text-lg text-gray-200">
                                Le Maire de Djidja est le premier responsable
                                de l’administration communale et veille
                                au développement harmonieux de la commune.
                            </p>

                        </div>

                        <div>

                            <h3 className="text-3xl font-bold mb-8">
                                Missions de la Mairie
                            </h3>

                            <ul className="space-y-4 text-gray-200 text-lg">

                                <li>• Gestion de l’état civil</li>
                                <li>• Développement territorial</li>
                                <li>• Services sociaux de base</li>
                                <li>• Gouvernance locale</li>
                                <li>• Bien-être des populations</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

            {/* CONTACT */}
            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="bg-gray-100 rounded-3xl p-12">

                        <h2 className="text-5xl font-bold text-[#0D2B52] mb-12 text-center">
                            Coordonnées de la Mairie
                        </h2>

                        <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-700">

                            <div>
                                <p className="mb-6">
                                    📍 Mairie de Djidja, Département du Zou, Bénin
                                </p>

                                <p className="mb-6">
                                    ☎ +229 XX XX XX XX
                                </p>

                                <p>
                                    ✉ mairie@djidja.bj
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold text-[#0D2B52] mb-4">
                                    Horaires d’ouverture
                                </p>

                                <p>
                                    Lundi à Vendredi
                                </p>

                                <p>
                                    08h00 — 17h00
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </MainLayout>
    );
};

export default Commune;