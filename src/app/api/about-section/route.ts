import { NextResponse } from 'next/server';
import aboutData from '../../../../public/data/about.json';

export async function GET() {
  console.log('About data loaded:', aboutData); // Логування даних
  return NextResponse.json(aboutData);
}
