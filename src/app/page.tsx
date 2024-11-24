import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Restaurant from '@/components/Restaurant'
import Investors from '@/components/Investors'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="about" className="h-screen flex items-center justify-center">
        <About />
      </section>
      <section id="services" className="h-screen flex items-center justify-center bg-gray-50">
        <Services />
      </section>
      <section id="restaurant" className="h-screen flex items-center justify-center">
        <Restaurant />
      </section>
      <section id="investors" className="h-screen flex items-center justify-center bg-gray-50">
        <Investors />
      </section>
      <section id="contact" className="h-screen flex items-center justify-center">
        <Contact />
      </section>
    </main>
  )
} 