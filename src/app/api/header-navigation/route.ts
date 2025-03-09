import { NextResponse } from "next/server";
import headerNavigationData from "../../../../public/data/header-navigation.json";

export async function GET(req: Request) {
  const referrer = req.headers.get("referer") || "Немає реферера";
  const { pathname } = new URL(referrer);
  const section = pathname.split("/")[1] || "default";

  return NextResponse.json({ navItems: headerNavigationData[section] || headerNavigationData.default });
}
