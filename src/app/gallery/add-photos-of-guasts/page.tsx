"use client";

import { ChangeEvent, FormEvent, memo, useState } from "react";
import { helperParseToBase64 } from "@/utils/helpers";

const AddPhotosOfGuests = () => {
  const [imageFile, setImageFile] = useState<{
    data: string;
    filename: string;
    mimeType: string;
  }[]>([]);

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formData = new URLSearchParams({
        data: JSON.stringify(imageFile),
      });

      const response = await fetch("https://script.google.com/macros/s/AKfycbyr-KfDavqAoQGy94LMOtFBVMQE7JON-th_qYnKs6OSAD2E27Tu9XpHoDFoCfhPbF4O/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
      const text = await response.text();
      console.log("Response:", text);
    } catch (error) {
      console.error("Error: ", error);
      alert("Помилка при завантаженні фото");
    }
  };

  const handleAddFile = (e: ChangeEvent) => {
    const files = e.currentTarget?.files as FileList;
    console.log("files", files);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      (async () => {
        try {
          const result = await helperParseToBase64(file);
          const fileImage= {
            data: (result as string).split(",")[1],
            filename: file.name,
            mimeType: file.type,
          }
          setImageFile(prev =>  [...prev, fileImage]);
        }catch (error) {
          console.error("Error: ", error);
        }
      })();
    }
  };

  return (
    <div className="bg-black">
      <form onSubmit={handleUpload}>
        <input type="file" name="files" onChange={handleAddFile} accept="image/*" multiple required />
        <button type="submit">Завантажити фото</button>
      </form>

      <div className="w-[500px] h-[500px]">
        {imageFile && imageFile.map((file, index) => (
          <img key={index} src={file.data} alt="Фото гостей" />
        ))}
      </div>
    </div>
  );
};

export default memo(AddPhotosOfGuests);
