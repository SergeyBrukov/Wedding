"use client";
import { memo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import headerService from "@/service/Header.service";

const HeaderNavigationBlock = () => {
  const pathName = usePathname();
  const [navItems, setNavItems] = useState([]);

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <button
        onClick={toggleMenu}
        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 ${isMenuOpen ? "bg-gray-100 dark:bg-gray-700" : ""}`}
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen ? "true" : "false"}
      >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Для мобільної версії */}
      <div className={`w-max md:hidden ${isMenuOpen ? "block absolute mt-1 z-[1000] right-1" : "hidden"}`} id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {navItems.map((item) => {
            const isHome = item.includes("Home");
            return (
              <li key={item}>
                <Link onClick={toggleMenu} replace href={isHome ? "/" : `#${item.toLowerCase()}`} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Для десктопної версії */}
      <ul className="flex space-x-6 md:flex hidden">
        {navItems.map((item) => {
          const isHome = item.includes("Home");
          return (
            <li key={item} className="animate-slide-in opacity-0 animation-delay-[200ms]">
              <Link replace href={isHome ? "/" : `#${item.toLowerCase()}`} className="hover:text-babyPink-300">
                {item}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default memo(HeaderNavigationBlock);
