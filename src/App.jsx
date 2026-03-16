import Hero from './components/Hero'
import Features from './components/Features'
import WaitlistSection from './components/WaitlistSection'
import Footer from './components/Footer'

function App() {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen">
      <Hero onJoinWaitlist={scrollToWaitlist} />
      <Features />
      <WaitlistSection />
      <Footer />
    </div>
  )
}

export default App
