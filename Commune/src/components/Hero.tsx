//import React from "react";
import { motion } from "framer-motion";
//import Ville_Djidja from "../assets/ville_Djidja.png";
import videoDjidja from "../assets/videoDjidja.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoDjidja} type="video/mp4" />
      </video>

      {/* Overlay sombre */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Bienvenue <br />
            dans la commune de DJIDJA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg max-w-2xl"
          >
            Une terre d’histoire, de culture et de développement au cœur du Zou, le grenier agricole entre tradition et modernité.
          </motion.p>

          <motion.a
            href="/commune"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 inline-block px-8 py-4 bg-green-700 rounded-xl hover:bg-green-800 transition"
          >
            Découvrir
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default Hero;