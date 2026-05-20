# Vibecoding Talk — Interactive Web App

Build a single-page web app: a long-form scrolling presentation about **"vibecoding"** — using AI to write code — with three interactive features baked into the page.

---

## Look & feel

- **Dark theme.** Editorial, modern, generous whitespace.
- Big bold typography. The page's main title uses a gradient (pink → purple → teal) on a black background.
- Long-form scrolling layout with clearly divided sections, each separated by a thin rule.
- Sticky left-side nav showing the section list, with the current section highlighted as the user scrolls.
- Subtle hover lifts and scroll-triggered animations.
- Mobile responsive.

---

## Page sections (top to bottom)

1. **Hero** — title "Vibecoding." with a one-line tagline: *"A story about two people who direct experts instead of being one — and why that skill just became the most valuable in the room."*
2. **What is vibecoding** — short explainer: telling an AI agent what you want and watching it build. Three or four bullets.
3. **Two paths** — side-by-side comparison: **Lovable** (fast onboarding for web apps) vs **Claude Code** (graduate to this — broader ceiling, skill compounds).
4. **Voting poll** ← *interactive, see below*
5. **Comment section** ← *interactive, see below*

---

## Interactive feature 1 — Login

- Add user authentication so people can vote and comment as themselves.
- Sign-up and sign-in via email + password. Social login (Google) if easy.
- Small "Sign in" button in the top-right corner of the page.
- Logged-out users can read everything but cannot vote or comment.

## Interactive feature 2 — Voting poll

- Place this in its own dedicated section in the middle of the page.
- Heading: **"Which method will you try first?"**
- Two options:
  1. **Lovable**
  2. **Claude Code**
- Logged-in users can vote once. After voting, immediately show live results: percentage bar for each option, total vote count.
- Empty state before any votes: *"Be the first to vote."*

## Interactive feature 3 — Comment section

- Place at the bottom of the page.
- Heading: **"What's the first thing you're going to build?"**
- Logged-in users can post one comment at a time, up to 200 characters.
- Display all comments newest-first, showing display name + relative timestamp ("2 minutes ago").
- Empty state: *"No comments yet — be the first to start the conversation."*

---

## Polish

- Smooth scrolling between sections.
- Friendly empty states everywhere.
- Loading states for the poll and comments so they feel responsive.
- A small footer with no required content.

**Build it.**
