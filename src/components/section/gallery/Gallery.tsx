import React, { memo, use } from "react";
import SwiperGallery from "@/components/section/gallery/SwiperGallery";
import Link from "next/link";

const Gallery = ({ filesPromise }: { filesPromise: Promise<any> }) => {
  const data = use(filesPromise);

  console.log("Gallery data", data);

  const files = data.files.map((file) => ({
    id: file.id,
    src: `https://lh3.googleusercontent.com/d/${file.id}`,
  }));

  return (
    <section id="gallery" className="py-16 bg-mochaMousse-100">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-babyPink-500 animate-fade-down">Галерея</h2>
        <div className="mt-6 duration-1000 delay-1400 animate-opacity-in">
          <SwiperGallery files={files.slice(0, 10)} />
        </div>
        <Link
          href="/gallery"
          className="mt-6 inline-block px-6 py-3 bg-babyPink-500 text-white rounded-lg shadow-md hover:bg-babyPink-600 transition"
        >
          Дивитися всі
        </Link>
      </div>
    </section>
  );
};

export default memo(Gallery);
