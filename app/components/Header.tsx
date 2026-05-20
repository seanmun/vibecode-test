import { Show, SignInButton, UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur bg-[#0b0b14]/70 border-b border-white/10">
      <span className="text-sm font-semibold tracking-wide text-white/80">vibecoding</span>
      <div className="flex items-center gap-3">
        <Show when="signed-out">
          <SignInButton mode="modal">
            <button className="rounded-full bg-white text-black text-sm font-medium px-4 py-1.5 hover:bg-white/90 transition">
              Sign in
            </button>
          </SignInButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  )
}
