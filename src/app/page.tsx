import React, { Suspense } from "react";
import About from "@/components/section/about/About";
import Gallery from "@/components/section/gallery/Gallery";
import Schedule from "@/components/section/schedule/Schedule";
import Contact from "@/components/section/contact/Contact";
import galleryService from "@/service/Gallery.service";

export default  function Home() {
  const FOLDER_ID = "1MOJtgldHMpqkObPqvqNU6OTDWLP5pALK";

  return (
    <div>

      <About />

      {/* Галерея */}
      // TODO На подумати функціонал обзьорвебла
      {/*<Suspense fallback={<p className="text-red-500 py-16 bg-mochaMousse-100">Gallery loading....</p>}>*/}
        <Gallery filesPromise={galleryService.API_METHODS.getPhotos(FOLDER_ID)} />
      {/*</Suspense>*/}

      {/* Розклад */}
      <Schedule />

      {/* Контактна інформація */}
      <Contact />
    </div>
  );
}
