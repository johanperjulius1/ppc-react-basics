import { useEffect } from 'react';

const BotOptimized = () => {
  useEffect(() => {
    // Set page title for bots
    document.title = "Bästa Casinon i Sverige 2024 - Casino Guide";
    
    // Add meta description if not present
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Upptäck de bästa casinona i Sverige 2024. Säkra casino med svensk licens, bonus utan omsättningskrav, free spins och Swish-betalningar.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bot-optimized-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Main heading */}
      <h1 style={{ color: '#2c3e50', marginBottom: '20px' }}>
        Bästa Casinon i Sverige 2024
      </h1>

      {/* Introduction */}
      <section style={{ marginBottom: '30px' }}>
        <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '15px' }}>
          Välkommen till Sveriges mest kompletta casino-guide. Här hittar du de bästa och säkraste casinona 
          med svensk licens, attraktiva bonusar och snabba utbetalningar.
        </p>
      </section>

      {/* Casino categories */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>Populära Casino-kategorier</h2>
        
        <div style={{ display: 'grid', gap: '15px' }}>
          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ color: '#2980b9', marginBottom: '10px' }}>
              <a href="/nya-casinon" style={{ textDecoration: 'none', color: '#2980b9' }}>
                Nya Casinon 2024
              </a>
            </h3>
            <p style={{ margin: 0, color: '#666' }}>
              Upptäck de senaste casinona med moderna spel och innovativa funktioner.
            </p>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ color: '#2980b9', marginBottom: '10px' }}>
              <a href="/casino-med-swish" style={{ textDecoration: 'none', color: '#2980b9' }}>
                Casino med Swish
              </a>
            </h3>
            <p style={{ margin: 0, color: '#666' }}>
              Snabba insättningar och uttag med Swish på svenska casinon.
            </p>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ color: '#2980b9', marginBottom: '10px' }}>
              <a href="/casino-med-bonus" style={{ textDecoration: 'none', color: '#2980b9' }}>
                Casino med Bonus
              </a>
            </h3>
            <p style={{ margin: 0, color: '#666' }}>
              Bästa välkomstbonusar och kampanjer från svenska casinon.
            </p>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ color: '#2980b9', marginBottom: '10px' }}>
              <a href="/casino-med-bonus-utan-omsattningskrav" style={{ textDecoration: 'none', color: '#2980b9' }}>
                Bonus utan Omsättningskrav
              </a>
            </h3>
            <p style={{ margin: 0, color: '#666' }}>
              Casinobonusar utan krångliga omsättningsvillkor.
            </p>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ color: '#2980b9', marginBottom: '10px' }}>
              <a href="/casino-med-free-spins" style={{ textDecoration: 'none', color: '#2980b9' }}>
                Casino med Free Spins
              </a>
            </h3>
            <p style={{ margin: 0, color: '#666' }}>
              Gratis snurr på populära spelautomater.
            </p>
          </div>

          <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ color: '#2980b9', marginBottom: '10px' }}>
              <a href="/casino-med-bankid" style={{ textDecoration: 'none', color: '#2980b9' }}>
                Casino med BankID
              </a>
            </h3>
            <p style={{ margin: 0, color: '#666' }}>
              Säker och snabb registrering med BankID.
            </p>
          </div>
        </div>
      </section>

      {/* Key features */}
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: '#34495e', marginBottom: '15px' }}>Vad vi erbjuder</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>Endast casinon med svensk spellicens</li>
          <li>Oberoende recensioner och betyg</li>
          <li>Aktuell information om bonusar och kampanjer</li>
          <li>Säkra betalningsmetoder som Swish och BankID</li>
          <li>Kundtjänst på svenska</li>
          <li>Ansvarsspel och säkerhet i fokus</li>
        </ul>
      </section>

      {/* Footer info */}
      <footer style={{ borderTop: '1px solid #ddd', paddingTop: '20px', marginTop: '40px' }}>
        <p style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
          Spela ansvarsfullt. Stödlinjen: 020-819 100. Denna sida är optimerad för sökmotorer.
        </p>
      </footer>
    </div>
  );
};

export default BotOptimized;
