import React from 'react'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { Mail, Send, Github, Linkedin } from 'lucide-react'

function App() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    // For this template we just open the user's email client
    window.location.href = `mailto:your.email@example.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(
      name || ''
    )}&body=${encodeURIComponent(`${message || ''}`)}%0A%0AFrom:%20${encodeURIComponent(
      email || ''
    )}`
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section with Spline */}
      <Hero3D />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Contact (inline to keep a focused component count) */}
      <section id="contact" className="relative w-full bg-slate-950 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
            <p className="mt-2 text-slate-400">Have a project in mind? Let’s build something immersive.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-4">
                <label className="text-sm">
                  <span className="mb-1 block text-slate-300">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    placeholder="Ada Lovelace"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-slate-300">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    placeholder="ada@example.com"
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-1 block text-slate-300">Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                    placeholder="Tell me about your idea..."
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:translate-y-0.5 hover:bg-cyan-400"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
            </form>
            <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-3 text-cyan-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <a href="mailto:your.email@example.com" className="font-medium text-white hover:underline">
                    your.email@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/yourname"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/yourname"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-white/90 transition hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
              <p className="text-sm text-slate-400">
                Based in Earth · Available for freelance and collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. Built with Three.js vibes.
      </footer>
    </div>
  )
}

export default App
