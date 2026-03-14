/* ============================================================
   SYNS NU MEDIA — main.js  (REDESIGN v2)
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────
     1. CUSTOM CURSOR  (desktop only)
  ────────────────────────────────────────────── */
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  if (dot && ring && window.matchMedia('(hover: hover)').matches) {
    let mx = 0, my = 0;      // mouse target
    let rx = 0, ry = 0;      // ring position (lerped)

    document.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left  = mx + 'px';
      dot.style.top   = my + 'px';
    });

    (function lerpRing() {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top  = ry + 'px';
      requestAnimationFrame(lerpRing);
    })();

    // hide cursor when leaving window
    document.addEventListener('mouseleave', function () {
      dot.style.opacity  = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      dot.style.opacity  = '1';
      ring.style.opacity = '1';
    });
  }

  /* ──────────────────────────────────────────────
     2. STICKY NAV
  ────────────────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ──────────────────────────────────────────────
     3. ACTIVE NAV LINK
  ────────────────────────────────────────────── */
  const currentPath = window.location.pathname.replace(/\/$/, '');
  document.querySelectorAll('#nav a, #mobile-menu a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (!href) return;
    const linkPath = href.replace(/\/$/, '').replace(/^.*\/(?=[^/]*$)/, '/');
    if (currentPath.endsWith(href.replace('./', '').replace(/\/$/, ''))
        || (href === 'index.html' && (currentPath === '' || currentPath.endsWith('/')))) {
      a.classList.add('active');
    }
  });

  /* ──────────────────────────────────────────────
     4. HAMBURGER / MOBILE MENU
  ────────────────────────────────────────────── */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');

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
    // close when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ──────────────────────────────────────────────
     5. ACCORDION
  ────────────────────────────────────────────── */
  document.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const item  = trigger.closest('.accordion__item');
      const body  = item.querySelector('.accordion__body');
      const inner = item.querySelector('.accordion__body-inner');
      const isOpen = item.classList.contains('open');

      // close all siblings
      const allItems = item.closest('.accordion').querySelectorAll('.accordion__item');
      allItems.forEach(function (i) {
        i.classList.remove('open');
        const b = i.querySelector('.accordion__body');
        if (b) b.style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });

  /* ──────────────────────────────────────────────
     6. SCROLL REVEAL  (single + stagger)
  ────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  // Stagger: set --i on children, observe parent
  document.querySelectorAll('.reveal-stagger').forEach(function (parent) {
    Array.from(parent.children).forEach(function (child, i) {
      child.style.setProperty('--i', i);
    });
    revealObserver.observe(parent);
  });

  /* ──────────────────────────────────────────────
     7. COUNTER ANIMATION
  ────────────────────────────────────────────── */
  const counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      counterObserver.unobserve(entry.target);
      const el     = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const dur    = 1800;
      const start  = performance.now();
      const isFloat = String(target).includes('.');

      function tick(now) {
        const t   = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic
        const val  = target * ease;
        el.textContent = prefix + (isFloat ? val.toFixed(1) : Math.round(val)) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(function (el) {
    counterObserver.observe(el);
  });

  /* ──────────────────────────────────────────────
     8. VIDEO OVERLAY
  ────────────────────────────────────────────── */
  document.querySelectorAll('.video-wrap').forEach(function (wrap) {
    const video   = wrap.querySelector('video');
    const overlay = wrap.querySelector('.video-overlay');
    if (!video || !overlay) return;

    overlay.addEventListener('click', function () {
      video.play();
      wrap.classList.add('playing');
    });

    video.addEventListener('pause', function () {
      wrap.classList.remove('playing');
    });
  });

  /* ──────────────────────────────────────────────
     9. SERVICES LIST HOVER REVEAL
  ────────────────────────────────────────────── */
  const serviceSection = document.querySelector('.services-section');
  if (serviceSection) {
    const items   = serviceSection.querySelectorAll('.services-list__item');
    const imgWrap = serviceSection.querySelector('.services-img-wrap');
    const img     = serviceSection.querySelector('.services-img');

    if (items.length && imgWrap && img) {
      // CSS-based gradients for each service (no external photos needed)
      const gradients = [
        'linear-gradient(135deg, #2d1b4e 0%, #7c3aed 100%)',  // sociala medier
        'linear-gradient(135deg, #1a3a2a 0%, #16a34a 100%)',  // hemsida
        'linear-gradient(135deg, #3b1a1a 0%, #dc2626 100%)',  // menyfoto
        'linear-gradient(135deg, #1a2a3b 0%, #2563eb 100%)',  // print
        'linear-gradient(135deg, #3b2a00 0%, #d97706 100%)',  // annonsering
      ];

      items.forEach(function (item, i) {
        item.addEventListener('mouseenter', function (e) {
          img.style.background = gradients[i] || gradients[0];
          img.style.display    = 'block';

          // show label inside the image box
          const label = item.querySelector('h3');
          imgWrap.querySelector('.services-img-label').textContent = label ? label.textContent : '';

          // position near cursor within section
          updateImgPos(e);

          imgWrap.classList.add('active');
          items.forEach(function (it) { it.classList.remove('active'); });
          item.classList.add('active');
        });

        item.addEventListener('mousemove', updateImgPos);

        item.addEventListener('mouseleave', function () {
          imgWrap.classList.remove('active');
          item.classList.remove('active');
        });
      });

      function updateImgPos(e) {
        const rect   = serviceSection.getBoundingClientRect();
        const x      = e.clientX - rect.left;
        const y      = e.clientY - rect.top;
        imgWrap.style.left = (x + 24) + 'px';
        imgWrap.style.top  = (y - 60) + 'px';
      }
    }
  }

  /* ──────────────────────────────────────────────
     10. FORM FEEDBACK
  ────────────────────────────────────────────── */
  document.querySelectorAll('form.contact-form, form.lead-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      if (!btn) return;
      const orig = btn.textContent;
      btn.textContent = '✓ Meddelande skickat!';
      btn.style.background = '#16a34a';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = orig;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 4000);
    });
  });

  /* ──────────────────────────────────────────────
     11. PROJECT SLIDER (arrow nav)
  ────────────────────────────────────────────── */
  const projectSlider = document.querySelector('.projects-slider');
  if (projectSlider) {
    const track = projectSlider.querySelector('.projects-track');
    const prev  = projectSlider.querySelector('.slider-prev');
    const next  = projectSlider.querySelector('.slider-next');
    if (track && next) {
      let idx = 0;
      const cards = track.querySelectorAll('.project-entry');
      const visible = function () { return window.innerWidth < 640 ? 1 : 2; };

      function go(dir) {
        const max = Math.ceil(cards.length / visible()) - 1;
        idx = Math.min(Math.max(idx + dir, 0), max);
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        if (prev) prev.disabled = idx === 0;
        next.disabled = idx === max;
      }

      if (prev) prev.addEventListener('click', function () { go(-1); });
      next.addEventListener('click', function () { go(1); });
      go(0);
    }
  }

})();
