"use client"
import { motion } from "framer-motion";
import React, { memo } from "react";

const Schedule = () => {
  return (
    <section id="schedule" className="py-16 bg-mochaMousse-50">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl font-bold text-babyPink-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Розклад
        </motion.h2>
        <motion.ul
          className="mt-6 text-lg text-mochaMousse-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <li className="my-4">
            <span className="font-semibold">14:00</span> - Церемонія
          </li>
          <li className="my-4">
            <span className="font-semibold">16:00</span> - Фотосесія
          </li>
          <li className="my-4">
            <span className="font-semibold">18:00</span> - Святковий банкет
          </li>
          {/* Можна додати більше подій */}
        </motion.ul>
      </div>
    </section>
  )
}

export default memo(Schedule);
