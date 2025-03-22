"use client";

import { memo, useCallback, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

const GalleryImagesBlock = ({ files }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = useCallback((i) => {
    setIndex(i);
    setOpen(true);
  }, []);

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 w-full">
        {files?.map(({ src, id }, i) => (
          <div key={id} className="relative w-full h-60">
            <Image
              src={src}
              loading="lazy"
              alt="Gallery Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleOpen(i)}
            />
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={files?.map((file) => ({ src: `https://lh3.googleusercontent.com/d/${file.id}` }))}
        index={index}
      />
    </>
  );
};

export default memo(GalleryImagesBlock);
