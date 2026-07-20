
import Hero from "../components/Hero";
import QuickServices from "../components/QuickServices";
import NewsSection from "../components/NewsSection";
import MainLayout from "./MainLayout";
import Stats from "./Stats";

const Home = () => {
  return (
    <>
      <MainLayout>
      <Hero />
      <QuickServices />
      <NewsSection />
      <Stats />
    </MainLayout>
    </>
  );
};

export default Home;