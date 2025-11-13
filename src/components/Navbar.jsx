import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-white/70 text-slate-800'
        : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
    }`

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 border border-white/40 shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-200 to-sky-200 border border-white/60 shadow-inner" />
              <span className="text-slate-800 font-semibold tracking-tight">XR Dev</span>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={linkClasses} end>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClasses}>
                About
              </NavLink>
              <NavLink to="/projects" className={linkClasses}>
                Projects
              </NavLink>
              <NavLink to="/contact" className={linkClasses}>
                Contact
              </NavLink>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-slate-700 hover:bg-white/60"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                <NavLink to="/" className={linkClasses} end>
                  Home
                </NavLink>
                <NavLink to="/about" className={linkClasses}>
                  About
                </NavLink>
                <NavLink to="/projects" className={linkClasses}>
                  Projects
                </NavLink>
                <NavLink to="/contact" className={linkClasses}>
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
