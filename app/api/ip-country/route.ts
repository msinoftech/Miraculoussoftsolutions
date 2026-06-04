import { NextRequest, NextResponse } from 'next/server';

/** Temporary: GET /api/debug/ip-country — remove after geo header testing. */
export async function GET(req: NextRequest) {
  const country =
    req.headers.get('x-vercel-ip-country')?.toUpperCase() ??
    req.headers.get('cf-ipcountry')?.toUpperCase() ??
    null;

  return NextResponse.json({ country });
}