import ronaldo from '../assets/ronaldo.jpg';

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '700px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 48px 80px',
      overflow: 'hidden',
    }}>

      {/* FOTKA NA POZADÍ */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${ronaldo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        filter: 'grayscale(30%) contrast(1.1)',
        transform: 'scale(1.05)',
      }} />

      {/* DARK OVERLAY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          linear-gradient(to right, rgba(10,10,10,0.6) 40%, rgba(10,10,10,0.1) 100%),
          linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)
        `,
      }} />

      {/* GOLD OVERLAY */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 70% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* GRID LINES */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        pointerEvents: 'none',
      }} />

      {/* BIG 1899 NUMBER */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-40px',
        transform: 'translateY(-50%)',
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(280px, 40vw, 520px)',
        color: 'transparent',
        WebkitTextStroke: '1px rgba(201,168,76,0.06)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>1899</div>

      {/* CONTENT */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#c9a84c',
          marginBottom: '20px',
        }}>
          — První fotbalový streetwear brand v ČR
        </p>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(72px, 11vw, 160px)',
          lineHeight: 0.9,
          letterSpacing: '-0.01em',
          marginBottom: '32px',
        }}>
          <span style={{ display: 'block', color: '#f2ede6' }}>STREET</span>
          <span style={{
            display: 'block',
            WebkitTextStroke: '1px #f2ede6',
            color: 'transparent',
          }}>MEETS</span>
          <span style={{ display: 'block', color: '#c9a84c' }}>FOOTBALL</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '48px' }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            color: 'rgba(242,237,230,0.55)',
            maxWidth: '320px',
            lineHeight: 1.7,
            fontWeight: 300,
          }}>
            Tvoříme oblečení pro lidi, kteří žijí fotbalem. Limitované edice. Česká produkce. Žádné kompromisy.
          </p>

          <a href="#products" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            background: '#c9a84c',
            color: '#0a0a0a',
            textDecoration: 'none',
            padding: '16px 32px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            Prohlédnout kolekci →
          </a>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        right: '48px',
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '10px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(242,237,230,0.3)',
        writingMode: 'vertical-rl',
      }}>
        Scroll
      </div>

    </section>
  );
};

export default Hero;