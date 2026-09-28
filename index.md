---
layout: default
title: Harish Kumar — IBDP Extended Essay Coordinator & Mathematics Teacher
---

<section class="hero-section">
  <svg class="hero-graph" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"></svg>
  <img src="profile.JPEG" alt="Harish Kumar" class="hero-photo">
  <div class="hero-text">
    <span class="hero-eyebrow">IBDP EE Coordinator &amp; Mathematics Teacher · Hong Kong</span>
    <h1>Harish Kumar</h1>
    <p class="hero-tagline">
      Hong Kong-based IBDP Extended Essay Coordinator and high school mathematics teacher, with eight years in international education — combining diploma-wide Extended Essay leadership with IB Diploma Programme mathematics teaching in Grades 9–12.
    </p>
    <div class="hero-cta-row">
      <a href="{{ '/about.html' | relative_url }}" class="btn-hero">About Me</a>
      <a href="{{ '/resume.html' | relative_url }}" class="btn-hero-outline">Resume / CV</a>
    </div>
  </div>
</section>

<div class="evidence-strip">
  <div class="evidence lead">
    <div class="ev-num"><span data-count="165">165</span></div>
    <div class="ev-lbl">Extended Essay students coordinated</div>
    <div class="ev-src">two DP cohorts · 23 supervisors</div>
  </div>
  <div class="evidence">
    <div class="ev-num"><span data-count="6">6</span></div>
    <div class="ev-lbl">working school tools designed &amp; built</div>
    <div class="ev-src">see Digital Innovation Projects below</div>
  </div>
  <div class="evidence">
    <div class="ev-num"><span data-count="8">8</span><small>yrs</small></div>
    <div class="ev-lbl">in international education</div>
    <div class="ev-src">4+ years full-time high school mathematics</div>
  </div>
</div>

<p class="credentials-line"><span>Master's in International Education</span><span>PGCE</span><span>Registered Teacher, Hong Kong</span><span>IB-trained: DP Extended Essay &amp; Maths AI</span></p>

<div class="intro-card">
  <span class="section-eyebrow">Welcome</span>
  <p>
    Welcome to my teaching portfolio. I am an IBDP Extended Essay Coordinator and high school mathematics teacher based in Hong Kong, with eight years' experience in international education. My work combines diploma-wide Extended Essay leadership with IB Diploma Programme mathematics teaching in Grades 9–12, grounded in clarity, conceptual understanding, purposeful challenge, and strong classroom relationships.
  </p>
</div>

<div class="highlight-grid">
  <div class="highlight curriculum">
    <span class="h-eyebrow">Curriculum</span>
    <h4>IB &amp; High School Mathematics</h4>
    <p>Lesson sequences, assessment design, and curriculum mapping across IBDP Mathematics AA &amp; AI and AERO/Common Core-aligned Grades 9–10 — built on conceptual progression and structured challenge.</p>
  </div>
  <div class="highlight classroom">
    <span class="h-eyebrow">Classroom</span>
    <h4>Calm, focused, supportive</h4>
    <p>A classroom culture grounded in clear routines, high expectations, and care — where students take risks, explain reasoning, and grow into independent mathematical thinkers.</p>
  </div>
  <div class="highlight leadership">
    <span class="h-eyebrow">Leadership</span>
    <h4>IBDP Extended Essay Coordinator</h4>
    <p>Leading diploma-wide Extended Essay coordination for around 165 students and 23 supervisors across two DP cohorts — milestones, process-integrity indicators, and supervisor communication brought into one coherent system. See Digital Innovation Projects below.</p>
  </div>
</div>

<div class="intro-card" style="margin-bottom: 1rem;">
  <span class="section-eyebrow">Interactive Tools</span>
  <h2 style="margin-top: 0.4rem;">Digital Innovation Projects</h2>
  <p style="margin-bottom: 1.2rem;">Six working applications that put my thinking about teaching, coordination, and school leadership into practice — one for students, two real tools I built and run for my own IB coordination work, a department gradebook for assessment tracking, one for automatic substitute-cover matching, and one for leadership systems.</p>
  <div class="shot-row">
    <a href="{{ '/gradebook/' | relative_url }}" target="_blank" rel="noopener" title="Maths Gradebook"><img src="{{ '/assets/img/projects/gradebook.jpg' | relative_url }}" alt="Maths Gradebook dashboard with class trend lines and AO charts (fictional data)" width="1440" height="900" loading="lazy"></a>
    <a href="{{ '/ee-platform/' | relative_url }}" target="_blank" rel="noopener" title="IBDP Extended Essay Coordination Platform"><img src="{{ '/assets/img/projects/ee-platform.jpg' | relative_url }}" alt="Extended Essay Coordination Platform deadline calendar (fictional data)" width="1440" height="900" loading="lazy"></a>
    <a href="{{ '/ia-compass/' | relative_url }}" target="_blank" rel="noopener" title="IB Math IA Compass"><img src="{{ '/assets/img/projects/ia-compass.jpg' | relative_url }}" alt="IB Math IA Compass landing screen" width="1440" height="900" loading="lazy"></a>
  </div>
  <a href="{{ '/projects.html' | relative_url }}" class="btn-primary">See all six projects →</a>
</div>

<div class="intro-card">
  <span class="section-eyebrow">Explore</span>
  <h2 style="margin-top: 0.4rem;">Where to next</h2>
  <p style="margin-bottom: 1.2rem;">Choose where you would like to read more about my teaching practice and professional experience.</p>
  <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
    <a href="{{ '/philosophy.html' | relative_url }}" class="btn-primary">Teaching Philosophy</a>
    <a href="{{ '/resources.html' | relative_url }}" class="btn-outline">Teaching Resources</a>
    <a href="{{ '/projects.html' | relative_url }}" class="btn-outline">Digital Innovation Projects</a>
    <a href="{{ '/contact.html' | relative_url }}" class="btn-outline">Get in Touch</a>
  </div>
</div>

<script>
/* Hero graph: f(x) = x³ − 3x draws itself, then a point with its tangent travels to the turning point x = 1. */
(function () {
  var svg = document.querySelector('.hero-graph');
  if (!svg) return;
  if (svg.clientWidth / Math.max(1, svg.clientHeight) < 1.3) svg.setAttribute('preserveAspectRatio', 'xMidYMid meet'); // portrait: show the whole graph
  var NS = 'http://www.w3.org/2000/svg', W = 1000, H = 560;
  var x0 = -2.3, x1 = 2.3, y0 = -3.3, y1 = 3.3;
  var X = function (x) { return (x - x0) / (x1 - x0) * W; };
  var Y = function (y) { return H - (y - y0) / (y1 - y0) * H; };
  var f = function (x) { return x * x * x - 3 * x; };
  var df = function (x) { return 3 * x * x - 3; };
  function el(tag, attrs) {
    var e = document.createElementNS(NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    svg.appendChild(e);
    return e;
  }
  function path(fn, a, b) {
    var d = '', n = 220;
    for (var i = 0; i <= n; i++) {
      var x = a + (b - a) * i / n;
      d += (i ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(fn(x)).toFixed(1);
    }
    return d;
  }
  for (var gx = -2; gx <= 2; gx += 0.5) el('line', { x1: X(gx), x2: X(gx), y1: 0, y2: H, 'class': 'hg-grid' });
  for (var gy = -3; gy <= 3; gy += 1) el('line', { x1: 0, x2: W, y1: Y(gy), y2: Y(gy), 'class': 'hg-grid' });
  el('line', { x1: 0, x2: W, y1: Y(0), y2: Y(0), 'class': 'hg-axis' });
  el('line', { x1: X(0), x2: X(0), y1: 0, y2: H, 'class': 'hg-axis' });
  el('path', { d: path(df, -1.9, 1.9), 'class': 'hg-deriv' });
  var curve = el('path', { d: path(f, -2.2, 2.2), 'class': 'hg-curve' });
  var label = el('text', { x: X(1.3), y: Y(2.75), 'class': 'hg-label' });
  label.textContent = 'f(x) = x³ − 3x';
  var tangent = el('line', { 'class': 'hg-tangent' });
  var point = el('circle', { r: 6, 'class': 'hg-point' });
  var note = el('text', { x: X(1) + 16, y: Y(-2) + 30, 'class': 'hg-note' });
  note.textContent = "f′(1) = 0";

  var sx = W / (x1 - x0), sy = H / (y1 - y0), half = 95;
  function place(x) {
    var px = X(x), py = Y(f(x));
    var dx = sx, dy = -df(x) * sy, len = Math.sqrt(dx * dx + dy * dy);
    dx = dx / len * half; dy = dy / len * half;
    point.setAttribute('cx', px); point.setAttribute('cy', py);
    tangent.setAttribute('x1', px - dx); tangent.setAttribute('y1', py - dy);
    tangent.setAttribute('x2', px + dx); tangent.setAttribute('y2', py + dy);
  }

  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) { place(1); note.classList.add('on'); return; }

  var L = curve.getTotalLength();
  curve.style.strokeDasharray = L;
  curve.style.strokeDashoffset = L;
  point.style.opacity = 0; tangent.style.opacity = 0;
  var ease = function (t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var start = null, DRAW = 2200, TRAVEL = 3400, xa = -2.1, xb = 1;
  function frame(t) {
    if (!start) start = t;
    var e = t - start;
    if (e < DRAW) {
      curve.style.strokeDashoffset = L * (1 - ease(e / DRAW));
    } else {
      curve.style.strokeDashoffset = 0;
      var p = Math.min(1, (e - DRAW) / TRAVEL);
      point.style.opacity = 1; tangent.style.opacity = 1;
      place(xa + (xb - xa) * ease(p));
      if (p === 1) { note.classList.add('on'); return; }
    }
    requestAnimationFrame(frame);
  }
  place(xa);
  requestAnimationFrame(frame);
})();
</script>
