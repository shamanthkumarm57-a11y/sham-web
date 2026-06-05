import './Footer.css'

const footerGroups = [
  ['Contact Details', ['Shamanth Kumar', 'Frontend Developer', 'React.js', 'WordPress', 'JavaScript', 'SEO']],
  ['Services', ['Web Development', 'WordPress Development', 'UI/UX Development', 'SEO Optimization', 'Maintenance']],
]

function Footer() {
  return (
    <footer className="section-shell footer reveal-on-scroll" id="contact">
      <div className="footer-cta reveal-child">
        <h2>Get In Touch.</h2>
        <p>
          Looking for a Frontend Developer for your next website or web application?
          Let&apos;s build modern, responsive, and high-performing digital experiences.
        </p>
        <a href="mailto:hello@shamanth.dev">Contact Shamanth</a>
      </div>
      <div className="footer-directory">
        {footerGroups.map(([title, links]) => (
          <div className="reveal-child" key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href="#services">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Shamanth Kumar. All Rights Reserved.</span>
        <span>Frontend Developer | React.js Developer | WordPress Developer | SEO-Friendly Web Development</span>
      </div>
    </footer>
  )
}

export default Footer
