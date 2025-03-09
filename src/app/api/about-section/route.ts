import { NextResponse } from "next/server";
import aboutData from "../../../../public/data/about.json";

export async function GET () {
  return NextResponse.json({
    ...aboutData,
  });
}
