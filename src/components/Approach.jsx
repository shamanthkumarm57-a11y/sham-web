import './Approach.css'

function Approach() {
  const highlights = [
    'Frontend Web Development',
    'React.js Development',
    'Responsive Website Design',
    'WordPress Development',
    'Website Optimization',
    'SEO-Friendly Development',
    'API Integration',
    'UI/UX Implementation',
  ]

  return (
    <section className="section-shell approach reveal-on-scroll" id="about">
      <div className="reveal-child">
        <p className="eyebrow">About Me</p>
        <h2>
          Hello, I&apos;m Shamanth Kumar, a creative and detail-oriented Frontend Developer.
        </h2>
        <p className="section-copy">
          I build clean, modern, and performance-driven websites with React.js,
          JavaScript, WordPress, HTML5, CSS3, Tailwind CSS, and API integrations.
          I enjoy transforming ideas into responsive digital experiences that improve
          user engagement and website performance across every device.
        </p>
        <ul className="highlight-list">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
      <div className="approach-visual reveal-child" aria-hidden="true">
        <span className="visual-card card-one" />
        <span className="visual-card card-two" />
        <span className="visual-card card-three" />
        <span className="visual-card card-four" />
      </div>
    </section>
  )
}

export default Approach
