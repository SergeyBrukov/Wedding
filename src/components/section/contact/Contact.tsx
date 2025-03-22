import React, { memo } from "react";
import { FaInstagram, FaPhoneAlt, FaTelegramPlane, FaViber } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="opacity-0 py-16 bg-gradient-to-r from-ivory to-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2
          className="text-5xl font-greatVibes text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1000 animate-opacity-in translate-y-0">
          Контакти
        </h2>
        <p className="mt-4 text-lg text-black animate-fade-up">
          Якщо у вас є запитання, не соромтеся звертатися! Ми будемо раді
          відповісти на всі ваші питання.
        </p>
        <p className="mt-4 text-lg text-black animate-fade-up delay-200">
          Email:{" "}
          <a href="mailto:sdiomant@gmail.com" className="text-babyPink-500 underline">
            sdiomant@gmail.com
          </a>
        </p>

        <div className="mt-6 flex justify-center gap-6 animate-fade-up delay-400">
          <a href="https://t.me/@syrytviktoriia" target="_blank" rel="noopener noreferrer"
             className="text-black text-3xl">
            <FaTelegramPlane />
          </a>
          <a href="viber://chat?number=%2B380639984084" className="text-black text-3xl">
            <FaViber />
          </a>
          <a href="https://www.instagram.com/viktoria_syryt?igsh=ZWk4NzhzaTB1cXdw&utm_source=qr" target="_blank" rel="noopener noreferrer"
             className="text-black text-3xl">
            <FaInstagram />
          </a>
          <a href="tel:+380639984084" className="text-black text-3xl">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
