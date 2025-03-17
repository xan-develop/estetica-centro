import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const csrfTokenFromUrl = searchParams.get('csrfToken');
  const csrfTokenFromCookie = cookies().get('csrfToken')?.value;

  if (!csrfTokenFromUrl || !csrfTokenFromCookie || csrfTokenFromUrl !== csrfTokenFromCookie) {
    console.warn('Solicitud no autorizada a la página de éxito');
    return NextResponse.json({ valid: false });
  }

  return NextResponse.json({ valid: true });
}
