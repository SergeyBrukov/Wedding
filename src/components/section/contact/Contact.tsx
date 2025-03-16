import React, { memo } from "react";

const Contact = () => {
  return (
    <section id="contact" className="opacity-0 py-16 bg-gradient-to-r from-ivory to-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-5xl font-greatVibes text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1000 animate-opacity-in translate-y-0">
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
      </div>
    </section>
  );
};

export default memo(Contact);
