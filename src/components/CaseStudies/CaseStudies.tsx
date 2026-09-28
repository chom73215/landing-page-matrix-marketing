import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

export default function CaseStudies() {
  const { t } = useLang()
  const cs = t.caseStudies
  const sectionRef = useRef<HTMLElement>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    gsap.fromTo(section.querySelector('.cs-head'), { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 75%' }
    })
    gsap.fromTo(section.querySelectorAll('.cs-card'), { y: 70, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: section.querySelector('.cs-grid'), start: 'top 75%' }
    })
  }, [])

  return (
    <section ref={sectionRef} id="case-studies" className="py-24 md:py-36 bg-matrix-black relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="cs-head mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="section-label mb-4 block">{cs.sectionLabel}</span>
            <h2 className="text-headline font-extrabold text-slate-900 leading-tight whitespace-pre-line">{cs.heading}</h2>
          </div>
          <a href="#contact" className="btn-outline self-start md:self-auto">
            {cs.viewAll}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </a>
        </div>
        <div className="cs-grid grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {cs.items.map((item, i) => (
            <div key={i} className="cs-card group relative rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm cursor-pointer transition-all duration-500 hover:shadow-lg hover:border-slate-300"
              onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} data-cursor-hover>
              <div className="relative h-48 md:h-56 overflow-hidden bg-slate-50">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`} />
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 30% 50%, ${item.color}25 0%, transparent 70%)` }} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[clamp(3rem,6vw,5rem)] font-extrabold tracking-tight leading-none transition-transform duration-500 group-hover:scale-110" style={{ color: item.color }}>{item.metric}</div>
                    <div className="text-xs font-semibold tracking-widest uppercase mt-2" style={{ color: item.color, opacity: 0.85 }}>{item.metricLabel}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-xs font-mono text-slate-800 font-bold border border-slate-300 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">{item.year}</div>
                <div className="absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full border" style={{ borderColor: `${item.color}60`, color: item.color, backgroundColor: `${item.color}18` }}>{item.category}</div>
                <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${hoveredIdx === i ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ background: item.color }}>
                  <svg className="text-white" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-slate-300 bg-slate-100 text-slate-800 font-semibold">{tag}</span>)}
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                  <span className="text-xs font-bold text-slate-800">{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
