import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLang } from '../../i18n/LangContext'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const { t } = useLang()
  const c = t.cta
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLAnchorElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    gsap.fromTo(contentRef.current, { y: 60, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
    })
    const btn = btnRef.current
    if (!btn) return
    const enter = () => { gsap.to(btn, { scale: 1.06, duration: 0.3, ease: 'power2.out' }); gsap.to(btn.querySelector('.btn-arrow'), { x: 6, duration: 0.3, ease: 'power2.out' }) }
    const leave = () => { gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' }); gsap.to(btn.querySelector('.btn-arrow'), { x: 0, duration: 0.3, ease: 'power2.out' }) }
    btn.addEventListener('mouseenter', enter)
    btn.addEventListener('mouseleave', leave)
    return () => { btn.removeEventListener('mouseenter', enter); btn.removeEventListener('mouseleave', leave) }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let w = canvas.offsetWidth, h = canvas.offsetHeight
    canvas.width = w; canvas.height = h
    let time = 0
    const draw = () => {
      time += 0.008; ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(w / 2, h / 2, (w / 3) + i * (w / 8), 0, Math.PI * 2); ctx.strokeStyle = `rgba(0,255,135,${0.04 - i * 0.01})`; ctx.lineWidth = 1; ctx.stroke() }
      for (let x = 0; x < w; x += 50) for (let y = 0; y < h; y += 50) { const dist = Math.sqrt((x - w / 2) ** 2 + (y - h / 2) ** 2); const wave = Math.sin(dist * 0.02 - time * 3) * 0.5 + 0.5; ctx.beginPath(); ctx.arc(x, y, wave * 1.5, 0, Math.PI * 2); ctx.fillStyle = `rgba(0,255,135,${wave * 0.08})`; ctx.fill() }
      animId = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => { w = canvas.offsetWidth; h = canvas.offsetHeight; canvas.width = w; canvas.height = h }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 md:py-48 bg-matrix-dark overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-matrix-dark/40 via-transparent to-matrix-dark/40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-matrix-accent/6 rounded-full blur-[120px] pointer-events-none" />
      <div ref={contentRef} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center">
        <span className="section-label mb-6 block">{c.sectionLabel}</span>
        <h2 className="text-headline font-extrabold text-white mb-6 leading-tight">
          {c.heading}<br /><span className="text-gradient">{c.headingAccent}</span>
        </h2>
        <p className="text-white/40 text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed">{c.desc}</p>
        <a ref={btnRef} href="mailto:hello@matrixmarketing.com"
          className="inline-flex items-center gap-3 bg-matrix-accent text-black font-bold text-lg px-8 py-5 rounded-full hover:bg-[#00ffaa] transition-colors duration-300 mb-6">
          {c.btn}
          <span className="btn-arrow inline-flex items-center justify-center w-7 h-7 rounded-full bg-black/15">→</span>
        </a>
        <div className="flex items-center justify-center gap-6 mt-6">
          <a href="mailto:hello@matrixmarketing.com" className="text-sm text-white/40 hover:text-white transition-colors">hello@matrixmarketing.com</a>
          <span className="w-px h-4 bg-white/20" />
          <a href="tel:+84000000000" className="text-sm text-white/40 hover:text-white transition-colors">+84 XXX XXX XXX</a>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
          {c.badges.map((b, i) => (
            <div key={b} className="flex items-center gap-2 text-sm text-white/35">
              <span>{c.badgeIcons[i]}</span><span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
