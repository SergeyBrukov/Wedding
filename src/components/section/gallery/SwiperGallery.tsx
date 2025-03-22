"use client";

import React, { FC, memo, useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

type TSwiperGalleryProps = {
  files: { id: string | number; src: string }[];
  direction?: "vertical" | "horizontal";
  className?: string;
};

const SwiperGallery: FC<TSwiperGalleryProps> = ({ files, className, direction = "horizontal" }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Swiper
        direction={direction}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className={"h-[300px]" + (className ? ` ${className}` : "")}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
      >
        {files.map(({ id, src }) => (
          <SwiperSlide key={id}>
            <div className="relative w-full h-full overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`Весільне фото ${id}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
                onClick={() => {
                  setCurrentIndex(files.findIndex((file) => file.id === id));
                  setLightboxOpen(true);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={files}
        index={currentIndex}
      />
    </>
  );
};

export default memo(SwiperGallery);
