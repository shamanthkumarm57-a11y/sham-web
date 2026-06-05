import './Hero.css'
import SceneStage from './SceneStage'

function Hero() {
  return (
    <section className="home-banner reveal-on-scroll" id="scene">
      <div className="hero-copy reveal-child">
        <p className="eyebrow">Shamanth Kumar / Frontend Developer</p>
        <h1>Frontend Developer & Creative Web Designer.</h1>
        <p className="hero-copy-detail">
          Building fast, modern, responsive, and SEO-friendly websites using React.js,
          Next.js, WordPress, and modern frontend technologies.
        </p>
      </div>
      <SceneStage />

      <div className="hero-actions reveal-child" aria-label="Portfolio actions">
        
        <a className="project-action secondary-action" href="/resume.pdf" download>
          Download Resume
        </a>
        <a className="project-action secondary-action" href="#contact">
          Contact Me
        </a>
        
      </div>
    </section>
  )
}

export default Hero
