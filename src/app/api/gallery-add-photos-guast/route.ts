
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const rawText = await req.text();

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbz8hc3qPV6YsfvNAS9t_tYnPqE4kZzydpHrV4ifjCUYCOQTlM8nXh-w0TFLhwpoJmEq/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: rawText,
    });

    const text = await response.text();

    return NextResponse.json({ message: text }, { status: response.status });
  } catch (error) {
    return NextResponse.json({ error: "Помилка при завантаженні фото" }, { status: 500 });
  }
}
