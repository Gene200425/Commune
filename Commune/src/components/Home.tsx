// import TopBar from "../components/TopBar";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuickServices from "../components/QuickServices";
import NewsSection from "../components/NewsSection";
import MainLayout from "./MainLayout";
import Stats from "./Stats";
// import AboutSection from "./AboutSection";
// import News from "./News";
// import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <MainLayout>
      <Hero />
      <QuickServices />
      {/* <AboutSection /> */}
      <NewsSection />
      <Stats />
    </MainLayout>
    </>
  );
};

export default Home;