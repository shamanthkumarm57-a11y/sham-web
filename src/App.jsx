import Header from './components/Header'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Footer from './components/Footer'
import News from './components/News'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Work from './components/Work'
import useScrollReveal from './hooks/useScrollReveal'
import './App.css'

function App() {
  useScrollReveal()

  return (
    <main className="app-shell">
      <section className="workspace" aria-label="3D preview workspace">
        <Header />
        <Hero />
      </section>
      <Services />
      <Approach />
      <Work />
      <Testimonials />
      <News />
      <Footer />
    </main>
  )
}

export default App
