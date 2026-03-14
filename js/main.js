/* ============================================================
   SYNS NU MEDIA — main.js  v3 (CargoWave-stil)
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────
     1. STICKY NAV  (transparent over full-screen hero)
  ────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  const isFsheroPage = document.body.classList.contains('fshero-page');

  if (nav) {
    function updateNav() {
      var scrolled = window.scrollY > 20;
      nav.classList.toggle('scrolled', scrolled);
      // On fshero pages: invert logo/hamburger when over dark hero
      if (isFsheroPage) {
        nav.classList.toggle('nav--over-hero', !scrolled);
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav(); // run once on load
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

  /* ──────────────────────────────────────────────
     10. SERVICES CAROUSEL
  ────────────────────────────────────────────── */
  (function () {
    var viewport = document.getElementById('sc-viewport');
    var track    = document.getElementById('sc-track');
    var btnPrev  = document.getElementById('sc-prev');
    var btnNext  = document.getElementById('sc-next');
    if (!viewport || !track) return;

    var cards     = Array.from(track.querySelectorAll('.sc-card'));
    var cardCount = cards.length;

    /* 10a. Scroll-reveal: cards animate in when entering viewport */
    var scRevObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('sc-visible');
          scRevObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(function (card) { scRevObs.observe(card); });

    /* 10b. Helpers */
    function getCardWidth() {
      return cards[0] ? cards[0].offsetWidth + 20 : 0;
    }

    function currentIndex() {
      return Math.max(0, Math.min(
        Math.round(viewport.scrollLeft / getCardWidth()),
        cardCount - 1
      ));
    }

    function scrollToIdx(idx) {
      idx = Math.max(0, Math.min(idx, cardCount - 1));
      viewport.scrollTo({ left: idx * getCardWidth(), behavior: 'smooth' });
    }

    function syncUI() {
      var idx = currentIndex();
      if (btnPrev) {
        btnPrev.disabled = (idx === 0);
        btnPrev.classList.toggle('sc-arrow--active', idx > 0);
      }
      if (btnNext) {
        btnNext.disabled = (idx >= cardCount - 1);
        btnNext.classList.toggle('sc-arrow--active', idx < cardCount - 1);
      }
    }

    /* 10c. Arrow buttons */
    if (btnPrev) btnPrev.addEventListener('click', function () { scrollToIdx(currentIndex() - 1); });
    if (btnNext) btnNext.addEventListener('click', function () { scrollToIdx(currentIndex() + 1); });

    /* 10e. Sync on scroll (debounced) */
    var scrollTimer;
    viewport.addEventListener('scroll', function () {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(syncUI, 80);
    }, { passive: true });

    /* 10f. Mouse drag */
    var dragging = false, dragX = 0, scrollX = 0;
    viewport.addEventListener('mousedown', function (e) {
      dragging = true; dragX = e.pageX; scrollX = viewport.scrollLeft;
      viewport.classList.add('is-dragging');
    });
    document.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      viewport.scrollLeft = scrollX - (e.pageX - dragX);
    });
    document.addEventListener('mouseup', function () {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove('is-dragging');
      scrollToIdx(currentIndex());
    });

    /* 10g. Keyboard */
    viewport.setAttribute('tabindex', '0');
    viewport.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft')  { e.preventDefault(); scrollToIdx(currentIndex() - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); scrollToIdx(currentIndex() + 1); }
    });

    syncUI();
  })();

  /* ──────────────────────────────────────────────
     13. NEWSLETTER POPUP
  ────────────────────────────────────────────── */
  (function () {
    var popup    = document.getElementById('nl-popup');
    var backdrop = document.getElementById('nl-popup-backdrop');
    var closeBtn = document.getElementById('nl-popup-close');
    var popupForm = document.getElementById('nl-popup-form');
    var footerForm = document.getElementById('footer-nl-form');

    if (!popup || !backdrop) return;

    // Only show once per session
    if (sessionStorage.getItem('nl-dismissed')) return;

    function openPopup() {
      popup.classList.add('is-open');
      backdrop.classList.add('is-open');
    }

    function closePopup() {
      popup.classList.remove('is-open');
      backdrop.classList.remove('is-open');
      sessionStorage.setItem('nl-dismissed', '1');
    }

    // Trigger after scrolling 60% of the page
    function onScroll() {
      var scrolled = window.scrollY + window.innerHeight;
      var total = document.documentElement.scrollHeight;
      if (scrolled / total >= 0.6) {
        openPopup();
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    closeBtn && closeBtn.addEventListener('click', closePopup);
    backdrop.addEventListener('click', closePopup);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePopup();
    });

    // Handle popup form submit
    if (popupForm) {
      popupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        popupForm.innerHTML = '<p style="color:var(--blue);font:600 15px var(--body);text-align:center;padding:8px 0;">✓ Tack! Du är nu prenumerant.</p>';
        setTimeout(closePopup, 2200);
      });
    }

    // Handle footer form submit
    if (footerForm) {
      footerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        footerForm.innerHTML = '<p style="color:var(--blue);font:600 14px var(--body);">✓ Tack! Välkommen som prenumerant.</p>';
      });
    }
  })();

  /* ──────────────────────────────────────────────
     12. VP SECTION — progress bar trigger on scroll
  ────────────────────────────────────────────── */
  var vpCard = document.querySelector('.vp-float-card');
  if (vpCard) {
    var vpObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.closest('.vp-stadium__photo').classList.add('vp-bar-active');
          vpObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    vpObs.observe(vpCard);
  }

})();
