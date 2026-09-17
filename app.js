:root {
  --bg: #091923;
  --bg-alt: #0e2235;
  --panel: rgba(18, 32, 46, 0.93);
  --panel-soft: rgba(255, 255, 255, 0.04);
  --card: rgba(11, 22, 31, 0.75);
  --card-strong: #eaf7d1;
  --text: #eef6fb;
  --muted: #b8c8d3;
  --line: rgba(180, 204, 212, 0.18);
  --lime: #c9f36c;
  --lime-deep: #a9df47;
  --success: #8ddc75;
  --warning: #f5d270;
  --shadow: 0 32px 70px rgba(0, 0, 0, 0.26);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'DM Sans', sans-serif;
  background: linear-gradient(135deg, #081722 0%, #0d2438 44%, #0a1825 100%);
  color: var(--text);
  overflow-x: hidden;
}

button, input { font: inherit; }
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }

.page-glow {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  opacity: 0.18;
  z-index: 0;
}

.glow-one {
  background: #96d566;
  top: -150px;
  right: -90px;
}

.glow-two {
  background: #5a8ef5;
  left: -180px;
  bottom: -60px;
}

.topbar,
.hero,
.portal-panel,
footer {
  position: relative;
  z-index: 1;
}

.topbar {
  width: min(1200px, calc(100% - 56px));
  margin: 28px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.05em;
}

.brand-mark {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  width: 22px;
  height: 22px;
}

.brand-mark span {
  display: block;
  width: 6px;
  border-radius: 4px;
  background: var(--text);
  transform: skew(-18deg);
}

.brand-mark span:nth-child(1) { height: 10px; }
.brand-mark span:nth-child(2) { height: 16px; background: #8ed780; }
.brand-mark span:nth-child(3) { height: 22px; background: var(--lime); }

.main-nav {
  display: flex;
  align-items: center;
  gap: 30px;
  color: var(--muted);
  font-size: 0.94rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible { color: var(--text); }

.nav-cta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.primary-button,
.secondary-button,
.ghost-button,
.tab-button {
  border: 1px solid transparent;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.primary-button {
  appearance: none;
  background: linear-gradient(180deg, var(--lime) 0%, var(--lime-deep) 100%);
  color: #0b1e2a;
  font-weight: 700;
  padding: 0.8rem 1.2rem;
  box-shadow: 0 14px 26px rgba(169, 223, 71, 0.25);
}

.secondary-button {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.14);
  color: var(--text);
  padding: 0.8rem 1.2rem;
}

.ghost-button {
  background: transparent;
  border-color: rgba(255, 255, 255, 0.12);
  color: var(--text);
  padding: 0.8rem 1.2rem;
}

.primary-button.large,
.secondary-button.large {
  min-width: 190px;
  padding: 1rem 1.35rem;
}

.primary-button.full {
  width: 100%;
}

.primary-button:hover,
.secondary-button:hover,
.ghost-button:hover,
.tab-button:hover {
  transform: translateY(-1px);
}

.hero {
  width: min(1200px, calc(100% - 56px));
  margin: 72px auto 0;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 700;
}

.eyebrow.dark { color: #7f8d97; }

.pulse {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: var(--success);
  border-radius: 50%;
  box-shadow: 0 0 0 6px rgba(141, 220, 117, 0.18);
}

.hero-copy h1 {
  margin: 18px 0 18px;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.06em;
  font-weight: 600;
  line-height: 0.97;
  font-size: clamp(3.2rem, 6vw, 6rem);
}

.hero-copy h1 span {
  color: var(--lime);
}

.hero-copy p {
  max-width: 560px;
  color: var(--muted);
  font-size: 1.15rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.trust-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 28px;
  color: var(--muted);
}

.avatars {
  display: flex;
  align-items: center;
}

.avatars span {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #101d2a;
  margin-left: -6px;
  background: linear-gradient(135deg, #c4a77c, #7ca9e8);
  font-size: 0.6rem;
  font-weight: 700;
  color: #0d1620;
}

.avatars span:first-child { margin-left: 0; background: linear-gradient(135deg, #f5c48f, #d06f66); }
.avatars span:nth-child(2) { background: linear-gradient(135deg, #d1dc7b, #7abdec); }
.avatars span:nth-child(3) { background: linear-gradient(135deg, #ffd5f6, #a8d5ff); }

.hero-card {
  background: rgba(11, 23, 32, 0.78);
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: var(--shadow);
  padding: 26px 24px;
  backdrop-filter: blur(12px);
}

.card-header,
.payment-header,
.access-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.card-header small,
.payment-header small {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 0.67rem;
}

.card-header h2,
.payment-header h3,
.access-card h2 {
  margin: 8px 0 0;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.04em;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: 0.5rem 0.7rem;
  font-size: 0.7rem;
  font-weight: 700;
}

.status-pill.success {
  background: rgba(141, 220, 117, 0.18);
  color: #d2ffb9;
}

.status-pill.warning {
  background: rgba(245, 210, 112, 0.14);
  color: #f6d777;
}

.step-list {
  margin-top: 28px;
  display: grid;
  gap: 18px;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 14px 12px 14px 10px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  border-radius: 18px;
}

.step-num {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: rgba(201, 243, 108, 0.18);
  color: var(--lime);
  font-weight: 700;
  font-size: 0.8rem;
}

.step-item strong {
  display: block;
  font-size: 1.03rem;
  margin-bottom: 4px;
}

.step-item small {
  color: var(--muted);
  line-height: 1.5;
}

.mini-metrics {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.mini-metrics div {
  padding: 18px 16px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
}

.mini-metrics strong {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.7rem;
}

.mini-metrics span {
  color: var(--muted);
  font-size: 0.78rem;
}

.portal-panel {
  width: min(1200px, calc(100% - 56px));
  margin: 34px auto 0;
}

.portal-intro {
  margin-bottom: 20px;
}

.portal-intro h2 {
  margin: 16px 0 10px;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.05em;
  font-family: 'Space Grotesk', sans-serif;
}

.portal-intro p {
  margin: 0;
  max-width: 650px;
  color: var(--muted);
  line-height: 1.7;
}

.portal-shell {
  display: grid;
  grid-template-columns: 1fr 0.95fr;
  gap: 26px;
  align-items: start;
}

.auth-panel,
.payment-panel,
.access-card {
  background: rgba(12, 22, 31, 0.82);
  border: 1px solid var(--line);
  border-radius: 26px;
  box-shadow: var(--shadow);
}

.auth-panel {
  padding: 18px 18px 26px;
}

.tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 18px;
  background: rgba(255,255,255,0.02);
  border-radius: 14px;
  padding: 8px;
}

.tab-button {
  flex: 1;
  background: transparent;
  color: var(--muted);
  border: 0;
  padding: 0.8rem 0.9rem;
  font-weight: 700;
}

.tab-button.active {
  background: rgba(201, 243, 108, 0.18);
  color: var(--text);
  box-shadow: inset 0 0 0 1px rgba(201, 243, 108, 0.2);
}

.auth-form {
  display: none;
  gap: 16px;
}

.auth-form.active {
  display: grid;
}

label {
  display: grid;
  gap: 8px;
  color: var(--muted);
}

label span {
  font-size: 0.8rem;
  font-weight: 600;
}

input {
  width: 100%;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  background: rgba(255,255,255,0.025);
  color: var(--text);
  min-height: 52px;
  padding: 0.85rem 0.95rem;
  outline: none;
}

input:focus {
  border-color: rgba(201, 243, 108, 0.5);
  box-shadow: 0 0 0 3px rgba(201, 243, 108, 0.08);
}

.two-column {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 0.8rem;
}

.checkbox-wrap {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.checkbox-wrap input {
  width: auto;
  min-height: auto;
  margin: 0;
}

.meta-row a {
  color: var(--lime);
}

.payment-panel {
  padding: 22px 22px 18px;
}

.amount-box {
  margin-top: 18px;
  border: 1px solid rgba(201, 243, 108, 0.2);
  background: rgba(201, 243, 108, 0.08);
  border-radius: 18px;
  padding: 20px 18px;
}

.amount-box span {
  display: block;
  font-size: 0.8rem;
  color: var(--muted);
  margin-bottom: 6px;
}

.amount-box strong {
  font-size: clamp(2rem, 4vw, 2.5rem);
  letter-spacing: -0.05em;
  font-family: 'Space Grotesk', sans-serif;
}

.payment-methods {
  margin-top: 22px;
}

.method {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 14px 12px;
  background: rgba(255,255,255,0.02);
}

.method.active {
  border-color: rgba(201, 243, 108, 0.25);
  background: rgba(201, 243, 108, 0.08);
}

.method-icon {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(180deg, #f6d16d 0%, #db9c4c 100%);
  color: #0d1823;
  font-weight: 900;
}

.method strong {
  display: block;
  margin-bottom: 4px;
}

.method small {
  color: var(--muted);
}

.momo-form {
  margin-top: 18px;
  display: grid;
  gap: 16px;
}

.payment-note {
  margin-top: 16px;
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.6;
}

.company-access {
  width: min(1200px, calc(100% - 56px));
  margin: 42px auto 0;
  padding-bottom: 80px;
}

.company-access.hidden {
  display: none;
}

.access-card {
  padding: 22px 20px 26px;
}

.access-card h2 {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  max-width: 520px;
}

.company-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.company-card {
  border: 1px solid var(--line);
  border-radius: 22px;
  background: rgba(255,255,255,0.02);
  padding: 18px 16px;
}

.company-tag {
  display: inline-flex;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  background: rgba(201, 243, 108, 0.12);
  color: var(--lime);
  font-size: 0.7rem;
  font-weight: 700;
}

.company-card h3 {
  margin: 14px 0 10px;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: -0.04em;
  font-size: 1.55rem;
}

.company-card p {
  margin: 0 0 16px;
  color: var(--muted);
  line-height: 1.7;
}

.small {
  padding: 0.7rem 1rem;
}

footer {
  width: min(1200px, calc(100% - 56px));
  margin: 0 auto 36px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  color: var(--muted);
  font-size: 0.82rem;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
}

@media (max-width: 920px) {
  .topbar,
  .hero,
  .portal-shell,
  .company-grid,
  footer {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    grid-template-columns: 1fr;
  }

  .portal-shell,
  .company-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  footer {
    display: grid;
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 620px) {
  .topbar,
  .hero,
  .portal-panel,
  .company-access,
  footer {
    width: calc(100% - 32px);
  }

  .main-nav {
    display: none;
  }

  .nav-cta {
    width: 100%;
    justify-content: center;
  }

  .primary-button,
  .secondary-button,
  .ghost-button {
    width: 100%;
  }

  .hero-actions,
  .nav-cta {
    display: grid;
    grid-template-columns: 1fr;
  }

  .two-column {
    grid-template-columns: 1fr;
  }
}
