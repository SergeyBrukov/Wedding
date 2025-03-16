import React, { memo } from "react";

const Schedule = () => {
  return (
    <section id="schedule" className="opacity-0 py-16 bg-gradient-to-r from-white to-ivory">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-5xl font-greatVibes text-black animate-opacity-in">
          Розклад
        </h2>
        <div className="mt-6 text-lg text-black flex flex-col items-center gap-[25px] animate-opacity-in">
          <div className="flex flex-col items-center gap-[5px] animate-fade-up">
            <p className="font-greatVibes text-3xl">
              Збір гостей
            </p>
            <span>
              14:00
            </span>
            <span className="block max-w-[200px]">
              ресторанно-готельний
              комплекс "Шале"
              Бердичівське шосе, 10
            </span>
          </div>

          <div className="flex flex-col items-center gap-[5px] animate-fade-up">
            <p className="font-greatVibes text-3xl">
              Церемонія одруження
            </p>
            <span>
              15:00
            </span>
          </div>

          <div className="flex flex-col items-center gap-[5px] animate-fade-up">
            <p className="font-greatVibes text-3xl">
              Святковий банкет
            </p>
            <span>
              16:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Schedule);
