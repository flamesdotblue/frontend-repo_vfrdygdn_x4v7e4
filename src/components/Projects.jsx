import React from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Nebula',
    description: 'Procedural galaxy with particle shaders and camera paths.',
    demo: 'https://example.com/demo-nebula',
    repo: 'https://github.com/yourname/neon-nebula',
    tags: ['Three.js', 'GLSL', 'Particles'],
  },
  {
    title: 'Voxel Forge',
    description: 'Realtime voxel editor with marching cubes and SSAO.',
    demo: 'https://example.com/voxel-forge',
    repo: 'https://github.com/yourname/voxel-forge',
    tags: ['WebGL', 'Physics', 'SDF'],
  },
  {
    title: 'Shader Garden',
    description: 'Interactive shader gallery with post-processing stack.',
    demo: 'https://example.com/shader-garden',
    repo: 'https://github.com/yourname/shader-garden',
    tags: ['GLSL', 'PostFX', 'Three.js'],
  },
]

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 text-slate-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-2 text-slate-400">A selection of interactive 3D experiments and products.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-fuchsia-400/40 hover:shadow-xl hover:shadow-fuchsia-500/10"
            >
              <div className="mb-4 h-40 w-full rounded-xl bg-gradient-to-br from-cyan-400/20 via-fuchsia-400/20 to-purple-500/20" />
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-fuchsia-500/90 px-3 py-2 text-xs font-semibold text-white transition hover:bg-fuchsia-500"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
