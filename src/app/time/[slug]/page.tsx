import { memo } from "react";

// export const dynamicParams = true;
export const revalidate = 10; // seconds
// export async function generateStaticParams() {
//   return [{
//     slug: "1",
//   }];
// }
export const dynamic = "force-static"; // 'auto' | 'force-dynamic' | 'error' | 'force-static'
const TimePage = ({ params }) => {
  console.log("params", params);
  return (
    <div className="bg-black text-2xl text-white">
      <h1>Time Page SLUG ${params.slug}</h1>
      <p>This is the time page. {Date.now()}</p>
    </div>
  );
};

export default memo(TimePage);
