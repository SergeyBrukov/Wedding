class HeaderService {
  API_METHODS = {
    navigationBlock: {
      async getNavigationBlock() {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/header-navigation`);
          return response.json();
        } catch (error) {
          console.error("Помилка завантаження меню:", error);
          return error;
        }
      }
    }
  }
}

const headerService = new HeaderService();
export default headerService;
