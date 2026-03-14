/* ============================================================
   SYNS NU MEDIA — main.js
   All interactive behaviour: nav, hamburger, accordion,
   scroll-reveal, counter animation, video overlay, forms
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
     2. HAMBURGER / MOBILE MENU
  ────────────────────────────────────────────── */
  const hamburger    = document.getElementById('hamburger');
  const mobileMenu   = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');

  function openMenu() {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      if (mobileMenu.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on overlay click
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMenu);
    }

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Mobile submenu toggle (Tjänster)
    mobileMenu.querySelectorAll('.mobile-menu__toggle').forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        const sub = this.parentElement.querySelector('.mobile-menu__sub');
        if (sub) {
          sub.classList.toggle('open');
        }
      });
    });
  }

  /* ──────────────────────────────────────────────
     3. ACTIVE NAV LINK
  ────────────────────────────────────────────── */
  (function () {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.nav__link[href], .nav__dropdown-item[href]').forEach(function (link) {
      const href = (link.getAttribute('href') || '').replace(/\/$/, '') || '/';
      // Match exact path or filename
      const hrefFile = href.split('/').pop();
      const currentFile = currentPath.split('/').pop();
      if (href === currentPath || (hrefFile && hrefFile === currentFile)) {
        link.classList.add('nav__link--active');
      }
    });
  }());

  /* ──────────────────────────────────────────────
     4. ACCORDION
  ────────────────────────────────────────────── */
  document.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item    = this.closest('.accordion__item');
      const body    = item.querySelector('.accordion__body');
      const isOpen  = body.classList.contains('open');

      // Close all siblings
      const accordion = item.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion__item').forEach(function (sibling) {
          if (sibling !== item) {
            sibling.querySelector('.accordion__body').classList.remove('open');
            sibling.querySelector('.accordion__trigger').classList.remove('open');
            sibling.querySelector('.accordion__trigger').setAttribute('aria-expanded', 'false');
          }
        });
      }

      // Toggle current
      body.classList.toggle('open', !isOpen);
      this.classList.toggle('open', !isOpen);
      this.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ──────────────────────────────────────────────
     5. SCROLL REVEAL (IntersectionObserver)
  ────────────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all
    document.querySelectorAll('.reveal').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ──────────────────────────────────────────────
     6. COUNTER ANIMATION
  ────────────────────────────────────────────── */
  function animateCounter(el) {
    var target   = parseFloat(el.dataset.count);
    var isFloat  = el.dataset.count.indexOf('.') !== -1;
    var suffix   = el.dataset.suffix || '';
    var prefix   = el.dataset.prefix || '';
    var duration = 1800;
    var start    = performance.now();

    function update(now) {
      var elapsed  = now - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var current  = eased * target;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + (isFloat ? target.toFixed(1) : target) + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ──────────────────────────────────────────────
     7. VIDEO PLAY OVERLAY
  ────────────────────────────────────────────── */
  document.querySelectorAll('.video-wrap').forEach(function (wrap) {
    var video   = wrap.querySelector('video');
    var playBtn = wrap.querySelector('.video-play');
    if (!video || !playBtn) return;

    playBtn.addEventListener('click', function () {
      video.play();
      wrap.classList.add('playing');
    });

    video.addEventListener('pause', function () {
      wrap.classList.remove('playing');
    });

    video.addEventListener('ended', function () {
      wrap.classList.remove('playing');
    });

    // Allow clicking the video itself to pause
    video.addEventListener('click', function () {
      if (!video.paused) {
        video.pause();
      }
    });
  });

  /* ──────────────────────────────────────────────
     8. FORM SUBMISSION FEEDBACK
  ────────────────────────────────────────────── */
  document.querySelectorAll('form[data-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn  = form.querySelector('button[type="submit"]');
      var orig = btn.textContent;

      btn.textContent = 'Skickat! Vi återkommer snart ✓';
      btn.disabled = true;
      btn.style.background = '#16a34a';

      setTimeout(function () {
        form.reset();
        btn.textContent = orig;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    });
  });

  /* ──────────────────────────────────────────────
     9. SMOOTH SCROLL FOR ANCHOR LINKS
  ────────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var navHeight = parseInt(getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-h'), 10) || 72;
        var top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

}());
