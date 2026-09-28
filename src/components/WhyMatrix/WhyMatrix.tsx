import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

const icons = [
  <svg key={0} viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8z" stroke="currentColor" strokeWidth="1.5"/><path d="M20 20h4v8M20 28h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="24" cy="16" r="1.5" fill="currentColor"/></svg>,
  <svg key={1} viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M12 36L24 12l12 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15.5 29h17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key={2} viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M10 36V28M18 36V20M26 36V14M34 36V24M42 36V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key={3} viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M10 28l8-8 8 6 12-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M34 16h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="10" y="34" width="28" height="2" rx="1" fill="currentColor" fillOpacity="0.3"/></svg>,
  <svg key={4} viewBox="0 0 48 48" fill="none" className="w-10 h-10"><path d="M16 24c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 36c0-5.5 6.3-10 14-10s14 4.5 14 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 20c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/><path d="M32 20c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5"/></svg>,
]

const iconColors = ['text-matrix-accent', 'text-blue-400', 'text-purple-400', 'text-amber-400', 'text-matrix-accent']
const cardGradients = ['from-matrix-accent/5', 'from-blue-500/5', 'from-purple-500/5', 'from-amber-500/5', '']

export default function WhyMatrix() {
  const { t } = useLang()
  const w = t.why
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    gsap.fromTo(section.querySelector('.why-head'), { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 75%' }
    })
    gsap.fromTo(section.querySelectorAll('.why-card'), { y: 60, opacity: 0, scale: 0.97 }, {
      y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: section.querySelector('.why-grid'), start: 'top 75%' }
    })
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 md:py-36 bg-matrix-dark relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-matrix-accent/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-blue-500/4 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="why-head mb-16 md:mb-20">
          <span className="section-label mb-4 block">{w.sectionLabel}</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-4xl">
            <h2 className="text-headline font-extrabold text-white leading-tight">{w.heading}</h2>
            <p className="max-w-sm text-sm text-white/40 leading-relaxed">{w.sub}</p>
          </div>
        </div>
        <div className="why-grid grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {/* Card 0 — large */}
          <div className="why-card md:col-span-7 group relative p-8 md:p-10 rounded-2xl border border-matrix-border bg-matrix-surface hover:border-matrix-accent/25 transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[0]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative">
              <div className={`${iconColors[0]} mb-6`}>{icons[0]}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{w.items[0].title}</h3>
              <p className="text-white/45 leading-relaxed max-w-md">{w.items[0].desc}</p>
              <div className="mt-8 h-px w-0 bg-matrix-accent group-hover:w-full transition-all duration-700" />
            </div>
          </div>
          {/* Card 1 — small */}
          <div className="why-card md:col-span-5 group relative p-8 rounded-2xl border border-matrix-border bg-matrix-surface hover:border-matrix-accent/25 transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[1]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative">
              <div className={`${iconColors[1]} mb-6`}>{icons[1]}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{w.items[1].title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{w.items[1].desc}</p>
            </div>
          </div>
          {/* Card 2 — small */}
          <div className="why-card md:col-span-4 group relative p-8 rounded-2xl border border-matrix-border bg-matrix-surface hover:border-matrix-accent/25 transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[2]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative">
              <div className={`${iconColors[2]} mb-6`}>{icons[2]}</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{w.items[2].title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{w.items[2].desc}</p>
            </div>
          </div>
          {/* Card 3 — large */}
          <div className="why-card md:col-span-8 group relative p-8 md:p-10 rounded-2xl border border-matrix-border bg-matrix-surface hover:border-matrix-accent/25 transition-all duration-500 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[3]} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative flex flex-col md:flex-row md:items-start gap-6">
              <div className={`${iconColors[3]} shrink-0`}>{icons[3]}</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{w.items[3].title}</h3>
                <p className="text-white/45 leading-relaxed max-w-md">{w.items[3].desc}</p>
                <div className="mt-6 flex gap-6">
                  <div><div className="text-xl font-bold text-amber-400">100%</div><div className="text-xs text-white/30">{w.metric1}</div></div>
                  <div><div className="text-xl font-bold text-amber-400">8+</div><div className="text-xs text-white/30">{w.metric2}</div></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 — full accent */}
          <div className="why-card md:col-span-12 group relative p-8 md:p-10 rounded-2xl border border-matrix-accent/20 bg-matrix-accent/3 hover:bg-matrix-accent/6 transition-all duration-500 overflow-hidden">
            <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <div className={`${iconColors[4]} shrink-0`}>{icons[4]}</div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{w.items[4].title}</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-lg">{w.items[4].desc}</p>
              </div>
              <div className="shrink-0">
                <a href="#contact" className="btn-primary">
                  {w.cta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
