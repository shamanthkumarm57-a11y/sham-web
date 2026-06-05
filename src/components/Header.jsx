import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollState, setScrollState] = useState('at-top')

  useEffect(() => {
    const handleScroll = () => {
      setScrollState(window.scrollY < 24 ? 'at-top' : 'is-scrolled')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`topbar ${scrollState} ${isMenuOpen ? 'menu-open' : ''}`}>
      <a className="brand" href="/" aria-label="Shamanth portfolio home">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
        </span>
      </a>
      <nav aria-label="Project sections">
        <a className="site-title" href="/">Shamanth Portfolio</a>
        <a href="#services">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#insights">Notes</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="mail-link" href="mailto:hello@shamanth.dev" aria-label="Email Shamanth">
        <span aria-hidden="true" />
      </a>
      <button
        aria-expanded={isMenuOpen}
        className="menu-button"
        type="button"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
      </button>
      <div className="menu-panel" aria-hidden={!isMenuOpen}>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>
          Skills
        </a>
        <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
          Portfolio
        </a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>
          About
        </a>
        <a href="#insights" onClick={() => setIsMenuOpen(false)}>
          Notes
        </a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </a>
      </div>
    </div>
  )
}

export default Header
