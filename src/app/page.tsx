const chains = [
  { name: "Base", img: "/chains/base.png", highlight: true },
  { name: "Arbitrum", img: "/chains/arbitrum.png" },
  { name: "Optimism", img: "/chains/optimism.png" },
  { name: "BNB Chain", img: "/chains/bnb.png" }
];

const features = [
  "Simple wallet experience",
  "Token swaps",
  "Cross-chain transfers",
  "Limit orders",
  "Clear transaction review",
  "Base-first design"
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">Base-first DeFi execution</p>
          <h1>ExecutionHub</h1>
          <p className="lead">
            ExecutionHub is being built to simplify wallet, swaps, bridges and limit orders
            in one cleaner interface, with a strong focus on Base.
          </p>
          <div className="actions">
            <a href="https://www.executionhubdefi.org" className="primary-cta">
              Open app
            </a>
            <a href="#status" className="secondary-cta">
              Project status
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <img src="/icon-512.png" alt="" />
        </div>
      </section>

      <section className="section-grid" id="status">
        <article className="panel">
          <p className="eyebrow">Current status</p>
          <h2>Active development and private testing.</h2>
          <p>
            The project is currently focused on refining the user experience, improving transaction
            clarity and preparing the product for a broader release without exposing unnecessary
            technical complexity to everyday users.
          </p>
        </article>

        <article className="panel base-panel" id="chains">
          <p className="eyebrow">Networks</p>
          <h2>Base first. Multi-chain ready.</h2>
          <div className="chain-list">
            {chains.map((chain) => (
              <div className={chain.highlight ? "chain highlighted" : "chain"} key={chain.name}>
                <img src={chain.img} alt="" />
                <span>{chain.name}</span>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panel">
        <p className="eyebrow">What it aims to simplify</p>
        <h2>Core DeFi actions in one place.</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
