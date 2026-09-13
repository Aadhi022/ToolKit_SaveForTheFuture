/* ==========================================================
   TOOLKIT! — Application Script
   ========================================================== */

// ===================================================================
//  🔥 FIREBASE CONFIGURATION
// ===================================================================
const firebaseConfig = {
  apiKey: "AIzaSyC9Nn-hbqDsMqZcJLRCs4C_dL9LaFVxQUs",
  authDomain: "toolkit-saveforthefuture.firebaseapp.com",
  projectId: "toolkit-saveforthefuture",
  storageBucket: "toolkit-saveforthefuture.firebasestorage.app",
  messagingSenderId: "947006243658",
  appId: "1:947006243658:web:54025b6437efc1d89677b3"
};

// ===================================================================
//  Initialize Firebase
// ===================================================================
let auth, db;
let firebaseReady = false;

try {
  firebase.initializeApp(firebaseConfig);
  auth = firebase.auth();
  db   = firebase.firestore();
  db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
  firebaseReady = true;
} catch(err) {
  console.error('Firebase init error:', err);
}

// Timeout fallback
setTimeout(() => {
  const loadingEl = document.getElementById('authLoading');
  if(loadingEl && loadingEl.style.display !== 'none'){
    loadingEl.style.display = 'none';
    if(!firebaseReady){
      document.getElementById('configError').style.display = 'block';
    } else {
      document.getElementById('signInView').style.display = 'block';
    }
  }
}, 6000);

// ===================================================================
//  DOM REFS
// ===================================================================
const authEl         = document.getElementById('auth');
const authPanel      = document.getElementById('authPanel');
const authLoading    = document.getElementById('authLoading');
const configError    = document.getElementById('configError');
const signInView     = document.getElementById('signInView');
const signUpView     = document.getElementById('signUpView');
const signInIdInput  = document.getElementById('signInId');
const signInPwInput  = document.getElementById('signInPw');
const signInError    = document.getElementById('signInError');
const signUpIdInput  = document.getElementById('signUpId');
const signUpPwInput  = document.getElementById('signUpPw');
const signUpPwConfirmInput = document.getElementById('signUpPwConfirm');
const signUpError    = document.getElementById('signUpError');
const signUpSuccess  = document.getElementById('signUpSuccess');
const pwStrengthBar  = document.getElementById('pwStrength');
const pwStrengthLabel= document.getElementById('pwStrengthLabel');
const wrapEl         = document.getElementById('wrap');
const saveIndicator  = document.getElementById('saveIndicator');

// ===================================================================
//  ANIMATED BACKGROUND — Floating Particles & 3D Parallax
// ===================================================================
(function initParticles(){
  const container = document.getElementById('bgParticles');
  if(!container) return;
  const PARTICLE_COUNT = 30;
  for(let i = 0; i < PARTICLE_COUNT; i++){
    const p = document.createElement('div');
    p.className = 'bg-particle';
    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 15 + 10;
    const delay = Math.random() * 15;
    const left = Math.random() * 100;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      animation-duration:${duration}s;
      animation-delay:${delay}s;
      opacity:${Math.random() * 0.4 + 0.1};
    `;
    container.appendChild(p);
  }
})();

// Smooth 3D background parallax on cursor movement
(function init3DParallax(){
  const layer = document.getElementById('bgParallax');
  if(!layer) return;

  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', e => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    mouseX = (e.clientX - cx) / cx;
    mouseY = (e.clientY - cy) / cy;
  }, { passive: true });

  function render(){
    currentX += (mouseX - currentX) * 0.05;
    currentY += (mouseY - currentY) * 0.05;

    const moveX = currentX * 35;
    const moveY = currentY * 25;
    const rotX = currentY * -4;
    const rotY = currentX * 4;

    layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();

// ===================================================================
//  STARTER DATA
// ===================================================================
const DEFAULT_TOOLS = [
  { id: "t1",  name: "Claude",        url: "https://claude.ai",                 icon: "claude",           cat: "ai",       desc: "reasoning, writing, and building things with me" },
  { id: "t2",  name: "ChatGPT",       url: "https://chat.openai.com",           icon: "openai",           cat: "ai",       desc: "second opinion, quick sanity checks" },
  { id: "t3",  name: "GitHub",        url: "https://github.com",                icon: "github",           cat: "vcs",      desc: "repos, issues, pull requests" },
  { id: "t4",  name: "GitLab",        url: "https://gitlab.com",                icon: "gitlab",           cat: "vcs",      desc: "CI/CD pipelines and mirrors" },
  { id: "t5",  name: "VS Code",       url: "https://code.visualstudio.com",     icon: "visualstudiocode", cat: "editor",   desc: "daily driver editor" },
  { id: "t6",  name: "Stack Overflow",url: "https://stackoverflow.com",         icon: "stackoverflow",    cat: "ref",      desc: "someone already asked this" },
  { id: "t7",  name: "MDN Web Docs",  url: "https://developer.mozilla.org",     icon: "mdnwebdocs",       cat: "ref",      desc: "the actual source of truth for web APIs" },
  { id: "t8",  name: "DevDocs",       url: "https://devdocs.io",                icon: "devdocs",          cat: "ref",      desc: "every language's docs, one search bar" },
  { id: "t9",  name: "LeetCode",      url: "https://leetcode.com",              icon: "leetcode",         cat: "practice", desc: "DSA practice, interview prep" },
  { id: "t10", name: "Google Colab",  url: "https://colab.research.google.com", icon: "googlecolab",      cat: "practice", desc: "free GPU notebooks for quick experiments" },
  { id: "t11", name: "Figma",         url: "https://figma.com",                icon: "figma",            cat: "design",   desc: "UI mockups and prototypes" },
  { id: "t12", name: "Excalidraw",    url: "https://excalidraw.com",            icon: "excalidraw",       cat: "design",   desc: "quick system diagrams and whiteboarding" },
  { id: "t13", name: "Postman",       url: "https://postman.com",               icon: "postman",          cat: "backend",  desc: "testing APIs before the frontend exists" },
  { id: "t14", name: "Docker",        url: "https://docker.com",                icon: "docker",           cat: "backend",  desc: "containers so it works on every machine" },
  { id: "t15", name: "npm",           url: "https://npmjs.com",                 icon: "npm",              cat: "backend",  desc: "package registry for JS projects" },
  { id: "t16", name: "Vercel",        url: "https://vercel.com",               icon: "vercel",           cat: "deploy",   desc: "ship a frontend in a few clicks" },
  { id: "t17", name: "Notion",        url: "https://notion.so",                icon: "notion",           cat: "misc",     desc: "project notes and planning" },
  { id: "t18", name: "Regex101",      url: "https://regex101.com",              icon: "regex101",         cat: "misc",     desc: "build and debug regex without guessing" },
];
const DEFAULT_CATEGORIES = ["ai", "vcs", "editor", "ref", "practice", "design", "backend", "deploy", "misc"];

const COLORS = ["#ed1c24", "#0072ce", "#e8a600"];

let TOOLS = [];
let CATEGORIES = [];
let editingId = null;
let activeCat = 'all';
let currentUser = null;
let currentUserId = null;

// ===================================================================
//  HELPERS
// ===================================================================
function uid(){ return 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function iconUrl(slug){ return `https://cdn.simpleicons.org/${slug}/ffffff`; }

function isValidUserId(id){ return /^[a-zA-Z0-9_-]{3,20}$/.test(id); }

function shakePanel(){
  authPanel.classList.remove('shake');
  void authPanel.offsetWidth;
  authPanel.classList.add('shake');
}

// Password strength
function getPasswordStrength(pw){
  if(!pw) return { score:0, label:'', color:'transparent' };
  let score = 0;
  if(pw.length >= 6) score++;
  if(pw.length >= 10) score++;
  if(/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if(/[0-9]/.test(pw)) score++;
  if(/[^a-zA-Z0-9]/.test(pw)) score++;
  const levels = [
    { label:'', color:'transparent' },
    { label:'weak', color:'#ed1c24' },
    { label:'fair', color:'#e8a600' },
    { label:'good', color:'#0072ce' },
    { label:'strong', color:'#28a745' },
    { label:'excellent!', color:'#28a745' },
  ];
  return { score, ...levels[score] };
}

signUpPwInput.addEventListener('input', () => {
  const strength = getPasswordStrength(signUpPwInput.value);
  pwStrengthBar.style.width = `${(strength.score / 5) * 100}%`;
  pwStrengthBar.style.background = strength.color;
  pwStrengthLabel.textContent = strength.label;
  pwStrengthLabel.style.color = strength.color;
});

// Save indicator flash
let saveIndicatorTimeout;
function showSaveStatus(text, type){
  clearTimeout(saveIndicatorTimeout);
  saveIndicator.textContent = text;
  saveIndicator.className = 'save-indicator show ' + type;
  saveIndicatorTimeout = setTimeout(() => {
    saveIndicator.classList.remove('show');
  }, 2000);
}

// Firebase error messages
function authErrorMessage(code){
  const map = {
    'auth/email-already-in-use':  'that user ID is already taken — pick another!',
    'auth/user-not-found':        'no account with that ID. sign up first!',
    'auth/wrong-password':        'wrong password. try again, sidekick.',
    'auth/invalid-credential':    'wrong ID or password. try again!',
    'auth/weak-password':         'password too weak — need at least 6 characters.',
    'auth/too-many-requests':     'too many attempts — try again in a minute.',
    'auth/network-request-failed':'network error — check your connection.',
    'auth/invalid-email':         'invalid user ID format.',
  };
  return map[code] || 'something went wrong. try again.';
}

// ===================================================================
//  AUTH VIEW TOGGLES
// ===================================================================
document.getElementById('showSignUp').addEventListener('click', () => {
  signInView.style.display = 'none';
  signUpView.style.display = 'block';
  signUpError.textContent = '';
  signUpSuccess.textContent = '';
  signUpIdInput.focus();
});
document.getElementById('showSignIn').addEventListener('click', () => {
  signUpView.style.display = 'none';
  signInView.style.display = 'block';
  signInError.textContent = '';
  signInIdInput.focus();
});

// ===================================================================
//  SIGN UP
// ===================================================================
async function doSignUp(){
  signUpError.textContent = '';
  signUpSuccess.textContent = '';

  const userId = signUpIdInput.value.trim().toLowerCase();
  const pw = signUpPwInput.value;
  const pwConfirm = signUpPwConfirmInput.value;

  if(!userId || !pw){
    signUpError.textContent = 'fill in all fields, hero!';
    shakePanel(); return;
  }
  if(!isValidUserId(userId)){
    signUpError.textContent = 'user ID: 3–20 chars, letters/numbers/_/- only.';
    shakePanel(); return;
  }
  if(pw.length < 6){
    signUpError.textContent = 'password must be at least 6 characters.';
    shakePanel(); return;
  }
  if(pw !== pwConfirm){
    signUpError.textContent = 'passwords don\'t match!';
    shakePanel(); return;
  }

  const btn = document.getElementById('signUpBtn');
  btn.disabled = true;
  btn.textContent = 'CREATING...';

  try{
    const email = userId + '@toolkit.app';
    const cred = await auth.createUserWithEmailAndPassword(email, pw);

    await db.collection('toolkits').doc(cred.user.uid).set({
      userId: userId,
      tools: DEFAULT_TOOLS,
      categories: DEFAULT_CATEGORIES,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });

    signUpSuccess.textContent = `account "${userId}" created! signing you in...`;

    signUpIdInput.value = '';
    signUpPwInput.value = '';
    signUpPwConfirmInput.value = '';
    pwStrengthBar.style.width = '0';
    pwStrengthLabel.textContent = '';

  } catch(err){
    signUpError.textContent = authErrorMessage(err.code);
    shakePanel();
  } finally {
    btn.disabled = false;
    btn.textContent = 'CREATE ACCOUNT!';
  }
}

document.getElementById('signUpBtn').addEventListener('click', doSignUp);
signUpPwConfirmInput.addEventListener('keydown', e => { if(e.key === 'Enter') doSignUp(); });

// ===================================================================
//  SIGN IN
// ===================================================================
async function doSignIn(){
  signInError.textContent = '';

  const userId = signInIdInput.value.trim().toLowerCase();
  const pw = signInPwInput.value;

  if(!userId || !pw){
    signInError.textContent = 'enter your ID and password!';
    shakePanel(); return;
  }

  const btn = document.getElementById('signInBtn');
  btn.disabled = true;
  btn.textContent = 'SIGNING IN...';

  try{
    const email = userId + '@toolkit.app';
    await auth.signInWithEmailAndPassword(email, pw);
  } catch(err){
    signInError.textContent = authErrorMessage(err.code);
    signInPwInput.value = '';
    shakePanel();
  } finally {
    btn.disabled = false;
    btn.textContent = 'SIGN IN!';
  }
}

document.getElementById('signInBtn').addEventListener('click', doSignIn);
signInPwInput.addEventListener('keydown', e => { if(e.key === 'Enter') doSignIn(); });
signInIdInput.addEventListener('keydown', e => { if(e.key === 'Enter') signInPwInput.focus(); });

// ===================================================================
//  SIGN OUT
// ===================================================================
document.getElementById('signOutBtn').addEventListener('click', async () => {
  await auth.signOut();
});

// ===================================================================
//  FIRESTORE: LOAD & SAVE
// ===================================================================
async function loadUserData(firebaseUid){
  try{
    const doc = await db.collection('toolkits').doc(firebaseUid).get();
    if(doc.exists){
      const data = doc.data();
      TOOLS = data.tools || JSON.parse(JSON.stringify(DEFAULT_TOOLS));
      CATEGORIES = data.categories || JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
    } else {
      TOOLS = JSON.parse(JSON.stringify(DEFAULT_TOOLS));
      CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
      await saveToFirestore();
    }
  } catch(err){
    console.error('Error loading data:', err);
    TOOLS = JSON.parse(JSON.stringify(DEFAULT_TOOLS));
    CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
  }
}

let saveTimeout = null;
function scheduleSave(){
  if(saveTimeout) clearTimeout(saveTimeout);
  showSaveStatus('☁️ saving...', 'saving');
  saveTimeout = setTimeout(() => saveToFirestore(), 800);
}

async function saveToFirestore(){
  if(!currentUser) return;
  try{
    await db.collection('toolkits').doc(currentUser.uid).set({
      userId: currentUserId,
      tools: TOOLS,
      categories: CATEGORIES,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    showSaveStatus('✅ saved to cloud!', 'saved');
  } catch(err){
    console.error('Error saving:', err);
    showSaveStatus('❌ save failed', 'error');
  }
}

function saveTools(){ scheduleSave(); }
function saveCategories(){ scheduleSave(); }

// ===================================================================
//  AUTH STATE OBSERVER
// ===================================================================
function unlockApp(userId){
  currentUserId = userId;
  authEl.classList.add('hidden');
  wrapEl.classList.remove('locked');
  document.getElementById('userAvatar').textContent = userId.charAt(0).toUpperCase();
  document.getElementById('userNameDisplay').textContent = userId;
  activeCat = 'all';
  refresh();
}

function lockApp(){
  currentUser = null;
  currentUserId = null;
  TOOLS = [];
  CATEGORIES = [];
  authEl.classList.remove('hidden');
  wrapEl.classList.add('locked');
  authLoading.style.display = 'none';
  signInView.style.display = 'block';
  signUpView.style.display = 'none';
  signInIdInput.value = '';
  signInPwInput.value = '';
  signInError.textContent = '';
  signInIdInput.focus();
}

if(firebaseReady){
  auth.onAuthStateChanged(async (user) => {
    authLoading.style.display = 'none';
    if(user){
      currentUser = user;
      const userId = user.email.split('@')[0];
      await loadUserData(user.uid);
      unlockApp(userId);
    } else {
      lockApp();
    }
  });
} else {
  authLoading.style.display = 'none';
  configError.style.display = 'block';
}

// ===================================================================
//  RENDER FUNCTIONS
// ===================================================================
function iconMarkup(tool){
  const initial = (tool.name || '?').charAt(0).toUpperCase();
  if(tool.icon && tool.icon.trim().startsWith('http')){
    return `<img src="${tool.icon}" alt="" loading="lazy" onerror="this.parentElement.textContent='${initial}'">`;
  }
  if(tool.icon && tool.icon.trim()){
    return `<img src="${iconUrl(tool.icon.trim())}" alt="" loading="lazy" onerror="this.parentElement.textContent='${initial}'">`;
  }
  return initial;
}

function renderGrid(list){
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  if(list.length === 0){
    grid.innerHTML = '<div class="empty">no gadgets found — try another search or filter!</div>';
    return;
  }
  list.forEach((tool, i) => {
    const color = COLORS[i % COLORS.length];
    const card = document.createElement('a');
    card.className = 'card';
    card.style.setProperty('--card-color', color);
    // staggered entrance delay
    card.style.animationDelay = `${0.06 * i}s`;
    card.href = tool.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.innerHTML = `
      <div class="card-actions">
        <button type="button" class="icon-btn edit" title="edit">✏️</button>
        <button type="button" class="icon-btn del" title="delete">🗑</button>
      </div>
      <div class="pow">GO!</div>
      <div class="card-top">
        <div class="icon-box">${iconMarkup(tool)}</div>
      </div>
      <div class="name">${tool.name}</div>
      <div class="desc">${tool.desc || ''}</div>
      <div class="cat">${tool.cat || 'misc'}</div>
    `;

    // ---- 3D tilt effect on mousemove ----
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px) scale(1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });

    card.querySelector('.edit').addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      openModal(tool);
    });
    card.querySelector('.del').addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      if(confirm(`Remove "${tool.name}" from the toolkit?`)){
        TOOLS = TOOLS.filter(t => t.id !== tool.id);
        saveTools();
        refresh();
      }
    });
    grid.appendChild(card);
  });
}

function renderTags(){
  const tagsEl = document.getElementById('tags');
  tagsEl.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.type = 'button';
  allBtn.className = 'tag' + (activeCat === 'all' ? ' active' : '');
  allBtn.textContent = 'all';
  allBtn.addEventListener('click', () => { activeCat = 'all'; renderTags(); applyFilters(); });
  tagsEl.appendChild(allBtn);

  CATEGORIES.forEach(cat => {
    const wrap = document.createElement('span');
    wrap.className = 'tag-wrap';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tag' + (activeCat === cat ? ' active' : '');
    btn.textContent = cat;
    btn.addEventListener('click', () => { activeCat = cat; renderTags(); applyFilters(); });

    const x = document.createElement('span');
    x.className = 'tag-x';
    x.textContent = '×';
    x.title = 'remove this filter';
    x.addEventListener('click', e => {
      e.stopPropagation();
      const inUse = TOOLS.filter(t => t.cat === cat).length;
      const msg = inUse
        ? `Remove filter "${cat}"? ${inUse} tool(s) using it will move to "misc".`
        : `Remove filter "${cat}"?`;
      if(!confirm(msg)) return;
      CATEGORIES = CATEGORIES.filter(c => c !== cat);
      if(!CATEGORIES.includes('misc')) CATEGORIES.push('misc');
      TOOLS = TOOLS.map(t => t.cat === cat ? { ...t, cat: 'misc' } : t);
      if(activeCat === cat) activeCat = 'all';
      saveCategories(); saveTools();
      renderTags(); applyFilters();
    });

    wrap.appendChild(btn);
    wrap.appendChild(x);
    tagsEl.appendChild(wrap);
  });

  const addBtn = document.createElement('button');
  addBtn.type = 'button';
  addBtn.className = 'tag-add';
  addBtn.textContent = '+ filter';
  addBtn.addEventListener('click', () => {
    const name = prompt('Name your new filter:');
    if(!name) return;
    const clean = name.trim().toLowerCase();
    if(!clean) return;
    if(!CATEGORIES.includes(clean)) CATEGORIES.push(clean);
    saveCategories();
    activeCat = clean;
    renderTags();
    applyFilters();
  });
  tagsEl.appendChild(addBtn);

  const catList = document.getElementById('cat-list');
  catList.innerHTML = '';
  CATEGORIES.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c;
    catList.appendChild(opt);
  });
}

function applyFilters(){
  const q = document.getElementById('search').value.trim().toLowerCase();
  const filtered = TOOLS.filter(t => {
    const matchesCat = activeCat === 'all' || (t.cat || 'misc') === activeCat;
    const matchesQ = !q || t.name.toLowerCase().includes(q) || (t.desc || '').toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });
  renderGrid(filtered);
}

function refresh(){
  renderTags();
  applyFilters();
}

document.getElementById('search').addEventListener('input', applyFilters);

// ===================================================================
//  ADD / EDIT MODAL
// ===================================================================
const overlay = document.getElementById('modalOverlay');
const form = document.getElementById('toolForm');
const modalTitle = document.getElementById('modalTitle');
const deleteBtn = document.getElementById('deleteBtn');

function openModal(tool){
  editingId = tool ? tool.id : null;
  modalTitle.textContent = tool ? 'EDIT GADGET!' : 'NEW GADGET!';
  document.getElementById('f-name').value = tool ? tool.name : '';
  document.getElementById('f-url').value = tool ? tool.url : '';
  document.getElementById('f-icon').value = tool ? (tool.icon || '') : '';
  document.getElementById('f-desc').value = tool ? (tool.desc || '') : '';
  document.getElementById('f-cat').value = tool ? (tool.cat || '') : (activeCat !== 'all' ? activeCat : '');
  deleteBtn.style.display = tool ? 'inline-block' : 'none';
  overlay.classList.add('open');
  document.getElementById('f-name').focus();
}

function closeModal(){
  overlay.classList.remove('open');
  editingId = null;
  form.reset();
}

document.getElementById('openAdd').addEventListener('click', () => openModal(null));
document.getElementById('cancelBtn').addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if(e.target === overlay) closeModal(); });

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    name: document.getElementById('f-name').value.trim(),
    url: document.getElementById('f-url').value.trim(),
    icon: document.getElementById('f-icon').value.trim(),
    desc: document.getElementById('f-desc').value.trim(),
    cat: (document.getElementById('f-cat').value.trim() || 'misc').toLowerCase(),
  };
  if(!data.name || !data.url) return;
  if(!/^https?:\/\//i.test(data.url)) data.url = 'https://' + data.url;

  if(!CATEGORIES.includes(data.cat)){
    CATEGORIES.push(data.cat);
    saveCategories();
  }

  if(editingId){
    TOOLS = TOOLS.map(t => t.id === editingId ? { ...t, ...data } : t);
  } else {
    TOOLS.push({ id: uid(), ...data });
  }
  saveTools();
  closeModal();
  refresh();
});

deleteBtn.addEventListener('click', () => {
  if(editingId && confirm('Remove this tool from the toolkit?')){
    TOOLS = TOOLS.filter(t => t.id !== editingId);
    saveTools();
    closeModal();
    refresh();
  }
});

document.getElementById('resetBtn').addEventListener('click', () => {
  if(confirm('Reset the toolkit back to the starter pack? Your added/edited cards and filters will be lost.')){
    TOOLS = JSON.parse(JSON.stringify(DEFAULT_TOOLS));
    CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_CATEGORIES));
    activeCat = 'all';
    saveTools(); saveCategories();
    refresh();
  }
});
