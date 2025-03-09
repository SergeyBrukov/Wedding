class GalleryService {
  API_METHODS = {
    // API_KEY_GOOGLE_DRIVE: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY,
    API_KEY_GOOGLE_DRIVE: "AIzaSyCW1_XLaiS27IvGpc1RsoLPDKfm1o1nEO0",

    async getPhotos(FOLDER_ID: string) {
      try {
        const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents AND (mimeType='image/jpeg' OR mimeType='image/png' OR mimeType='image/webp')&key=${this.API_KEY_GOOGLE_DRIVE}`);
        return await response.json();
      } catch (error) {
        return error;
      }
    },
  };
}

const galleryService = new GalleryService();
export default galleryService;
