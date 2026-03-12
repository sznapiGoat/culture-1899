const Footer = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <>
      <section className="newsletter" id="contact">
        <div className="newsletter-content">
          <p className="section-label">— Buď první</p>
          <h2 className="newsletter-title">
            NOVÉ
            <br />
            <span>DROPY</span>
            <br />
            DŘÍV
          </h2>
          <p className="newsletter-sub">
            Registrovaní dostávají přístup 24h před veřejností.
          </p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter-input"
            placeholder="tvuj@email.cz"
          />
          <button type="submit" className="newsletter-btn">
            Přihlásit se
          </button>
        </form>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <div className="footer-brand-name">
              CULTURE<span>1899</span>
            </div>
            <p className="footer-tagline">
              První fotbalový streetwear brand v České republice. Limitované
              edice, česká tvorba.
            </p>
            <div className="footer-socials">
              <a
                href="https://instagram.com/culture_1899"
                className="footer-social"
                target="_blank"
                rel="noreferrer"
              >
                IG
              </a>
              <a
                href="https://tiktok.com/@culture_1899"
                className="footer-social"
                target="_blank"
                rel="noreferrer"
              >
                TT
              </a>
              <a
                href="https://youtube.com/@sabrialdury"
                className="footer-social"
                target="_blank"
                rel="noreferrer"
              >
                YT
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Kolekce</div>
            <ul className="footer-links">
              <li>
                <a href="#products">Oblečení</a>
              </li>
              <li>
                <a href="#products">Brýle</a>
              </li>
              <li>
                <a href="#products">Doplňky</a>
              </li>
              <li>
                <a href="#products">Nové kousky</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Info</div>
            <ul className="footer-links">
              <li>
                <a href="#story">O nás</a>
              </li>
              <li>
                <a href="#contact">Jak nakoupit</a>
              </li>
              <li>
                <a href="#contact">Doprava</a>
              </li>
              <li>
                <a href="#contact">Vrácení zboží</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Kontakt</div>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@culture1899.cz">info@culture1899.cz</a>
              </li>
              <li>
                <a href="https://instagram.com/culture_1899" target="_blank" rel="noreferrer">
                  Instagram DM
                </a>
              </li>
              <li>
                <a href="#contact">Praha, CZ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 Culture 1899. Všechna práva vyhrazena.
          </p>
          <div className="footer-legal">
            <a href="#contact">Obchodní podmínky</a>
            <a href="#contact">Ochrana osobních údajů</a>
            <a href="#contact">Vrácení zboží</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

