import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

function Counter({ value, prefix, suffix, isDecimal }: { value: number; prefix: string; suffix: string; isDecimal?: boolean }) {
  const [count, setCount] = useState(0)
  const elRef = useRef<HTMLDivElement>(null)
  const triggered = useRef(false)

  useEffect(() => {
    triggered.current = false
    setCount(0)
  }, [value])

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true
        const obj = { val: 0 }
        gsap.to(obj, { val: value, duration: 2, ease: 'power2.out', onUpdate: () => setCount(obj.val) })
      },
    })
    return () => st.kill()
  }, [value])

  const display = isDecimal ? count.toFixed(1) : Math.floor(count).toString()
  return (
    <div ref={elRef}>
      <span className="text-[clamp(2.5rem,5vw,5rem)] font-extrabold text-matrix-accent leading-none tracking-tight tabular-nums">
        {prefix}{display}{suffix}
      </span>
    </div>
  )
}

export default function Stats() {
  const { t } = useLang()
  const s = t.stats
  const sectionRef = useRef<HTMLElement>(null)
  const headRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(headRef.current, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: headRef.current, start: 'top 80%' }
    })
    const cards = sectionRef.current?.querySelectorAll('.stat-card')
    if (cards) gsap.fromTo(cards, { y: 60, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
    })
  }, [])

  return (
    <section ref={sectionRef} id="stats" className="relative py-24 md:py-36 bg-matrix-dark overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-matrix-accent/30 to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div ref={headRef} className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="section-label mb-3 block">{s.sectionLabel}</span>
            <h2 className="text-title font-extrabold text-slate-900 whitespace-pre-line">{s.heading}</h2>
          </div>
          <p className="max-w-xs text-sm text-slate-700 font-medium leading-relaxed md:text-right">{s.sub}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-matrix-border rounded-2xl overflow-hidden shadow-sm">
          {s.items.map((item, i) => (
            <div key={i} className="stat-card bg-white p-8 md:p-10 group hover:bg-slate-50/80 transition-colors duration-300">
              <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} isDecimal={item.value !== Math.floor(item.value)} />
              <div className="mt-4">
                <div className="text-base font-bold text-slate-900 mb-1">{item.label}</div>
                <div className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</div>
              </div>
              <div className="mt-6 h-px w-0 bg-matrix-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  )
}
