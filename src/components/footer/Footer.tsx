"use client";
import { motion } from "framer-motion";
import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-mochaMousse-700 text-babyPink-100 p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="animate-fade-up">
          <p className="text-lg font-semibold">Wedding Day © 2025</p>
        </div>

        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a href="#" className="hover:text-babyPink-300">
            <i className="fab fa-facebook-f"></i> {/* Приклад іконки Facebook */}
          </a>
          <a href="#" className="hover:text-babyPink-300">
            <i className="fab fa-twitter"></i> {/* Приклад іконки Twitter */}
          </a>
          <a href="#" className="hover:text-babyPink-300">
            <i className="fab fa-instagram"></i> {/* Приклад іконки Instagram */}
          </a>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, transform: "translateX(-50px)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-babyPink-300">Home</a></li>
            <li><a href="#about" className="hover:text-babyPink-300">About</a></li>
            <li><a href="#contact" className="hover:text-babyPink-300">Contact</a></li>
          </ul>
        </motion.nav>
      </div>
    </footer>
  );
};

export default memo(Footer);
