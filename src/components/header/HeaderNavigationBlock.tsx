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

  console.log("pathName", pathName, navItems);

  return (
    <nav>
      <ul className="flex space-x-6">
        {navItems.map((item) => {
          const isHome = item.includes("Home");
          return (
            <li key={item} className="animate-slide-in opacity-0 animation-delay-[200ms]">
              <Link replace href={isHome ? "/" : `#${item.toLowerCase()}`} className="hover:text-babyPink-300">
                {item}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default memo(HeaderNavigationBlock);
