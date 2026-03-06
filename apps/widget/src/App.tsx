import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-900 text-slate-100">
      {/* Hero */}
      <header className="px-4 py-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-md md:text-4xl">
          Widget Demo
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-slate-400">
          AI Support widget showcase
        </p>
      </header>

      {/* Cards */}
      <main className="mx-auto max-w-lg px-4 pb-16">
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5 shadow-lg backdrop-blur-sm transition hover:border-indigo-500/50">
            <h2 className="text-lg font-semibold text-indigo-400">Counter</h2>
            <button
              onClick={() => setCount((c) => c + 1)}
              className="mt-3 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 active:scale-95"
            >
              count is {count}
            </button>
          </div>

          <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-5 shadow-lg backdrop-blur-sm transition hover:border-violet-500/50">
            <h2 className="text-lg font-semibold text-violet-400">Status</h2>
            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-emerald-600/80 px-2.5 py-0.5 text-xs">Online</span>
              <span className="rounded-full bg-slate-600 px-2.5 py-0.5 text-xs">Ready</span>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Edit <code className="rounded bg-slate-700/50 px-1.5 py-0.5 font-mono">src/App.tsx</code> to customize
        </p>
      </main>
    </div>
  )
}

export default App
