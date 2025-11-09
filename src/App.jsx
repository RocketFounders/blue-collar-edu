import Hero from './components/Hero'
import Mission from './components/Mission'
import Courses from './components/Courses'
import Features from './components/Features'
import Community from './components/Community'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Mission />
      <Courses />
      <Features />
      <Community />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
