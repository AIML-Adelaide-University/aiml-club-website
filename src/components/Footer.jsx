import { useEffect, useRef } from "react"
import dino from "../assets/dino.png"

function Footer() {
  const dinoRef = useRef(null)
  const cactusRef = useRef(null)

  useEffect(() => {
    const dinoEl = dinoRef.current
    const cactusEl = cactusRef.current
    if (!dinoEl || !cactusEl) return

    let isJumping = false
    let hasJumpedThisPass = false

    let lastCactusX = null
    let lastTime = null

    const JUMP_DURATION = 650 // must match CSS animation
    const APEX_TIME = JUMP_DURATION * 0.45 // when dino is highest

    const jump = () => {
      if (isJumping) return
      isJumping = true
      hasJumpedThisPass = true

      dinoEl.classList.add("footer-dino-jump")
      setTimeout(() => {
        dinoEl.classList.remove("footer-dino-jump")
        isJumping = false
      }, JUMP_DURATION)
    }

    let rafId

    const loop = (now) => {
      const cactusRect = cactusEl.getBoundingClientRect()
      const dinoRect = dinoEl.getBoundingClientRect()

      const cactusCenter = cactusRect.left + cactusRect.width / 2
      const dinoCenter = dinoRect.left + dinoRect.width / 2

      if (lastCactusX !== null && lastTime !== null) {
        const dx = lastCactusX - cactusCenter
        const dt = now - lastTime

        if (dt > 0) {
          const speed = dx / dt
          const distance = cactusCenter - dinoCenter
          const timeToImpact = distance / speed

          if (
            timeToImpact < APEX_TIME * 0.95 &&
            timeToImpact > APEX_TIME * 0.75 &&
            !hasJumpedThisPass
          ) {
            jump()
          }
        }
      }

      if (cactusRect.right < dinoRect.left - dinoRect.width * 0.2) {
        hasJumpedThisPass = false
      }

      lastCactusX = cactusCenter
      lastTime = now

      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <footer className="desert-footer">
      <div className="footer-row">
        {/* DINO */}
        <img
          ref={dinoRef}
          src={dino}
          alt="dino"
          className="footer-dino"
        />

        {/* TEXT */}
        <div className="footer-text">
          © {new Date().getFullYear()} AIML Club
        </div>

        {/* CACTUS */}
        <div ref={cactusRef} className="footer-cactus" />
      </div>
    </footer>
  )
}

export default Footer