const BrandStory = () => {
  return (
    <>
      <section className="brand-story" id="story">
        <div className="brand-story-content">
          <p className="section-label">— Náš příběh</p>
          <h2 className="brand-story-title">
            KDO
            <br />
            <span className="accent">JSME</span>
          </h2>
          <p className="brand-story-body">
            Culture 1899 vznikl z lásky k fotbalu a ulici. Jsme první český
            brand, který spojuje fotbalovou kulturu se streetwear estetikou.
            Každý kus vzniká s příběhem, ne jen s logem.
            <br />
            <br />
            Číslo 1899 odkazuje na rok, kdy byl fotbal poprvé kodifikován jako
            sport pro lidi z ulice — ne pro elitu, ale pro všechny.
          </p>
          <div className="brand-story-stats">
            <div className="stat">
              <div className="stat-num">50+</div>
              <div className="stat-label">Limitované kusy</div>
            </div>
            <div className="stat">
              <div className="stat-num">2K+</div>
              <div className="stat-label">Spokojení zákazníci</div>
            </div>
            <div className="stat">
              <div className="stat-num">100%</div>
              <div className="stat-label">Česká tvorba</div>
            </div>
          </div>
        </div>
        <div className="brand-story-visual">
          <div className="story-visual-inner">
            <div className="story-logo-big">C1899</div>
            <div className="story-year">
              Est. 2023 — Praha, Česká republika
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <p className="section-label">— Proč Culture</p>
        <h2 className="section-headline">
          PROČ
          <br />
          NÁS
        </h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-num">01</div>
            <div className="feature-icon">🎯</div>
            <div className="feature-title">Limited Only</div>
            <div className="feature-text">
              Každý drop má max. 50 kusů. Nikdy nevyrobíme víc. Tvoje tričko je
              opravdu unikátní.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-num">02</div>
            <div className="feature-icon">🇨🇿</div>
            <div className="feature-title">Made in CZ</div>
            <div className="feature-text">
              Navrhujeme i tiskneme v Praze. Podporujeme lokální tvůrce a máme
              kontrolu nad kvalitou.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-num">03</div>
            <div className="feature-icon">⚽</div>
            <div className="feature-title">Football First</div>
            <div className="feature-text">
              Každý design vychází z fotbalové kultury — hráčů, momentů,
              estetiky hřiště.
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-num">04</div>
            <div className="feature-icon">📦</div>
            <div className="feature-title">Rychlé doručení</div>
            <div className="feature-text">
              Odesíláme do 48 hodin. Balíme s péčí, každý balíček má osobní
              vzkaz od zakladatele.
            </div>
          </div>
        </div>
      </section>

      <section className="video-section" id="vlog">
        <div className="video-header">
          <div>
            <p className="section-label">— Behind the brand</p>
            <h2 className="video-title">
              ZÁKULISÍ
              <br />
              BRANDU
            </h2>
          </div>
          <p className="video-desc">
            Jak vypadá život 20letého tvůrce streetwear brandu? Sleduj náš vlog
            z Barcelony a zákulisí každého dropu.
          </p>
        </div>
        <div className="video-embed">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Culture 1899 vlog"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="insta-strip">
        <div className="insta-header">
          <h2 className="insta-title">@CULTURE_1899</h2>
          <a
            href="https://instagram.com/culture_1899"
            className="insta-handle"
            target="_blank"
            rel="noreferrer"
          >
            Sleduj nás →
          </a>
        </div>
        <div className="insta-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="insta-item" key={index}>
              <div className="insta-placeholder">
                <span>IG foto</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default BrandStory

