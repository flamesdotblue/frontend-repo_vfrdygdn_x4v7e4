import React from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowDownRight } from 'lucide-react'

const Hero3D = () => {
  const handleEnter = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative h-[90vh] w-full overflow-hidden" aria-label="Intro">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <p className="mb-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs tracking-wider backdrop-blur">
            THREE.JS DEVELOPER PORTFOLIO
          </p>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Hi, I’m <span className="text-cyan-300">Your Name</span>
            <br className="hidden sm:block" /> Creative Web & 3D Engineer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
            I craft immersive, high-performance experiences with Three.js, React, and WebGL.
            Explore my world of shaders, physics, and interactive storytelling.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={handleEnter}
              className="group inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:translate-y-0.5 hover:bg-cyan-400"
            >
              Enter Portfolio
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <a
              href="#projects"
              className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3D
