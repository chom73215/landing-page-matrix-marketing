import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

const icons = [
  <svg key={0} viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.5"/><circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3"/><path d="M20 5v4M20 31v4M5 20h4M31 20h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key={1} viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M6 28l8-8 6 6 8-10 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="6" y="6" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2"/></svg>,
  <svg key={2} viewBox="0 0 40 40" fill="none" className="w-8 h-8"><circle cx="10" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="30" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="30" cy="28" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M14 18l12-4M14 22l12 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></svg>,
  <svg key={3} viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="8" y="10" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M13 16h14M13 20h10M13 24h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M28 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key={4} viewBox="0 0 40 40" fill="none" className="w-8 h-8"><path d="M8 32V20l7-7 6 5 11-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M27 8h5v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="32" r="2" fill="currentColor"/></svg>,
  <svg key={5} viewBox="0 0 40 40" fill="none" className="w-8 h-8"><rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M6 14h28" stroke="currentColor" strokeWidth="1"/><path d="M11 11h2M15 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M15 32v2M25 32v2M10 34h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
]

export default function Services() {
  const { t } = useLang()
  const s = t.services
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    gsap.fromTo(section.querySelector('.services-head'), { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 75%' }
    })
    gsap.fromTo(section.querySelectorAll('.service-row'), { x: -40, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 65%' }
    })
  }, [])

  return (
    <section ref={sectionRef} id="services" className="py-24 md:py-36 bg-matrix-black relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-matrix-accent/3 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="services-head mb-16 md:mb-24 max-w-3xl">
          <span className="section-label mb-4 block">{s.sectionLabel}</span>
          <h2 className="text-headline font-extrabold text-white mb-6 whitespace-pre-line">{s.heading}</h2>
          <p className="text-base text-white/40 leading-relaxed max-w-lg">{s.sub}</p>
        </div>

        <div className="divide-y divide-matrix-border">
          {s.items.map((item, i) => (
            <div key={i} className="service-row group py-6 md:py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
              onMouseEnter={() => setActiveIndex(i)} onMouseLeave={() => setActiveIndex(null)} data-cursor-hover>
              <span className={`text-xs font-bold tracking-widest transition-colors duration-300 w-8 shrink-0 ${activeIndex === i ? 'text-matrix-accent' : 'text-white/20'}`}>{item.num}</span>
              <div className={`shrink-0 transition-all duration-500 ${activeIndex === i ? 'text-matrix-accent scale-110' : 'text-white/20'}`}>{icons[i]}</div>
              <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 flex-1 ${activeIndex === i ? 'text-white' : 'text-white/70'}`}>
                <span className={`inline-block transition-transform duration-300 ${activeIndex === i ? 'translate-x-2' : ''}`}>{item.title}</span>
              </h3>
              <p className={`text-sm text-white/40 leading-relaxed transition-all duration-500 max-w-sm ${activeIndex === i ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>{item.desc}</p>
              <div className="hidden md:flex gap-2 shrink-0">
                {item.tags.map((tag) => (
                  <span key={tag} className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition-all duration-300 ${activeIndex === i ? 'border-matrix-accent/40 text-matrix-accent bg-matrix-accent/5' : 'border-white/10 text-white/30'}`}>{tag}</span>
                ))}
              </div>
              <svg className={`hidden md:block shrink-0 transition-all duration-300 ${activeIndex === i ? 'text-matrix-accent translate-x-1 opacity-100' : 'text-white/20 opacity-0'}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-6">
          <a href="#contact" className="btn-primary">{s.viewAll}</a>
          <span className="text-sm text-white/30">{s.viewAllSub}</span>
        </div>
      </div>
    </section>
  )
}
