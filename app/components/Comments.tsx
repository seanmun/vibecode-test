'use client'

import { useEffect, useState, FormEvent } from 'react'
import { Show, SignInButton } from '@clerk/nextjs'

type Comment = {
  id: number
  userId: string
  userName: string
  body: string
  createdAt: string
}

const MAX = 200

export function Comments() {
  const [list, setList] = useState<Comment[] | null>(null)
  const [text, setText] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/comment')
      .then((r) => r.json())
      .then((d) => setList(d))
      .catch(() => setList([]))
  }, [])

  async function submit(e: FormEvent) {
    e.preventDefault()
    const body = text.trim()
    if (!body || body.length > MAX || submitting) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body }),
      })
      if (!res.ok) throw new Error('Failed')
      const created: Comment = await res.json()
      setList((prev) => (prev ? [created, ...prev] : [created]))
      setText('')
    } catch {
      // keep textarea content so the user can retry
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="space-y-6">
      <Show when="signed-in">
        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value.slice(0, MAX))}
            placeholder="Share what you're going to build..."
            rows={3}
            className="w-full resize-none bg-transparent text-white placeholder:text-white/30 focus:outline-none"
          />
          <div className="mt-3 flex items-center justify-between">
            <span className={`text-xs ${text.length >= MAX ? 'text-pink-400' : 'text-white/40'}`}>
              {text.length} / {MAX}
            </span>
            <button
              type="submit"
              disabled={submitting || !text.trim()}
              className="rounded-full bg-white text-black text-sm font-medium px-5 py-1.5 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-white/90 transition"
            >
              {submitting ? 'Posting…' : 'Post'}
            </button>
          </div>
        </form>
      </Show>

      <Show when="signed-out">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/60">
          <SignInButton mode="modal">
            <button className="underline underline-offset-2 hover:text-white">Sign in</button>
          </SignInButton>{' '}
          to leave a comment.
        </div>
      </Show>

      {list === null ? (
        <div className="text-center text-white/40 py-6">Loading…</div>
      ) : list.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/50">
          No comments yet — be the first to start the conversation.
        </div>
      ) : (
        <ul className="space-y-3">
          {list.map((c) => (
            <li key={c.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-baseline justify-between gap-3 mb-1">
                <span className="text-sm font-medium text-white/90">{c.userName}</span>
                <span className="text-xs text-white/40">{relativeTime(c.createdAt)}</span>
              </div>
              <p className="text-white/80 whitespace-pre-wrap break-words">{c.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function relativeTime(iso: string) {
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const diffMs = new Date(iso).getTime() - Date.now()
  const diffSec = Math.round(diffMs / 1000)
  const abs = Math.abs(diffSec)
  if (abs < 60) return formatter.format(diffSec, 'second')
  if (abs < 3600) return formatter.format(Math.round(diffSec / 60), 'minute')
  if (abs < 86400) return formatter.format(Math.round(diffSec / 3600), 'hour')
  if (abs < 2592000) return formatter.format(Math.round(diffSec / 86400), 'day')
  if (abs < 31536000) return formatter.format(Math.round(diffSec / 2592000), 'month')
  return formatter.format(Math.round(diffSec / 31536000), 'year')
}
