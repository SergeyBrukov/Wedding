class AboutService {
  API_METHODS = {
    async getAbout(slug: string) {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about-section`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "force-cache",
          next: {
            revalidate: 10,
          }
        });
        const data = await response.json();

        if (slug) {
          if (slug.toString().includes("-")) {
            const parseSlug = slug.toString().split("-");
            const newSlug = parseSlug[0] + parseSlug[1].charAt(0).toUpperCase() + parseSlug[1].slice(1);
            return data[newSlug] || null;
          }

          return data[slug] || null;
        }

        return data;
      } catch (error) {
        return error;
      }
    },
  };
}

const aboutService = new AboutService();

export default aboutService;
