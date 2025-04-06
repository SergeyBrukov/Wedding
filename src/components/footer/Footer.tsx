import React, { memo, use } from "react";
import Image from "next/image";
import FooterNavigationBlock from "@/components/footer/FooterNavigationBlock";

const Footer = () => {

  return (
    <footer className="bg-gradient-to-r from-white to-ivory px-8 py-4 text-black">
      <div className="max-w-7xl mx-auto flex justify-between items-center max-lg:flex-col max-lg:gap-2">
        <p className="text-lg font-greatVibes animate-fade-up">
          <Image layout="fixed" objectFit="cover" src="/images/logo-black.png" alt="logo" width={190} height={60} />
        </p>

        <div
          className="flex space-x-6"
        >
          <a href="#" className="hover:text-babyPink-300">
            <i className="fab fa-facebook-f"></i> {/* Приклад іконки Facebook */}
          </a>
          <a href="#" className="hover:text-babyPink-300">
            <i className="fab fa-twitter"></i> {/* Приклад іконки Twitter */}
          </a>
          <a href="#" className="hover:text-babyPink-300">
            <i className="fab fa-instagram"></i> {/* Приклад іконки Instagram */}
          </a>
        </div>
        <FooterNavigationBlock />
      </div>
    </footer>
  );
};

export default memo(Footer);
