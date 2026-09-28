import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

const nodeIcons = [
  <svg key={0} viewBox="0 0 32 32" fill="none" className="w-6 h-6"><circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="1.5"/><circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2"/><path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key={1} viewBox="0 0 32 32" fill="none" className="w-6 h-6"><path d="M8 24L16 8l8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.5 19h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key={2} viewBox="0 0 32 32" fill="none" className="w-6 h-6"><rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M13 12l7 4-7 4V12z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key={3} viewBox="0 0 32 32" fill="none" className="w-6 h-6"><path d="M4 24V18M10 24V14M16 24V10M22 24V16M28 24V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key={4} viewBox="0 0 32 32" fill="none" className="w-6 h-6"><path d="M4 24l7-7 5 4 8-9 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="28" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
]

export default function Solution() {
  const { t } = useLang()
  const s = t.solution
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    gsap.fromTo(section.querySelector('.solution-head'), { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 75%' }
    })
    gsap.fromTo(section.querySelectorAll('.solution-node'), { y: 40, opacity: 0, scale: 0.9 }, {
      y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      scrollTrigger: { trigger: section.querySelector('.nodes-container'), start: 'top 75%' }
    })
    gsap.fromTo(section.querySelectorAll('.connector'), { scaleY: 0, transformOrigin: 'top' }, {
      scaleY: 1, duration: 0.5, stagger: 0.12, ease: 'power2.inOut', delay: 0.3,
      scrollTrigger: { trigger: section.querySelector('.nodes-container'), start: 'top 75%' }
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-matrix-black relative overflow-hidden">
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-matrix-accent/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="solution-head">
            <span className="section-label mb-4 block">{s.sectionLabel}</span>
            <h2 className="text-headline font-extrabold text-white mb-6 leading-tight whitespace-pre-line">{s.heading}</h2>
            <p className="text-white/40 text-base leading-relaxed mb-8 max-w-md">{s.desc}</p>
            <div className="space-y-4">
              {s.points.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-matrix-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-matrix-accent" />
                  </div>
                  <span className="text-sm text-white/60">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="nodes-container flex flex-col items-center">
            {s.nodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center w-full max-w-sm mx-auto">
                <div className={`solution-node w-full p-4 md:p-5 rounded-xl border flex items-center gap-4 group transition-all duration-300 ${node.id === 'growth' ? 'border-matrix-accent/30 bg-matrix-accent/5' : 'border-matrix-border bg-matrix-surface'} hover:border-matrix-accent/40`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-matrix-accent/20 ${node.id === 'growth' ? 'bg-matrix-accent/20 text-matrix-accent' : 'bg-white/5 text-white/50'}`}>
                    {nodeIcons[i]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-bold tracking-widest mb-0.5 ${node.id === 'growth' ? 'text-matrix-accent' : 'text-white'}`}>{node.label}</div>
                    <div className="text-xs text-white/35 truncate">{node.desc}</div>
                  </div>
                  <span className="text-xs text-white/20 font-mono shrink-0">0{i + 1}</span>
                </div>
                {i < s.nodes.length - 1 && <div className="connector w-px h-6 bg-gradient-to-b from-matrix-accent/30 to-matrix-accent/10 my-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
