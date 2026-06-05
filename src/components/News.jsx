import './News.css'

const news = [
  [
    'Work Experience',
    'Frontend Developer',
    ['Responsive frontend interfaces', 'React.js components', 'WordPress customization', 'Website speed and SEO'],
  ],
  [
    'Why Work With Me?',
    'Development Quality',
    ['Clean modern design', 'SEO-friendly code', 'Fast optimized websites', 'Reliable support'],
  ],
  [
    'Website Maintenance',
    'Ongoing Support',
    ['Bug fixing', 'Content updates', 'Performance monitoring', 'UI improvements'],
  ],
]

function News() {
  return (
    <section className="section-shell news reveal-on-scroll" id="insights">
      <div className="section-title">
        <p className="eyebrow">Experience and services</p>
      </div>
      <div className="news-grid">
        {news.map(([title, label, items]) => (
          <article className="reveal-child" key={title}>
            <span>{label}</span>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default News
