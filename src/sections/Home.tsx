import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Stats from '../components/Stats/Stats'
import Services from '../components/Services/Services'
import MarketingProblems from '../components/MarketingProblems/MarketingProblems'
import Solution from '../components/Solution/Solution'
import Process from '../components/Process/Process'
import CaseStudies from '../components/CaseStudies/CaseStudies'
import WhyMatrix from '../components/WhyMatrix/WhyMatrix'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <MarketingProblems />
      <Solution />
      <Process />
      <CaseStudies />
      <WhyMatrix />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
