import { useLang } from '../../i18n/LangContext'

const socials = [
  { name: 'LinkedIn', href: '#', icon: <svg key="li" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
  { name: 'Facebook', href: '#', icon: <svg key="fb" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
  { name: 'Instagram', href: '#', icon: <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> },
]

export default function Footer() {
  const { t, locale } = useLang()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="text-[11px] font-bold tracking-[0.3em] text-matrix-accent uppercase">MATRIX</span>
              <span className="text-[11px] font-bold tracking-[0.3em] text-slate-800 uppercase">MARKETING</span>
            </div>
            <p className="text-sm text-slate-700 font-medium leading-relaxed max-w-xs mb-8">{f.desc}</p>
            <div className="space-y-2 mb-8">
              <a href="mailto:hello@matrixmarketing.com" className="flex items-center gap-2 text-sm text-slate-800 hover:text-matrix-accent font-medium transition-colors group">
                <svg className="w-3.5 h-3.5 text-matrix-accent group-hover:scale-110 transition-transform" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M2 5l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                hello@matrixmarketing.com
              </a>
              <a href="tel:+84000000000" className="flex items-center gap-2 text-sm text-slate-800 hover:text-matrix-accent font-medium transition-colors group">
                <svg className="w-3.5 h-3.5 text-matrix-accent group-hover:scale-110 transition-transform" viewBox="0 0 16 16" fill="none"><path d="M13.5 11.3l-2-2a.8.8 0 00-1.1 0l-.7.7a10.7 10.7 0 01-3.7-3.7l.7-.7a.8.8 0 000-1.1l-2-2a.8.8 0 00-1.1 0L2.9 3.3a2 2 0 00.1 2.7l7 7a2 2 0 002.7.1l.7-.7a.8.8 0 000-1.1z" stroke="currentColor" strokeWidth="1.2"/></svg>
                +84 XXX XXX XXX
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-800 font-medium">
                <svg className="w-3.5 h-3.5 text-matrix-accent" viewBox="0 0 16 16" fill="none"><path d="M8 1C5.2 1 3 3.2 3 6c0 4 5 9 5 9s5-5 5-9c0-2.8-2.2-5-5-5z" stroke="currentColor" strokeWidth="1.2"/><circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/></svg>
                {f.address}
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a key={s.name} href={s.href} aria-label={s.name}
                  className="w-8 h-8 rounded-full border border-slate-300 bg-white flex items-center justify-center text-slate-700 hover:text-matrix-accent hover:border-matrix-accent/50 shadow-xs transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(f.links).map(([category, links]) => (
            <div key={`${locale}-${category}`}>
              <h4 className="text-xs font-bold tracking-widest text-slate-950 uppercase mb-5">{category}</h4>
              <ul className="space-y-3">
                {(links as readonly string[]).map((link) => (
                  <li key={link}><a href="#" className="text-sm text-slate-700 hover:text-slate-950 font-medium transition-colors duration-200">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 font-medium">© {year} Matrix Marketing. {f.copyright}</p>
          <div className="flex items-center gap-6">
            {f.legal.map((item) => <a key={item} href="#" className="text-xs text-slate-600 hover:text-slate-950 font-medium transition-colors">{item}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-matrix-accent animate-pulse" />
            <span className="text-xs text-slate-700 font-semibold">{f.available}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
