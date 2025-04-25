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

        {/*<GalleryPageItem*/}
        {/*  href="/gallery/photos-of-guests"*/}
        {/*  imageSrc="/images/our-photos.jpg"*/}
        {/*  imageAlt="Фото з дня весілля"*/}
        {/*  title="Фото з дня весілля"*/}
        {/*/>*/}
      </div>
    </section>
  );
};

export default memo(GalleryPage);
