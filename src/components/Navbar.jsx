import { NavLink, useLocation } from "react-router-dom"
import { useLayoutEffect, useRef, useState } from "react"
import dino from "../assets/dino.png"

const navItems = [
  { path: "/about", label: "About" },
  { path: "/events", label: "Events" },
  { path: "/contact", label: "Contact" },
  { path: "/join", label: "Join" }
]

const DINO_WIDTH = 22
const LAND_OFFSET = -5

function Navbar() {
  const location = useLocation()
  const navRefs = useRef({})
  const dinoRef = useRef(null)
  const shadowRef = useRef(null)

  const posRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)

  const [menuOpen, setMenuOpen] = useState(false)
  const dinoPath = location.pathname === "/" ? "/about" : location.pathname
  const SHADOW_OFFSET = (DINO_WIDTH - 16) / 2 // = 3

  /* 🦖 DESKTOP DINO ONLY */
  useLayoutEffect(() => {
    if (window.innerWidth < 768) return

    const el = navRefs.current[dinoPath]
    const dinoEl = dinoRef.current
    const shadow = shadowRef.current
    if (!el || !dinoEl || !shadow) return

    const rect = el.getBoundingClientRect()
    const parent = el.parentElement.getBoundingClientRect()

    const toX =
      rect.left - parent.left + rect.width / 2 - DINO_WIDTH / 2
    const toY = -rect.height - LAND_OFFSET

    if (posRef.current.x === 0 && posRef.current.y === 0) {
      dinoEl.style.transform = `translate(${toX}px, ${toY}px)`
      shadow.style.transform = `translate(${toX + SHADOW_OFFSET}px, 0) scale(0.8)`
      posRef.current = { x: toX, y: toY }
      return
    }

    const { x: fromX, y: fromY } = posRef.current
    if (fromX === toX && fromY === toY) return

    const direction = toX > fromX ? 1 : -1
    const distance = Math.abs(toX - fromX)
    const height = distance > 120 ? 42 : 24
    const duration = distance > 120 ? 600 : 450

    animRef.current?.cancel()

    animRef.current = dinoEl.animate(
      [
        { transform: `translate(${fromX}px, ${fromY}px) scaleX(${direction})` },
        {
          transform: `translate(${(fromX + toX) / 2}px, ${
            Math.min(fromY, toY) - height
          }px) scaleX(${direction})`
        },
        { transform: `translate(${toX}px, ${toY}px) scaleX(${direction})` }
      ],
      { duration, easing: "ease-in-out", fill: "forwards" }
    )

    shadow.animate(
      [
        { transform: `translate(${fromX + SHADOW_OFFSET}px, 0) scale(0.8)` },
        { transform: `translate(${(fromX + toX) / 2 + SHADOW_OFFSET}px, 0) scale(0.5)` },
        { transform: `translate(${toX + SHADOW_OFFSET}px, 0) scale(0.8)` }
      ],
      { duration, easing: "ease-in-out", fill: "forwards" }
    )

    animRef.current.onfinish = () => {
      posRef.current = { x: toX, y: toY }
    }
  }, [dinoPath])

  return (
    <>
        <nav className="navbar">
        <NavLink to="/" className="logo val-font">
            AIML
        </NavLink>

        <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
        >
            ☰
        </button>

        {/* DESKTOP NAV */}
        <div className="nav-desktop pixel-font">
          <div ref={shadowRef} className="nav-shadow" />
          <img ref={dinoRef} src={dino} alt="dino" className="nav-dino" />

          {navItems.map(({ path, label }) => (
            <NavLink
            key={path}
            to={path}
            ref={(el) => (navRefs.current[path] = el)}
            className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
            }
            >
            {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* MOBILE SLIDE DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <button
          className="drawer-close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `drawer-link ${isActive ? "active" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar