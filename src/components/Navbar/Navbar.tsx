import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useLang } from '../../i18n/LangContext'

interface LenisInstance {
  scrollTo: (
    target: string | HTMLElement | number,
    options?: { offset?: number; immediate?: boolean; duration?: number; force?: boolean }
  ) => void
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const { t, locale, toggle } = useLang()

  const navLinks = [
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'solutions', label: t.nav.solutions, href: '#solutions' },
    { id: 'process', label: t.nav.process, href: '#process' },
    { id: 'case-studies', label: t.nav.caseStudies, href: '#case-studies' },
    { id: 'about', label: t.nav.about, href: '#about' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 60)

      const sectionItems = [
        { id: 'services', el: document.getElementById('services') },
        { id: 'solutions', el: document.getElementById('solutions') },
        { id: 'process', el: document.getElementById('process') },
        { id: 'case-studies', el: document.getElementById('case-studies') },
        { id: 'about', el: document.getElementById('about') },
      ]

      const offset = 180

      // If user is near bottom of the page, activate the last section ('about')
      const isAtBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80

      if (isAtBottom) {
        setActiveSection('about')
        return
      }

      let current = ''
      for (let i = 0; i < sectionItems.length; i++) {
        const item = sectionItems[i]
        if (!item.el) continue

        const start = item.el.getBoundingClientRect().top + scrollY - offset
        const nextItem = sectionItems[i + 1]
        const end = nextItem?.el
          ? nextItem.el.getBoundingClientRect().top + scrollY - offset
          : Infinity

        if (scrollY >= start && scrollY < end) {
          current = item.id
          break
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)

    const target = document.querySelector(href) as HTMLElement | null
    if (!target) return

    const navOffset = 80
    const targetTop = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navOffset)

    const lenis = (window as unknown as { lenis?: LenisInstance }).lenis
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetTop, { duration: 1.2, force: true })
    } else {
      window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
      })
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMenuOpen(false)
    const lenis = (window as unknown as { lenis?: LenisInstance }).lenis
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(0, { duration: 1.2, force: true })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-black/85 backdrop-blur-xl border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex flex-col leading-none">
            <span className="text-[11px] font-bold tracking-[0.3em] text-matrix-accent uppercase">MATRIX</span>
            <span className="text-[11px] font-bold tracking-[0.3em] text-white/80 uppercase">MARKETING</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center md:gap-5 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium transition-all duration-300 relative group py-1 ${
                      isActive ? 'text-matrix-accent font-semibold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-matrix-accent rounded-full transition-all duration-300 ${
                        isActive
                          ? 'w-full opacity-100 shadow-[0_0_10px_rgba(0,255,135,0.7)]'
                          : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right: Lang toggle + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggle}
              aria-label="Switch language"
              className="hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-white/15 text-white/50 hover:border-matrix-accent/50 hover:text-matrix-accent transition-all duration-300"
            >
              <span className={locale === 'vi' ? 'text-matrix-accent' : 'text-white/40'}>VI</span>
              <span className="text-white/20">/</span>
              <span className={locale === 'en' ? 'text-matrix-accent' : 'text-white/40'}>EN</span>
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact')}
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-black bg-matrix-accent px-5 py-2.5 rounded-full hover:bg-[#00ffaa] transition-all duration-300 hover:scale-105"
            >
              {t.nav.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-matrix-black transition-all duration-500 flex flex-col justify-center px-8 ${
        menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id
            return (
              <li
                key={link.id}
                style={{ transitionDelay: menuOpen ? `${i * 0.06}s` : '0s' }}
                className={`transition-all duration-500 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-4xl font-bold transition-all duration-300 flex items-center gap-3 ${
                    isActive ? 'text-matrix-accent translate-x-2' : 'text-white hover:text-matrix-accent'
                  }`}
                >
                  {isActive && (
                    <span className="w-2.5 h-2.5 rounded-full bg-matrix-accent shadow-[0_0_10px_rgba(0,255,135,1)]" />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile lang toggle */}
        <button
          onClick={toggle}
          className="mt-8 flex items-center gap-2 text-sm font-bold w-fit"
        >
          <span className={`px-3 py-1.5 rounded-full border transition-all duration-300 ${locale === 'vi' ? 'border-matrix-accent text-matrix-accent' : 'border-white/20 text-white/40'}`}>VI</span>
          <span className={`px-3 py-1.5 rounded-full border transition-all duration-300 ${locale === 'en' ? 'border-matrix-accent text-matrix-accent' : 'border-white/20 text-white/40'}`}>EN</span>
        </button>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-base font-bold text-black bg-matrix-accent px-6 py-3.5 rounded-full w-fit"
          onClick={(e) => handleNavClick(e as React.MouseEvent<HTMLAnchorElement>, '#contact')}
        >
          {t.nav.cta} →
        </a>
      </div>
    </>
  )
}
