import {  memo } from "react";
import Link from "next/link";
import galleryService from "@/service/Gallery.service";
import GalleryImagesBlock from "@/components/pages/gallery/GalleryImagesBlock";

const PhotosOfGuests = async () => {
  const FOLDER_ID = "1uQgD32BKMHuKKAd0Lt84nS5KAPy0Kcbx";
  const data = await galleryService.API_METHODS.getPhotos(FOLDER_ID, 10, "no-store");


  if (!data || !data.files || !data.files.length) {
    return <p className="p-16 bg-mochaMousse-100 min-h-[500px] flex flex-col items-center text-black text-2xl">No photos available</p>;
  }

  const files = data.files.map((file) => ({
    id: file.id,
    src: `https://lh3.googleusercontent.com/d/${file.id}`,
  }));

  return (
    <section className="p-16 bg-mochaMousse-100 min-h-screen flex flex-col items-center">
      <GalleryImagesBlock files={files} />
    </section>
  );
};

export default memo(PhotosOfGuests);
