import React, { FC, memo } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";

type TAddPhotosOfGuastsFormContentProps = {
  images: {
    data: string;
    filename: string;
    mimeType: string;
  }[];
  handleAddClick: () => void;
  handleRemoveItem: (filename: string) => void;
}

const AddPhotosOfGuastsFormContent: FC<TAddPhotosOfGuastsFormContentProps> = ({ images, handleAddClick, handleRemoveItem }) => {
  return (
    <div className="w-full h-full flex gap-[20px] flex-wrap justify-center">
      {images.map((image => {
          return (
            <div key={image.filename} className="relative">
              <Image
                src={`data:${image.mimeType};base64,${image.data}`}
                alt={`Весільне фото ${image.filename}`}
                layout="fixed"
                height={200}
                width={200}
                objectFit="cover"
                className="h-[200px] w-[200px] transition-transform duration-300 ease-in-out rounded-lg"
              />
              <MdClose className="absolute bg-white rounded-lg text-2xl cursor-pointer top-2 right-2 hover:text-gray-500" onClick={() => handleRemoveItem(image.filename)}/>
            </div>
          );
        }),
      )}
      <div onClick={handleAddClick} className="h-[200px] w-[200px] border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-100 transition">
        <FaPlus className="text-3xl text-gray-500" />
      </div>
    </div>
  );
};

export default memo(AddPhotosOfGuastsFormContent);
