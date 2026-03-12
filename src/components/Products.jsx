const Products = () => {
  return (
    <section className="products" id="products">
      <div className="products-header">
        <div>
          <p className="section-label">— Nová kolekce</p>
          <h2 className="products-title">
            AKTUÁLNÍ
            <span>DROP</span>
          </h2>
        </div>
        <a href="#products" className="view-all">
          Zobrazit vše →
        </a>
      </div>

      <div className="product-grid">
        <div className="product-card">
          <div
            className="product-placeholder"
            style={{
              background: 'linear-gradient(135deg, #1e1c18 0%, #2a2620 100%)',
            }}
          >
            <div className="product-placeholder-icon">⚽</div>
            <div className="product-placeholder-text">Nahraj foto produktu</div>
          </div>
          <div className="product-badge gold">Limited Edition</div>
          <div className="product-info">
            <div className="product-name">Messi × Ronaldo Tričko</div>
            <div className="product-price">990 Kč</div>
          </div>
          <div className="product-overlay">
            <button className="add-btn">Přidat do košíku</button>
          </div>
        </div>

        <div className="product-card">
          <div
            className="product-placeholder"
            style={{
              background: 'linear-gradient(135deg, #1a1818 0%, #242020 100%)',
            }}
          >
            <div className="product-placeholder-icon">👟</div>
            <div className="product-placeholder-text">Nahraj foto produktu</div>
          </div>
          <div className="product-badge">Bestseller</div>
          <div className="product-info">
            <div className="product-name">Barcelona Hoodie</div>
            <div className="product-price">1 490 Kč</div>
          </div>
          <div className="product-overlay">
            <button className="add-btn">Přidat do košíku</button>
          </div>
        </div>

        <div className="product-card">
          <div
            className="product-placeholder"
            style={{
              background: 'linear-gradient(135deg, #181a1c 0%, #20242a 100%)',
            }}
          >
            <div className="product-placeholder-icon">🕶️</div>
            <div className="product-placeholder-text">Nahraj foto produktu</div>
          </div>
          <div className="product-info">
            <div className="product-name">Culture Brýle</div>
            <div className="product-price">790 Kč</div>
          </div>
          <div className="product-overlay">
            <button className="add-btn">Přidat do košíku</button>
          </div>
        </div>

        <div className="product-card">
          <div
            className="product-placeholder"
            style={{
              background: 'linear-gradient(135deg, #1e1a14 0%, #2a2418 100%)',
            }}
          >
            <div className="product-placeholder-icon">🧢</div>
            <div className="product-placeholder-text">Nahraj foto produktu</div>
          </div>
          <div className="product-info">
            <div className="product-name">1899 Dad Cap</div>
            <div className="product-price">590 Kč</div>
          </div>
          <div className="product-overlay">
            <button className="add-btn">Přidat do košíku</button>
          </div>
        </div>

        <div className="product-card">
          <div
            className="product-placeholder"
            style={{
              background: 'linear-gradient(135deg, #1a1c18 0%, #20241c 100%)',
            }}
          >
            <div className="product-placeholder-icon">👕</div>
            <div className="product-placeholder-text">Nahraj foto produktu</div>
          </div>
          <div className="product-info">
            <div className="product-name">Street Football Tee</div>
            <div className="product-price">890 Kč</div>
          </div>
          <div className="product-overlay">
            <button className="add-btn">Přidat do košíku</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products

