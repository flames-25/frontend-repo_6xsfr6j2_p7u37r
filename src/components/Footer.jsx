export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} XR Dev Portfolio</p>
        <p className="opacity-80">Built with love for immersive experiences.</p>
      </div>
    </footer>
  )
}
