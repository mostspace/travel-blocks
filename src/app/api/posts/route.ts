import { NextResponse } from 'next/server'
import { posts, users, itinerary } from '@/lib/data/mocks'
import { sleep } from '@/lib/util/sleep'

export async function GET() {
  const ms = 400 + Math.floor(Math.random() * 600)
  await sleep(ms)
  return NextResponse.json({ posts, users, itinerary, latency: ms })
}
