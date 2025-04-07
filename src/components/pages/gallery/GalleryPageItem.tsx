"use client";
import { FC, memo, MouseEventHandler, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { EToastify, notify } from "@/service/Toastify.service";

type TGalleryPageItemProps = {
  href: string;
  className?: string;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  imageWidth?: number;
  imageHeight?: number;
  isHandleClick?: boolean;
  isDisabled?: boolean;
  notificationDisableText?: string;
}

const GalleryPageItem:FC<TGalleryPageItemProps> = ({
  href,
  className,
  imageSrc,
  imageAlt,
  title,
  imageWidth= 500,
  imageHeight= 300,
  isHandleClick = false,
  isDisabled = false,
  notificationDisableText

                                                   }) => {

  const handleClick = useCallback(() => {
    if (isDisabled) {
      if (notificationDisableText) {
        notify(notificationDisableText, EToastify.INFO)
      }
      return;
    }

  }, []);

  return (
    <Link href={href} scroll={!(isDisabled && isHandleClick)}
          {...isHandleClick ? { onClick: handleClick } : {}}
          className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${className}`}>
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        objectFit="cover"
        alt={imageAlt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
      </div>
    </Link>
  );
}

export default memo(GalleryPageItem);
