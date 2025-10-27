import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-4 text-slate-300">
              I’m a senior creative web developer focused on immersive 3D experiences. I blend
              engineering and design to craft performant, accessible interfaces using Three.js,
              WebGL, and React. I obsess over smooth motion, subtle detail, and measurable speed.
            </p>
            <ul className="mt-6 grid gap-3 text-slate-300 sm:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Performance-first builds</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Shader & lighting finesse</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Clean, modular code</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Responsive & accessible</li>
            </ul>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-square w-64 rotate-6 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/30 to-purple-600/30 p-1 shadow-xl shadow-fuchsia-500/20 sm:w-80">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950">
                <div className="h-28 w-28 animate-pulse rounded-xl bg-gradient-to-br from-cyan-400 to-fuchsia-500" />
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-6 -z-[0] rounded-3xl bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.12),transparent_50%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
