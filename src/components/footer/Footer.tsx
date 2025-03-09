import React, { memo } from "react";

const Footer = () => {
  return (
    <footer className="bg-mochaMousse-700 text-babyPink-100 p-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center max-lg:flex-col max-lg:gap-2">
        <div className="animate-fade-up">
          <p className="text-lg font-semibold">Wedding Day © 2025</p>
        </div>

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

        <nav>
          <ul className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:gap-2 items-center">
            <li><a href="#home" className="hover:text-babyPink-300">Home</a></li>
            <li><a href="#about" className="hover:text-babyPink-300">About</a></li>
            <li><a href="#contact" className="hover:text-babyPink-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default memo(Footer);
