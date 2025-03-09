"use client"
import { motion } from "framer-motion";
import React, { memo } from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-mochaMousse-100">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-babyPink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Контакти
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-mochaMousse-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Якщо у вас є запитання, не соромтеся звертатися! Ми будемо раді
          відповісти на всі ваші питання.
        </motion.p>
        <motion.p
          className="mt-4 text-lg text-mochaMousse-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Email: {" "}
          <a href="mailto:sdiomant@gmail.com" className="text-babyPink-500 underline">sdiomant@gmail.com</a>
        </motion.p>
      </div>
    </section>
  )
}

export default memo(Contact);
