const CHANNELS = [
  { ch: 1, name: 'Home', hex: '#1a1814', r: 26, g: 24, b: 20, desc: 'LazyTool - Be less lazy' },
  { ch: 2, name: 'About', hex: '#2e3d4f', r: 46, g: 61, b: 79, desc: 'What is LazyTool?' },
  { ch: 3, name: 'Features', hex: '#3d2e4f', r: 61, g: 46, b: 79, desc: 'All features' },
  { ch: 4, name: 'Download', hex: '#4a5e45', r: 74, g: 94, b: 69, desc: 'Get the tool' },
  { ch: 5, name: 'AboutMe', hex: '#c4893a', r: 196, g: 137, b: 58, desc: 'Meet the dev' },
];

const CONTENT = {
  Home: `
    <div class="tv-content active">
      <div class="home-layout">
        <div class="home-text">
          <h1>LazyTool</h1>
          <div class="subtitle">Be less lazy.</div>
          <p>A keyboard-driven terminal dashboard that combines <strong>task management</strong>, <strong>journaling</strong>, <strong>mood tracking</strong>, <strong>goal streaks</strong>, and <strong>time tracking</strong> — all without leaving the command line.</p>
          <p style="font-size:0.75em; opacity:0.7;">100% offline · No accounts · Your data never leaves your machine</p>
        </div>
        <div class="home-logo">
          <img src="transparent-logo.png" alt="LazyTool Logo" class="logo-img" />
          <div class="button-group" style="flex-direction:column; margin-top:12px;">
            <button class="btn-retro" onclick="switchTo(1)">Learn More</button>
            <button class="btn-retro primary" onclick="switchTo(3)">Download v2.1.1</button>
          </div>
        </div>
      </div>
    </div>
  `,
  About: `
    <div class="tv-content active">
      <h1>What is LazyTool?</h1>
      <div class="subtitle">All-in-one terminal productivity.</div>
      <p>Inspired by <strong>lazygit</strong>, LazyTool is a TUI (Terminal User Interface) built with Python and Textual. Every action is a single keystroke — no mouse needed.</p>
      <p><strong>6 integrated panels:</strong> Todos, Journal, Moods, Goals, Timeline, and Stats — all with keyboard navigation (<em>j/k</em> to move, <em>1-6</em> to switch panels).</p>
      <p><strong>Multi-Profile System:</strong> Press <em>Shift+P</em> to switch between Work, Personal, and School profiles — each with isolated data.</p>
      <p><strong>Cross-platform:</strong> Runs on Windows, macOS, and Linux. Data stays local at <em>~/.lazytool/</em></p>
      <div class="button-group">
        <button class="btn-retro" onclick="switchTo(2)">See All Features</button>
        <button class="btn-retro primary" onclick="switchTo(3)">Download</button>
      </div>
    </div>
  `,
  Features: `
    <div class="tv-content active" style="font-size:0.82em;">
      <h1>Features</h1>
      <div class="subtitle">Everything at your fingertips.</div>
      <p><strong>Todos</strong> — Three priority levels, smart auto-purge of old tasks, quick add/toggle/delete with single keys.</p>
      <p><strong>Journal</strong> — Multi-line editor with named entries, auto-timestamped, browse by date with h/l.</p>
      <p><strong>Moods</strong> — Six mood levels with notes, daily grouping, weekly average in Stats.</p>
      <p><strong>Goals</strong> — Daily check-in streaks with a 30-day visual grid, smart history from creation date.</p>
      <p><strong>Timeline</strong> — Start/stop activity tracking with cross-midnight support, colored timeline bar, event suggestions.</p>
      <p><strong>Stats</strong> — Configuraclassble window (1-90 days), multiple bar chart modes, export to .txt or .md.</p>
      <p><strong>Profiles</strong> — Shift+P to create, rename, or switch profiles. Each profile has its own data and exports.</p>
      <div class="button-group">
        <button class="btn-retro primary" onclick="switchTo(3)">Download</button>
      </div>
    </div>
  `,
  Download: `
    <div class="tv-content active">
      <h1>Download</h1>
      <div class="subtitle">v2.1.1 — Multi-Profile, Live Stats</div>
      <div class="download-boxes">
        <a href="https://github.com/MusaibBashir/Lazytool/releases/download/v2.1.1/LazyTool-macOS.dmg" download class="download-box">
          <i class="fab fa-apple"></i>
          <span class="os-name">macOS</span>
          <small>.dmg installer</small>
        </a>
        <a id="winDownload" href="https://github.com/MusaibBashir/Lazytool/releases/download/v2.1.1/LazyTool-win.exe" download class="download-box" onclick="handleWinDownload(event)">
          <i class="fab fa-windows"></i>
          <span class="os-name">Windows</span>
          <small>.exe setup</small>
        </a>
        <a href="https://github.com/MusaibBashir/Lazytool/releases/latest" class="download-box">
          <i class="fab fa-linux"></i>
          <span class="os-name">Linux</span>
          <small>from source</small>
        </a>
      </div>
      <p style="font-size:0.7em; opacity:0.6; margin-top:12px;">After installing on Windows, just type <strong>lazytool</strong> in any terminal.</p>
      <div class="button-group" style="margin-top: 10px;">
        <button class="btn-retro" onclick="switchTo(0)">Back</button>
      </div>
    </div>
  `,

  AboutMe: `
    <div class="tv-content active">
      <h1>About Me</h1>
      <div class="subtitle">Musaib Bin Bashir</div>
      <p>Hey! I'm Musaib, the developer behind LazyTool. I love building tools that help in daily life. Iam excited by tools that live in the terminal because they're fast, distraction-free, and look cool.</p>
      <p>LazyTool was born out of my own need to stop procrastination. I couldn't find any tool for laptop that had all the features I wanted. So I decided to build one myself. Now it's my daily driver.</p>
      <div class="button-group">
        <button class="btn-retro" onclick="switchTo(0)">Back Home</button>
      </div>
    </div>
  `,
  WinInstructions: `
    <div class="tv-content active">
      <h1>Windows Installer Safety</h1>
      <div class="subtitle">It's safe to proceed</div>
      <p>Windows Defender may show a warning because the app is new. But I assure you it is completely safe, and doesn't even need internet to work</p>
      <ol style="margin-left:20px;font-size:0.9em;">
        <li>When the "Windows protected your PC" dialog appears, click <strong>More info</strong>.</li>
        <img src="images/defender1.png" alt="Example Defender warning" style="max-width:100%;margin-top:6px;">
        <li>Then click <strong>Run anyway</strong>.</li>
      </ol>
      <img src="images/defender2.png" alt="Example Defender warning" style="max-width:100%;margin-top:6px;">
      <p style="margin-top:10px;">This happens because it doesn't have a liscence(Can't pay 150 USD for a hobby app).</p>
      <div class="button-group" style="margin-top:15px;">
        <button class="btn-retro" onclick="switchTo(3)">Back to Download</button>
      </div>
    </div>
  `
};

// Slideshow images (Local images)
const SCREENSHOTS = [
  'images/Screenshot (66).png',
  'images/bg2.png',
  'images/bg3.png',
  'images/Screenshot (67).png'
];

// Slideshow state
let slideIndex = 0;
let slideTimer = null;

function renderSlide() {
  const img = document.getElementById('slideshowImg');
  const dots = document.getElementById('slideDots');
  if (!img || !dots) return;
  img.src = SCREENSHOTS[slideIndex] || '';
  Array.from(dots.children).forEach((d, i) => d.classList.toggle('active', i === slideIndex));
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % SCREENSHOTS.length;
  renderSlide();
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + SCREENSHOTS.length) % SCREENSHOTS.length;
  renderSlide();
}

function startSlideshow() {
  stopSlideshow();
  slideIndex = 0;
  const dots = document.getElementById('slideDots');
  if (!dots) return;
  dots.innerHTML = '';
  SCREENSHOTS.forEach((s, i) => {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => { slideIndex = i; renderSlide(); });
    dots.appendChild(d);
  });
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  renderSlide();
  slideTimer = setInterval(nextSlide, 4000);
}

function stopSlideshow() {
  if (slideTimer) { clearInterval(slideTimer); slideTimer = null; }
  const nextBtn = document.getElementById('nextSlide');
  const prevBtn = document.getElementById('prevSlide');
  if (nextBtn) nextBtn.removeEventListener('click', nextSlide);
  if (prevBtn) prevBtn.removeEventListener('click', prevSlide);
}

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
  btn.style.setProperty('--ch-color', ch.hex);
  btn.title = ch.name;
  btn.addEventListener('click', () => switchTo(i));

  const num = document.createElement('span');
  num.className = 'ch-btn-num';
  num.textContent = String(ch.ch);

  const dot = document.createElement('span');
  dot.className = 'ch-btn-dot';

  btn.appendChild(num);
  btn.appendChild(dot);
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
  // initialize slideshow when the injected content contains the slideshow image
  if (document.getElementById('slideshowImg')) {
    setTimeout(startSlideshow, 80);
  } else {
    stopSlideshow();
  }
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

  // TV static crackle sound on switch
  playStaticBurst();

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
// nextKnob was removed from UI — channel switching via buttons + keyboard only

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

// ── BACKGROUND SCREENSHOT GALLERY ─────────────────────────────────
(function initBgGallery() {
  const container = document.getElementById('bgScreenshots');
  if (!container || SCREENSHOTS.length === 0) return;

  const images = [...SCREENSHOTS];
  const imgElements = [];

  // We need 6 images for 3x2 grid if ratio isn't suitable — pad with duplication if needed
  const gridImages = [...SCREENSHOTS];
  while (gridImages.length < 6) gridImages.push(gridImages[gridImages.length % SCREENSHOTS.length]);

  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.className = 'bg-img';
    if (index === 0) img.classList.add('active');
    img.src = src;
    img.draggable = false;
    img.oncontextmenu = () => false;
    container.appendChild(img);
    imgElements.push(img);
  });

  // Block right-click on the container too
  container.oncontextmenu = (e) => { e.preventDefault(); return false; };

  let currentBgIndex = 0;
  let intervalId = null;

  function setBackgroundLayout() {
    const windowRatio = window.innerWidth / window.innerHeight;
    // Check if the aspect ratio is roughly wide enough for a single image, e.g. > 1.2
    if (windowRatio > 1.2) {
      container.classList.remove('grid-layout');
      // Ensure all images are available for cycling
      imgElements.forEach(img => {
        img.style.position = 'absolute';
      });
      if (!intervalId) {
        intervalId = setInterval(() => {
          imgElements[currentBgIndex].classList.remove('active');
          currentBgIndex = (currentBgIndex + 1) % imgElements.length;
          imgElements[currentBgIndex].classList.add('active');
        }, 4000); // Change image every 3 seconds
      }
    } else {
      // Fallback to grid of multiple images
      container.classList.add('grid-layout');
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      // Update DOM to show 6 images for grid
      container.innerHTML = '';
      gridImages.slice(0, 6).forEach(src => {
        const img = document.createElement('img');
        img.className = 'bg-img grid-item';
        img.src = src;
        img.draggable = false;
        img.oncontextmenu = () => false;
        container.appendChild(img);
      });
    }
  }

  // Initial setup and listener on resize
  setBackgroundLayout();
  window.addEventListener('resize', () => {
    // Re-initialize for simplicity if returning to single view
    if (container.classList.contains('grid-layout') && (window.innerWidth / window.innerHeight) > 1.2) {
      container.innerHTML = '';
      imgElements.length = 0;

      images.forEach((src, index) => {
        const img = document.createElement('img');
        img.className = 'bg-img';
        img.src = src;
        img.draggable = false;
        img.oncontextmenu = () => false;
        container.appendChild(img);
        imgElements.push(img);
      });
      currentBgIndex = 0;
      imgElements[currentBgIndex].classList.add('active');
    }
    setBackgroundLayout();
  });

})();

// ── AUDIO ENGINE ──────────────────────────────────────────────────
let audioCtx = null;
let masterGain = null;
let audioStarted = false;

// ── CALMING AMBIENT PAD ───────────────────────────────────────────
// Built from sine waves tuned to a warm Cmaj7 → Fmaj9 floating chord
// with slow chorus detuning and reverb via convolver impulse

function buildAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  masterGain = audioCtx.createGain();
  masterGain.gain.value = volume;
  masterGain.connect(audioCtx.destination);

  // ── Reverb (synthetic impulse response) ──────────────────────────
  const reverbLen = audioCtx.sampleRate * 3.5;
  const impulse = audioCtx.createBuffer(2, reverbLen, audioCtx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const ch = impulse.getChannelData(c);
    for (let i = 0; i < reverbLen; i++) {
      ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / reverbLen, 2.2);
    }
  }
  const convolver = audioCtx.createConvolver();
  convolver.buffer = impulse;

  const reverbGain = audioCtx.createGain();
  reverbGain.gain.value = 0.45;
  convolver.connect(reverbGain);
  reverbGain.connect(masterGain);

  // ── Pad voices — Cmaj7 spread across octaves ─────────────────────
  // C2, G2, E3, B3, G4, D5  → lush, open, non-dissonant
  const notes = [65.41, 98, 164.81, 246.94, 392, 587.33];
  const detunes = [0, 3, -4, 5, -2, 6];
  const gains = [0.22, 0.18, 0.16, 0.12, 0.09, 0.06];

  notes.forEach((freq, i) => {
    // Main voice
    const osc = audioCtx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.detune.value = detunes[i];

    // Subtle chorus twin slightly detuned
    const osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = freq;
    osc2.detune.value = detunes[i] - 8;

    const g = audioCtx.createGain();
    g.gain.value = gains[i];

    osc.connect(g);
    osc2.connect(g);
    g.connect(masterGain);
    g.connect(convolver); // send to reverb too

    osc.start();
    osc2.start();
  });

  // ── Very slow volume breathing LFO (7s cycle) ────────────────────
  const lfo = audioCtx.createOscillator();
  const lfoAmt = audioCtx.createGain();
  lfo.frequency.value = 1 / 7;
  lfoAmt.gain.value = 0.04;
  lfo.connect(lfoAmt);
  lfoAmt.connect(masterGain.gain);
  lfo.start();

  // ── Gentle high-frequency shimmer (triangle at 5th harmonic) ─────
  const shimmer = audioCtx.createOscillator();
  const shimGain = audioCtx.createGain();
  shimmer.type = 'triangle';
  shimmer.frequency.value = 1318.5; // E6
  shimGain.gain.value = 0.018;
  shimmer.connect(shimGain);
  shimGain.connect(convolver);
  shimmer.start();

  audioStarted = true;
}

// ── TV STATIC BURST on channel switch ────────────────────────────
function playStaticBurst() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const dur = 1.1; // longer burst

  // ── Layer 1: main white noise body ──────────────────────────────
  const bufLen = Math.floor(audioCtx.sampleRate * dur);
  const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;

  const src = audioCtx.createBufferSource();
  src.buffer = buf;

  // Bandpass centred at TV static crackle range
  const bp = audioCtx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 1800;
  bp.Q.value = 0.5;

  // Envelope: snap in, hold dirty, then fade
  const env = audioCtx.createGain();
  env.gain.setValueAtTime(0, t);
  env.gain.linearRampToValueAtTime(volume * 1.0, t + 0.015);
  env.gain.setValueAtTime(volume * 0.85, t + 0.12);
  env.gain.linearRampToValueAtTime(volume * 0.6, t + 0.45);
  env.gain.exponentialRampToValueAtTime(0.0001, t + dur);

  src.connect(bp); bp.connect(env); env.connect(audioCtx.destination);
  src.start(t); src.stop(t + dur + 0.05);

  // ── Layer 2: high-freq scratch (3–6kHz) — the "fingernail" ──────
  const scratchBuf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
  const sd = scratchBuf.getChannelData(0);
  for (let i = 0; i < bufLen; i++) {
    // Clipped noise for harsher texture
    sd[i] = Math.max(-0.6, Math.min(0.6, (Math.random() * 2 - 1) * 2.5));
  }
  const src2 = audioCtx.createBufferSource();
  src2.buffer = scratchBuf;

  const hp = audioCtx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 3200;
  hp.Q.value = 1.2;

  const env2 = audioCtx.createGain();
  env2.gain.setValueAtTime(0, t);
  env2.gain.linearRampToValueAtTime(volume * 0.55, t + 0.02);
  env2.gain.setValueAtTime(volume * 0.4, t + 0.15);
  env2.gain.exponentialRampToValueAtTime(volume * 0.15, t + 0.6);
  env2.gain.exponentialRampToValueAtTime(0.0001, t + dur);

  src2.connect(hp); hp.connect(env2); env2.connect(audioCtx.destination);
  src2.start(t); src2.stop(t + dur + 0.05);

  // ── Layer 3: low thump on the cut-in (like a CRT deflection) ────
  const thumpOsc = audioCtx.createOscillator();
  thumpOsc.type = 'sine';
  thumpOsc.frequency.setValueAtTime(120, t);
  thumpOsc.frequency.exponentialRampToValueAtTime(35, t + 0.18);

  const thumpEnv = audioCtx.createGain();
  thumpEnv.gain.setValueAtTime(volume * 0.5, t);
  thumpEnv.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);

  thumpOsc.connect(thumpEnv); thumpEnv.connect(audioCtx.destination);
  thumpOsc.start(t); thumpOsc.stop(t + 0.22);

  // ── Layer 4: intermittent crackle pops scattered through the burst
  const popCount = 6;
  for (let p = 0; p < popCount; p++) {
    const popT = t + 0.06 + (p / popCount) * (dur - 0.15) + (Math.random() * 0.08);
    const popBuf = audioCtx.createBuffer(1, Math.floor(audioCtx.sampleRate * 0.03), audioCtx.sampleRate);
    const pd = popBuf.getChannelData(0);
    for (let i = 0; i < pd.length; i++) pd[i] = Math.random() * 2 - 1;

    const popSrc = audioCtx.createBufferSource();
    popSrc.buffer = popBuf;

    const popBP = audioCtx.createBiquadFilter();
    popBP.type = 'peaking';
    popBP.frequency.value = 1000 + Math.random() * 3000;
    popBP.gain.value = 12;

    const popEnv = audioCtx.createGain();
    popEnv.gain.setValueAtTime(volume * (0.4 + Math.random() * 0.4), popT);
    popEnv.gain.exponentialRampToValueAtTime(0.0001, popT + 0.03);

    popSrc.connect(popBP); popBP.connect(popEnv); popEnv.connect(audioCtx.destination);
    popSrc.start(popT); popSrc.stop(popT + 0.04);
  }
}

// ── VOLUME KNOB DRAG ──────────────────────────────────────────────
const volKnob = document.getElementById('volKnob');
const volTick = document.getElementById('volTick');
const volFeedback = document.getElementById('volFeedback');
const volPct = document.getElementById('volPct');
const volArcBg = document.getElementById('volArcBg');
const volArcFill = document.getElementById('volArcFill');

// Volume in [0,1], starting at 60%
let volume = 0.6;
// Knob rotation: map [0,1] → [-135°, +135°]
const MIN_DEG = -135;
const MAX_DEG = 135;

let knobDragging = false;
let knobStartY = 0;
let knobStartVol = 0;
let hideTimer = null;

function volToDeg(v) { return MIN_DEG + v * (MAX_DEG - MIN_DEG); }

function describeArc(cx, cy, r, startDeg, endDeg) {
  function polar(deg) {
    const rad = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  }
  const [sx, sy] = polar(startDeg);
  const [ex, ey] = polar(endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${sx} ${sy} A ${r} ${r} 0 ${large} 1 ${ex} ${ey}`;
}

function handleWinDownload(e) {
  e.preventDefault();
  const url = e.currentTarget.href;
  // trigger browser download
  const a = document.createElement('a');
  a.href = url;
  a.download = '';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // show instructions in the tv overlay
  if (CONTENT.WinInstructions) {
    overlay.innerHTML = CONTENT.WinInstructions;
  }
}

function updateVolUI() {
  const deg = volToDeg(volume);
  volTick.style.transform = `translateX(-50%) rotate(${deg}deg)`;

  // Arc svg (cx=35, cy=35, r=28)
  const bgPath = describeArc(35, 35, 28, MIN_DEG + 90, MAX_DEG + 90);
  const fillEnd = MIN_DEG + volume * (MAX_DEG - MIN_DEG);
  const fillPath = volume > 0.005 ? describeArc(35, 35, 28, MIN_DEG + 90, fillEnd + 90) : '';
  volArcBg.setAttribute('d', bgPath);
  volArcFill.setAttribute('d', fillPath);

  volPct.textContent = Math.round(volume * 100);

  if (masterGain) {
    // when the knob is at zero we treat it as a mute and snap gain to 0 immediately
    if (volume <= 0) {
      masterGain.gain.setValueAtTime(0, audioCtx.currentTime);
    } else {
      masterGain.gain.setTargetAtTime(volume, audioCtx.currentTime, 0.05);
    }
  }
}

function showVolFeedback() {
  volFeedback.classList.add('visible');
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => volFeedback.classList.remove('visible'), 1200);
}

volKnob.addEventListener('mousedown', e => {
  // Start audio on first interaction
  if (!audioStarted) buildAudio();
  knobDragging = true;
  knobStartY = e.clientY;
  knobStartVol = volume;
  e.preventDefault();
});

volKnob.addEventListener('touchstart', e => {
  if (!audioStarted) buildAudio();
  knobDragging = true;
  knobStartY = e.touches[0].clientY;
  knobStartVol = volume;
  e.preventDefault();
}, { passive: false });

document.addEventListener('mousemove', e => {
  if (!knobDragging) return;
  const dy = knobStartY - e.clientY; // drag up = louder
  volume = Math.max(0, Math.min(1, knobStartVol + dy / 120));
  updateVolUI();
  showVolFeedback();
});

document.addEventListener('touchmove', e => {
  if (!knobDragging) return;
  const dy = knobStartY - e.touches[0].clientY;
  volume = Math.max(0, Math.min(1, knobStartVol + dy / 120));
  updateVolUI();
  showVolFeedback();
}, { passive: false });

document.addEventListener('mouseup', () => { knobDragging = false; });
document.addEventListener('touchend', () => { knobDragging = false; });

// Also start audio on any click on screen (browser autoplay policy)
document.addEventListener('click', () => { if (!audioStarted) buildAudio(); }, { once: true });

// Init tick position
updateVolUI();

// ── BRIGHTNESS KNOB ───────────────────────────────────────────────
const briKnob = document.getElementById('briKnob');
const briTick = document.getElementById('briTick');
const briFeedback = document.getElementById('briFeedback');
const briPct = document.getElementById('briPct');
const briArcBg = document.getElementById('briArcBg');
const briArcFill = document.getElementById('briArcFill');
const tvBezel = document.querySelector('.tv-bezel');

let brightness = 0.8; // 0 → 1, starting at 80%
let briDragging = false;
let briStartY = 0;
let briStartVal = 0;
let briHideTimer = null;

function updateBriUI() {
  const deg = MIN_DEG + brightness * (MAX_DEG - MIN_DEG);
  briTick.style.transform = `translateX(-50%) rotate(${deg}deg)`;

  const bgPath = describeArc(35, 35, 28, MIN_DEG + 90, MAX_DEG + 90);
  const fillEnd = MIN_DEG + brightness * (MAX_DEG - MIN_DEG);
  const fillPath = brightness > 0.005 ? describeArc(35, 35, 28, MIN_DEG + 90, fillEnd + 90) : '';
  briArcBg.setAttribute('d', bgPath);
  briArcFill.setAttribute('d', fillPath);

  briPct.textContent = Math.round(brightness * 100);

  // Map 0–1 → brightness(0.05) to brightness(1.6) for a dramatic range
  const bri = 0.05 + brightness * 1.55;
  tvBezel.style.filter = `brightness(${bri})`;
}

function showBriFeedback() {
  briFeedback.classList.add('visible');
  clearTimeout(briHideTimer);
  briHideTimer = setTimeout(() => briFeedback.classList.remove('visible'), 1200);
}

briKnob.addEventListener('mousedown', e => {
  briDragging = true;
  briStartY = e.clientY;
  briStartVal = brightness;
  e.preventDefault();
});

briKnob.addEventListener('touchstart', e => {
  briDragging = true;
  briStartY = e.touches[0].clientY;
  briStartVal = brightness;
  e.preventDefault();
}, { passive: false });

document.addEventListener('mousemove', e => {
  if (!briDragging) return;
  const dy = briStartY - e.clientY;
  brightness = Math.max(0, Math.min(1, briStartVal + dy / 120));
  updateBriUI();
  showBriFeedback();
});

document.addEventListener('touchmove', e => {
  if (!briDragging) return;
  const dy = briStartY - e.touches[0].clientY;
  brightness = Math.max(0, Math.min(1, briStartVal + dy / 120));
  updateBriUI();
  showBriFeedback();
}, { passive: false });

document.addEventListener('mouseup', () => { briDragging = false; });
document.addEventListener('touchend', () => { briDragging = false; });

updateBriUI();
