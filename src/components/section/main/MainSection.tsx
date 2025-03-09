import Image from "next/image";
import React, { memo } from "react";

const MainSection = () => {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Саме зображення */}
      <div className="absolute inset-0">
        <Image
          src="https://caratsandcake.com/_images/webcache3/wedding-websites-16-200849-1651878815_-_abcdef_-_bc85a4aba29748842f4d26ef5e55ba488aed0871.webp"
          alt="Весільне фото"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div
        className="relative text-center text-white z-10 duration-1000 animate-fade-up"
      >
        <h1 className="text-5xl font-bold">Наш Особливий День</h1>
        <p className="mt-4 text-lg">Долучайтесь до святкування нашого кохання</p>
      </div>
    </section>
  )
}

export default memo(MainSection);
