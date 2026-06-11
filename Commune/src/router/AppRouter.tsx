import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Actualites from "../pages/dashboard/Actualites";
import Documents from "../pages/dashboard/Documents";
import Messages from "../pages/dashboard/Messages";
import Profil from "../pages/dashboard/Profil";

import Home from "../components/Home";
import Commune from "../pages/Commune";
import Footer from "../components/Footer";
import Administration from "../pages/Administration";
import Login from "../pages/Login";

import Contact from "../pages/Contact";
import ProtectedRoute from "./ProtectedRoute";
import ActualitePublic from "../pages/ActualitéPublic";
import ActualiteDetail from "../pages/ActualiteDetail";


const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/commune" element={<Commune />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/actualitePublic" element={<ActualitePublic />} />
        <Route path="/actualites/:id" element={<ActualiteDetail />} />

        <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout/></ProtectedRoute>}>
          <Route path="actualites" element={<Actualites />} />
          <Route path="documents" element={<Documents />} />
          <Route path="messages" element={<Messages />} />
          <Route path="profil" element={<Profil />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/Footer" element={<Footer />} />

      </Routes>

    </BrowserRouter >
  );
};

export default AppRouter;