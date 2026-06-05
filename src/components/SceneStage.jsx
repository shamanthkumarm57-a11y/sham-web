import { useEffect, useRef } from 'react'
import './SceneStage.css'

function SceneStage() {
  const modelRef = useRef(null)

  useEffect(() => {
    const model = modelRef.current
    if (!model) {
      return undefined
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      return undefined
    }

    let frameId
    let currentX = 8
    let currentY = 90
    let targetX = 8
    let targetY = 90

    const handlePointerMove = (event) => {
      const x = event.clientX / window.innerWidth - 0.5
      const y = event.clientY / window.innerHeight - 0.5

      targetX = 8 - y * 18
      targetY = 90 + x * 160
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      model.style.setProperty('--rotate-x', `${currentX.toFixed(2)}deg`)
      model.style.setProperty('--rotate-y', `${currentY.toFixed(2)}deg`)
      frameId = window.requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="stage reveal-child" aria-label="Curved 3D model showcase">
      <div className="curved-model" ref={modelRef} aria-hidden="true">
        <div className="steel-s steel-s-front" aria-hidden="true">S</div>
        <div className="steel-s steel-s-back" aria-hidden="true">S</div>
        <div className="curved-panel">
          <div className="panel-inner" />
        </div>
        <div className="model-shadow" />
      </div>
    </div>
  )
}

export default SceneStage
