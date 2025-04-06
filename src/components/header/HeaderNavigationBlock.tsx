"use client";
import { memo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import headerService from "@/service/Header.service";
import { TNavMenuItem } from "@/utils/types";

const HeaderNavigationBlock = () => {
  const pathName = usePathname();
  const [navItems, setNavItems] = useState<TNavMenuItem[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await headerService.API_METHODS.navigationBlock.getNavigationBlock();
        setNavItems(data.navItems || []);
      } catch (error) {
        console.error("Помилка завантаження меню:", error);
      }
    })();
  }, [pathName]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Click outside", event.target);
      if (isMenuOpen && !event.target.closest("#navbar-toggle")) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      {/* Кнопка для мобільного меню */}
      <button
        id="navbar-toggle"
        onClick={toggleMenu}
        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-warmGray rounded-lg md:hidden transition-colors duration-300 ${
          isMenuOpen ? "bg-ivory" : "bg-transparent"
        }`}
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen ? "true" : "false"}
      >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke={isMenuOpen ? "black" : "#ffffff"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Мобільне меню */}
      <div className={`w-max md:hidden ${isMenuOpen ? "block absolute mt-1 z-[1000] right-1" : "hidden"}`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 border border-lightBeige rounded-lg bg-ivory md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
          {navItems.map(({slug, url, title}) => {
            const isHome = slug.includes("home");
            return (
              <li key={slug}>
                <Link
                  onClick={toggleMenu}
                  replace
                  href={isHome ? "/" : `#${slug}`}
                  className="block py-2 px-3 text-black rounded-sm hover:bg-paleRose transition-colors duration-300"
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Десктопне меню */}
      <ul className="hidden md:flex space-x-6">
        {navItems.map(({slug, url, title}) => {
          const isHome = slug.includes("home");
          return (
            <li key={slug} className="animate-slide-in opacity-0 animation-delay-[200ms]">
              <Link
                replace
                href={isHome ? "/" : `#${slug}`}
                className="hover:text-cream transition-colors duration-300"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(HeaderNavigationBlock);
