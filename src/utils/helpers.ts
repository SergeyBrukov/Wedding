export const helperParseToBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    resolve(reader.result);
  }
  reader.onerror = (error) => {
    console.error("Error: ", error);
    reject(error);
  }
});
