import { SideNav } from './components/SideNav'
import { Poll } from './components/Poll'
import { Comments } from './components/Comments'

export default function Home() {
  return (
    <>
      <SideNav />
      <main className="mx-auto w-full max-w-3xl px-6 lg:px-0 pb-32">
        <Hero />
        <Divider />
        <WhatIsVibecoding />
        <Divider />
        <TwoPaths />
        <Divider />
        <PollSection />
        <Divider />
        <CommentsSection />
      </main>
    </>
  )
}

function Divider() {
  return <hr className="my-24 border-white/10" />
}

function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 scroll-mt-24">
      <h1 className="text-7xl sm:text-8xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
        Vibecoding.
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-xl">
        Building software by describing what you want, not how to do it. Two tools, two paths — pick one and ship something today.
      </p>
    </section>
  )
}

function WhatIsVibecoding() {
  return (
    <section id="what" className="py-16 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">What is vibecoding?</h2>
      <p className="text-white/70 leading-relaxed mb-8">
        Vibecoding is a way of building software where you focus on the outcome and let an AI handle the implementation. You describe the feature in plain language, the model writes the code, and you iterate by feel rather than by specification.
      </p>
      <ul className="space-y-3 text-white/80">
        <li className="flex gap-3"><span className="text-pink-400">•</span> No boilerplate — describe the shape of the thing, get a working version.</li>
        <li className="flex gap-3"><span className="text-purple-400">•</span> Iteration is conversation, not commits — refine by asking for changes.</li>
        <li className="flex gap-3"><span className="text-teal-300">•</span> The bottleneck moves from typing speed to taste and judgment.</li>
        <li className="flex gap-3"><span className="text-pink-400">•</span> You ship more, faster — but you own the result and can edit it directly.</li>
      </ul>
    </section>
  )
}

function TwoPaths() {
  return (
    <section id="paths" className="py-16 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10">Two paths.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Lovable" tagline="The fastest way to a live URL." accent="from-pink-400 to-purple-400">
          <li>Browser-only — nothing to install.</li>
          <li>Hosted preview the moment you create the app.</li>
          <li>Great for landing pages and quick demos.</li>
          <li>You don&apos;t own the codebase the same way.</li>
        </Card>
        <Card title="Claude Code" tagline="The fastest way to own the codebase." accent="from-purple-400 to-teal-300">
          <li>Runs in your terminal, edits your real files.</li>
          <li>Any stack you want — pick your tools.</li>
          <li>Commit, push, deploy on your terms.</li>
          <li>Steeper start, more control once you&apos;re in.</li>
        </Card>
      </div>
    </section>
  )
}

function Card({
  title,
  tagline,
  accent,
  children,
}: {
  title: string
  tagline: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]">
      <h3 className={`text-2xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
        {title}
      </h3>
      <p className="mt-1 text-sm text-white/60">{tagline}</p>
      <ul className="mt-5 space-y-2 text-sm text-white/80 list-disc list-inside marker:text-white/30">
        {children}
      </ul>
    </div>
  )
}

function PollSection() {
  return (
    <section id="poll" className="py-16 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Which method will you try first?</h2>
      <Poll />
    </section>
  )
}

function CommentsSection() {
  return (
    <section id="comments" className="py-16 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">What&apos;s the first thing you&apos;re going to build?</h2>
      <Comments />
    </section>
  )
}
