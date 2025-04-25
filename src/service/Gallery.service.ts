class GalleryService {
  API_METHODS = {
    // API_KEY_GOOGLE_DRIVE: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY,
    API_KEY_GOOGLE_DRIVE: "AIzaSyCW1_XLaiS27IvGpc1RsoLPDKfm1o1nEO0",

    async getPhotos(FOLDER_ID: string, revalidate: number = 10, cache: "force-cache" | "no-store" = "force-cache") {
      try {
        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents AND (mimeType='image/jpeg' OR mimeType='image/png' OR mimeType='image/webp' OR mimeType='image/heic' OR mimeType='image/heif')&key=${this.API_KEY_GOOGLE_DRIVE}`, {
          next: {
            revalidate: revalidate,
          },
          cache: cache,
        });
        return await response.json();
      } catch (error) {
        return error;
      }
    },

    async uploadPhotosGuast(data: string) {
      console.log("data>>>", data);
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/gallery-add-photos-guast`, {
          method: "POST",
          body: data,
        });

        return response;
      } catch (error) {
        return error
      }
    }
  };
}

const galleryService = new GalleryService();
export default galleryService;
