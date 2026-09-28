import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../../i18n/LangContext'
import HeroCanvas from './HeroCanvas'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const heroImageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.8 })
    tl.fromTo(
      [line1Ref.current, line2Ref.current, line3Ref.current],
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' }
    )
    .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.4')
    .fromTo(taglineRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.6')
    .fromTo(ctaRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .fromTo(scrollIndicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.7 }, '-=0.2')

    // Tumble and fall in from right effect (gentle, subtle amplitude)
    if (heroImageRef.current) {
      tl.fromTo(
        heroImageRef.current,
        {
          x: 120,
          y: -35,
          rotation: 12,
          scale: 0.95,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=1.0'
      )

      // Continuous subtle, calm floating
      gsap.to(heroImageRef.current, {
        y: -6,
        rotation: 0.6,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.0,
      })
    }

    gsap.to('.scroll-arrow', { y: 8, repeat: -1, yoyo: true, duration: 1.2, ease: 'sine.inOut' })
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-matrix-black">
      <HeroCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/30 pointer-events-none z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-matrix-accent/10 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/10 blur-[80px] pointer-events-none z-0" />
      <div className="absolute inset-0 grid-bg opacity-30 z-5 pointer-events-none" />

      <div className="relative z-20 flex flex-col justify-center flex-1 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-28 pb-20 md:pt-40 md:pb-24">
        <div ref={taglineRef} className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-matrix-accent" />
          <span className="section-label">{h.label}</span>
        </div>

        <h1 className="mb-8 max-w-5xl xl:max-w-6xl">
          <span className="clip-text block">
            <span ref={line1Ref} className="block text-display font-extrabold text-slate-900 leading-[1.08] tracking-tight">{h.line1}</span>
          </span>
          <span className="clip-text block">
            <span ref={line2Ref} className="block text-display font-extrabold text-slate-900 leading-[1.08] tracking-tight">
              {h.line2} <span className="text-gradient italic">{h.line2Accent}</span>
            </span>
          </span>
          <span className="clip-text block">
            <span ref={line3Ref} className="block text-display font-extrabold text-slate-900 leading-[1.08] tracking-tight">{h.line3}</span>
          </span>
        </h1>

        <p ref={subtitleRef} className="max-w-xl text-base md:text-lg text-slate-800 leading-relaxed mb-10 font-medium">
          {h.subtitle}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-4">
          <a href="#contact" className="btn-primary group"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            {h.cta1}
            <svg className="transition-transform duration-300 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#case-studies" className="btn-outline group"
            onClick={(e) => { e.preventDefault(); document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' }) }}>
            {h.cta2}
            <svg className="opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-300 flex flex-wrap gap-8 md:gap-16">
          {h.stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold text-matrix-accent tracking-tight">{s.num}</span>
              <span className="text-sm text-slate-700 font-semibold">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side Hero Mascot Image falling in from the right */}
      <div
        ref={heroImageRef}
        className="hidden lg:block absolute right-4 xl:right-12 2xl:right-20 bottom-8 xl:bottom-14 w-[360px] xl:w-[460px] 2xl:w-[520px] pointer-events-none select-none z-20"
      >
        {/* Ambient Glows */}
        <div className="absolute -inset-6 bg-matrix-accent/15 rounded-full blur-[80px] -z-10" />
        <div className="absolute -inset-10 bg-amber-400/10 rounded-full blur-[100px] -z-10" />

        <img
          src="/hero-girl.png"
          alt="Matrix Marketing Hero"
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
        />
      </div>

      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[11px] tracking-[0.2em] text-slate-600 font-bold uppercase">{h.scroll}</span>
        <div className="scroll-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(15,23,42,0.65)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
