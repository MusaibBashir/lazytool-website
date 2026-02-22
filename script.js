// ── PALETTE / CHANNELS ───────────────────────────────────────────
const CHANNELS = [
  { ch: 1, name: 'Home', hex: '#1a1814', r: 26, g: 24, b: 20, desc: 'LazyTool - Be less lazy' },
  { ch: 2, name: 'About', hex: '#2e3d4f', r: 46, g: 61, b: 79, desc: 'What is LazyTool?' },
  { ch: 3, name: 'Download', hex: '#4a5e45', r: 74, g: 94, b: 69, desc: 'Get the tool' },
  { ch: 4, name: 'HowToUse', hex: '#9c7c5e', r: 156, g: 124, b: 94, desc: 'Keyboard guide' },
  { ch: 5, name: 'AboutMe', hex: '#c4893a', r: 196, g: 137, b: 58, desc: 'Meet the dev' },
];

const CONTENT = {
  Home: `
    <div class="tv-content active">
      <h1>LazyTool</h1>
      <div class="subtitle">Be less lazy.</div>
      <p>A keyboard-driven productivity dashboard for your terminal. Manage todos, journal your thoughts, and track your time without leaving the command line.</p>
      <div class="button-group">
        <button class="btn-retro" onclick="switchTo(1)">What is it?</button>
        <button class="btn-retro primary" onclick="switchTo(2)">Download</button>
      </div>
    </div>
  `,
  About: `
    <div class="tv-content active">
      <h1>What is it?</h1>
      <div class="subtitle">Terminal productivity.</div>
      <p>Inspired by the efficiency of lazygit, LazyTool combines multiple tools into one terminal UI (TUI). It's built with Python and Textual for maximum speed and minimal distraction.</p>
      <p>Manage your daily flow with integrated Todo, Journal, Mood, Goals, and Timeline panels.</p>
      <div class="button-group">
        <button class="btn-retro" onclick="switchTo(0)">Back Home</button>
        <button class="btn-retro primary" onclick="switchTo(2)">Download</button>
      </div>
    </div>
  `,
  Download: `
    <div class="tv-content active">
      <h1>Download</h1>
      <div class="subtitle">v2.0.0 Now Available</div>
      <div class="download-boxes">
        <a href="/LazyTool-macOS.dmg" download class="download-box">
          <i class="fab fa-apple"></i>
          <span class="os-name">macOS</span>
          <small>.dmg installer</small>
        </a>
        <a href="/LazyTool-win.exe" download class="download-box">
          <i class="fab fa-windows"></i>
          <span class="os-name">Windows</span>
          <small>.exe setup</small>
        </a>
      </div>
      <div class="button-group" style="margin-top: 20px;">
        <button class="btn-retro" onclick="switchTo(0)">Back</button>
      </div>
    </div>
  `,
  HowToUse: `
    <div class="tv-content active">
      <h1>Shortcuts</h1>
      <div class="subtitle">Master the home row.</div>
      <ul class="use-list">
        <li><span>1-6</span> Switch between panels</li>
        <li><span>a / d</span> Add or Delete items</li>
        <li><span>space</span> Toggle / Check-off</li>
        <li><span>h / l</span> Prev / Next day</li>
        <li><span>?</span> Show help menu</li>
      </ul>
      <div class="button-group">
        <button class="btn-retro" onclick="switchTo(0)">Got it</button>
      </div>
    </div>
  `,
  AboutMe: `
    <div class="tv-content active">
      <h1>About Me</h1>
      <div class="subtitle">Musaib Bin Bashir</div>
      <p>Hey! I'm Musaib, the developer behind LazyTool. I love building tools that live in the terminal because they're fast, distraction-free, and look cool.</p>
      <p>LazyTool was born out of my own need to stop "tab-switching" between a dozen productivity apps. Now it's my daily driver.</p>
      <div class="button-group">
        <button class="btn-retro" onclick="switchTo(0)">Back Home</button>
      </div>
    </div>
  `
};

// ── CANVAS SETUP ─────────────────────────────────────────────────
const tvScreen = document.getElementById('tvScreen');
const canvas = document.getElementById('screen');
const ctx = canvas.getContext('2d');
const glow = document.getElementById('glow');
const overlay = document.getElementById('contentOverlay');

let CW, CH;
function resizeCanvas() {
  const rect = tvScreen.getBoundingClientRect();
  CW = canvas.width = rect.width;
  CH = canvas.height = rect.height;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// ── STATE ─────────────────────────────────────────────────────────
let currentCh = 0;
let staticNoise = null;
let noiseAge = 0;
let staticBurst = 0;
let switching = false;
let scanOffset = 0;
let glitchTimer = 0;

// ── BUILD CHANNEL BUTTONS ─────────────────────────────────────────
const strip = document.getElementById('channelStrip');
CHANNELS.forEach((ch, i) => {
  const btn = document.createElement('button');
  btn.className = 'ch-btn' + (i === 0 ? ' active' : '');
  btn.textContent = String(ch.ch).padStart(2, '0');
  btn.style.setProperty('--ch-color', ch.hex);
  btn.addEventListener('click', () => switchTo(i));
  strip.appendChild(btn);
});

function updateButtons(idx) {
  document.querySelectorAll('.ch-btn').forEach((b, i) => {
    b.classList.toggle('active', i === idx);
  });
}

function updateOverlay(idx) {
  const page = CHANNELS[idx].name;
  overlay.innerHTML = CONTENT[page];
}

// ── PHOSPHOR GLOW ─────────────────────────────────────────────────
function setGlow(ch) {
  const { r, g, b } = ch;
  glow.style.boxShadow = `
    0 0 18px rgba(${r},${g},${b},0.3),
    0 0 45px rgba(${r},${g},${b},0.15),
    0 0 90px rgba(${r},${g},${b},0.08)
  `;
}

// ── NOISE BUFFER ──────────────────────────────────────────────────
function makeNoiseBuffer() {
  const off = document.createElement('canvas');
  off.width = CW; off.height = CH;
  const oc = off.getContext('2d');
  const id = oc.createImageData(CW, CH);
  const d = id.data;
  for (let i = 0; i < d.length; i += 4) {
    const v = Math.random() * 255 | 0;
    d[i] = d[i + 1] = d[i + 2] = v;
    d[i + 3] = 255;
  }
  oc.putImageData(id, 0, 0);
  return off;
}

// ── DRAW SCREEN ───────────────────────────────────────────────────
function drawScreen(ch, staticAlpha) {
  const { hex } = ch;

  // Base color fill
  ctx.fillStyle = hex;
  ctx.fillRect(0, 0, CW, CH);

  // CRT vignette
  const vg = ctx.createRadialGradient(CW / 2, CH / 2, CH * 0.1, CW / 2, CH / 2, CH * 0.8);
  vg.addColorStop(0, 'rgba(0,0,0,0)');
  vg.addColorStop(1, 'rgba(0,0,0,0.4)');
  ctx.fillStyle = vg;
  ctx.fillRect(0, 0, CW, CH);

  // Moving scanline band (restored from template)
  scanOffset = (scanOffset + 0.4) % CH;
  ctx.fillStyle = 'rgba(255,255,255,0.025)';
  for (let y = scanOffset % 80; y < CH; y += 80) {
    ctx.fillRect(0, y, CW, 2);
  }

  // Glitch
  glitchTimer++;
  if (glitchTimer > 200 && Math.random() < 0.02) {
    glitchTimer = 0;
    const gy = Math.random() * CH | 0;
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.3})`;
    ctx.fillRect(0, gy, CW, 2);
  }

  // Static overlay
  if (staticAlpha > 0.01) {
    if (!staticNoise || noiseAge++ > 2) {
      staticNoise = makeNoiseBuffer();
      noiseAge = 0;
    }
    ctx.globalAlpha = staticAlpha;
    ctx.drawImage(staticNoise, 0, 0);
    ctx.globalAlpha = 1;
  }
}

// ── SWITCH CHANNEL ────────────────────────────────────────────────
function switchTo(idx) {
  if (switching) return;
  switching = true;
  currentCh = ((idx % CHANNELS.length) + CHANNELS.length) % CHANNELS.length;
  staticBurst = 1.0;

  updateButtons(currentCh);
  setGlow(CHANNELS[currentCh]);

  tvScreen.classList.add('switching');
  setTimeout(() => {
    updateOverlay(currentCh);
  }, 200);

  setTimeout(() => {
    tvScreen.classList.remove('switching');
    switching = false;
  }, 500);
}

function next() { switchTo(currentCh + 1); }
function prev() { switchTo(currentCh - 1); }

// ── INPUT ─────────────────────────────────────────────────────────
document.getElementById('nextKnob').addEventListener('click', next);
document.getElementById('prevKnob').addEventListener('click', prev);

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowUp') { e.preventDefault(); next(); }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); prev(); }
  const n = parseInt(e.key);
  if (!isNaN(n) && n >= 1 && n <= CHANNELS.length) switchTo(n - 1);
});

// ── RENDER LOOP ───────────────────────────────────────────────────
setGlow(CHANNELS[currentCh]);
updateOverlay(currentCh);

function loop() {
  staticBurst = staticBurst > 0.01 ? staticBurst * 0.85 : 0;
  drawScreen(CHANNELS[currentCh], staticBurst);
  requestAnimationFrame(loop);
}

loop();