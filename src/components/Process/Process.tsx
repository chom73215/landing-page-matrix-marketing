import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

export default function Process() {
  const { t } = useLang()
  const p = t.process
  const sectionRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    gsap.fromTo(section.querySelector('.process-head'), { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: section, start: 'top 75%' }
    })
    gsap.fromTo('.timeline-progress-line', { scaleY: 0, transformOrigin: 'top' }, {
      scaleY: 1, duration: 2, ease: 'power2.inOut',
      scrollTrigger: { trigger: timelineRef.current, start: 'top 70%', end: 'bottom 60%', scrub: 1 }
    })
    section.querySelectorAll('.process-step').forEach((card, i) => {
      gsap.fromTo(card, { x: i % 2 === 0 ? -50 : 50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 80%' }
      })
    })
  }, [])

  return (
    <section ref={sectionRef} id="process" className="py-24 md:py-36 bg-matrix-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="process-head mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="section-label mb-4 block">{p.sectionLabel}</span>
            <h2 className="text-headline font-extrabold text-white leading-tight whitespace-pre-line">{p.heading}</h2>
          </div>
          <p className="max-w-xs text-sm text-white/40 leading-relaxed">{p.sub}</p>
        </div>
        <div ref={timelineRef} className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-matrix-border">
            <div className="timeline-progress-line absolute inset-0 bg-gradient-to-b from-matrix-accent to-matrix-accent/20" />
          </div>
          <div className="flex flex-col gap-8 md:gap-12">
            {p.steps.map((step, i) => (
              <div key={step.num} className={`process-step flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-4 md:gap-12`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`inline-block p-6 md:p-8 rounded-2xl border border-matrix-border bg-matrix-surface hover:border-matrix-accent/20 transition-all duration-300 group max-w-md ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <span className="text-xs font-bold text-matrix-accent tracking-widest">{step.num}</span>
                      <div className="flex-1 h-px bg-matrix-border group-hover:bg-matrix-accent/20 transition-colors" />
                      <span className="text-xs text-white/30 font-mono">{step.detail}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-4">{step.desc}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {step.items.map((item) => (
                        <span key={item} className="text-xs px-2.5 py-1 rounded-full border border-white/10 text-white/40">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-matrix-dark border-2 border-matrix-accent z-10">
                  <div className="w-3 h-3 rounded-full bg-matrix-accent" />
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
