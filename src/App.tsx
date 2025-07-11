import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Dashboards from './components/Dashboards'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Dashboards />
            <Contact />
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App