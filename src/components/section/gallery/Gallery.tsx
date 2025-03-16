import React, { memo, use } from "react";
import SwiperGallery from "@/components/section/gallery/SwiperGallery";
import Link from "next/link";

const Gallery = ({ filesPromise }: { filesPromise: Promise<unknown> }) => {
  const data = use(filesPromise);

  const files = data.files.map((file) => ({
    id: file.id,
    src: `https://lh3.googleusercontent.com/d/${file.id}`,
  }));

  return (
    <section id="gallery" className="opacity-0 py-16 bg-gradient-to-r from-ivory to-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-5xl font-greatVibes text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1000 animate-opacity-in translate-y-0">Галерея</h2>
        <div className="mt-6 duration-1000 delay-1400 animate-opacity-in">
          <SwiperGallery files={files.slice(0, 10)} />
        </div>
        <Link
          href="/gallery"
          className="mt-6 inline-block px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-babyPink-600 transition"
        >
          Дивитися всі
        </Link>
      </div>
    </section>
  );
};

export default memo(Gallery);
