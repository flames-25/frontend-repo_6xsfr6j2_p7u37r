import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="pt-28 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl bg-white/60 backdrop-blur border border-white/60 p-8 shadow-sm"
      >
        <h2 className="text-3xl font-bold text-slate-800">Contact</h2>
        <p className="mt-2 text-slate-600">Open to collaborations and opportunities.</p>
        <form className="mt-6 grid gap-4">
          <input className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Your name" />
          <input className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" placeholder="Email" type="email" />
          <textarea className="rounded-xl border border-white/70 bg-white/70 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-200" rows="5" placeholder="Message" />
          <button type="button" className="rounded-xl bg-slate-800 text-white px-5 py-3 hover:bg-slate-900 transition-colors duration-200 w-fit">
            Send message
          </button>
        </form>
      </motion.div>
    </div>
  )
}
