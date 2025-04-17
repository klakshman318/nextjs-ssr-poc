import { NextResponse } from 'next/server';

export async function GET() {
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    const res = await fetch('https://randomuser.me/api/?results=10');
    if (!res.ok) throw new Error('Failed to fetch users');
    const json = await res.json();
    return NextResponse.json(json);
}
