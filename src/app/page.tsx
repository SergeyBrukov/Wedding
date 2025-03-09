import React, { Suspense } from "react";
import About from "@/components/section/about/About";
import Gallery from "@/components/section/gallery/Gallery";
import Schedule from "@/components/section/schedule/Schedule";
import Contact from "@/components/section/contact/Contact";
import galleryService from "@/service/Gallery.service";
import aboutService from "@/service/About.service";

const getAboutOurStory = async () => {
  const data = await aboutService.API_METHODS.getAbout();
  return data;
};

export default async function Home() {
  const FOLDER_ID = "1MOJtgldHMpqkObPqvqNU6OTDWLP5pALK";
  const aboutData = await getAboutOurStory();

  console.log("aboutData>>SKA", aboutData);

  return (
    <div>

      <About />

      {/* Галерея */}
      <Suspense fallback={<p className="text-red-500 py-16 bg-mochaMousse-100">Gallery loading....</p>}>
        <Gallery filesPromise={galleryService.API_METHODS.getPhotos(FOLDER_ID)} />
      </Suspense>

      {/* Розклад */}
      <Schedule />

      {/* Контактна інформація */}
      <Contact />
    </div>
  );
}
