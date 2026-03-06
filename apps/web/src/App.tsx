import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      {/* Hero Section */}
      <header className="px-6 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-lg md:text-6xl">
          Tailwind CSS Demo
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          A showcase of utility-first styling with React + Vite
        </p>
      </header>

      {/* Cards Grid */}
      <main className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Counter Card */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 shadow-xl backdrop-blur-sm transition hover:border-emerald-500/50">
            <h2 className="text-xl font-semibold text-emerald-400">Interactive Counter</h2>
            <p className="mt-2 text-slate-400">Click to increment</p>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="mt-4 rounded-lg bg-emerald-600 px-6 py-2 font-medium text-white transition hover:bg-emerald-500 active:scale-95"
            >
              count is {count}
            </button>
          </div>

          {/* Typography Card */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 shadow-xl backdrop-blur-sm transition hover:border-amber-500/50">
            <h2 className="text-xl font-semibold text-amber-400">Typography</h2>
            <p className="mt-2 text-slate-400">
              <span className="font-bold text-white">Bold</span>,{' '}
              <span className="italic">italic</span>, and{' '}
              <span className="underline decoration-amber-400">underlined</span> text.
            </p>
          </div>

          {/* Badges Card */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 shadow-xl backdrop-blur-sm transition hover:border-rose-500/50">
            <h2 className="text-xl font-semibold text-rose-400">Badges</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-rose-600/80 px-3 py-1 text-sm">Primary</span>
              <span className="rounded-full bg-sky-600/80 px-3 py-1 text-sm">Secondary</span>
              <span className="rounded-full bg-slate-600 px-3 py-1 text-sm">Neutral</span>
            </div>
          </div>
        </div>

        {/* Full-width CTA */}
        <div className="mt-12 rounded-2xl border border-slate-600/50 bg-gradient-to-r from-slate-800 to-slate-800/80 p-8 text-center">
          <p className="text-slate-300">
            Edit <code className="rounded bg-slate-700 px-2 py-1 font-mono text-sm">src/App.tsx</code> and save to test HMR
          </p>
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-lg border border-slate-600 px-6 py-2 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
          >
            Learn Tailwind CSS →
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
