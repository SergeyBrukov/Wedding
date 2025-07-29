import React, { memo } from "react";

const Gifts = () => {
  return (
    <section id="gifts" className="opacity-0 py-16 bg-gradient-to-r from-ivory to-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2
          className="text-5xl font-greatVibes text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1000 animate-opacity-in translate-y-0">Подарунки</h2>
        <p className="mt-4 text-lg text-black animate-fade-up">
          Якщо ви планували дарувати квіти - не поспішайте.
        </p>
        <p className="mt-4 text-lg text-black animate-fade-up">
          Для нас ваша присутність і гарний настрій - це вже найкращий подарунок!
        </p>
        <p className="mt-4 text-lg text-black animate-fade-up">
          Але якщо вам дуже хочеться, щось додати, то будемо тішитись протеїновим батончикам, ізотонікам, ВСАА чи іншим спортивним смаколикам.
        </p>
        <p className="mt-4 text-lg text-black animate-fade-up">
          Квіти - це дуже гарно, але вони швидко в'януть, а от наші м'язи від баночки протеїну будуть тільки рости 😅
        </p>
      </div>
    </section>
  )
}

export default memo(Gifts);
