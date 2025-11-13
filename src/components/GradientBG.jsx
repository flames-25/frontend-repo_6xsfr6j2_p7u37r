export default function GradientBG({ children }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[30%] bg-[radial-gradient(40%_40%_at_50%_0%,rgba(173,216,230,0.6),transparent_60%),radial-gradient(30%_30%_at_10%_90%,rgba(221,214,254,0.6),transparent_60%),radial-gradient(30%_30%_at_90%_90%,rgba(187,247,208,0.6),transparent_60%)]" />
      </div>
      {children}
    </div>
  )
}
