import { memo } from "react";

export const dynamic = 'force-static'; // 'auto' | 'force-dynamic' | 'error' | 'force-static'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const TimePage = () => {
  return (
    <div className="bg-black text-2xl text-white">
      <h1>Time Page</h1>
      <p>This is the time page. {Date.now()}</p>
    </div>
  );
}

export default memo(TimePage);
