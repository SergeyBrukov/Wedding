"use client";
import React, { memo, useEffect, useState } from "react";
import footerService from "@/service/Footer.service";
import { TNavMenuItem } from "@/utils/types";
import Link from "next/link";

const FooterNavigationBlock = () => {
  const [navItems, setNavItems] = useState<TNavMenuItem[]>([]);

  useEffect(() => {
    (async () => {
      const data = await footerService.API_METHODS.navigationBlock.getNavigationBlock();
      setNavItems(data.navItems);
    })();
  }, []);

  return (
    <nav>
      <ul className="flex space-x-6 max-lg:flex-col max-lg:space-x-0 max-lg:gap-2 items-center">
        {navItems.map(({slug, url, title}) => {
          const isHome = slug.includes("home");
          return (
            <li key={slug}>
              <Link
                replace
                href={isHome ? "/" : `#${slug}`}
                className="hover:text-babyPink-300"
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default memo(FooterNavigationBlock);
