import { NextResponse } from 'next/server'
import { auth, currentUser } from '@clerk/nextjs/server'
import { desc } from 'drizzle-orm'
import { db } from '@/db'
import { comments } from '@/db/schema'

export async function GET() {
  const rows = await db
    .select()
    .from(comments)
    .orderBy(desc(comments.createdAt))
    .limit(100)

  return NextResponse.json(rows)
}

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = (await req.json()) as { body?: string }
  const text = (body.body ?? '').trim()
  if (!text) return NextResponse.json({ error: 'Empty comment' }, { status: 400 })
  if (text.length > 200) return NextResponse.json({ error: 'Comment too long' }, { status: 400 })

  const user = await currentUser()
  const name =
    user?.firstName ||
    user?.username ||
    user?.emailAddresses[0]?.emailAddress?.split('@')[0] ||
    'Anonymous'

  const [inserted] = await db
    .insert(comments)
    .values({ userId, userName: name, body: text })
    .returning()

  return NextResponse.json(inserted)
}
