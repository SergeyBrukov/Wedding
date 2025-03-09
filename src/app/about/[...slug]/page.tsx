import { FC, memo } from "react";
import aboutService from "@/service/About.service";

type AboutSomePageProps = {
  params: { slug: string };
};

const AboutSomePage: FC<AboutSomePageProps> = async ({ params }) => {
  const { slug } = params;
  const data = await aboutService.API_METHODS.getAbout(slug);

  if (!data) {
    return <div className="text-center text-gray-500 mt-10">Loading...</div>;
  }

  return (
    <div id="history" className="max-w-3xl mx-auto my-[30px] py-10 px-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{data.title}</h1>
      <div className="space-y-4">
        <p className="text-gray-600 text-lg">
          <strong>Дата:</strong> {data.date}
        </p>
        <p className="text-gray-600 text-lg">
          <strong>Місце:</strong> {data.location}
        </p>
        <div className="bg-gray-100 p-5 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Історія</h2>
          <p className="text-gray-700 leading-relaxed">{data.history.description}</p>
          {data.history.meetingDetails && (
            <p className="text-gray-700 leading-relaxed mt-3">{data.history.meetingDetails}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(AboutSomePage);
