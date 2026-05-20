import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { eq, sql } from 'drizzle-orm'
import { db } from '@/db'
import { votes } from '@/db/schema'

const CHOICES = ['lovable', 'claude_code'] as const
type Choice = (typeof CHOICES)[number]

export async function GET() {
  const { userId } = await auth()

  const rows = await db
    .select({ choice: votes.choice, count: sql<number>`count(*)::int` })
    .from(votes)
    .groupBy(votes.choice)

  const tally = { lovable: 0, claude_code: 0 }
  for (const r of rows) {
    if (r.choice === 'lovable' || r.choice === 'claude_code') {
      tally[r.choice] = Number(r.count)
    }
  }

  let userVote: Choice | null = null
  if (userId) {
    const existing = await db.select().from(votes).where(eq(votes.userId, userId)).limit(1)
    if (existing[0]) userVote = existing[0].choice as Choice
  }

  return NextResponse.json({
    lovable: tally.lovable,
    claude_code: tally.claude_code,
    total: tally.lovable + tally.claude_code,
    userVote,
  })
}

export async function POST(req: Request) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = (await req.json()) as { choice?: string }
  if (!body.choice || !CHOICES.includes(body.choice as Choice)) {
    return NextResponse.json({ error: 'Invalid choice' }, { status: 400 })
  }

  await db
    .insert(votes)
    .values({ userId, choice: body.choice })
    .onConflictDoUpdate({
      target: votes.userId,
      set: { choice: body.choice },
    })

  return NextResponse.json({ ok: true })
}
