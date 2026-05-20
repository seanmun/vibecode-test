'use client'

import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero', label: 'Intro' },
  { id: 'act-one', label: 'The maestros' },
  { id: 'what', label: 'What it is' },
  { id: 'paths', label: 'Two paths' },
  { id: 'poll', label: 'Vote' },
  { id: 'stack', label: 'My stack' },
  { id: 'comments', label: 'Comments' },
]

export function SideNav() {
  const [active, setActive] = useState<string>('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: [0.1, 0.25, 0.5, 0.75] },
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:flex flex-col gap-3 fixed left-8 top-1/2 -translate-y-1/2 z-40">
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`group flex items-center gap-3 text-sm transition-colors ${
              isActive ? 'text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            <span
              className={`h-px transition-all ${
                isActive ? 'w-8 bg-white' : 'w-4 bg-white/30 group-hover:w-6 group-hover:bg-white/60'
              }`}
            />
            <span>{label}</span>
          </a>
        )
      })}
    </nav>
  )
}
