import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

export default function MarketingProblems() {
  const { t } = useLang()
  const p = t.problems
  const sectionRef = useRef<HTMLElement>(null)
  const problemsRef = useRef<HTMLDivElement>(null)
  const solutionRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: headRef.current, start: 'top 80%' }
    })
    const items = problemsRef.current?.querySelectorAll('.problem-item')
    if (items) {
      gsap.fromTo(items, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: problemsRef.current, start: 'top 75%' }
      })
      items.forEach((item, i) => {
        const line = item.querySelector('.strike-line')
        gsap.fromTo(line, { scaleX: 0, transformOrigin: 'left' }, {
          scaleX: 1, duration: 0.6, ease: 'power3.inOut',
          scrollTrigger: { trigger: item, start: 'top 80%' },
          delay: i * 0.15 + 0.5
        })
      })
    }
    gsap.fromTo(solutionRef.current, { y: 60, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: solutionRef.current, start: 'top 75%' }
    })
  }, [])

  return (
    <section ref={sectionRef} id="solutions" className="py-24 md:py-36 bg-matrix-dark relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <h2 ref={headRef} className="text-headline font-extrabold text-white mb-16 md:mb-24 max-w-2xl leading-tight">
          {p.heading}{' '}<span className="text-white/30 italic">{p.headingAccent}</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div ref={problemsRef} className="space-y-4">
            <p className="section-label mb-8">{p.sectionLabel}</p>
            {p.items.map((text, idx) => (
              <div key={idx} className="problem-item group">
                <div className="relative inline-flex items-center gap-4 py-3">
                  <svg className="shrink-0 text-red-400/60" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="relative text-xl md:text-2xl font-semibold text-white/50">
                    {text}
                    <span className="strike-line absolute left-0 right-0 top-1/2 h-px bg-red-400/50 block" style={{ transform: 'scaleX(0)' }} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div ref={solutionRef} className="md:pt-16">
            <div className="relative p-8 md:p-10 rounded-2xl border border-matrix-accent/20 bg-matrix-accent/3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-matrix-accent/8 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-matrix-accent/15 flex items-center justify-center">
                    <svg className="text-matrix-accent" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="section-label">{p.solutionLabel}</span>
                </div>
                <h3 className="text-title font-extrabold text-white mb-4 leading-tight whitespace-pre-line">
                  {p.solutionHeading}{' '}<span className="text-matrix-accent">{p.solutionAccent}</span>
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8">{p.solutionDesc}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {p.flowItems.map((item, i) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white px-3 py-1.5 rounded-full bg-white/5 border border-white/10">{item}</span>
                      {i < p.flowItems.length - 1 && (
                        <svg className="text-matrix-accent/50" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                        </svg>
                      )}
                    </div>
                  ))}
                  <span className="text-matrix-accent text-sm font-bold ml-1">{p.flowResult}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <div className="w-px bg-matrix-accent/30 self-stretch ml-4" />
              <p className="text-sm text-white/40 italic leading-relaxed">{p.quote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
