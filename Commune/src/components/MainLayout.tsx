import { type ReactNode } from "react";

import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;