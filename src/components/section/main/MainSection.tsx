import Image from "next/image";
import React, { memo } from "react";
import TImeBlockMainSection from "@/components/section/main/TImeBlockMainSection";

const MainSection = () => {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/main-bg.jpg"
          alt="Весільне фото"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div
        className="relative text-center text-white z-10"
      >
        <h1
          className="text-4xl md:text-6xl md:leading-[1.5] font-bold font-greatVibes overflow-hidden animate-typing whitespace-nowrap letter-spacing-wide">Наш
          Особливий День</h1>
        <p
          className="mt-4 text-2xl md:text-4xl font-greatVibes overflow-hidden whitespace-nowrap letter-spacing-wide animate-typing"
          style={{ width: 0, animationDelay: "1.5s" }}
        >
          Долучайтесь до святкування нашого кохання
        </p>
        <TImeBlockMainSection />
      </div>
    </section>
  );
};

export default memo(MainSection);
