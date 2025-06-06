import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import ContactForm from './components/ContactForm/ContactForm'
import './styles/globals.scss'
import { useState } from 'react'
import Services from './components/services/Services'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="app">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
export default App