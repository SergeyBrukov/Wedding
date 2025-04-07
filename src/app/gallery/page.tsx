import React, { memo } from "react";
import GalleryPageItem from "@/components/pages/gallery/GalleryPageItem";
import { ToastContainer } from "react-toastify";

const GalleryPage = () => {
  return (
    <section className="py-16 bg-mochaMousse-100 min-h-screen flex flex-col items-center justify-center">

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <GalleryPageItem
          href="/gallery/our-photos"
          imageSrc="/images/our-photos.jpg"
          imageAlt="Наші фото"
          title="Наші фото"
        />
        <GalleryPageItem
          href=""
          imageSrc="/images/wedding-photos.jpg"
          imageAlt="Весільні фото"
          title="Весільні фото"
          isDisabled
          isHandleClick
          notificationDisableText="Ця функція поки що недоступна"
        />
        {/*<Link href="/gallery/our-photos" className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">*/}
        {/*  <Image*/}
        {/*    src="/images/our-photos.jpg"*/}
        {/*    width={500}*/}
        {/*    height={300}*/}
        {/*    objectFit="cover"*/}
        {/*    alt="Наші фото"*/}
        {/*    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">*/}
        {/*    <h3 className="text-white text-2xl font-bold">Наші фото</h3>*/}
        {/*  </div>*/}
        {/*</Link>*/}

        {/*<Link href="/gallery/wedding-photos" className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">*/}
        {/*  <Image*/}
        {/*    src="/images/wedding-photos.jpg"*/}
        {/*    width={500}*/}
        {/*    height={300}*/}
        {/*    objectFit="cover"*/}
        {/*    alt="Весільні фото"*/}
        {/*    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"*/}
        {/*  />*/}
        {/*  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">*/}
        {/*    <h3 className="text-white text-2xl font-bold">Весільні фото</h3>*/}
        {/*  </div>*/}
        {/*</Link>*/}
      </div>
    </section>
  );
};

export default memo(GalleryPage);
