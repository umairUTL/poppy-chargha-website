import Hero from '@/components/sections/Hero'
import Menu from '@/components/sections/Menu'
import Gallery from '@/components/sections/Gallery'
import Reviews from '@/components/sections/Reviews'
import About from '@/components/sections/About'
import Branches from '@/components/sections/Branches'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Menu />
      <Gallery />
      <Reviews />
      <About />
      <Branches />
      <Contact />
    </div>
  )
}
