import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const { t } = useLang()
  const tm = t.testimonials
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const quoteRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, {
      opacity: 1, duration: 1, ease: 'power2.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
    })
  }, [])

  // Reset active when language changes
  useEffect(() => { setActive(0) }, [tm])

  const goTo = (idx: number) => {
    if (isTransitioning || idx === active) return
    setIsTransitioning(true)
    gsap.to(quoteRef.current, {
      opacity: 0, y: 20, duration: 0.3, ease: 'power2.in',
      onComplete: () => {
        setActive(idx)
        gsap.fromTo(quoteRef.current, { opacity: 0, y: -20 }, {
          opacity: 1, y: 0, duration: 0.4, ease: 'power3.out',
          onComplete: () => setIsTransitioning(false)
        })
      }
    })
  }

  useEffect(() => {
    autoRef.current = setInterval(() => setActive(prev => (prev + 1) % tm.items.length), 5000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [tm])

  const item = tm.items[active]

  return (
    <section ref={sectionRef} className="py-24 md:py-36 bg-matrix-black relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000"
        style={{ background: `${item.color}08` }} />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="mb-16">
          <span className="section-label mb-4 block">{tm.sectionLabel}</span>
          <h2 className="text-headline font-extrabold text-white leading-tight">{tm.heading}</h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Nav */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-3">
            {tm.items.map((it, i) => (
              <button key={i} onClick={() => goTo(i)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 flex-1 lg:flex-initial ${active === i ? 'border-white/20 bg-matrix-surface' : 'border-matrix-border hover:border-white/10'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300"
                    style={{ background: active === i ? it.color : '#333', color: active === i ? '#000' : '#666' }}>
                    {it.initials}
                  </div>
                  <div className="hidden lg:block min-w-0">
                    <div className={`text-sm font-semibold truncate transition-colors duration-300 ${active === i ? 'text-white' : 'text-white/40'}`}>{it.name}</div>
                    <div className="text-xs text-white/30 truncate">{it.company}</div>
                  </div>
                </div>
                {active === i && (
                  <div className="hidden lg:block mt-3 h-px bg-matrix-border overflow-hidden rounded-full">
                    <div className="h-full rounded-full" style={{ background: it.color, animation: 'progress 5s linear' }} />
                  </div>
                )}
              </button>
            ))}
          </div>
          {/* Quote */}
          <div ref={quoteRef} className="lg:col-span-8">
            <div className="relative p-8 md:p-12 rounded-2xl border border-matrix-border bg-matrix-surface">
              <div className="text-[120px] leading-none font-bold text-white/5 absolute top-4 left-8 select-none">"</div>
              <div className="relative">
                <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full mb-6"
                  style={{ background: `${item.color}20`, color: item.color }}>
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                  {item.result}
                </div>
                <blockquote className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-8">"{item.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-black" style={{ background: item.color }}>{item.initials}</div>
                  <div>
                    <div className="font-semibold text-white">{item.name}</div>
                    <div className="text-sm text-white/40">{item.title}, {item.company}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6">
              {tm.items.map((_, i) => (
                <button key={i} onClick={() => goTo(i)}
                  className={`rounded-full transition-all duration-300 ${active === i ? 'w-8 h-2 bg-matrix-accent' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes progress { from { width: 0%; } to { width: 100%; } }`}</style>
    </section>
  )
}
