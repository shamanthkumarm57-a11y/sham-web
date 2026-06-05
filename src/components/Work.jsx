import './Work.css'

const projects = [
  {
    title: 'React Business Website',
    type: 'Business Website',
    stack: 'React.js, APIs, CSS',
    focus: 'Performance',
    summary:
      'Developed a modern business website with responsive design, API integration, reusable React components, and optimized performance.',
  },
  {
    title: 'WordPress Corporate Website',
    type: 'Corporate Website',
    stack: 'WordPress, SEO, CSS',
    focus: 'Customization',
    summary:
      'Created and customized a responsive WordPress corporate website with SEO optimization, custom layouts, and clean content structure.',
  },
  {
    title: 'Portfolio Website',
    type: 'Personal Brand',
    stack: 'React, Vite, Motion',
    focus: 'Modern UI',
    summary:
      'Designed and developed a personal portfolio with 3D visuals, modern animations, responsive sections, and polished UI details.',
  },
  {
    title: 'E-Commerce Frontend',
    type: 'Shop Interface',
    stack: 'React, JavaScript, CSS',
    focus: 'Product UX',
    summary:
      'Built a responsive e-commerce frontend with product pages, filtering interactions, and user-friendly shopping layouts.',
  },
]

function Work() {
  return (
    <section className="section-shell work reveal-on-scroll" id="portfolio">
      <div className="section-title">
        <p className="eyebrow">Featured Projects</p>
      </div>
      <div className="work-list">
        {projects.map((project, index) => (
          <article className="work-card reveal-child" key={project.title}>
            <div
              className={`work-image work-image-${index + 1}`}
              role="img"
              aria-label={`${project.title} visual preview`}
            />
            <div className="work-copy">
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <dl>
                <div>
                  <dt>Type</dt>
                  <dd>{project.type}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.stack}</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>{project.focus}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
