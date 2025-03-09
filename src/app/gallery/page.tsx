import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

const GalleryPage = () => {
  return (
    <section className="py-16 bg-mochaMousse-100 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <Link href="/gallery/our-photos" className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
          <img
            src="/images/our-photos.jpg"
            alt="Наші фото"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Наші фото</h3>
          </div>
        </Link>

        <Link href="/gallery/wedding-photos" className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
          <Image
            src="/images/wedding-photos.jpg"
            layout="fill"
            objectFit="cover"
            alt="Весільні фото"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-2xl font-bold">Весільні фото</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default memo(GalleryPage);
