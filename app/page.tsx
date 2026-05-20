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
        <ActOne />
        <Divider />
        <ActTwo />
        <Divider />
        <ActThree />
        <Divider />
        <ActFour />
        <Divider />
        <WhatIsVibecoding />
        <Divider />
        <TheLoop />
        <Divider />
        <WhereItShines />
        <Divider />
        <WhereItBites />
        <Divider />
        <SkillsThatMatter />
        <Divider />
        <TwoPaths />
        <Divider />
        <PollSection />
        <Divider />
        <PathTwoUnlocks />
        <Divider />
        <LiveDemo />
        <Divider />
        <MyStack />
        <Divider />
        <HowToStart />
        <Divider />
        <CommentsSection />
        <Divider />
        <OneMoreThing />
      </main>
    </>
  )
}

function Divider() {
  return <hr className="my-24 border-white/10" />
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-4">{children}</p>
  )
}

function Hero() {
  return (
    <section id="hero" className="pt-32 pb-16 scroll-mt-24">
      <SectionLabel>For outside-the-office play</SectionLabel>
      <h1 className="text-7xl sm:text-8xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
        Vibecoding 101.
      </h1>
      <p className="mt-8 text-xl sm:text-2xl text-white/70 leading-relaxed max-w-2xl">
        A story about two people with the same job — they direct experts instead of being one — and why that skill just became the most valuable one in the room.
      </p>
      <p className="mt-12 text-sm text-white/30 animate-pulse">scroll ↓</p>
    </section>
  )
}

function ActOne() {
  return (
    <section id="act-one" className="py-12 scroll-mt-24">
      <SectionLabel>Act one</SectionLabel>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">The maestro.</h2>
      <div className="space-y-5 text-white/80 text-lg leading-relaxed">
        <p>Justin Bieber. Hundreds of millions of records sold. Plays piano, guitar, drums. Writes. Produces. A real musician.</p>
        <ShortEmbed videoId="N2PPw7trqIg" title="Justin Bieber — directing the orchestra" />
        <p>The people in front of him? Different beast. Career classical specialists. Twenty, thirty years on a single instrument. A kind of depth Justin doesn&apos;t have on any one of them — and never needed.</p>
        <p className="text-white text-xl font-medium">He doesn&apos;t have to be the best violinist in the room. He just has to know what he wants the violins to play.</p>
        <p>That&apos;s breadth. Fluent across the whole language of music. He directs, they execute, output exceeds what he could&apos;ve built alone.</p>
        <p className="text-white text-xl font-medium">That&apos;s the experienced engineer in 2026. Strong across the stack — JavaScript, Python, SQL, CSS, auth, infra. Deep in none. The agents are the specialists. You are the maestro.</p>
      </div>
    </section>
  )
}

function ActTwo() {
  return (
    <section id="act-two" className="py-12 scroll-mt-24">
      <SectionLabel>Act two</SectionLabel>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">The producer who can&apos;t play a note.</h2>
      <div className="space-y-5 text-white/80 text-lg leading-relaxed">
        <p>Rick Rubin. One of the most important music producers of the last forty years.</p>
        <p>Co-founded Def Jam in his NYU dorm room. Launched hip-hop into the mainstream — Beastie Boys, Run-DMC, LL Cool J. Then Johnny Cash, Adele, Slayer, Metallica, Red Hot Chili Peppers, Jay-Z, Kanye, Eminem. Every genre. Every decade. All winners.</p>
        <p className="text-white/60 italic">Here&apos;s the part that doesn&apos;t make sense:</p>
        <ShortEmbed videoId="akcSX81KOv4" title="Rick Rubin — 60 Minutes" />

        <blockquote className="my-10 rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">Rick Rubin</p>
          <p className="text-2xl sm:text-3xl font-medium text-white leading-snug">
            &ldquo;I have no technical ability. And I know nothing about music.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-white/40">— Rick Rubin, 60 Minutes (2023)</footer>
        </blockquote>

        <p>Doesn&apos;t play instruments. Can&apos;t operate the studio gear. Doesn&apos;t read sheet music. His actual answer when asked what he does: <span className="text-white">&ldquo;I know what I like. I&apos;m decisive about it.&rdquo;</span></p>
        <p>Forty years of listening at the highest level. His ear is the expertise. His taste is the expertise. Can&apos;t play the guitar part — but can tell you instantly if it&apos;s right.</p>
        <p className="text-white text-xl font-medium">Ever known what &ldquo;good&rdquo; looks like — a clean UI, a clear report, a useful tool — even when you couldn&apos;t build it? You already have Rick&apos;s skill. The execution just got delegated to a machine.</p>
      </div>
    </section>
  )
}

function ActThree() {
  return (
    <section id="act-three" className="py-12 scroll-mt-24">
      <SectionLabel>Act three</SectionLabel>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">The proto-vibecoder.</h2>
      <div className="space-y-5 text-white/80 text-lg leading-relaxed">
        <p>One more. Closer to home.</p>
        <p>Steve Jobs. Didn&apos;t write the code. Didn&apos;t engineer the chips. Couldn&apos;t have designed the industrial parts.</p>
        <p>Yet for thirty years — the person in the room who decided whether what got built was any good. And he kept being right.</p>
        <VideoEmbed videoId="Mw4N72Tqbzc" start={86} end={172} title="Steve Jobs — taste and decisiveness" />
        <p>Same skill as Justin. Same skill as Rick. Vision, taste, decisiveness. Applied to tech. Output: one of the most valuable companies in history.</p>
        <p className="text-white text-xl font-medium">The visionary-tastemaker seat has always been the highest-leverage one in the building. What&apos;s new in 2026: you don&apos;t have to run Apple to fill it. You just need a laptop and an AI agent.</p>
      </div>
    </section>
  )
}

function ActFour() {
  return (
    <section id="welcome" className="py-12 scroll-mt-24">
      <SectionLabel>Act four</SectionLabel>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">Welcome to that era. For everything.</h2>
      <div className="space-y-5 text-white/80 text-lg leading-relaxed mb-10">
        <p>For most of history, &ldquo;I have an idea but I can&apos;t build it&rdquo; was a complete sentence.</p>
        <p className="text-2xl text-white font-semibold">That sentence just lost its ending.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <PathCard accent="from-pink-400 to-purple-400" title="Like Justin">
          Broad fluency, clear direction. Orchestrate AI specialists into exactly what&apos;s in your head.
        </PathCard>
        <PathCard accent="from-purple-400 to-teal-300" title="Like Rick">
          Don&apos;t code? Sharp taste is now a building skill. Direct the machine the way Rick directs musicians.
        </PathCard>
        <PathCard accent="from-teal-300 to-pink-400" title="Like Jobs">
          Vision and decisiveness. The &ldquo;no, smaller, try again&rdquo; seat. Yours now — no army required.
        </PathCard>
      </div>

      <p className="mt-10 text-lg text-white/80 leading-relaxed">
        Three paths. Same room. Whatever skill you already have just got multiplied by a machine that does the typing.
      </p>
      <p className="mt-6 text-2xl text-white font-bold">That&apos;s vibecoding.</p>
    </section>
  )
}

function PathCard({ accent, title, children }: { accent: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:-translate-y-1 hover:border-white/20">
      <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed">{children}</p>
    </div>
  )
}

function WhatIsVibecoding() {
  return (
    <section id="what" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">So what is vibecoding, technically?</h2>
      <div className="space-y-5 text-white/80 text-lg leading-relaxed">
        <p>Coined by Andrej Karpathy in early 2025. The premise:</p>
        <ul className="space-y-3 my-6">
          <li className="flex gap-3"><span className="text-pink-400 mt-1">→</span> You tell an AI agent what you want, in plain language.</li>
          <li className="flex gap-3"><span className="text-purple-400 mt-1">→</span> The agent writes the code, runs it, fixes its own mistakes.</li>
          <li className="flex gap-3"><span className="text-teal-300 mt-1">→</span> You stay in the loop — reviewing, redirecting, refining.</li>
          <li className="flex gap-3"><span className="text-pink-400 mt-1">→</span> You&apos;re the director. The agent is the orchestra.</li>
        </ul>
        <p>AI usually gets discussed as a miracle product — the chatbot, the answer machine. There&apos;s a parallel miracle: AI as the builder. The output is usually a regular, non-AI app. A habit tracker is just a habit tracker. The miracle is that you built it.</p>
        <p className="text-white text-xl font-medium">Software used to need a developer, a budget, and a timeline. Now: one person, one afternoon. That&apos;s the historical shift.</p>
        <p>&ldquo;Vibe&rdquo; because you&apos;re not specifying syntax. You&apos;re communicating shape, feel, direction — and reacting to what comes back.</p>
      </div>
    </section>
  )
}

function TheLoop() {
  const steps = [
    { n: '1', label: 'Ask', body: '"Add a page that shows X. Use the existing style."' },
    { n: '2', label: 'Watch', body: 'The agent reads files, writes code, runs commands, shows you what it did.' },
    { n: '3', label: 'React', body: '"Make the header smaller. Move the nav to the left."' },
    { n: '4', label: 'Ship', body: 'Working software, in the time it used to take to write the spec.' },
  ]
  return (
    <section id="loop" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">What it actually looks like</h2>
      <p className="text-white/80 text-lg mb-8">A session is a tight loop:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s) => (
          <div key={s.n} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl font-bold text-white/30 mb-2">{s.n}</div>
            <div className="text-lg font-semibold text-white mb-2">{s.label}</div>
            <div className="text-sm text-white/60 leading-relaxed">{s.body}</div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-white/80 text-lg leading-relaxed">
        A session that would have taken a sprint can take an afternoon. A weekend project becomes a Tuesday-evening project. A &ldquo;wouldn&apos;t it be cool if…&rdquo; becomes a working demo before the coffee gets cold.
      </p>
    </section>
  )
}

function WhereItShines() {
  const items = [
    { icon: '⚡', title: 'Prototypes', body: 'Get an idea in front of stakeholders today, not next month. Throwaway code that proves a concept.' },
    { icon: '🧰', title: 'Personal tools', body: 'The $10/month app you don\'t love — rebuilt in an afternoon, exactly the way you want it. Habit tracker, weekend planner, expense logger, anything you wish existed.' },
    { icon: '🔎', title: 'Exploration', body: 'Poking at a new API. Testing a hypothesis. Trying three approaches in the time it used to take to plan one.' },
    { icon: '🎨', title: 'UI polish', body: '"Make it nicer." A category of feedback that used to require detailed mockups now just works.' },
    { icon: '🧪', title: 'Glue code', body: 'Connecting service A to service B. Reshaping data. The work that\'s tedious but not hard.' },
    { icon: '📚', title: 'Learning', body: 'Working in an unfamiliar stack. The agent answers questions and writes the code at the same time.' },
  ]
  return (
    <section id="shines" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Where vibecoding shines</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-white/20">
            <div className="text-2xl mb-2">{it.icon}</div>
            <div className="text-lg font-semibold text-white mb-2">{it.title}</div>
            <div className="text-sm text-white/60 leading-relaxed">{it.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhereItBites() {
  const items = [
    { icon: '🧭', title: 'No clear direction', body: 'The vibe only works if there\'s a vibe in your head. "Build me something cool" gets you something nobody asked for.' },
    { icon: '🏁', title: 'No formal definition of done', body: 'The agent will confidently produce code that doesn\'t solve your problem if you can\'t say what "solved" looks like.' },
    { icon: '👀', title: 'No review', body: 'AI writes the code, the copy, all of it. Skip the diff and you\'re shipping a confident stranger\'s homework.' },
    { icon: '🔓', title: 'No guardrails', body: 'Prod database creds, prod APIs, your inbox. Don\'t hand the AI keys it doesn\'t need.' },
  ]
  return (
    <section id="bites" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">Where it bites</h2>
      <p className="text-white/80 text-lg mb-8">Power tool, not magic wand. Where it bites:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-pink-400/20 bg-pink-400/5 p-5">
            <div className="text-2xl mb-2">{it.icon}</div>
            <div className="text-lg font-semibold text-white mb-2">{it.title}</div>
            <div className="text-sm text-white/60 leading-relaxed">{it.body}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillsThatMatter() {
  return (
    <section id="skills" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">What skills still matter</h2>
      <p className="text-white/80 text-lg leading-relaxed mb-8">
        The thing people get wrong: &ldquo;AI will write the code, so I don&apos;t need to know anything.&rdquo; The opposite is true. When the model can produce a thousand lines in a minute, your value moves up the stack — toward exactly the things Rick Rubin is paid for.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <SkillCard title="Taste" body="Knowing what &ldquo;good&rdquo; looks like. Recognizing a design that will rot in six months." />
        <SkillCard title="Context-setting" body="Briefing the agent well. The best prompts read like notes to a smart colleague." />
        <SkillCard title="Judgment" body="When to accept the suggestion, when to redirect, when to throw it out entirely." />
      </div>
    </section>
  )
}

function SkillCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="text-lg font-bold text-white mb-2">{title}</div>
      <div className="text-sm text-white/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  )
}

function TwoPaths() {
  return (
    <section id="paths" className="py-12 scroll-mt-24">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Two paths.</h2>
      <p className="text-white/80 text-lg leading-relaxed mb-10">
        A hundred tools out there. Realistically, two matter. One is the fastest way to ship your first thing. The other is what you graduate to.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PathDetailCard
          label="Path 1 — onboarding"
          title="Lovable"
          accent="from-pink-400 to-purple-400"
          tagline="Type what you want into a browser. Get a working web app. Hosted, no setup, no terminal."
          pros={[
            'Zero setup. Sign up, type, ship.',
            'Genuinely capable — nearly any web app you\'d want to build.',
            'Fastest possible path from "idea" to "working URL."',
          ]}
          cons={[
            'Web apps only. No iOS/Android, no browser extensions, no hardware, no local scripts.',
            'You stay one level removed from the actual code.',
            'Vendor lock-in. Their platform, their pricing, their roadmap.',
          ]}
        />
        <PathDetailCard
          label="Path 2 — graduate to this"
          title="Claude Code + VS Code"
          accent="from-purple-400 to-teal-300"
          tagline="Agent that lives in your editor. A small setup hump. Then you move just as fast — and the ceiling lifts dramatically."
          pros={[
            'Same speed as Lovable once it\'s set up.',
            'For web apps specifically: more capable, not less — any stack (Next.js, Remix, Astro), any database, any host.',
            'Build everything else too: iOS/Android, browser extensions, hardware, local scripts, bots, automation.',
            'You learn the actual frameworks. The skill compounds.',
            'You own the code, the deploys, the infrastructure.',
            'What this very page was built with.',
          ]}
          cons={[
            '~15 minutes of setup to get going.',
            'A few more pieces to think about (DB, auth, hosting).',
          ]}
        />
      </div>
    </section>
  )
}

function PathDetailCard({
  label,
  title,
  accent,
  tagline,
  pros,
  cons,
}: {
  label: string
  title: string
  accent: string
  tagline: string
  pros: string[]
  cons: string[]
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-3">{label}</p>
      <h3 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>{title}</h3>
      <p className="text-sm text-white/70 leading-relaxed mb-6">{tagline}</p>

      <p className="text-xs font-semibold uppercase tracking-wider text-teal-300/80 mb-2">Pros</p>
      <ul className="space-y-2 mb-5 text-sm text-white/80">
        {pros.map((p, i) => (
          <li key={i} className="flex gap-2"><span className="text-teal-300 mt-0.5">+</span>{p}</li>
        ))}
      </ul>

      <p className="text-xs font-semibold uppercase tracking-wider text-pink-400/80 mb-2">Cons</p>
      <ul className="space-y-2 text-sm text-white/80">
        {cons.map((c, i) => (
          <li key={i} className="flex gap-2"><span className="text-pink-400 mt-0.5">−</span>{c}</li>
        ))}
      </ul>
    </div>
  )
}

function PollSection() {
  return (
    <section id="poll" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Which method will you try first?</h2>
      <Poll />
    </section>
  )
}

function PathTwoUnlocks() {
  const items = [
    { icon: '📱', label: 'iOS/Android apps (via Expo)' },
    { icon: '🧩', label: 'Browser extensions' },
    { icon: '🥧', label: 'Raspberry Pi & Arduino projects' },
    { icon: '🍎', label: 'Mac menu bar / Windows tray tools' },
    { icon: '🤖', label: 'Slack, Discord, Telegram bots' },
    { icon: '⚙️', label: 'Personal automations on your laptop' },
    { icon: '💻', label: 'CLI tools you install once and use forever' },
    { icon: '🎮', label: 'Game prototypes' },
  ]
  return (
    <section id="unlocks" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">What Path 2 unlocks</h2>
      <p className="text-white/60 mb-8">All from the same skill that built the web app.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((it) => (
          <div key={it.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
            <div className="text-2xl mb-2">{it.icon}</div>
            <div className="text-sm text-white/80">{it.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-4 text-white/80 text-lg leading-relaxed">
        <p>Lovable answers the question <span className="text-white">&ldquo;how do I build a web app.&rdquo;</span> Claude Code answers the question <span className="text-white">&ldquo;how do I build.&rdquo;</span></p>
        <p>Lovable is the fastest way to ship a project this year. Claude Code is the fastest way to become someone who ships projects every year for the rest of your career.</p>
        <p className="text-white text-xl font-medium">Both are legitimate. But if you&apos;re betting on AI fluency as a career edge — and you should be — the second bet will take you further.</p>
      </div>
    </section>
  )
}

function LiveDemo() {
  return (
    <section id="demo" className="py-12 scroll-mt-24">
      <SectionLabel>Live demo</SectionLabel>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">Enough talking. Let&apos;s build it.</h2>
      <div className="space-y-5 text-white/80 text-lg leading-relaxed mb-10">
        <p>I&apos;m switching screens to Lovable. We&apos;re going to build a small web app — live, in front of you, in the time it takes for me to explain it. No terminal. No code I have to write. Just describing what I want, then watching it appear.</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-10">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/40 mb-4">The spec</p>
        <p className="text-xl text-white font-medium mb-5">A version of this presentation — plus three things.</p>
        <ul className="space-y-3 text-white/80">
          <li className="flex gap-3"><span>🔐</span><span><strong className="text-white">Login.</strong> So people can vote and comment as themselves.</span></li>
          <li className="flex gap-3"><span>🗳️</span><span><strong className="text-white">A voting poll.</strong> &ldquo;Which method will you try first — Lovable or Claude Code?&rdquo; Plus live results.</span></li>
          <li className="flex gap-3"><span>💬</span><span><strong className="text-white">A comment section.</strong> Bottom of the page. &ldquo;What&apos;s the first thing you&apos;re going to build?&rdquo;</span></li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="/lovable-prompt.md"
          download
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-white/20 block"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-pink-400/80 mb-2">⬇ For Lovable</p>
          <p className="text-lg font-semibold text-white">Download the prompt</p>
          <p className="text-sm text-white/50 mt-1">lovable-prompt.md · paste straight in</p>
        </a>
        <a
          href="/claude-code-prompt.md"
          download
          className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-white/20 block"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-teal-300/80 mb-2">⬇ For Claude Code</p>
          <p className="text-lg font-semibold text-white">Download the prompt</p>
          <p className="text-sm text-white/50 mt-1">claude-code-prompt.md · full 8-step build</p>
        </a>
      </div>

      <p className="mt-10 text-xl text-white font-medium leading-relaxed">
        If I can build this in the time it takes you to refill your coffee — and I never had to write a line of code — what would you build?
      </p>
    </section>
  )
}

function MyStack() {
  const layers = [
    { tier: 'Editor', name: 'VS Code', body: 'Universal, free. Every AI tool plugs into it.' },
    { tier: 'AI agent', name: 'Claude Code', body: 'The brain. Reads the repo, writes code, runs commands.' },
    { tier: 'Code', name: 'React + TypeScript', body: 'AI is best-trained on it. TypeScript catches the dumb mistakes.' },
    { tier: 'Data', name: 'Neon', body: 'Serverless Postgres. Real SQL, branchable.' },
    { tier: 'Auth', name: 'Clerk', body: "Auth as a service. Don't vibecode this." },
    { tier: 'Email', name: 'Resend', body: 'Transactional email. React templates, not 1998 HTML.' },
    { tier: 'Source', name: 'GitHub', body: 'Free, standard. Vercel deploys from it on every push.' },
    { tier: 'Hosting', name: 'Vercel', body: 'Push to GitHub. Get a URL. Zero servers to babysit.' },
  ]
  return (
    <section id="stack" className="py-12 scroll-mt-24">
      <SectionLabel>Path 2 in detail</SectionLabel>
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">My stack.</h2>
      <p className="text-white/80 text-lg leading-relaxed mb-10">
        If you&apos;re graduating to Claude Code, here&apos;s exactly what the setup looks like. Eight pieces. Free or nearly free to start. Wired so that &ldquo;I have an idea&rdquo; to &ldquo;there&apos;s a working URL&rdquo; takes hours, not weeks.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
        {layers.map((l) => (
          <div key={l.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-1">{l.tier}</p>
            <p className="text-lg font-bold text-white">{l.name}</p>
            <p className="text-sm text-white/60 mt-1">{l.body}</p>
          </div>
        ))}
      </div>

      <p className="text-white/80 text-lg leading-relaxed">
        Every piece has a free tier. Every piece is widely used, so the AI has seen it a thousand times and writes it well. Every piece is replaceable without rewriting the rest. <span className="text-white">Boring, popular, modular — that&apos;s the trick.</span>
      </p>
    </section>
  )
}

function HowToStart() {
  const steps = [
    {
      title: 'Pick a real problem.',
      body: "Not a tutorial. The spreadsheet you wish was a dashboard. The Tuesday script that'd save you an hour. The $10/month app you don't quite love. Wherever the friction is — that's your prompt.",
    },
    {
      title: 'Pick your path.',
      body: 'Want a web app you can ship by tonight? Start with Lovable. Want to build the skill that compounds — and the freedom to make things beyond web apps? Skip ahead to Claude Code in VS Code. Either way, the goal is to graduate to Path 2 eventually.',
    },
    {
      title: 'Brief like a colleague.',
      body: '"Here\'s what I want. Here\'s what I\'ve tried. Here\'s the data." The best prompts read like notes to a smart human, not search queries.',
      pro: "Pro move: Don't write the spec — collaborate on it. Tell Claude.ai what you want to build. Ask it to interview you with questions until the spec is sharp. Paste that finished spec into Claude Code as your opening prompt. Skip three rounds of \"wait, also…\"",
    },
    {
      title: 'Loop.',
      body: "Reading every diff? Nobody actually does. Tell the agent to recap each change in short bullets — approve or redirect from the summary. Don't try to one-shot it. The loop is cheap. Use it.",
    },
  ]
  return (
    <section id="start" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">How to start (this week)</h2>
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex gap-4">
              <span className="text-3xl font-bold text-white/30 leading-none mt-1">{i + 1}</span>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/70 leading-relaxed">{s.body}</p>
                {s.pro && (
                  <div className="mt-4 rounded-xl border border-purple-400/30 bg-purple-400/10 p-4 text-sm text-white/80 leading-relaxed">
                    <span className="font-semibold text-purple-300">Pro move:</span> {s.pro.replace('Pro move: ', '')}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-xl text-white font-medium">Four steps. Try one this weekend.</p>
    </section>
  )
}

function CommentsSection() {
  return (
    <section id="comments" className="py-12 scroll-mt-24">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">What&apos;s the first thing you&apos;re going to build?</h2>
      <Comments />
    </section>
  )
}

function ShortEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="my-8 mx-auto w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

function VideoEmbed({
  videoId,
  start,
  end,
  title,
}: {
  videoId: string
  start?: number
  end?: number
  title: string
}) {
  const params = new URLSearchParams()
  if (start) params.set('start', String(start))
  if (end) params.set('end', String(end))
  const query = params.toString() ? `?${params.toString()}` : ''
  return (
    <div className="my-8 w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}${query}`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

function OneMoreThing() {
  return (
    <section id="more" className="py-12 scroll-mt-24">
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-teal-300 bg-clip-text text-transparent">
        One more thing.
      </h2>
      <div className="space-y-5 text-white/80 text-lg leading-relaxed">
        <p>This page didn&apos;t exist an hour ago. I described what I wanted. Something else built it. I reviewed, I nudged, I kept the parts I liked and threw out the rest.</p>
        <p>That&apos;s the whole point. Justin doesn&apos;t need to play violin. Rick doesn&apos;t need to play guitar.</p>
        <p className="text-2xl text-white font-bold pt-4">You don&apos;t need to write code to ship software anymore.</p>
        <p className="text-xl text-white/90 italic">You just need to know what good looks like — and be decisive about it.</p>
      </div>
    </section>
  )
}
