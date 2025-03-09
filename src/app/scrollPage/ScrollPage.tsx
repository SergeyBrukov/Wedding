"use client";
import { memo, useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollPage = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return <></>;
}

export default memo(ScrollPage);
