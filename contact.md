---
layout: default
title: Contact
---

<div class="page-card">
  <span class="section-eyebrow">Contact</span>
  <h1>Get in touch</h1>

  <p>
    Thank you for visiting my teaching portfolio. If you would like to get in touch regarding teaching opportunities, curriculum work, leadership roles, or professional collaboration, please send me a message using the form below. Your message is delivered straight to my inbox — there is no need to look up an email address.
  </p>

  <h2>Send a message</h2>
  <p>
    Fill in the form and select <strong>Send message</strong>. I read every message personally and aim to reply within a few days.
  </p>

  <!-- =====================================================================
       CONTACT FORM
       Messages are delivered to the inbox through Web3Forms, a free form
       service. The email address itself is NOT stored in this page — only
       a public "access key" is, so spam bots cannot harvest the address.
       To activate: replace YOUR_WEB3FORMS_ACCESS_KEY below with the key
       emailed to you from https://web3forms.com (setup steps are in the
       notes provided with this update).
       ===================================================================== -->
  <form id="contact-form" class="contact-form" action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
    <input type="hidden" name="from_name" value="Teaching Portfolio — Contact Form">

    <!-- Honeypot field: invisible to people, catches spam bots -->
    <input type="checkbox" name="botcheck" class="cf-hp" tabindex="-1" autocomplete="off" aria-hidden="true">

    <div class="form-row">
      <div class="form-field">
        <label for="cf-name">Your name</label>
        <input type="text" id="cf-name" name="name" required placeholder="Your full name">
      </div>
      <div class="form-field">
        <label for="cf-email">Your email</label>
        <input type="email" id="cf-email" name="email" required placeholder="you@example.com">
      </div>
    </div>

    <div class="form-field">
      <label for="cf-subject">Subject</label>
      <input type="text" id="cf-subject" name="subject" placeholder="What is this about?">
    </div>

    <div class="form-field">
      <label for="cf-message">Message</label>
      <textarea id="cf-message" name="message" required placeholder="Write your message here…"></textarea>
    </div>

    <div class="cf-actions">
      <button type="submit" id="cf-submit" class="btn-primary">Send message</button>
      <span class="cf-note">Your message is sent directly to my inbox. I usually reply within a few days.</span>
    </div>
  </form>

  <div id="cf-status" class="cf-status" role="status" aria-live="polite"></div>

  <h2>Other ways to connect</h2>
  <div class="contact-grid">
    <div class="contact-tile">
      <div class="ct-label">Name</div>
      <div class="ct-value">Harish Kumar</div>
    </div>
    <div class="contact-tile">
      <div class="ct-label">Location</div>
      <div class="ct-value">Hong Kong</div>
    </div>
    <div class="contact-tile">
      <div class="ct-label">LinkedIn</div>
      <div class="ct-value"><a href="https://linkedin.com/in/harishjhaldiyal" target="_blank" rel="noopener">linkedin.com/in/harishjhaldiyal</a></div>
    </div>
    <div class="contact-tile">
      <div class="ct-label">Best for</div>
      <div class="ct-value">Teaching · Curriculum · Leadership</div>
    </div>
  </div>

  <p style="margin-top: 1.5rem;">
    <a href="https://linkedin.com/in/harishjhaldiyal" target="_blank" rel="noopener" class="btn-outline">Connect on LinkedIn</a>
  </p>

  <h2>Professional interests</h2>
  <ul class="tag-cloud">
    <li>Mathematics Teaching</li>
    <li>IB DP / High School / Middle School</li>
    <li>Curriculum Design</li>
    <li>Assessment Design</li>
    <li>Student Support &amp; Mentoring</li>
    <li>STEM &amp; Interdisciplinary Learning</li>
    <li>Math Team Lead</li>
    <li>EE Coordination</li>
    <li>Grade Level Leadership</li>
  </ul>

  <p style="margin-top: 1.5rem;">
    I would be happy to connect regarding teaching, curriculum, leadership, and educational collaboration.
  </p>
</div>

<script>
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var statusBox = document.getElementById('cf-status');
  var submitBtn = document.getElementById('cf-submit');
  var keyField  = form.querySelector('input[name="access_key"]');

  function setStatus(type, html) {
    statusBox.className = type ? ('cf-status cf-' + type) : 'cf-status';
    statusBox.innerHTML = html;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Guard: the form has not been connected to an inbox yet.
    if (!keyField.value || keyField.value.indexOf('YOUR_WEB3FORMS') !== -1) {
      setStatus('err', '<strong>The contact form is not connected yet.</strong> Please try again shortly, or reach me via LinkedIn in the meantime.');
      return;
    }

    // Use a friendly default subject if the visitor left it blank.
    var subj = form.querySelector('input[name="subject"]');
    if (subj && !subj.value.trim()) {
      subj.value = 'New message from your teaching portfolio';
    }

    var originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    setStatus('', '');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    })
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data.success) {
        form.reset();
        form.style.display = 'none';
        setStatus('ok', '<strong>Thank you — your message has been sent.</strong> It has been delivered to my inbox and I will get back to you as soon as I can.');
      } else {
        setStatus('err', '<strong>Sorry, something went wrong.</strong> ' + (data.message || 'Please try again in a moment, or reach me via LinkedIn.'));
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }
    })
    .catch(function () {
      setStatus('err', '<strong>Network error.</strong> Please check your connection and try again, or reach me via LinkedIn.');
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
    });
  });
})();
</script>
