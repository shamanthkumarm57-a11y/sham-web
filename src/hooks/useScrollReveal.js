import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -14% 0px',
        threshold: 0.12,
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])
}

export default useScrollReveal
