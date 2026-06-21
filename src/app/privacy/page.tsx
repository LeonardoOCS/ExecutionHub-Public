export default function PrivacyPage() {
  return (
    <main className="page-shell legal-page">
      <section className="panel">
        <p className="eyebrow">Privacy</p>
        <h1>ExecutionHub Privacy Overview</h1>
        <p>
          This public repository contains only non-sensitive marketing and public preview files.
          It does not include the production backend, smart contracts, private keys, API secrets,
          operational wallets or internal execution logic.
        </p>
        <p>
          The official app may interact with wallet providers, blockchain networks and third-party
          infrastructure to support on-chain actions. Users should always review transaction details
          before confirming any blockchain operation.
        </p>
        <a href="/" className="secondary-cta">Back to home</a>
      </section>
    </main>
  );
}
