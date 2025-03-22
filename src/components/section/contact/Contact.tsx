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
          <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer"
             className="text-blue-500 text-3xl hover:text-blue-700">
            <FaTelegramPlane />
          </a>
          <a href="viber://chat?number=%2B380123456789" className="text-purple-500 text-3xl hover:text-purple-700">
            <FaViber />
          </a>
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer"
             className="text-pink-500 text-3xl hover:text-pink-700">
            <FaInstagram />
          </a>
          <a href="tel:+380633050921" className="text-green-500 text-3xl hover:text-green-700">
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
