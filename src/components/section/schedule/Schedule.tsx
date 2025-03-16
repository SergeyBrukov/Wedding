import React, { memo } from "react";
import Image from "next/image";

const Schedule = () => {
  return (
    <section id="schedule" className="opacity-0 py-16 bg-gradient-to-r from-white to-ivory">
      <div className="max-w-7xl mx-auto text-center px-6 flex flex-col items-center">
        <h2 className="text-5xl font-greatVibes text-black animate-opacity-in">
          Розклад
        </h2>
        <div className="mt-6 text-lg text-black flex flex-col items-center gap-12 animate-opacity-in">
          {/* Збір гостей */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[120px] animate-fade-up">
            <div className="flex flex-col gap-3">
              <p className="font-greatVibes text-4xl">Збір гостей</p>
              <span className="text-xl font-semibold">14:00</span>
              <span className="max-w-[250px] text-center text-1xl">
                Готель & Ресторан “Шале”
                Бердичівське шосе, 10
            </span>
            </div>
            <span className="hidden md:block w-[10px] h-[10px] bg-black rounded-full absolute right-[40%]" />
            <Image src="/images/car.svg" width={150} height={150} alt="Весільні фото" />
          </div>

          {/* Церемонія одруження */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[120px] animate-fade-up">
            <div className="flex flex-col gap-3">
              <p className="font-greatVibes text-4xl">Церемонія одруження</p>
              <span className="text-xl font-semibold">15:00</span>
            </div>
            <span className="hidden md:block w-[10px] h-[10px] bg-black rounded-full absolute right-[40%]" />
            <Image src="/images/hoops.svg" width={150} height={150} alt="Весільні фото" />
          </div>

          {/* Святковий банкет */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[120px] animate-fade-up">
            <div className="flex flex-col gap-3">
              <p className="font-greatVibes text-4xl">Святковий банкет</p>
              <span className="text-xl font-semibold">16:00</span>
            </div>
            <span className="hidden md:block w-[10px] h-[10px] bg-black rounded-full absolute right-[40%]" />
            <Image src="/images/glasses.svg" width={150} height={150} alt="Весільні фото" />
          </div>
          <div className="hidden md:block absolute h-full top-0 w-[2px] bg-black z-0"
               style={{ right: "calc(40% + 4px)" }} />
        </div>
      </div>

    </section>
  );
};

export default memo(Schedule);
