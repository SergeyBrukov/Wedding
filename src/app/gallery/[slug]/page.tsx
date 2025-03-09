import { memo } from "react";
import galleryService from "@/service/Gallery.service";
import "yet-another-react-lightbox/styles.css";
import GalleryImagesBlock from "@/components/pages/gallery/GalleryImagesBlock";

const GalleryDetailPage = async () => {
  const FOLDER_ID = "1MOJtgldHMpqkObPqvqNU6OTDWLP5pALK";
  const data = await galleryService.API_METHODS.getPhotos(FOLDER_ID);

  const files = data.files.map((file) => ({
    id: file.id,
    src: `https://lh3.googleusercontent.com/d/${file.id}`,
  }));


  return (
    <section className="py-16 bg-mochaMousse-100 min-h-screen flex flex-col items-center">
      <GalleryImagesBlock files={files} />
    </section>
  );
};

export default memo(GalleryDetailPage);
