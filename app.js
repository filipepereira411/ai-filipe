:root {
  --bg1: #07141d;
  --bg2: #0e1d2b;
  --panel: rgba(15, 24, 35, 0.9);
  --panel-alt: rgba(21, 33, 49, 0.9);
  --line: rgba(255,255,255,0.08);
  --text: #edf8ff;
  --muted: #a6c3d9;
  --accent: #76e4ff;
  --accent-2: #ffe082;
  --success: #9ae6b4;
}

* { box-sizing: border-box; }
html, body { height: 100%; }
body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", sans-serif;
  background: linear-gradient(180deg, var(--bg1), var(--bg2));
  color: var(--text);
}

header {
  padding: 28px 20px 10px;
}

.brand-wrap {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-badge {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #081521;
  font-weight: 800;
}

header h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3rem);
}

.tag {
  margin: 6px 0 0;
  color: var(--muted);
}

.app {
  max-width: 1100px;
  margin: 0 auto;
  padding: 16px 20px 20px;
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.7fr);
  gap: 20px;
}

.chat, .origin {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.24);
}

.chat {
  display: flex;
  flex-direction: column;
  min-height: 70vh;
  padding: 16px;
}

.messages {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 16px;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  max-width: 80%;
  padding: 12px 14px;
  border-radius: 16px;
  line-height: 1.5;
}

.message.bot {
  background: rgba(118,228,255,0.12);
  border: 1px solid rgba(118,228,255,0.2);
  align-self: flex-start;
}

.message.user {
  background: rgba(255,224,130,0.14);
  border: 1px solid rgba(255,224,130,0.2);
  align-self: flex-end;
}

.composer {
  margin-top: 14px;
  display: flex;
  gap: 10px;
}

.composer input {
  flex: 1;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
  color: var(--text);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 1rem;
}

.composer button,
.quick-buttons button {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.composer button {
  padding: 12px 18px;
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #06212b;
  font-weight: 800;
}

.quick-buttons {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.quick-buttons button {
  padding: 9px 12px;
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--line);
  color: var(--text);
}

.composer button:hover,
.quick-buttons button:hover {
  transform: translateY(-1px);
}

.origin {
  padding: 18px;
  height: fit-content;
}

.origin h2 {
  margin-top: 0;
}

.origin ul {
  padding-left: 18px;
  color: var(--muted);
}

.origin a {
  color: var(--accent-2);
  text-decoration: none;
}

.info-box {
  margin-top: 18px;
  background: rgba(154,230,180,0.08);
  border: 1px solid rgba(154,230,180,0.2);
  border-radius: 12px;
  padding: 12px;
  color: var(--muted);
}

footer {
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 20px 30px;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 900px) {
  .app {
    grid-template-columns: 1fr;
  }
}
