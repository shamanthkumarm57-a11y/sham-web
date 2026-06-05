import './Services.css'

const services = [
  {
    count: '01 / 06',
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    count: '02 / 06',
    title: 'Responsive UI',
    items: ['Mobile-first design', 'Bootstrap', 'Clean layouts', 'UI/UX implementation'],
  },
  {
    count: '03 / 06',
    title: 'WordPress',
    items: ['Theme customization', 'Plugin setup', 'Custom layouts', 'Website optimization'],
  },
  {
    count: '04 / 06',
    title: 'SEO & Speed',
    items: ['On-page SEO', 'Technical SEO', 'Core Web Vitals', 'Mobile optimization'],
  },
  {
    count: '05 / 06',
    title: 'Integrations',
    items: ['REST APIs', 'Dynamic content', 'PHP basics', 'Basic Python'],
  },
  {
    count: '06 / 06',
    title: 'Tools',
    items: ['Git & GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Chrome DevTools'],
  },
]

function Services() {
  return (
    <section className="section-shell services reveal-on-scroll" id="services">
      <div className="section-title">
        <p className="eyebrow">Technical skills</p>
        
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card reveal-child" key={service.title}>
            <span>{service.count}</span>
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
