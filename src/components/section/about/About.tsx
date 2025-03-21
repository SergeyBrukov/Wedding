import React from "react";
import aboutService from "@/service/About.service";
import Link from "next/link";

const getAboutOurStory = async () => {
  const data = await aboutService.API_METHODS.getAbout();
  return data;
};

const readMoreGenerateBlock = (text: string, href: string) => {
  return (
    <div
      className="mt-6 relative text-lg text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1400 animate-opacity-in translate-y-0">
      <p className="line-clamp-5 px-[15px]">{text}</p>
      <div
        className="absolute w-full h-full top-[30px] shadow-[inset_0px_-6rem_30px_-1rem_rgba(229,224,225,0.7)] rounded-b-md">
        <Link href={href}
              className="absolute left-[50%] translate-x-[-50%] bottom-0 bg-black text-white rounded-tr-md rounded-tl-md pt-1 px-5 pb-1 pl-3 text-sm">Читати
          більше</Link>
      </div>
    </div>
  )
}

const About = async () => {

  const aboutData = await getAboutOurStory();

  const { firstMeeting, proposal } = aboutData;

  return (
    <section id="about" className="opacity-0 py-16 bg-gradient-to-r from-white to-ivory">
      <div className="max-w-8xl mx-auto text-center px-6">
        <h2
          className="text-5xl font-greatVibes text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1000 animate-opacity-in translate-y-0"
        >
          Про нас
        </h2>
        <p
          className="mt-6 text-lg text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1200 animate-opacity-in translate-y-0"
        >
          Ми дуже раді запросити вас на наше весілля. Це буде найкращий день
          у нашому житті, і ми хочемо поділитися цим щастям з вами.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mt-8 p-4">
            <h3
              className="text-4xl font-bold text-black opacity-0 translate-y-12 transition-opacity animate-opacity-in duration-4000 delay-2000"
            >
              Як ми познайомились
            </h3>
            <p
              className="mt-6 text-lg text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1400 animate-opacity-in translate-y-0">{firstMeeting.date}</p>
            {readMoreGenerateBlock(firstMeeting.history.description, "/about/first-meeting")}

          </div>
          <div className="mt-8 p-4">
            <h3
              className="text-4xl font-bold text-black opacity-0 translate-y-12 transition-opacity animate-opacity-in duration-4000 delay-2000"
            >
              Пропозиція
            </h3>
            <p
              className="mt-6 text-lg text-black opacity-0 translate-y-12 transition-opacity duration-1000 delay-1400 animate-opacity-in translate-y-0">{proposal.date}</p>
            {readMoreGenerateBlock(proposal.history.description, "/about/proposal")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
