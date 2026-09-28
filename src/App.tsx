import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LangProvider } from './i18n/LangContext'
import Home from './sections/Home'
import CustomCursor from './components/CustomCursor/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })
    ;(window as unknown as { lenis: Lenis }).lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const update = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(update)
      delete (window as unknown as { lenis?: Lenis }).lenis
      lenis.destroy()
    }
  }, [])

  return (
    <LangProvider>
      <CustomCursor />
      <Home />
    </LangProvider>
  )
}

export default App
