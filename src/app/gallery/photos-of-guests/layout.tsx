import { memo } from "react";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {children}

      {/*<Link*/}
      {/*  scroll={false}*/}
      {/*  href="https://drive.google.com/drive/folders/1uQgD32BKMHuKKAd0Lt84nS5KAPy0Kcbx"*/}
      {/*  target="_blank"*/}
      {/*  className="fixed bottom-4 right-4 bg-black text-white hover:bg-gray-800 rounded-full p-4 shadow-lg transition-all"*/}
      {/*>*/}
      {/*  <FaPlus className="w-6 h-6 text-white" />*/}
      {/*</Link>*/}
    </div>
  );
};

export default memo(Layout);
