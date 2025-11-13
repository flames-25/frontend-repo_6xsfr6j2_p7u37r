import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="pt-24">
      <section className="relative h-[70vh] min-h-[480px] w-full rounded-3xl overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
        <div className="relative h-full flex items-end">
          <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="backdrop-blur-md bg-white/50 rounded-2xl border border-white/60 p-6 sm:p-8 shadow-sm"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-800">
                XR Developer crafting minimal, modern spatial experiences
              </h1>
              <p className="mt-3 text-slate-600 text-base sm:text-lg">
                Focused on WebXR, Unity, and immersive interfaces. Clean aesthetics, smooth motion, and real-world utility.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16 grid gap-6 md:grid-cols-3">
        {[
          { title: 'WebXR', desc: 'Three.js, WebGL, Spline & browser-based XR.' },
          { title: 'Unity XR', desc: 'AR/VR prototypes for headsets & mobile.' },
          { title: 'Design', desc: 'Pastel palettes, rounded UI, soft gradients.' },
        ].map((f) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl p-6 bg-white/60 border border-white/60 backdrop-blur shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-800">{f.title}</h3>
            <p className="mt-1 text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
