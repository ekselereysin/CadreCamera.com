// ─── Logo ────────────────────────────────────────────────────────────────────
const BAR_COLORS = ['#E24B4A', '#EF9F27', '#639922', '#378ADD', '#7F77DD']

function CadreLogo({ small = false }) {
  const barH = small ? 14 : 20
  const barW = small ? 3.5 : 5
  const gap = small ? '3px' : '4px'
  const fontSize = small ? 'text-sm' : 'text-lg'

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center" style={{ gap }}>
        {BAR_COLORS.map((color, i) => (
          <div
            key={color}
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

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-x-hidden pb-16">
      {/* Gradient halo */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(226,75,74,0.10) 0%, rgba(127,119,221,0.08) 40%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-white/60">
          <span className="text-yellow-400" aria-label="5 stars">★★★★★</span>
          <span>Photography</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white mb-6">
          Instant Film.<br />
          <span className="text-white/70">Reimagined for</span> iPhone.
        </h1>

        <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Capture moments in authentic analog style — with over 50 handcrafted
          film filters, three classic frame formats, and a collage studio built
          for the way you share.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl text-base hover:bg-white/90 transition-colors"
        >
          {/* TODO: replace with App Store URL before launch */}
          Download on the App Store
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Phone mockups */}
      <div className="relative z-10 mt-20 flex items-end justify-center gap-2 sm:gap-6">
        {[
          { rotate: '-6deg', label: 'Mini' },
          { rotate: '0deg',  label: 'Square' },
          { rotate: '6deg',  label: 'Wide' },
        ].map(({ rotate, label }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-2 bg-dark-photo border border-dark-photoborder text-white/20"
            style={{
              width: 'clamp(90px, 28vw, 140px)',
              aspectRatio: '9 / 19.5',
              borderRadius: 'clamp(20px, 4vw, 28px)',
              transform: `rotate(${rotate})`,
              boxShadow: '0 32px 64px rgba(0,0,0,0.6)',
            }}
          >
            <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
            </svg>
            <span className="text-xs">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-dark-page text-white">
      <Navbar />
      <Hero />
    </div>
  )
}
