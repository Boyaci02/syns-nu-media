/* ============================================================
   SYNS NU MEDIA — main.js  v3 (CargoWave-stil)
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────
     1. STICKY NAV
  ────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────
     2. ACTIVE NAV LINK
  ────────────────────────────────────────────── */
  (function () {
    const path = window.location.pathname;
    document.querySelectorAll('#nav a').forEach(function (a) {
      const href = a.getAttribute('href') || '';
      const isHome = (href === 'index.html' || href === './') &&
                     (path === '/' || path.endsWith('/') || path.endsWith('index.html'));
      const isMatch = !isHome && href && path.endsWith(href.replace(/^\.\//, ''));
      if (isHome || isMatch) a.classList.add('active');
    });
  })();

  /* ──────────────────────────────────────────────
     3. HAMBURGER / MOBILE MENU
  ────────────────────────────────────────────── */
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');

  function openMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ──────────────────────────────────────────────
     4. ACCORDION
  ────────────────────────────────────────────── */
  document.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      var item  = trigger.closest('.accordion__item');
      var body  = item.querySelector('.accordion__body');
      var inner = item.querySelector('.accordion__body-inner');
      var isOpen = item.classList.contains('open');

      // close siblings
      var parent = item.closest('.accordion');
      if (parent) {
        parent.querySelectorAll('.accordion__item.open').forEach(function (i) {
          i.classList.remove('open');
          var b = i.querySelector('.accordion__body');
          if (b) b.style.maxHeight = '0';
        });
      }

      if (!isOpen && inner) {
        item.classList.add('open');
        body.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });

  /* ──────────────────────────────────────────────
     5. SCROLL REVEAL (single + stagger)
  ────────────────────────────────────────────── */
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObs.observe(el);
  });

  document.querySelectorAll('.reveal-stagger').forEach(function (parent) {
    Array.from(parent.children).forEach(function (child, i) {
      child.style.setProperty('--i', i);
    });
    revealObs.observe(parent);
  });

  /* ──────────────────────────────────────────────
     6. COUNTER ANIMATION
  ────────────────────────────────────────────── */
  var counterObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      counterObs.unobserve(entry.target);
      var el     = entry.target;
      var target = parseFloat(el.dataset.count);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      var dur    = 1800;
      var start  = performance.now();
      var isFloat = String(target).includes('.');

      function tick(now) {
        var t    = Math.min((now - start) / dur, 1);
        var ease = 1 - Math.pow(1 - t, 3);
        var val  = target * ease;
        el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(function (el) {
    counterObs.observe(el);
  });

  /* ──────────────────────────────────────────────
     7. VIDEO OVERLAY
  ────────────────────────────────────────────── */
  document.querySelectorAll('.video-wrap').forEach(function (wrap) {
    var video   = wrap.querySelector('video');
    var overlay = wrap.querySelector('.video-overlay');
    if (!video || !overlay) return;

    overlay.addEventListener('click', function () {
      video.play();
      wrap.classList.add('playing');
    });

    video.addEventListener('pause', function () {
      wrap.classList.remove('playing');
    });

    video.addEventListener('ended', function () {
      wrap.classList.remove('playing');
    });
  });

  /* ──────────────────────────────────────────────
     8. FORM FEEDBACK
  ────────────────────────────────────────────── */
  document.querySelectorAll('form.contact-form, form.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      if (!btn) return;
      var orig     = btn.textContent;
      var origBg   = btn.style.background;
      btn.textContent = '✓ Skickat!';
      btn.style.background = '#16a34a';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent     = orig;
        btn.style.background = origBg;
        btn.disabled = false;
        form.reset();
      }, 4000);
    });
  });

  /* ──────────────────────────────────────────────
     9. HERO PILLS  — stagger entrance animation
  ────────────────────────────────────────────── */
  document.querySelectorAll('.hero-pill').forEach(function (pill, i) {
    pill.style.animationDelay = (0.4 + i * 0.15) + 's';
  });

})();
