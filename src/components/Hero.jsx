const Hero = () => {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-bg"></div>
        <div className="hero-grid-lines"></div>
        <div className="hero-number">1899</div>
        <p className="hero-eyebrow">První fotbalový streetwear brand v ČR</p>
        <h1 className="hero-headline">
          STREET
          <br />
          <span className="line2">MEETS</span>
          <span className="line3">FOOTBALL</span>
        </h1>
        <div className="hero-sub">
          <p className="hero-desc">
            Tvoříme oblečení pro lidi, kteří žijí fotbalem. Limitované edice.
            Česká produkce. Žádné kompromisy.
          </p>
          <a href="#products" className="hero-cta">
            Prohlédnout kolekci
            <span className="hero-cta-arrow"></span>
          </a>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      <div className="drop-banner">
        <span className="drop-text">NEW DROP — MESSI × RONALDO</span>
        <span className="drop-divider"></span>
        <span className="drop-text">LIMITOVANÁ EDICE</span>
        <span className="drop-divider"></span>
        <span className="drop-text">JEN 50 KUSŮ</span>
        <span className="drop-divider"></span>
        <span className="drop-text">990 KČ</span>
      </div>

      <div className="ticker">
        <div className="ticker-inner">
          <span className="ticker-text">MESSI × RONALDO</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">FOTBALOVÝ STREETWEAR</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">LIMITOVANÁ EDICE</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">CULTURE 1899</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">ČESKÉ ZNAČKA</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">NEW DROP</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">MESSI × RONALDO</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">FOTBALOVÝ STREETWEAR</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">LIMITOVANÁ EDICE</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">CULTURE 1899</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">ČESKÉ ZNAČKA</span>
          <span className="ticker-dot">●</span>
          <span className="ticker-text">NEW DROP</span>
          <span className="ticker-dot">●</span>
        </div>
      </div>
    </>
  )
}

export default Hero

