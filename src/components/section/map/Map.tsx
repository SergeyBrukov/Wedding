"use client";
import React, { memo, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import SwiperGallery from "@/components/section/gallery/SwiperGallery";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 50.23129,
  lng: 28.67343,
};

const getGallery = () => {
  const links: { id: string | number, src: string }[] = [
    {
      id: 1,
      src: "https://lh3.googleusercontent.com/p/AF1QipNlOPKx-I4Ktm8buuPhqyZxcYoaTljdBYD7H-R-=s1360-w1360-h1020",
    },
    {
      id: 2,
      src: "https://lh3.googleusercontent.com/p/AF1QipNLFj1sOAgHFQ4Ptif5gcnU3A095-eoVlUdeUqM=s1360-w1360-h1020",
    },
    {
      id: 3,
      src: "https://lh3.googleusercontent.com/p/AF1QipP8ymr8fi2aRshTi8nry-3T8UH0L48XL6wn1PhN=s1360-w1360-h1020",
    },
    {
      id: 4,
      src: "https://lh3.googleusercontent.com/p/AF1QipPw3gv-wH1lktGN7MAp4aDoinCJNVt2rwOsI_bY=s1360-w1360-h1020",
    },
    {
      id: 5,
      src: "https://lh3.googleusercontent.com/p/AF1QipOuSLPBEL9XgPaUQNlIa1bkTpxlIc6-EkSjnNwK=s1360-w1360-h1020",
    },
    {
      id: 6,
      src: "https://lh3.googleusercontent.com/p/AF1QipNQmDRQNNRuwQpyaG2TZLZb9gaRVAurHcZBzARB=s1360-w1360-h1020",
    },
  ];

  return links;
};

const MapSection = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCW1_XLaiS27IvGpc1RsoLPDKfm1o1nEO0",
  });

  const [isMobileDisplay, setIsMobileDisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobileDisplay(true);
    }
    window.addEventListener("resize", () => {
      setIsMobileDisplay(window.innerWidth <= 768);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobileDisplay(window.innerWidth <= 768);
      });
    };
  }, []);

  return (
    <section id="map" className="opacity-0 py-16 bg-gradient-to-r from-ivory to-white">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2
          className="text-5xl font-greatVibes text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1000 animate-opacity-in translate-y-0">Локація</h2>
        <div
          className="mt-6 duration-1000 delay-1400 animate-opacity-in w-full flex flex-col md:flex-row gap-[20px]">
          <div className="w-full md:w-full md:max-w-[300px]">
            <SwiperGallery className={isMobileDisplay ? "h-[300px]" : "h-[500px]"}
                           direction={isMobileDisplay ? "horizontal" : "vertical"} files={getGallery()} />
          </div>
          <div className="w-full h-[500px]">
            {isLoaded ? (
              <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
                <Marker position={center} />
              </GoogleMap>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MapSection);
