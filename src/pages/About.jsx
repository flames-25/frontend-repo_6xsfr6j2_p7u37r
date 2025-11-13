import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="pt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-white/60 backdrop-blur border border-white/60 p-8 shadow-sm"
      >
        <h2 className="text-3xl font-bold text-slate-800">About</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          I build serene, minimalist XR experiences with a focus on clarity and motion. My toolkit spans WebXR, Unity, and modern web stacks. I care about performance, comfort, and accessibility in immersive spaces.
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {[
            ['Tooling', 'Three.js, WebXR, Unity, Spline, Blender'],
            ['Focus', 'Interaction design, rapid prototyping, shaders'],
            ['Values', 'Elegance, restraint, and meaningful details'],
            ['Currently', 'Exploring passthrough UX and spatial UIs'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-2xl p-4 bg-white/70 border border-white/60">
              <div className="text-xs uppercase tracking-wide text-slate-500">{k}</div>
              <div className="mt-1 text-slate-800">{v}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
