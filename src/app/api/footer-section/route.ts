import { NextResponse } from "next/server";
import footerNavigationData from "../../../../public/data/footer-navigation.json";
import { headers } from "next/headers";

export async function GET(req: Request) {
  const referrer = req.headers.get("referer") || "Немає реферера";
  const headersList = headers();

  if (referrer !== "Немає реферера") {
    const { pathname } = new URL(referrer);
    const section = pathname.split("/")[1] || "default";

    return NextResponse.json({ navItems: footerNavigationData[section] || footerNavigationData.default });
  }

  return NextResponse.json({ navItems: footerNavigationData.default });
}
