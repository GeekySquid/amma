import Hero from '@/components/Hero'
import Features from '@/components/Features'
import About from '@/components/About'
import Team from '@/components/Team'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <About />
      <Team />
      <Contact />
    </main>
  )
}