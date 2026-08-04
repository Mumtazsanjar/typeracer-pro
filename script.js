/* ============================================
   TypeRacer Pro – Main Script
   ============================================ */

// ══════════════════════════════════════════
// THEME TOGGLE (Dark / Light)
// ══════════════════════════════════════════
const $html       = document.documentElement;
const $themeToggle = document.getElementById('theme-toggle');
const $themeIcon   = document.getElementById('theme-icon');

// Load saved theme
const savedTheme = localStorage.getItem('typeracer_theme') || 'dark';
setTheme(savedTheme);

function setTheme(theme) {
  $html.setAttribute('data-theme', theme);
  $themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
  localStorage.setItem('typeracer_theme', theme);
}

$themeToggle.addEventListener('click', () => {
  const current = $html.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// ══════════════════════════════════════════
// NAVIGATION / PAGE ROUTING
// ══════════════════════════════════════════
const pages = ['home', 'test', 'about', 'privacy'];

function navigateTo(pageName) {
  if (!pages.includes(pageName)) return;

  // Hide all pages
  pages.forEach(p => {
    document.getElementById('page-' + p).classList.remove('active');
  });
  // Show target page
  document.getElementById('page-' + pageName).classList.add('active');

  // Update nav link states – desktop
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageName);
  });
  // Update nav link states – mobile
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageName);
  });

  // If switching to test page, focus the input
  if (pageName === 'test') {
    setTimeout(() => {
      if (!state.isFinished) $input.focus();
    }, 100);
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Close mobile menu
  closeMobileMenu();
}

// Attach nav link clicks – desktop
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navigateTo(link.dataset.page));
});
// Attach nav link clicks – mobile
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => navigateTo(link.dataset.page));
});
// Logo
document.querySelector('.nav-logo').addEventListener('click', () => navigateTo('home'));
// Footer links (old class — kept for safety)
document.querySelectorAll('.footer-links a').forEach(link => {
  link.addEventListener('click', () => navigateTo(link.dataset.page));
});
// Footer nav columns (new footer structure)
document.querySelectorAll('.footer-nav-col a[data-page]').forEach(link => {
  link.addEventListener('click', () => navigateTo(link.dataset.page));
});
// Footer bottom links
document.querySelectorAll('.footer-bottom-links a[data-page]').forEach(link => {
  link.addEventListener('click', () => navigateTo(link.dataset.page));
});
// Buttons with data-page attribute (hero CTAs, about CTA, etc.)
document.querySelectorAll('[data-page]').forEach(el => {
  if (el.tagName === 'BUTTON') {
    el.addEventListener('click', () => navigateTo(el.dataset.page));
  }
});

// ══════════════════════════════════════════
// HAMBURGER MENU
// ══════════════════════════════════════════
const $hamburger   = document.getElementById('hamburger');
const $mobileMenu  = document.getElementById('mobile-menu');

$hamburger.addEventListener('click', () => {
  const isOpen = $mobileMenu.classList.toggle('open');
  $hamburger.classList.toggle('open', isOpen);
});

function closeMobileMenu() {
  $mobileMenu.classList.remove('open');
  $hamburger.classList.remove('open');
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!$hamburger.contains(e.target) && !$mobileMenu.contains(e.target)) {
    closeMobileMenu();
  }
});

// ══════════════════════════════════════════
// TYPING TEST
// ══════════════════════════════════════════

// ── Text Libraries by Difficulty
const textLibraries = {
  easy: [
    "the cat sat on the mat and looked at the big red ball near the door",
    "she ran to the bus stop and got on just in time to see the sun rise",
    "he ate the hot soup and drank cold milk while the dog slept by the fire",
    "the old man sat by the sea and watched the waves roll in all day long",
    "my dog likes to run and play in the yard when the sun is out and warm",
    "it was a good day to walk in the park and feed the ducks by the pond",
    "the kids ate cake and ice cream at the party and had a lot of fun there",
    "she put her coat and bag by the door so she would not be late for work",
    "the big red truck drove past our house and made a very loud noise",
    "he took his dog for a long walk in the park and then came back for lunch",
    "they sat by the fire and told old tales till the stars came out at night",
    "the sun set over the hill and the sky turned pink and gold and red",
    "she made a cup of hot tea and sat down to read her new book by the fire",
    "the boy drew a big blue fish and showed it to all his friends at school",
    "he picked up the box and put it on the high shelf by the back wall",
    "the girl held her red bag and walked fast down the long and busy road",
    "he woke up late and had to run to catch the last bus on the cold wet day",
    "the small bird sat on the top branch and sang a sweet song all morning",
    "she cut the cake and gave a big piece to each of her four happy friends",
    "the wind blew hard and sent all the dry leaves up into the cold dark sky",
    "he fed the dog and filled its bowl with cold clean water from the tap",
    "the boat moved slow on the wide calm lake under the bright warm sun",
    "she drew a red house with a blue roof and a big tree next to the door",
    "the little cat hid under the bed and would not come out for a long time",
    "he put the cold milk and the ripe fruit on the table for his kids to eat",
    "the old clock on the wall made a loud tick every time the hand moved",
    "she sat by the open window and felt the cool soft wind on her warm face",
    "the man drove his old car down the long dirt road to the far blue hills",
    "the dog ran fast to fetch the stick and dropped it at the old mans feet",
    "she tied her long hair back and went out into the bright cool morning air",
  ],
  medium: [
    "Programming is the art of telling a computer what to do with precise and logical instructions.",
    "The best way to learn a new skill is to practice it every day with full focus and dedication.",
    "Technology connects people across the world and helps solve problems that once seemed impossible.",
    "Reading books every day expands your vocabulary, sharpens your mind, and builds your imagination.",
    "Every great journey starts with a single step taken in the right direction with courage and hope.",
    "Success comes to those who work hard, stay consistent, and never give up on their goals.",
    "A good night of sleep improves memory, focus, and mood more than most people realize.",
    "Learning to type faster saves hours every week and makes you far more productive at work.",
    "Creativity is not about talent alone; it is about curiosity, practice, and the willingness to fail.",
    "The secret to good writing is simple: write clearly, cut the extra words, and say what you mean.",
    "Great software is built by teams that communicate well, review each other's work, and stay humble.",
    "Staying healthy requires regular exercise, good food, enough sleep, and a positive mindset.",
    "The most valuable skill in any career is the ability to solve problems clearly and calmly.",
    "Typing speed improves quickly when you focus on accuracy first and then gradually build up pace.",
    "Design is not just how something looks; it is how something works and how it makes you feel.",
    "A clean and organized workspace helps you think more clearly and work more efficiently each day.",
    "The internet has changed the way we learn, communicate, shop, and interact with the world.",
    "Setting small daily goals is one of the most effective ways to make steady and lasting progress.",
    "A strong team is built on trust, clear communication, and a shared commitment to the same goal.",
    "Music has the power to change your mood, boost your focus, and bring back old memories.",
    "The key to a good presentation is knowing your audience and keeping your message short and clear.",
    "Spending time in nature reduces stress, clears your mind, and gives you a fresh perspective.",
    "Every mistake you make is a lesson that brings you one step closer to doing it the right way.",
    "Having a clear morning routine sets a positive tone and helps you start the day with energy.",
    "Learning a second language opens new doors and helps you connect with people from other cultures.",
    "Good leaders listen more than they speak and always consider the needs of their whole team.",
    "Regular breaks during long work sessions actually improve your focus and overall productivity.",
    "Keeping a daily journal helps you track your thoughts, reflect on your progress, and set goals.",
    "The ability to focus deeply on one task at a time is becoming one of the rarest and most valuable skills.",
    "Curiosity is the engine of achievement; the more questions you ask, the more you will learn.",
  ],
  hard: [
    "Asynchronous programming in JavaScript requires a thorough understanding of Promises, async/await syntax, and the event loop mechanism.",
    "Polymorphism, encapsulation, and inheritance are three fundamental pillars of object-oriented programming that every developer must master.",
    "The Byzantine Generals Problem illustrates the core challenge of achieving consensus in distributed systems where nodes may fail or act maliciously.",
    "Refactoring legacy codebases demands patience, comprehensive test coverage, incremental changes, and meticulous documentation of every architectural decision.",
    "Quantum entanglement demonstrates that two particles can instantaneously affect each other regardless of the distance separating them in spacetime.",
    "The dichotomic relationship between computational complexity and algorithmic efficiency defines the boundaries of what problems are practically solvable.",
    "Implementing a balanced binary search tree requires careful attention to rotation algorithms, height balancing, and edge case management.",
    "Cryptographic hash functions must satisfy collision resistance, preimage resistance, and second preimage resistance to be considered secure.",
    "The observer pattern decouples the subject from its dependents, enabling flexible event-driven architectures in large-scale applications.",
    "Microservices architecture introduces significant operational complexity including service discovery, distributed tracing, and eventual consistency challenges.",
    "Regular expressions provide a powerful and concise syntax for pattern matching but can become catastrophically slow with backtracking on certain inputs.",
    "The CAP theorem states that a distributed system cannot simultaneously guarantee consistency, availability, and partition tolerance at all times.",
    "Memoization optimizes recursive algorithms by caching previously computed results, trading memory consumption for significantly reduced time complexity.",
    "Dependency injection inverts the control of object creation, promoting loose coupling, testability, and adherence to the single responsibility principle.",
    "The Liskov Substitution Principle requires that objects of a subclass must be replaceable with objects of the superclass without breaking functionality.",
    "Tail call optimization allows certain recursive functions to execute in constant stack space, preventing stack overflow in deeply recursive programs.",
    "Event sourcing persists application state as an immutable sequence of domain events, enabling full audit trails and temporal query capabilities.",
    "The halting problem proves that no algorithm can universally determine whether an arbitrary program will terminate or run forever on a given input.",
    "Concurrency bugs such as race conditions and deadlocks are notoriously difficult to reproduce and require careful synchronization of shared mutable state.",
    "Functional programming emphasizes pure functions, immutability, and higher-order abstractions to produce more predictable and testable software systems.",
    "Vectorized operations in NumPy leverage SIMD processor instructions to perform bulk array computations significantly faster than equivalent Python loops.",
    "Content delivery networks cache static assets at geographically distributed edge nodes to minimize latency and reduce origin server load globally.",
    "The facade pattern provides a simplified interface to a complex subsystem, reducing the cognitive overhead for clients interacting with that subsystem.",
    "Gradient descent iteratively adjusts model parameters in the direction that minimizes the loss function, forming the backbone of most machine learning training.",
    "Infrastructure as code tools like Terraform enable reproducible environment provisioning by expressing infrastructure topology in declarative configuration files.",
    "Zero-knowledge proofs allow one party to convince another that a statement is true without revealing any information beyond the validity of the claim itself.",
    "Domain-driven design advocates modeling software around the core business domain, using bounded contexts to isolate and manage complex domain logic.",
    "The actor model treats concurrent computation as a collection of isolated actors that communicate exclusively through asynchronous message passing.",
    "Bloom filters provide probabilistic set membership testing with a controllable false-positive rate, using significantly less memory than exact data structures.",
    "Static analysis tools examine source code without executing it, detecting potential bugs, security vulnerabilities, and style violations at compile time.",
  ],
};

// ── State Object
let state = {
  currentText: '',
  words: [],
  currentWordIndex: 0,
  currentLetterIndex: 0,
  correctWords: 0,
  incorrectWords: 0,
  totalKeystrokes: 0,
  correctKeystrokes: 0,
  isRunning: false,
  isFinished: false,
  timer: 30,
  selectedTime: 30,
  intervalId: null,
  streak: 0,
  difficulty: 'easy',
  history: JSON.parse(localStorage.getItem('typeracer_history') || '[]'),
  usedTexts: { easy: [], medium: [], hard: [] },
};

// ── DOM References
const $textDisplay   = document.getElementById('text-display');
const $input         = document.getElementById('typing-input');
const $wpm           = document.getElementById('wpm');
const $accuracy      = document.getElementById('accuracy');
const $timerEl       = document.getElementById('timer');
const $streak        = document.getElementById('streak');
const $progressBar   = document.getElementById('progress-bar');
const $progressLabel = document.getElementById('progress-label');
const $modalOverlay  = document.getElementById('modal-overlay');
const $finalWpm      = document.getElementById('final-wpm');
const $finalAccuracy = document.getElementById('final-accuracy');
const $finalCorrect  = document.getElementById('final-correct');
const $finalErrors   = document.getElementById('final-errors');
const $ratingBadge   = document.getElementById('rating-badge');
const $ratingMessage = document.getElementById('rating-message');
const $historyList   = document.getElementById('history-list');

// ── Init Test
function init(newText = true) {
  clearInterval(state.intervalId);
  state.intervalId = null;

  if (newText) {
    state.currentText = getRandomText();
    state.words       = state.currentText.split(' ');
  }

  state.currentWordIndex   = 0;
  state.currentLetterIndex = 0;
  state.correctWords       = 0;
  state.incorrectWords     = 0;
  state.totalKeystrokes    = 0;
  state.correctKeystrokes  = 0;
  state.isRunning          = false;
  state.isFinished         = false;
  state.timer              = state.selectedTime;
  state.streak             = 0;

  $wpm.textContent             = '0';
  $accuracy.textContent        = '100';
  $timerEl.textContent         = state.selectedTime;
  $streak.textContent          = '0';
  $progressBar.style.width     = '0%';
  $progressLabel.textContent   = '0%';
  $input.value                 = '';
  $input.disabled              = false;
  $input.classList.remove('error');
  $timerEl.classList.remove('timer-warning', 'timer-danger');
  document.getElementById('timer-card').classList.add('timer-highlight');

  renderText();
  $input.focus();
}

// ── Pick random text (no repeats until all used)
function getRandomText() {
  const lib   = textLibraries[state.difficulty];
  let available = lib.filter(t => !state.usedTexts[state.difficulty].includes(t));
  if (available.length === 0) { state.usedTexts[state.difficulty] = []; available = lib; }
  const text = available[Math.floor(Math.random() * available.length)];
  state.usedTexts[state.difficulty].push(text);
  return text;
}

// ── Render words/letters into display div
function renderText() {
  $textDisplay.innerHTML = '';
  state.words.forEach((word, wi) => {
    const wordEl = document.createElement('span');
    wordEl.classList.add('word');
    wordEl.dataset.index = wi;

    [...word].forEach((char, li) => {
      const el = document.createElement('span');
      el.classList.add('letter');
      el.textContent = char;
      if (wi === 0 && li === 0) el.classList.add('current');
      wordEl.appendChild(el);
    });

    $textDisplay.appendChild(wordEl);

    // Space between words
    if (wi < state.words.length - 1) {
      const sp = document.createElement('span');
      sp.classList.add('letter', 'space-letter');
      sp.textContent = ' ';
      wordEl.appendChild(sp);
    }
  });
}

// ── Update blinking cursor position
function updateCursor() {
  document.querySelectorAll('.letter.current').forEach(el => el.classList.remove('current'));
  const wordEl = $textDisplay.querySelector(`[data-index="${state.currentWordIndex}"]`);
  if (!wordEl) return;
  const letters = wordEl.querySelectorAll('.letter:not(.space-letter)');
  if (state.currentLetterIndex < letters.length) {
    letters[state.currentLetterIndex].classList.add('current');
  }
}

// ── Start countdown timer
function startTimer() {
  if (state.intervalId) return;
  state.isRunning = true;

  state.intervalId = setInterval(() => {
    state.timer--;
    $timerEl.textContent = state.timer;

    if (state.timer <= 10) {
      $timerEl.classList.add('timer-danger');
      $timerEl.classList.remove('timer-warning');
    } else if (state.timer <= 20) {
      $timerEl.classList.add('timer-warning');
    }

    pulseStat('timer-card');
    updateLiveStats();

    if (state.timer <= 0) endTest();
  }, 1000);
}

// ── Update WPM / Accuracy while running
function updateLiveStats() {
  const elapsed = state.selectedTime - state.timer;
  if (elapsed === 0) return;
  $wpm.textContent = Math.round((state.correctWords / elapsed) * 60);

  // Live accuracy = correct words out of all submitted words
  const totalSubmitted = state.correctWords + state.incorrectWords;
  $accuracy.textContent = totalSubmitted > 0
    ? Math.round((state.correctWords / totalSubmitted) * 100)
    : 100;
}

// ── Input Handler
// Mobile virtual keyboards don't reliably fire keydown for Space.
// So Space is detected in the 'input' event (works on all devices).
// keydown is only used for Tab (restart) and to block Backspace on empty input.

let _processingSpace = false;

$input.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && $input.value === '') { e.preventDefault(); return; }
  if (e.key === 'Tab') { e.preventDefault(); resetTest(); return; }
});

$input.addEventListener('input', () => {
  if (_processingSpace || state.isFinished) return;

  const typed = $input.value;

  // ── Space detected → submit current word
  if (typed.endsWith(' ') || typed.includes(' ')) {
    const word = typed.trim();

    // Don't submit if nothing typed yet
    if (word.length === 0) {
      _processingSpace = true;
      $input.value = '';
      _processingSpace = false;
      return;
    }

    // Start timer on first submission if not yet running
    if (!state.isRunning) startTimer();

    const current = state.words[state.currentWordIndex];

    if (word === current) {
      state.correctWords++;
      state.streak++;
      markWordCorrect(state.currentWordIndex);
    } else {
      state.incorrectWords++;
      state.streak = 0;
      markWordIncorrect(state.currentWordIndex, word);
      shakeInput();
    }

    $streak.textContent = state.streak;
    pulseStat('streak-card');

    state.currentWordIndex++;
    state.currentLetterIndex = 0;

    _processingSpace = true;
    $input.value = '';
    _processingSpace = false;

    const progress = Math.round((state.currentWordIndex / state.words.length) * 100);
    $progressBar.style.width   = progress + '%';
    $progressLabel.textContent = progress + '%';

    updateLiveStats();

    if (state.currentWordIndex >= state.words.length) { endTest(); return; }
    updateCursor();
    return;
  }

  // ── Normal typing → highlight letters live
  // Start timer on first keystroke
  if (!state.isRunning && typed.length > 0) startTimer();

  const current = state.words[state.currentWordIndex];
  highlightLetters(state.currentWordIndex, typed);

  state.currentLetterIndex = typed.length;
  updateCursor();
});

// ── Highlight each letter in current word
function highlightLetters(wordIndex, typed) {
  const wordEl = $textDisplay.querySelector(`[data-index="${wordIndex}"]`);
  if (!wordEl) return;
  const letters = wordEl.querySelectorAll('.letter:not(.space-letter)');
  letters.forEach((el, i) => {
    el.classList.remove('correct', 'incorrect', 'current');
    if (i < typed.length) {
      el.classList.add(typed[i] === el.textContent ? 'correct' : 'incorrect');
    }
  });
  if (typed.length < letters.length) letters[typed.length].classList.add('current');
}

function markWordCorrect(wordIndex) {
  const wordEl = $textDisplay.querySelector(`[data-index="${wordIndex}"]`);
  if (!wordEl) return;
  wordEl.querySelectorAll('.letter:not(.space-letter)').forEach(el => {
    el.classList.remove('current', 'incorrect');
    el.classList.add('correct');
  });
}

function markWordIncorrect(wordIndex, typedWord) {
  const wordEl = $textDisplay.querySelector(`[data-index="${wordIndex}"]`);
  if (!wordEl) return;
  const letters = wordEl.querySelectorAll('.letter:not(.space-letter)');
  letters.forEach((el, i) => {
    el.classList.remove('current');
    if (i < typedWord.length) {
      el.classList.add(typedWord[i] === el.textContent ? 'correct' : 'incorrect');
    } else {
      el.classList.add('incorrect');
    }
  });
}

function shakeInput() {
  $input.classList.add('error');
  setTimeout(() => $input.classList.remove('error'), 400);
}

function pulseStat(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  card.classList.remove('pulse');
  void card.offsetWidth;
  card.classList.add('pulse');
  setTimeout(() => card.classList.remove('pulse'), 400);
}

// ── End Test
function endTest() {
  clearInterval(state.intervalId);
  state.isRunning  = false;
  state.isFinished = true;
  $input.disabled  = true;

  const elapsed  = state.selectedTime - Math.max(state.timer, 0);
  const finalWpm = elapsed > 0 ? Math.round((state.correctWords / elapsed) * 60) : state.correctWords;

  // Accuracy = correct words out of all submitted words (correct + incorrect)
  const totalSubmitted = state.correctWords + state.incorrectWords;
  const finalAcc = totalSubmitted > 0
    ? Math.round((state.correctWords / totalSubmitted) * 100)
    : 100;

  $wpm.textContent           = finalWpm;
  $accuracy.textContent      = finalAcc;
  $progressBar.style.width   = '100%';
  $progressLabel.textContent = '100%';

  // Save FIRST so chart includes this result
  saveHistory(finalWpm, finalAcc);
  // Then show modal (chart reads from updated history)
  showResults(finalWpm, finalAcc);
}

// ── Show Results Modal
function showResults(wpm, acc) {
  $finalWpm.textContent      = wpm;
  $finalAccuracy.textContent = acc + '%';
  $finalCorrect.textContent  = state.correctWords;
  $finalErrors.textContent   = state.incorrectWords;

  const { label, message, cls } = getRating(wpm);
  $ratingBadge.textContent   = label;
  $ratingBadge.className     = 'rating-badge ' + cls;
  $ratingMessage.textContent = message;

  renderChart(wpm);
  $modalOverlay.classList.add('active');
}

function getRating(wpm) {
  if (wpm >= 100) return { label:'⚡ Expert',        cls:'expert',       message:"Incredible! You're in the top 1% of typists worldwide!" };
  if (wpm >=  70) return { label:'🚀 Professional',  cls:'professional', message:"Outstanding! You type faster than most professionals." };
  if (wpm >=  50) return { label:'🔥 Fast',           cls:'fast',         message:"Great speed! You're well above the average typist." };
  if (wpm >=  35) return { label:'✅ Good',           cls:'good',         message:"Good job! Slightly above average. Keep it up!" };
  if (wpm >=  20) return { label:'📈 Average',        cls:'average',      message:"Practice daily to push past the average." };
  return                  { label:'🌱 Beginner',      cls:'beginner',     message:"Everyone starts somewhere. Keep practicing!" };
}

// ── History
function saveHistory(wpm, acc) {
  const entry = {
    wpm, acc,
    correct: state.correctWords,
    errors:  state.incorrectWords,
    duration: state.selectedTime,
    diff: state.difficulty,
    date: new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }),
  };
  state.history.unshift(entry);
  if (state.history.length > 10) state.history.pop();
  localStorage.setItem('typeracer_history', JSON.stringify(state.history));
  renderHistory();
}

function renderHistory() {
  if (state.history.length === 0) {
    $historyList.innerHTML = '<p class="history-empty">No tests yet. Start typing above!</p>';
    return;
  }
  const diffColors = { easy:'#34d364', medium:'#fbbf24', hard:'#fc4b4b' };
  $historyList.innerHTML = state.history.map((e, i) => `
    <div class="history-item">
      <div class="history-meta">
        <span class="history-num">#${i + 1}</span>
        <span class="history-wpm">${e.wpm} WPM</span>
        ${e.diff ? `<span style="font-size:0.68rem;padding:2px 8px;border-radius:50px;background:${diffColors[e.diff]}22;color:${diffColors[e.diff]};border:1px solid ${diffColors[e.diff]}55;font-weight:600;text-transform:capitalize">${e.diff}</span>` : ''}
      </div>
      <div class="history-stats">
        <span class="history-stat">Accuracy: <strong>${e.acc}%</strong></span>
        <span class="history-stat">Correct: <strong>${e.correct}</strong></span>
        <span class="history-stat">Errors: <strong>${e.errors}</strong></span>
        <span class="history-stat">Time: <strong>${e.duration}s</strong></span>
      </div>
      <span class="history-time">${e.date}</span>
    </div>
  `).join('');
}

function resetTest(newText = false) {
  $modalOverlay.classList.remove('active');
  init(newText);
}

// ── Render WPM Bar Chart
// Layout identical to reference image:
//   [ zone-labels overlay | bars row | y-axis numbers overlay ]
// All overlays use absolute positioning inside .chart-bars
function renderChart(currentWpm) {
  const $bars = document.getElementById('chart-bars');
  if (!$bars) return;

  const recent  = state.history.slice(0, 6).reverse(); // oldest first
  const allWpms = recent.map(e => e.wpm);
  const ceiling = Math.ceil(Math.max(100, ...allWpms) / 20) * 20;

  $bars.innerHTML = '';

  // ── 1) DASHED ZONE LINES at 25, 45, 65 WPM (absolute, behind bars)
  [[25,'#f87171'],[45,'#fbbf24'],[65,'#818cf8']].forEach(([wpm, color]) => {
    const line = document.createElement('div');
    line.className = 'cz-line';
    line.style.cssText = `bottom:${(wpm/ceiling)*100}%;border-color:${color};`;
    $bars.appendChild(line);
  });

  // ── 2) ZONE LABELS on the left side (absolute, each centred in its band)
  [
    { label:'Slow',    bot:0,  top:25,     color:'#f87171' },
    { label:'Average', bot:25, top:45,     color:'#fbbf24' },
    { label:'Fast',    bot:45, top:65,     color:'#34d399' },
    { label:'Expert',  bot:65, top:ceiling,color:'#818cf8' },
  ].forEach(z => {
    const el = document.createElement('div');
    el.className   = 'cz-zlabel';
    el.textContent = z.label;
    el.style.cssText = `
      bottom:${(z.bot/ceiling)*100}%;
      height:${((z.top-z.bot)/ceiling)*100}%;
      color:${z.color};
    `;
    $bars.appendChild(el);
  });

  // ── 3) Y-AXIS NUMBERS on right side (absolute)
  [0, 25, 45, 65, ceiling].forEach(val => {
    const el = document.createElement('div');
    el.className   = 'cz-ynum';
    el.textContent = val;
    el.style.bottom = `${(val/ceiling)*100}%`;
    $bars.appendChild(el);
  });

  // ── 4) BAR COLUMNS ROW (flex, sits above overlays via z-index)
  const row = document.createElement('div');
  row.className = 'cz-row';
  $bars.appendChild(row);

  // Reference bar — Avg Typist (grey)
  row.appendChild(buildBar({ wpm:40, ceiling, isRef:true,  isCurrent:false, lbl:'Avg Typist' }));

  // History bars
  recent.forEach((entry, idx) => {
    row.appendChild(buildBar({
      wpm: entry.wpm, ceiling,
      isRef: false,
      isCurrent: idx === recent.length - 1,
      lbl: idx === recent.length - 1 ? '⬆ Now' : entry.date,
    }));
  });

  // Empty placeholder slots
  for (let i = 0; i < Math.max(0, 5 - recent.length); i++) {
    const w = document.createElement('div');
    w.className = 'cz-bar-wrap';
    w.innerHTML = `
      <div class="cz-val" style="opacity:.15">—</div>
      <div class="cz-col" style="background:var(--border);opacity:.12;border-radius:6px;flex:1"></div>
      <div class="cz-lbl" style="opacity:.15">—</div>`;
    row.appendChild(w);
  }
}

function buildBar({ wpm, ceiling, isRef, isCurrent, lbl }) {
  const pct = Math.max(2, Math.round((wpm / ceiling) * 100));

  const wrap = document.createElement('div');
  wrap.className = 'cz-bar-wrap' + (isCurrent ? ' cz-bar-now' : '');

  const val = document.createElement('div');
  val.className   = 'cz-val' + (isCurrent ? ' cz-val-now' : '');
  val.textContent = wpm;

  const col = document.createElement('div');
  col.className = 'cz-col' + (isCurrent ? ' cz-col-now' : '');

  const empty = document.createElement('div');
  empty.style.flex = String(100 - pct);
  empty.className  = isRef ? 'cz-ref-top' : 'cz-top';

  const filled = document.createElement('div');
  filled.style.flex = String(pct);
  filled.className  = isRef ? 'cz-ref-bot' : 'cz-bot' + (isCurrent ? ' cz-bot-now' : '');

  col.appendChild(empty);
  col.appendChild(filled);

  const label = document.createElement('div');
  label.className   = 'cz-lbl' + (isCurrent ? ' cz-lbl-now' : '');
  label.textContent = lbl;

  wrap.appendChild(val);
  wrap.appendChild(col);
  wrap.appendChild(label);
  return wrap;
}

// ── Event Listeners
document.querySelectorAll('.time-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.time-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.selectedTime = parseInt(tab.dataset.time);
    $timerEl.textContent = state.selectedTime;
    resetTest(false);
  });
});

// Difficulty tabs
const diffDescMap = {
  easy:   'Short, common words — great for beginners',
  medium: 'Sentences with moderate vocabulary',
  hard:   'Complex words and technical passages',
};
document.querySelectorAll('.diff-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.diff-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.difficulty = tab.dataset.diff;
    document.getElementById('diff-desc').textContent = diffDescMap[state.difficulty];
    resetTest(true); // load new text for chosen difficulty
  });
});

document.getElementById('restart-btn').addEventListener('click', () => resetTest(false));
document.getElementById('new-text-btn').addEventListener('click', () => resetTest(true));
document.getElementById('modal-restart-btn').addEventListener('click', () => resetTest(false));
document.getElementById('modal-new-btn').addEventListener('click', () => resetTest(true));
document.getElementById('modal-back-btn').addEventListener('click', () => {
  $modalOverlay.classList.remove('active');
  navigateTo('test');
});

$modalOverlay.addEventListener('click', (e) => {
  if (e.target === $modalOverlay) $modalOverlay.classList.remove('active');
});

document.getElementById('clear-history-btn').addEventListener('click', () => {
  state.history = [];
  localStorage.removeItem('typeracer_history');
  renderHistory();
});

document.getElementById('test-area-box').addEventListener('click', () => {
  if (!state.isFinished) $input.focus();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') $modalOverlay.classList.remove('active');
});

// ══════════════════════════════════════════
// FAQ ACCORDION
// ══════════════════════════════════════════
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // Close all other open items first
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      }
    });

    // Toggle current item
    if (isOpen) {
      btn.setAttribute('aria-expanded', 'false');
      item.classList.remove('open');
    } else {
      btn.setAttribute('aria-expanded', 'true');
      item.classList.add('open');
    }
  });

  // Remove hidden from all answers on init so CSS max-height controls visibility
  btn.closest('.faq-item').querySelector('.faq-a').removeAttribute('hidden');
});

// ══════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════
renderHistory();
init(true);