import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Pain from '@/components/Pain'
import Investors from '@/components/Investors'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="pain" className="min-h-screen flex items-center justify-center bg-[#415f61] py-20">
        <Pain />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <About />
      </section>

      <section id="subscribe" className="min-h-screen flex items-center justify-center relative bg-white">
        <div className="absolute top-0 left-0 w-full h-1/6 bg-gradient-to-b from-[#e5eae7] to-white"></div>
        <div className="z-10 w-full">
          <Subscribe />
        </div>
      </section>

      <section id="footer" className="flex items-center justify-center bg-[#415f61]">
        <Footer />
      </section>
    </main>
  )
} 