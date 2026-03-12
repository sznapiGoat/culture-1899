import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#top" className="nav-logo">
        CULTURE<span>1899</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#products">Kolekce</a>
        </li>
        <li>
          <a href="#story">Příběh</a>
        </li>
        <li>
          <a href="#vlog">Vlog</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="nav-right">
        <a href="#cart" className="nav-cart">
          Košík (0)
        </a>
      </div>
    </nav>
  )
}

export default Navbar

