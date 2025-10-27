import React from 'react'
import { Code2, Cpu, Database, Globe, GitBranch, Layers, Cloud } from 'lucide-react'

const skills = [
  { icon: Code2, label: 'JavaScript / TypeScript' },
  { icon: Cpu, label: 'Three.js / WebGL' },
  { icon: Database, label: 'MongoDB' },
  { icon: Layers, label: 'React / Vite' },
  { icon: Globe, label: 'Shaders / GLSL' },
  { icon: GitBranch, label: 'Git / CI' },
  { icon: Cloud, label: 'Vercel / Netlify' },
]

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
          <p className="mt-2 text-slate-400">Interactive 3D, scalable front-ends, and elegant visuals.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-3 text-cyan-300 shadow-inner shadow-cyan-500/20 transition group-hover:bg-cyan-400/20">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-slate-200">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.15),transparent),radial-gradient(40%_50%_at_100%_80%,rgba(168,85,247,0.12),transparent)]" />
    </section>
  )
}

export default Skills
