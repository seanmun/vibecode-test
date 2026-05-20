'use client'

import { useEffect, useState } from 'react'
import { Show, SignInButton, useAuth } from '@clerk/nextjs'

type Choice = 'lovable' | 'claude_code'

type Results = {
  lovable: number
  claude_code: number
  total: number
  userVote: Choice | null
}

export function Poll() {
  const { isSignedIn } = useAuth()
  const [data, setData] = useState<Results | null>(null)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetch('/api/vote')
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData({ lovable: 0, claude_code: 0, total: 0, userVote: null }))
  }, [isSignedIn])

  async function vote(choice: Choice) {
    if (!data || submitting) return
    setSubmitting(true)

    const previous = data
    const optimistic = { ...data, userVote: choice }
    if (data.userVote !== choice) {
      optimistic[choice] = data[choice] + 1
      if (data.userVote) optimistic[data.userVote] = Math.max(0, data[data.userVote] - 1)
    }
    optimistic.total = optimistic.lovable + optimistic.claude_code
    setData(optimistic)

    try {
      const res = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice }),
      })
      if (!res.ok) throw new Error('Vote failed')
      const fresh = await fetch('/api/vote').then((r) => r.json())
      setData(fresh)
    } catch {
      setData(previous)
    } finally {
      setSubmitting(false)
    }
  }

  if (!data) {
    return <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-white/40">Loading…</div>
  }

  const hasVoted = data.userVote !== null
  const showResults = hasVoted || !isSignedIn

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
      {!showResults ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <VoteButton label="Lovable" accent="from-pink-400 to-purple-400" onClick={() => vote('lovable')} disabled={submitting} />
          <VoteButton label="Claude Code" accent="from-purple-400 to-teal-300" onClick={() => vote('claude_code')} disabled={submitting} />
        </div>
      ) : (
        <Results data={data} />
      )}

      {hasVoted && isSignedIn && (
        <p className="mt-6 text-center text-sm text-white/40">
          You voted for <span className="text-white/70">{labelFor(data.userVote!)}</span>. Click the other option to change your vote.
        </p>
      )}
      {hasVoted && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <ChangeVoteButton label="Lovable" choice="lovable" current={data.userVote} onClick={() => vote('lovable')} disabled={submitting} />
          <ChangeVoteButton label="Claude Code" choice="claude_code" current={data.userVote} onClick={() => vote('claude_code')} disabled={submitting} />
        </div>
      )}

      <Show when="signed-out">
        <p className="mt-6 text-center text-sm text-white/50">
          <SignInButton mode="modal">
            <button className="underline underline-offset-2 hover:text-white">Sign in</button>
          </SignInButton>{' '}
          to vote.
        </p>
      </Show>
    </div>
  )
}

function labelFor(c: Choice) {
  return c === 'lovable' ? 'Lovable' : 'Claude Code'
}

function VoteButton({
  label,
  accent,
  onClick,
  disabled,
}: {
  label: string
  accent: string
  onClick: () => void
  disabled: boolean
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20 disabled:opacity-50 disabled:hover:translate-y-0`}
    >
      <span className={`block text-2xl sm:text-3xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
        {label}
      </span>
      <span className="mt-2 block text-sm text-white/50 group-hover:text-white/70">Vote</span>
    </button>
  )
}

function ChangeVoteButton({
  label,
  choice,
  current,
  onClick,
  disabled,
}: {
  label: string
  choice: Choice
  current: Choice | null
  onClick: () => void
  disabled: boolean
}) {
  const isCurrent = current === choice
  return (
    <button
      onClick={onClick}
      disabled={disabled || isCurrent}
      className={`rounded-xl border px-4 py-2 text-sm transition-colors ${
        isCurrent
          ? 'border-white/20 bg-white/10 text-white/60 cursor-default'
          : 'border-white/10 text-white/70 hover:bg-white/5 hover:text-white'
      }`}
    >
      {isCurrent ? `✓ ${label}` : `Switch to ${label}`}
    </button>
  )
}

function Results({ data }: { data: Results }) {
  if (data.total === 0) {
    return <div className="py-8 text-center text-white/50">Be the first to vote.</div>
  }
  const lovablePct = Math.round((data.lovable / data.total) * 100)
  const ccPct = 100 - lovablePct
  return (
    <div className="space-y-5">
      <Bar label="Lovable" count={data.lovable} pct={lovablePct} accent="from-pink-400 to-purple-400" />
      <Bar label="Claude Code" count={data.claude_code} pct={ccPct} accent="from-purple-400 to-teal-300" />
      <p className="text-center text-sm text-white/40 pt-2">{data.total} vote{data.total === 1 ? '' : 's'}</p>
    </div>
  )
}

function Bar({ label, count, pct, accent }: { label: string; count: number; pct: number; accent: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-white/80">{label}</span>
        <span className="text-white/50">
          {pct}% · {count}
        </span>
      </div>
      <div className="h-3 w-full rounded-full bg-white/5 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${accent} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
