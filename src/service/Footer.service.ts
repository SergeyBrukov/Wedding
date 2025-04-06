class FooterService {
  API_METHODS = {
    navigationBlock: {
      async getNavigationBlock() {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/footer-section`);
          return response.json();
        } catch (error) {
          console.error("Помилка завантаження меню:", error);
          return error;
        }
      },
    },
  };
}

export const footerService = new FooterService();
export default footerService;
