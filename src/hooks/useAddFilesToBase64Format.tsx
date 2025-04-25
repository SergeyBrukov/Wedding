import { ChangeEvent, useCallback, useState } from "react";
import { helperParseToBase64 } from "@/utils/helpers";

export const useAddFilesToBase64Format = () => {
  const [imageFile, setImageFile] = useState<{
    data: string;
    filename: string;
    mimeType: string;
  }[]>([]);


  const handleAddFile = useCallback((e: ChangeEvent) => {
    // @ts-ignore
    const files = e.currentTarget?.files as FileList;
    console.log("files", files);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      (async () => {
        try {
          const result = await helperParseToBase64(file);
          const fileImage= {
            data: (result as string).split(",")[1],
            filename: file.name + `_${Date.now()}`,
            mimeType: file.type,
          }
          setImageFile(prev =>  [...prev, fileImage]);
        }catch (error) {
          console.error("Error: ", error);
        }
      })();
    }
  }, []);

  const clearFiles = useCallback(() => {
    setImageFile([]);
  }, []);

  const handleRemoveItem = useCallback((filename: string) => {
    setImageFile(prev => prev.filter((file) => file.filename !== filename));
  }, []);

  return {
    handleAddFile,
    imageFile,
    clearFiles,
    handleRemoveItem
  }
}
