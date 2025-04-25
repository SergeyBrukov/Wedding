"use client";
import { memo, useActionState, useCallback, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useAddFilesToBase64Format } from "@/hooks/useAddFilesToBase64Format";
import AddPhotosOfGuastsFormContent from "@/components/pages/gallery/AddPhotosOfGuastsFormContent";
import { useRouter } from "next/navigation";
import GalleryService from "@/service/Gallery.service";
import { EToastify, notify } from "@/service/Toastify.service";

const AddPhotosOfGuastsModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { imageFile, handleAddFile, clearFiles, handleRemoveItem } = useAddFilesToBase64Format();
  const router = useRouter();
  useEffect(() => {
    modalRef.current?.showModal();
  }, []);

  const handleAddClick = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleClose = useCallback(() => {
    modalRef.current?.close();
    router.back();
  }, [])

  const handle = async (file) => {
    try {
      // const formData = new URLSearchParams({
      //   data: JSON.stringify(file),
      // });

      const body = new URLSearchParams({
        data: file.data,
        filename: file.filename,
        mimeType:file.mimeType,
      });

      console.log("body>>>",body.toString())

      const response = await GalleryService.API_METHODS.uploadPhotosGuast(body.toString())
      // if (response) {
      //   notify("Фотографії успішно додані", EToastify.SUCCESS);
      //   inputRef.current!.value = "";
      //   clearFiles();
      //   handleClose();
      // }
    }catch (error) {
      console.error("Error: ", error);
    }
  }

  const handleSubmit = useCallback(async () => {
    const promiseArray = imageFile.map((file) => {
      return handle(file);
    });

    try {
      await Promise.all(promiseArray);
      notify("Фотографії успішно додані", EToastify.SUCCESS);
      inputRef.current!.value = "";
      clearFiles();
      handleClose();
    } catch (error) {
      console.error("Error: ", error);
      notify("Помилка при завантаженні фото", EToastify.ERROR);
    }finally {

    }
  }, [imageFile]);

  const [error, submitAction, isPending] = useActionState(handleSubmit, null);

  console.log("error>>", error)

  return (
    <dialog ref={modalRef} className="border p-4 backdrop:bg-slate-300/50 max-w-[700px] w-full h-[600px]">
      {isPending && <div className="absolute inset-0 bg-black/50 flex justify-center items-center z-50">
        <p className="text-white text-2xl">
          Зачекайте, йде завантаження фото...
        </p>
      </div>}
      <div className="w-full h-full flex flex-col justify-center items-center gap-5">
        <MdClose className="absolute text-2xl cursor-pointer top-2 right-2 hover:text-gray-500" onClick={handleClose}/>
        <h1 className="text-2xl font-bold">Додати фото</h1>

        <form className="w-full h-full flex flex-col items-center justify-center gap-[20px]" action={submitAction}>
          <div className="w-full h-full overflow-scroll max-h-[420px]">
            {!!imageFile.length ?
              <AddPhotosOfGuastsFormContent images={imageFile} handleAddClick={handleAddClick} handleRemoveItem={handleRemoveItem} />
              : <div
                className={`w-full h-full border-2 border-dashed border-gray-400 rounded-lg flex justify-center items-center cursor-pointer hover:bg-gray-100 transition`}
                onClick={handleAddClick}
              >
                <FaPlus className="text-3xl text-gray-500" />
              </div>}
          </div>
          <input ref={inputRef} className="hidden" type="file" name="files" onChange={handleAddFile} accept="image/*"
                 multiple />
          <button disabled={!imageFile.length || isPending}
                  className={`inline-block px-6 py-3 ${!imageFile.length ? "bg-gray-400 text-white cursor-not-allowed " : "bg-black text-white hover:bg-babyPink-600"} text-white rounded-lg shadow-md hover:bg-babyPink-600 transition`}
                  type="submit">Завантажити фото
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default memo(AddPhotosOfGuastsModal);
