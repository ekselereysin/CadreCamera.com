// ─── Logo ────────────────────────────────────────────────────────────────────
const BAR_COLORS = ['#E24B4A', '#EF9F27', '#639922', '#378ADD', '#7F77DD']

function CadreLogo({ small = false }) {
  const barH = small ? 14 : 20
  const barW = small ? 3.5 : 5
  const gap = small ? 3 : 4
  const fontSize = small ? 'text-sm' : 'text-lg'

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center" style={{ gap }}>
        {BAR_COLORS.map((color, i) => (
          <div
            key={i}
            style={{
              width: barW,
              height: barH,
              backgroundColor: color,
              borderRadius: 2,
            }}
          />
        ))}
      </div>
      <span className={`${fontSize} font-semibold text-white tracking-tight`}>
        Cadre
      </span>
    </div>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-dark-border"
      style={{ background: 'rgba(13,13,13,0.85)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <CadreLogo />
        <a
          href="#"
          className="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
        >
          Download
        </a>
      </div>
    </nav>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-dark-page text-white">
      <Navbar />
      <div className="pt-16">
        <p className="p-8 text-white/40">Sections coming soon…</p>
      </div>
    </div>
  )
}
