# Vibecoding Talk — Interactive Web App (Claude Code edition)

Build a Next.js web app from scratch: a long-form scrolling presentation about "vibecoding" with three interactive features (login, voting poll, comments). Same spec I'd give Lovable — but I want you to do it in my preferred stack so I own everything and can take it further.

---

## Stack (use these — don't substitute)

- **Framework:** Next.js 14+ with App Router + TypeScript
- **Styling:** Tailwind CSS
- **Auth:** Clerk via `@clerk/nextjs`
- **Database:** Neon (serverless Postgres) via `@neondatabase/serverless`
- **ORM:** Drizzle (`drizzle-orm` + `drizzle-kit`)
- **Hosting target:** Vercel
- **Source:** GitHub (we'll push when v1 works)

---

## Step 1 — Scaffold the project

Run from the parent directory where I want the project to live:

```bash
npx create-next-app@latest vibecode-app \
  --typescript --tailwind --app --no-src-dir \
  --eslint --import-alias "@/*"

cd vibecode-app
```

Then install runtime + dev deps:

```bash
npm install @clerk/nextjs @neondatabase/serverless drizzle-orm
npm install -D drizzle-kit tsx
```

Verify it boots:

```bash
npm run dev
```

Confirm with me before moving on.

---

## Step 2 — Environment variables

Create `.env.local` at the project root with these keys. **I will paste the actual values myself** — leave them empty for now:

```env
# Clerk — dashboard.clerk.com → API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Neon — console.neon.tech → connection string (pooled)
DATABASE_URL=
```

Add the matching `.env.example` (with empty values) and commit that.

**STOP HERE. Tell me you're ready for the env vars and wait for me to paste them in before proceeding.**

---

## Step 3 — Database schema

Create `db/schema.ts`:

```ts
import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core'

export const votes = pgTable('votes', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull().unique(),
  choice: varchar('choice', { length: 32 }).notNull(), // 'lovable' | 'claude_code'
  createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  userName: varchar('user_name', { length: 255 }).notNull(),
  body: varchar('body', { length: 200 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})
```

Create `db/index.ts` that exports a Drizzle client wired to Neon:

```ts
import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from './schema'

const sql = neon(process.env.DATABASE_URL!)
export const db = drizzle(sql, { schema })
```

Create `drizzle.config.ts` at the root and push the schema to Neon:

```bash
npx drizzle-kit push
```

Confirm both tables show up in the Neon dashboard before continuing.

---

## Step 4 — Auth wiring (Clerk)

1. Wrap `app/layout.tsx` in `<ClerkProvider>`.
2. Add a header component with `<SignInButton />` and `<UserButton />` in the top-right of every page.
3. Create `middleware.ts` at the project root that protects only the API routes:

   ```ts
   import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

   const isProtectedApi = createRouteMatcher(['/api/vote', '/api/comment'])

   export default clerkMiddleware((auth, req) => {
     if (isProtectedApi(req)) auth().protect()
   })

   export const config = {
     matcher: ['/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)', '/(api|trpc)(.*)'],
   }
   ```

4. Boot the dev server, verify sign-up / sign-in / sign-out flow works end-to-end.

---

## Step 5 — Page structure

Build `app/page.tsx` as a single scrolling page with these sections, in order:

1. **Hero** — `<h1>Vibecoding.</h1>` with gradient text (pink → purple → teal) on dark background, plus a one-line tagline.
2. **What is vibecoding** — short explainer paragraph + 3-4 bullets.
3. **Two paths** — Lovable vs Claude Code side-by-side comparison cards.
4. **`<Poll />`** — interactive voting (its own section, mid-page).
5. **`<Comments />`** — comment thread (bottom of page).

Add a **sticky left-side nav** listing the sections; the active section gets highlighted as the user scrolls. Implement scroll-spy with `IntersectionObserver`.

---

## Step 6 — Components

### `app/components/Poll.tsx` (client component)

- Heading: **"Which method will you try first?"**
- Two options: **Lovable** and **Claude Code**.
- On mount, fetch current results from `/api/vote` (GET).
- If the signed-in user hasn't voted: show two large vote buttons.
- After voting: show results as horizontal percentage bars + total count.
- Empty state (zero votes): "Be the first to vote."
- Use a server action OR `/api/vote` POST that inserts into `votes` table. Enforce one vote per user via the unique constraint on `userId`.
- Optimistic UI: update the displayed result immediately on vote, reconcile with the server response.

### `app/components/Comments.tsx` (client component)

- Heading: **"What's the first thing you're going to build?"**
- If signed in: textarea (200 char max, with live character counter) + submit button.
- If signed out: prompt to sign in.
- List of all comments, newest first. Each shows user display name + relative timestamp ("2 minutes ago") using `Intl.RelativeTimeFormat`.
- Fetch from `/api/comment` (GET); post to `/api/comment` (POST).
- Empty state: "No comments yet — be the first to start the conversation."

### API routes

- `app/api/vote/route.ts` — GET returns vote tally `{ lovable: number, claude_code: number, total: number, userVote: string | null }`. POST accepts `{ choice: 'lovable' | 'claude_code' }`, uses Clerk's `auth()` to get userId, upserts into `votes`.
- `app/api/comment/route.ts` — GET returns most recent 100 comments. POST accepts `{ body: string }`, validates length ≤ 200, gets user from Clerk, inserts into `comments`.

---

## Step 7 — Look & feel

- Dark background (`#0b0b14`-ish).
- Big bold sans-serif typography (Inter or system).
- Gradient hero title.
- Generous whitespace; thin rules between sections.
- Subtle hover lifts on cards.
- Smooth scrolling between sections.
- Mobile responsive (collapse the side nav on narrow screens).

---

## Step 8 — Deploy

When v1 works locally:

1. Init a git repo, push to a new GitHub repo (ask me for the repo URL).
2. Import the repo on Vercel — Next.js auto-detects.
3. Paste the env vars from `.env.local` into Vercel's project settings.
4. Deploy. Confirm the live URL works.

---

## Working agreement

- **After each step, summarize what you changed in short bullets** so I can approve before you move on.
- Don't try to one-shot the whole thing — confirm Step 2 (env vars) and Step 3 (schema push) explicitly before continuing.
- If anything in the spec is ambiguous, ask me. Don't guess on auth flows or schema.
- Keep components small and focused.

**Start with Step 1.**
