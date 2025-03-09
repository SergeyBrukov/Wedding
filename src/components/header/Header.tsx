import { memo } from "react";
import HeaderNavigationBlock from "@/components/header/HeaderNavigationBlock";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full px-8 text-babyPink-100 shadow-lg z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-4xl font-bold animate-fade-down">Wedding Day</Link>
        <HeaderNavigationBlock />
      </div>
    </header>
  );
};

export default memo(Header);
