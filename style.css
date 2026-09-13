/* ==========================================================
   TOOLKIT! — Style Sheet
   ========================================================== */

:root{
  --ink:#141414;
  --paper:#0a0a1a;
  --paper-panel:#ffffff;
  --red:#ed1c24;
  --blue:#0072ce;
  --yellow:#ffd400;
  --purple:#7c3aed;
  --cyan:#06b6d4;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --glass: rgba(255,255,255,0.08);
  --glass-strong: rgba(255,255,255,0.12);
  --glass-border: rgba(255,255,255,0.12);
  --glass-light: rgba(255,255,255,0.72);
  --glass-light-border: rgba(255,255,255,0.35);
  --text-primary:#f0f0f5;
  --text-secondary:rgba(240,240,245,0.6);
}

*{box-sizing:border-box; margin:0; padding:0;}
html{scroll-behavior:smooth;}

body{
  background:var(--paper);
  color:var(--text-primary);
  font-family:'Rubik', sans-serif;
  min-height:100vh;
  padding:40px 20px 90px;
  overflow-x:hidden;
  position:relative;
}

@media (prefers-reduced-motion: reduce){
  *{animation-duration:0.01ms !important; animation-iteration-count:1 !important; transition-duration:0.01ms !important;}
}

/* ==========================================================
   ANIMATED BACKGROUND — Optimized
   ========================================================== */
.bg-scene{
  position:fixed; inset:0; z-index:0; overflow:hidden;
  background:linear-gradient(135deg, #0a0a1a 0%, #0f1628 30%, #0d1117 60%, #0a0a1a 100%);
  contain:strict;
  pointer-events:none;
}

/* Parallax Layer */
.bg-parallax-layer{
  position:absolute; inset:-20px;
  will-change:transform;
  transform:translateZ(0);
  pointer-events:none;
}

/* Floating gradient orbs — reduced to 3, lighter blur for better perf */
.bg-orb{
  position:absolute; border-radius:50%;
  filter:blur(12px); opacity:0.28;
  will-change:transform;
  pointer-events:none;
  transform:translateZ(0);
}
.bg-orb-1{
  width:480px; height:480px; top:-8%; left:-8%;
  background:radial-gradient(circle, rgba(237,28,36,0.4) 0%, rgba(237,28,36,0.12) 50%, transparent 70%);
  animation:orbFloat1 28s ease-in-out infinite;
}
.bg-orb-2{
  width:520px; height:520px; top:30%; right:-8%;
  background:radial-gradient(circle, rgba(0,114,206,0.35) 0%, rgba(0,114,206,0.1) 50%, transparent 70%);
  animation:orbFloat2 34s ease-in-out infinite;
}
.bg-orb-3{
  width:400px; height:400px; bottom:-8%; left:22%;
  background:radial-gradient(circle, rgba(124,58,237,0.32) 0%, rgba(124,58,237,0.08) 50%, transparent 70%);
  animation:orbFloat3 30s ease-in-out infinite;
}

@keyframes orbFloat1{
  0%,100%{transform:translate3d(0,0,0);}
  33%{transform:translate3d(40px,50px,0);}
  66%{transform:translate3d(15px,80px,0);}
}
@keyframes orbFloat2{
  0%,100%{transform:translate3d(0,0,0);}
  33%{transform:translate3d(-50px,40px,0);}
  66%{transform:translate3d(-70px,10px,0);}
}
@keyframes orbFloat3{
  0%,100%{transform:translate3d(0,0,0);}
  33%{transform:translate3d(45px,-50px,0);}
  66%{transform:translate3d(60px,-20px,0);}
}

/* Subtle dot grid overlay — static, zero repaint cost */
.bg-grid{
  position:absolute; inset:0;
  background-image:radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size:28px 28px;
  pointer-events:none;
}

/* Floating particles container */
.bg-particles{position:absolute; inset:0; pointer-events:none;}
.bg-particle{
  position:absolute; border-radius:50%;
  background:rgba(255,255,255,0.25);
  animation:particleFloat linear infinite;
  will-change:transform;
  transform:translateZ(0);
}
@keyframes particleFloat{
  0%{transform:translate3d(0, 100vh, 0); opacity:0;}
  15%{opacity:0.5;}
  85%{opacity:0.5;}
  100%{transform:translate3d(0, -10vh, 0); opacity:0;}
}

/* ==========================================================
   LAYOUT
   ========================================================== */
.wrap{
  max-width:960px; margin:0 auto; position:relative; z-index:1;
  transition:transform 0.5s var(--ease-out-expo), opacity 0.5s var(--ease-out-expo);
  will-change:opacity, transform;
}
.wrap.locked{
  pointer-events:none;
  user-select:none;
  transform:scale(0.98);
  opacity:0.2;
}

button{font-family:inherit;}

/* ==========================================================
   AUTH SCREEN
   ========================================================== */
#auth{
  position:fixed; inset:0;
  display:flex; align-items:center; justify-content:center;
  z-index:200; padding:20px;
  transition:opacity 0.5s var(--ease-out-expo), visibility 0.5s;
}
#auth.hidden{opacity:0; visibility:hidden; pointer-events:none;}

.auth-panel{
  width:min(420px, 100%);
  background:rgba(255, 255, 255, 0.96);
  backdrop-filter:blur(20px);
  -webkit-backdrop-filter:blur(20px);
  border:1.5px solid rgba(255, 255, 255, 0.6); border-radius:24px; padding:36px 32px;
  box-shadow:0 24px 64px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.7) inset;
  text-align:center; color:var(--ink);
  animation:authPanelIn 0.55s var(--ease-spring) both;
}
@keyframes authPanelIn{
  from{opacity:0; transform:translateY(32px) scale(0.94);}
  to{opacity:1; transform:translateY(0) scale(1);}
}

.auth-title{
  font-family:'Bangers', cursive; font-size:36px; letter-spacing:1px;
  background:linear-gradient(135deg, var(--red), #ff6b35, var(--yellow));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  margin-bottom:6px; transform:rotate(-2deg);
}
.auth-sub{font-size:12.5px; font-weight:700; opacity:0.5; margin-bottom:20px; color:var(--ink);}

/* ---- Google Button ---- */
.google-btn{
  width:100%; display:flex; align-items:center; justify-content:center; gap:10px;
  background:#fff; border:1.5px solid rgba(0,0,0,0.14); border-radius:14px;
  padding:12px 16px; font-family:'Rubik', sans-serif; font-size:14px; font-weight:700;
  color:#3c4043; cursor:pointer;
  box-shadow:0 2px 8px rgba(0,0,0,0.1);
  transition:transform 0.25s var(--ease-spring), box-shadow 0.25s, border-color 0.2s;
  margin-bottom:18px;
}
.google-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 6px 20px rgba(0,0,0,0.15);
  border-color:rgba(0,0,0,0.22);
}
.google-btn:active{transform:translateY(1px); box-shadow:0 1px 4px rgba(0,0,0,0.1);}
.google-btn:disabled{opacity:0.6; cursor:not-allowed; transform:none !important;}
.google-icon{width:20px; height:20px; flex-shrink:0;}

/* ---- Divider ---- */
.auth-divider{
  display:flex; align-items:center; gap:12px;
  margin:0 0 18px; color:#a09880; font-size:11.5px; font-weight:700;
}
.auth-divider::before,.auth-divider::after{
  content:''; flex:1; height:1px;
  background:linear-gradient(to right, transparent, rgba(0,0,0,0.12), transparent);
}

.auth-row{
  display:flex; align-items:center; gap:8px;
  background:rgba(240, 238, 232, 0.85);
  border:1.5px solid rgba(20,20,20,0.1); border-radius:14px; padding:12px 15px; margin-bottom:12px;
  transition:border-color 0.2s, box-shadow 0.2s, transform 0.2s var(--ease-smooth);
}
.auth-row:focus-within{
  border-color:var(--blue); box-shadow:0 0 0 3px rgba(0,114,206,0.1);
  transform:translateY(-1px);
}
.auth-row input{
  background:none; border:none; outline:none; color:var(--ink);
  font-family:'Rubik', sans-serif; font-weight:700; font-size:14px; flex:1; letter-spacing:1px;
}
.auth-row input::placeholder{color:#a09880; font-weight:600; letter-spacing:0;}

.auth-btn{
  width:100%; border:none; border-radius:14px;
  font-family:'Bangers', cursive; font-size:20px; letter-spacing:1px;
  padding:14px; cursor:pointer;
  background:linear-gradient(135deg, var(--yellow), #ffb700);
  color:var(--ink);
  box-shadow:0 4px 16px rgba(255,212,0,0.35);
  transition:transform 0.25s var(--ease-spring), box-shadow 0.25s;
  position:relative; overflow:hidden;
}
.auth-btn::after{
  content:''; position:absolute; inset:0;
  background:linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 45%, rgba(255,255,255,0.35) 55%, transparent 60%);
  transform:translateX(-150%); transition:transform 0.5s var(--ease-smooth);
}
.auth-btn:hover::after{transform:translateX(150%);}
.auth-btn:hover{transform:translateY(-2px) scale(1.01); box-shadow:0 8px 24px rgba(255,212,0,0.45);}
.auth-btn:active{transform:translateY(1px) scale(0.99);}
.auth-btn.signup-btn{
  background:linear-gradient(135deg, var(--blue), #4da3e8); color:#fff;
  box-shadow:0 4px 16px rgba(0,114,206,0.35);
}
.auth-btn.signup-btn:hover{box-shadow:0 8px 24px rgba(0,114,206,0.5);}
.auth-btn:disabled{opacity:0.5; cursor:not-allowed; transform:none !important;}

.auth-error{color:var(--red); font-weight:800; font-size:12.5px; margin-top:12px; min-height:14px;}
.auth-success{color:var(--blue); font-weight:800; font-size:12.5px; margin-top:12px; min-height:14px;}
.auth-toggle{margin-top:18px; font-size:12px; font-weight:700; color:#6a6a6a;}
.auth-toggle button{
  background:none; border:none; color:var(--blue); font-weight:800; font-size:12px;
  cursor:pointer; text-decoration:underline; padding:0;
  transition:color 0.2s;
}
.auth-toggle button:hover{color:var(--red);}
.auth-userid-rules{
  font-size:10.5px; font-weight:600; color:#8a8168; text-align:left;
  margin-top:-6px; margin-bottom:12px; padding-left:4px;
}

.shake{animation:shake 0.4s var(--ease-smooth);}
@keyframes shake{
  20%{transform:translateX(-8px) rotate(-1deg);} 40%{transform:translateX(8px) rotate(1deg);}
  60%{transform:translateX(-5px);} 80%{transform:translateX(5px);} 100%{transform:translateX(0);}
}

/* Loading */
.auth-loading{display:flex; flex-direction:column; align-items:center; gap:16px; padding:30px 0;}
.spinner{
  width:40px; height:40px; border:3px solid rgba(0,114,206,0.15); border-top-color:var(--blue);
  border-radius:50%; animation:spin 0.85s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg);}}
.auth-loading-text{font-size:13px; font-weight:700; color:#6a6a6a; animation:pulse 1.8s ease-in-out infinite;}
@keyframes pulse{0%,100%{opacity:0.4;} 50%{opacity:1;}}

/* Config error */
.config-error{padding:20px; text-align:left;}
.config-error h3{font-family:'Bangers', cursive; font-size:22px; color:var(--red); margin-bottom:10px;}
.config-error p{font-size:12.5px; font-weight:600; line-height:1.7; margin-bottom:8px;}
.config-error code{background:#f5f0e5; padding:2px 6px; border-radius:4px; font-size:11px; font-weight:800;}

/* ==========================================================
   HEADER
   ========================================================== */
header{text-align:center; margin-bottom:34px;}

.caption-box{
  display:inline-block;
  background:linear-gradient(135deg, var(--yellow), #ffb700);
  border:none; border-radius:8px;
  padding:7px 18px; font-size:12px; font-weight:800; text-transform:uppercase; letter-spacing:0.5px;
  color:var(--ink);
  box-shadow:0 4px 14px rgba(255,212,0,0.28);
  transform:rotate(-1.5deg); margin-bottom:22px;
  animation:captionIn 0.55s 0.1s var(--ease-spring) both;
}
@keyframes captionIn{
  from{opacity:0; transform:rotate(-1.5deg) translateY(-20px) scale(0.75);}
  to{opacity:1; transform:rotate(-1.5deg) translateY(0) scale(1);}
}

.title-wrap{
  position:relative; display:flex; justify-content:center; align-items:center;
  padding:20px 0 10px; opacity:0; animation:slam 0.65s 0.15s var(--ease-spring) forwards;
}
@keyframes slam{
  0%{opacity:0; transform:scale(1.8) rotate(-8deg);}
  55%{opacity:1; transform:scale(0.95) rotate(2deg);}
  80%{transform:scale(1.03) rotate(-1deg);}
  100%{opacity:1; transform:scale(1) rotate(-2deg);}
}

.burst{
  position:absolute; width:240px; height:240px; z-index:0;
  animation:burstSpin 30s linear infinite;
  opacity:0.85;
}
@keyframes burstSpin{to{transform:rotate(360deg);}}

h1{
  font-family:'Bangers', cursive; font-size:68px; letter-spacing:3px;
  background:linear-gradient(135deg, var(--yellow), #fff, var(--yellow));
  background-size:200% 200%;
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  animation:titleShimmer 5s ease-in-out infinite;
  position:relative; z-index:1; transform:rotate(-2deg);
  filter:drop-shadow(3px 3px 0 var(--ink));
}
@keyframes titleShimmer{
  0%,100%{background-position:0% 50%;}
  50%{background-position:100% 50%;}
}

.subtitle{
  font-size:14px; font-weight:700; max-width:440px; margin:8px auto 0;
  opacity:0; animation:fadeSlideUp 0.5s 0.5s var(--ease-out-expo) forwards;
  color:var(--text-secondary);
}
@keyframes fadeSlideUp{
  from{opacity:0; transform:translateY(16px);}
  to{opacity:1; transform:translateY(0);}
}

/* ==========================================================
   USER BAR
   ========================================================== */
.user-bar{
  display:flex; align-items:center; justify-content:center; gap:12px;
  margin-top:14px; opacity:0; animation:fadeSlideUp 0.5s 0.55s var(--ease-spring) forwards;
}
.user-badge{
  display:inline-flex; align-items:center; gap:8px;
  background:rgba(22, 28, 44, 0.85);
  border:1.5px solid var(--glass-border); border-radius:24px;
  padding:7px 16px; font-size:12px; font-weight:800;
  box-shadow:0 4px 14px rgba(0,0,0,0.22);
  transition:transform 0.25s var(--ease-spring), box-shadow 0.25s;
}
.user-badge:hover{transform:translateY(-2px); box-shadow:0 8px 20px rgba(0,0,0,0.3);}
.user-badge .user-avatar{
  width:26px; height:26px; border-radius:50%;
  background:linear-gradient(135deg, var(--blue), var(--cyan)); color:#fff;
  display:flex; align-items:center; justify-content:center;
  font-family:'Bangers', cursive; font-size:13px; border:2px solid rgba(255,255,255,0.3);
  flex-shrink:0; overflow:hidden;
}
.user-badge .user-avatar img{
  width:100%; height:100%; object-fit:cover; border-radius:50%;
}
.signout-btn{
  background:rgba(22, 28, 44, 0.85);
  border:1.5px solid var(--glass-border); border-radius:24px;
  font-weight:800; font-size:11px; padding:7px 16px; cursor:pointer;
  box-shadow:0 4px 14px rgba(0,0,0,0.22);
  transition:transform 0.25s var(--ease-spring), color 0.2s, box-shadow 0.25s;
  color:#ff6b6b;
}
.signout-btn:hover{transform:translateY(-2px); box-shadow:0 8px 22px rgba(0,0,0,0.3); color:#ff4444;}
.signout-btn:active{transform:translateY(1px);}

/* ==========================================================
   CONTROLS
   ========================================================== */
.controls{
  display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-bottom:12px;
  opacity:0; animation:fadeSlideUp 0.5s 0.6s var(--ease-out-expo) forwards;
}
.search-row{
  display:flex; align-items:center; gap:8px;
  background:rgba(18, 24, 40, 0.88);
  border:1.5px solid var(--glass-border); border-radius:14px; padding:13px 18px; flex:1; min-width:220px;
  box-shadow:0 4px 16px rgba(0,0,0,0.18);
  transition:border-color 0.2s, box-shadow 0.2s, transform 0.2s var(--ease-smooth);
}
.search-row:focus-within{
  border-color:var(--blue); box-shadow:0 4px 22px rgba(0,114,206,0.18), 0 0 0 3px rgba(0,114,206,0.07);
  transform:translateY(-1px);
}
.search-row input{
  background:none; border:none; outline:none; color:var(--text-primary);
  font-family:'Rubik', sans-serif; font-weight:600; font-size:14px; flex:1;
}
.search-row input::placeholder{color:var(--text-secondary);}

.add-btn{
  background:linear-gradient(135deg, var(--red), #c41018); color:#fff;
  border:none; border-radius:14px;
  font-family:'Bangers', cursive; font-size:16px; letter-spacing:0.5px; padding:13px 22px;
  cursor:pointer;
  box-shadow:0 4px 16px rgba(237,28,36,0.3);
  transition:transform 0.25s var(--ease-spring), box-shadow 0.25s;
  position:relative; overflow:hidden;
}
.add-btn::after{
  content:''; position:absolute; inset:0;
  background:linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0.22) 55%, transparent 60%);
  transform:translateX(-150%); transition:transform 0.5s var(--ease-smooth);
}
.add-btn:hover::after{transform:translateX(150%);}
.add-btn:hover{transform:translateY(-2px) scale(1.03); box-shadow:0 8px 26px rgba(237,28,36,0.4);}
.add-btn:active{transform:translateY(1px) scale(0.98);}

/* ==========================================================
   FILTERS / TAGS
   ========================================================== */
.filter-row{
  display:flex; gap:8px; flex-wrap:wrap; align-items:center; margin-bottom:8px;
  opacity:0; animation:fadeSlideUp 0.5s 0.65s var(--ease-out-expo) forwards;
}
.tags{display:flex; gap:8px; flex-wrap:wrap; align-items:center;}
.tag-wrap{position:relative; display:inline-flex;}

.tag{
  background:rgba(255,255,255,0.08);
  border:1.5px solid var(--glass-border); border-radius:24px; color:var(--text-primary);
  font-weight:700; font-size:12px; padding:9px 18px; cursor:pointer;
  transition:transform 0.2s var(--ease-smooth), background 0.2s, box-shadow 0.2s; white-space:nowrap;
}
.tag:hover{transform:translateY(-2px); box-shadow:0 5px 14px rgba(0,0,0,0.22); background:rgba(255,255,255,0.14);}
.tag.active{
  background:linear-gradient(135deg, var(--blue), var(--cyan)); color:#fff;
  border-color:transparent;
  box-shadow:0 4px 16px rgba(0,114,206,0.35);
}
.tag-x{
  position:absolute; top:-7px; right:-7px; width:20px; height:20px; border-radius:50%;
  background:var(--red); color:#fff; border:none; font-size:10px; line-height:1;
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  opacity:0; transform:scale(0.3) rotate(-90deg);
  transition:transform 0.25s var(--ease-spring), opacity 0.2s;
  box-shadow:0 2px 8px rgba(237,28,36,0.4);
}
.tag-wrap:hover .tag-x{opacity:1; transform:scale(1) rotate(0);}
.tag-add{
  background:none; border:1.5px dashed var(--glass-border); border-radius:24px; color:var(--text-secondary);
  font-weight:700; font-size:12px; padding:9px 18px; cursor:pointer; opacity:0.7;
  transition:transform 0.2s var(--ease-smooth), border-color 0.2s, color 0.2s;
}
.tag-add:hover{opacity:1; transform:translateY(-2px); border-color:var(--blue); color:var(--blue);}

.storage-note{
  font-size:11px; font-weight:600; color:var(--text-secondary); margin-bottom:20px;
  opacity:0; animation:fadeSlideUp 0.5s 0.7s var(--ease-out-expo) forwards;
}

/* ==========================================================
   SAVE INDICATOR
   ========================================================== */
.save-indicator{
  position:fixed; bottom:24px; right:24px;
  background:rgba(20, 26, 42, 0.94);
  border:1.5px solid var(--glass-border); border-radius:14px; padding:10px 20px;
  font-size:12px; font-weight:800;
  box-shadow:0 8px 28px rgba(0,0,0,0.28);
  z-index:100; opacity:0; transform:translateY(14px) scale(0.94);
  transition:opacity 0.3s var(--ease-out-expo), transform 0.3s var(--ease-spring);
}
.save-indicator.show{opacity:1; transform:translateY(0) scale(1);}
.save-indicator.saving{color:var(--blue);}
.save-indicator.saved{color:#28a745;}
.save-indicator.error{color:var(--red);}

/* ==========================================================
   CARD GRID
   ========================================================== */
.grid{
  display:grid; grid-template-columns:repeat(auto-fill, minmax(215px, 1fr)); gap:24px;
  opacity:0; animation:fadeSlideUp 0.5s 0.75s var(--ease-out-expo) forwards;
}

/* ==========================================================
   CARDS — Smooth & Lightweight
   ========================================================== */
.card{
  background:rgba(18, 24, 38, 0.88);
  border:1.5px solid rgba(255, 255, 255, 0.1);
  border-radius:18px; padding:22px;
  display:flex; flex-direction:column; gap:10px; text-decoration:none; color:var(--text-primary);
  position:relative;
  box-shadow:0 6px 20px rgba(0,0,0,0.22);
  transition:transform 0.25s var(--ease-out-expo), box-shadow 0.25s var(--ease-out-expo), border-color 0.25s;
  contain:content;
}
.card.animate-in{
  opacity:0; animation:cardIn 0.4s var(--ease-spring) both;
}
@keyframes cardIn{
  from{opacity:0; transform:translate3d(0, 24px, 0) scale(0.95);}
  to{opacity:1; transform:translate3d(0, 0, 0) scale(1);}
}
.card:hover{
  transform:translate3d(0, -5px, 0) scale(1.015);
  box-shadow:0 16px 36px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.15) inset;
  border-color:rgba(255,255,255,0.2);
}
.card:focus-visible{outline:3px solid var(--blue); outline-offset:2px;}

/* Subtle top-edge shine */
.card::before{
  content:''; position:absolute; inset:0; border-radius:18px; z-index:1; pointer-events:none;
  background:linear-gradient(160deg, rgba(255,255,255,0.07) 0%, transparent 45%);
  opacity:0; transition:opacity 0.25s;
}
.card:hover::before{opacity:1;}

/* Bottom accent line */
.card::after{
  content:''; position:absolute; bottom:-2px; left:25%; right:25%; height:3px;
  background:var(--card-color, var(--blue));
  border-radius:3px;
  transform:scaleX(0); transition:transform 0.3s var(--ease-out-expo);
  transform-origin:center;
  opacity:0.75;
}
.card:hover::after{transform:scaleX(1);}

.card-actions{
  position:absolute; top:-10px; left:-8px;
  display:flex; gap:6px;
  opacity:0; z-index:5; transform:translateY(6px);
  transition:opacity 0.2s, transform 0.2s var(--ease-spring);
}
.card:hover .card-actions{opacity:1; transform:translateY(0);}

.icon-btn{
  width:32px; height:32px; border-radius:50%; border:none;
  background:linear-gradient(135deg, var(--yellow), #ffb700); color:var(--ink);
  display:flex; align-items:center; justify-content:center;
  font-size:12px; cursor:pointer;
  box-shadow:0 3px 10px rgba(0,0,0,0.18);
  transition:transform 0.2s var(--ease-spring), box-shadow 0.2s;
}
.icon-btn.del{background:linear-gradient(135deg, #fff, #f0f0f0);}
.icon-btn:hover{transform:translateY(-2px) scale(1.1); box-shadow:0 6px 16px rgba(0,0,0,0.22);}
.icon-btn:active{transform:translateY(1px) scale(0.95);}

.pow{
  position:absolute; top:-14px; right:-10px; font-family:'Bangers', cursive; font-size:13px;
  color:#fff; background:var(--card-color, var(--red)); border:none; border-radius:50%;
  width:40px; height:40px; display:flex; align-items:center; justify-content:center;
  transform:rotate(12deg) scale(0); transition:transform 0.3s var(--ease-spring); line-height:1;
  box-shadow:0 3px 12px rgba(0,0,0,0.22);
  z-index:2;
}
.card:hover .pow{transform:rotate(12deg) scale(1);}

.card-top{display:flex; align-items:center; justify-content:space-between; position:relative; z-index:2;}
.icon-box{
  width:46px; height:46px; border:1.5px solid var(--glass-border); border-radius:14px;
  display:flex; align-items:center; justify-content:center;
  background:rgba(255, 255, 255, 0.07);
  flex-shrink:0; font-family:'Bangers', cursive; font-size:16px; overflow:hidden;
  transition:transform 0.25s var(--ease-spring);
}
.card:hover .icon-box{transform:scale(1.08) rotate(-5deg);}
.icon-box img{width:22px; height:22px; object-fit:contain;}

.name{font-size:15px; font-weight:800; position:relative; z-index:2;}
.desc{font-size:12px; font-weight:500; color:var(--text-secondary); line-height:1.5; position:relative; z-index:2;}
.cat{
  align-self:flex-start; font-size:10.5px; font-weight:800; text-transform:uppercase; letter-spacing:0.4px;
  background:var(--card-color, var(--blue)); color:#fff; padding:4px 12px; border-radius:8px;
  position:relative; z-index:2;
  box-shadow:0 2px 6px rgba(0,0,0,0.12);
}

.empty{
  grid-column:1/-1; padding:40px 20px; text-align:center; font-weight:700;
  background:rgba(18, 24, 38, 0.88);
  border:1.5px dashed var(--glass-border); border-radius:18px;
}

/* ==========================================================
   FOOTER
   ========================================================== */
footer{
  margin-top:40px; text-align:center; font-size:11.5px; font-weight:600; color:var(--text-secondary); line-height:1.8;
  opacity:0; animation:fadeSlideUp 0.5s 0.85s var(--ease-out-expo) forwards;
}
footer code{color:var(--blue); font-weight:800;}
footer button{
  background:none; border:none; text-decoration:underline; color:var(--text-secondary);
  font-weight:700; font-size:11.5px; cursor:pointer; padding:0;
  transition:color 0.2s;
}
footer button:hover{color:var(--yellow);}

/* ==========================================================
   ADD / EDIT MODAL
   ========================================================== */
#modalOverlay{
  position:fixed; inset:0;
  background:rgba(5,5,15,0.68); backdrop-filter:blur(5px);
  -webkit-backdrop-filter:blur(5px);
  z-index:150;
  display:none; align-items:center; justify-content:center; padding:20px;
}
#modalOverlay.open{display:flex;}
.modal{
  width:min(420px, 100%);
  background:rgba(255, 255, 255, 0.96);
  border:1.5px solid rgba(255, 255, 255, 0.4); border-radius:24px;
  padding:30px; box-shadow:0 24px 64px rgba(0,0,0,0.4); max-height:88vh; overflow-y:auto;
  animation:modalIn 0.38s var(--ease-spring) both;
  color:var(--ink);
}
@keyframes modalIn{
  from{opacity:0; transform:translateY(24px) scale(0.95);}
  to{opacity:1; transform:translateY(0) scale(1);}
}
.modal-title{
  font-family:'Bangers', cursive; font-size:28px;
  background:linear-gradient(135deg, var(--blue), var(--cyan));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  margin-bottom:18px; transform:rotate(-1deg);
}
.field{margin-bottom:14px;}
.field label{display:block; font-size:11.5px; font-weight:800; text-transform:uppercase; margin-bottom:5px; letter-spacing:0.3px; color:var(--ink);}
.field input{
  width:100%; border:1.5px solid rgba(20,20,20,0.12); border-radius:12px; padding:11px 14px;
  font-family:'Rubik', sans-serif; font-weight:600; font-size:13.5px; outline:none;
  background:rgba(242, 240, 234, 0.9);
  transition:border-color 0.2s, box-shadow 0.2s, transform 0.2s var(--ease-smooth);
  color:var(--ink);
}
.field input:focus{border-color:var(--blue); box-shadow:0 0 0 3px rgba(0,114,206,0.08); transform:translateY(-1px);}
.field .hint{font-size:10.5px; color:#8a8168; font-weight:600; margin-top:4px;}

.modal-actions{display:flex; gap:10px; margin-top:22px; flex-wrap:wrap;}
.modal-actions button{
  border:none; border-radius:12px; padding:12px 20px;
  font-family:'Bangers', cursive; font-size:16px; letter-spacing:0.5px; cursor:pointer;
  transition:transform 0.25s var(--ease-spring), box-shadow 0.25s;
}
.modal-actions button:hover{transform:translateY(-2px);}
.modal-actions button:active{transform:translateY(1px);}
.btn-save{
  background:linear-gradient(135deg, var(--yellow), #ffb700); flex:1; color:var(--ink);
  box-shadow:0 4px 14px rgba(255,212,0,0.3);
}
.btn-save:hover{box-shadow:0 8px 22px rgba(255,212,0,0.45);}
.btn-cancel{background:rgba(255,255,255,0.7); border:1.5px solid rgba(20,20,20,0.08) !important; color:var(--ink);}
.btn-delete{
  background:linear-gradient(135deg, var(--red), #c41018); color:#fff;
  box-shadow:0 4px 14px rgba(237,28,36,0.28);
}
.btn-delete:hover{box-shadow:0 8px 22px rgba(237,28,36,0.42);}

/* ==========================================================
   PASSWORD STRENGTH
   ========================================================== */
.pw-strength{
  height:4px; border-radius:2px; margin-top:4px;
  transition:width 0.35s var(--ease-out-expo), background 0.35s;
}
.pw-strength-label{font-size:10px; font-weight:700; margin-top:2px; min-height:14px; transition:color 0.3s;}

/* ==========================================================
   CUSTOM SCROLLBAR
   ========================================================== */
::-webkit-scrollbar{width:6px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1); border-radius:3px;}
::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.2);}
