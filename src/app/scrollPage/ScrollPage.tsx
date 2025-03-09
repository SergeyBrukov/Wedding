"use client";
import { memo, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollPage = () => {
  const pathname = usePathname();
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
}

export default memo(ScrollPage);
