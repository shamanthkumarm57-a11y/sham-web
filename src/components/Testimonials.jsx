import './Testimonials.css'

const testimonials = [
  ['Professional React Work', 'Professional frontend developer with strong React and UI skills. Delivered responsive and high-quality work.'],
  ['WordPress Delivery', 'Great experience working on WordPress and frontend projects. Excellent communication and timely delivery.'],
  ['Responsive Quality', 'Clean layouts, fast pages, and careful mobile testing made the final website feel polished.'],
  ['SEO Mindset', 'Strong attention to performance, SEO basics, and user-friendly implementation from start to finish.'],
]

function Testimonials() {
  return (
    <section className="section-shell testimonials reveal-on-scroll" id="testimonials">
      <p className="eyebrow">Client Feedback</p>
      <h2>Reliable frontend work with clean communication, responsive detail, and polished delivery.</h2>
      <div className="testimonial-track">
        {testimonials.map(([name, quote]) => (
          <article className="reveal-child" key={name}>
            <p>{quote}</p>
            <span>{name}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
