import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Pastel Bank XR',
    desc: 'A fintech-themed spatial UI exploration using Spline and WebXR.',
    tags: ['WebXR', 'Spline', 'Design'],
  },
  {
    title: 'Unity Roomscale Kit',
    desc: 'A set of prefabs for rapid VR prototyping with smooth locomotion.',
    tags: ['Unity', 'C#', 'XR'],
  },
  {
    title: 'Haptic Notes',
    desc: 'An experimental tactile notebook for headset controllers.',
    tags: ['Interaction', 'Prototype'],
  },
]

export default function Projects() {
  return (
    <div className="pt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-bold text-slate-800">Projects</h2>
        <p className="text-slate-600">Selected work and prototypes</p>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 bg-white/60 backdrop-blur border border-white/60 shadow-sm"
          >
            <div className="h-36 rounded-xl bg-gradient-to-br from-indigo-100 via-sky-100 to-emerald-100 border border-white/70" />
            <h3 className="mt-4 text-lg font-semibold text-slate-800">{p.title}</h3>
            <p className="mt-1 text-slate-600">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/70 text-slate-700 border border-white/60">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
