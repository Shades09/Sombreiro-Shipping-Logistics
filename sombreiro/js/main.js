document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const fadeEls = document.querySelectorAll('.fade-in');
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevButton = document.querySelector('.hero-arrow.prev');
  const nextButton = document.querySelector('.hero-arrow.next');
  const initialSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
  let currentSlide = initialSlide >= 0 ? initialSlide : 0;
  let slideInterval = null;

  const updateNavbar = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateNavbar);
  updateNavbar();

  hamburger?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => observer.observe(el));

  const goToSlide = (index) => {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentSlide);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentSlide);
    });
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const startCarousel = () => {
    if (slideInterval) return;
    slideInterval = window.setInterval(nextSlide, 7000);
  };

  const stopCarousel = () => {
    if (!slideInterval) return;
    clearInterval(slideInterval);
    slideInterval = null;
  };

  if (slides.length) {
    goToSlide(0);
    startCarousel();
  }

  prevButton?.addEventListener('click', () => {
    prevSlide();
    stopCarousel();
    startCarousel();
  });

  nextButton?.addEventListener('click', () => {
    nextSlide();
    stopCarousel();
    startCarousel();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const targetIndex = Number(dot.dataset.slide ?? index);
      goToSlide(targetIndex);
      stopCarousel();
      startCarousel();
    });
  });

  const heroCarousel = document.querySelector('.hero-carousel');
  heroCarousel?.addEventListener('mouseenter', stopCarousel);
  heroCarousel?.addEventListener('mouseleave', startCarousel);

  setTimeout(() => {
    document.querySelectorAll('.hero .fade-in').forEach(el => el.classList.add('visible'));
  }, 100);
});

/* ── SITE SEARCH + NEWSLETTER HANDLERS ── */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('siteSearchInput');
  const searchBtn = document.getElementById('siteSearchBtn');
  const resultsEl = document.getElementById('siteSearchResults');
  const pagesToIndex = ['index.html','about.html','services.html','contact.html'];
  const pageCacheKey = 'sitePagesCache_v1';

  async function fetchPage(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const text = await res.text();
      return { url, text };
    } catch (e) {
      return null;
    }
  }

  async function buildIndex() {
    const cached = sessionStorage.getItem(pageCacheKey);
    if (cached) return JSON.parse(cached);
    const prom = pagesToIndex.map(p => fetchPage(p));
    const pages = (await Promise.all(prom)).filter(Boolean);
    const index = pages.map(p => {
      // crude extraction: title and body
      const titleMatch = p.text.match(/<title>(.*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : p.url;
      const body = p.text.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
      return { url: p.url, title, body };
    });
    sessionStorage.setItem(pageCacheKey, JSON.stringify(index));
    return index;
  }

  function snippet(text, q) {
    const i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i === -1) return text.slice(0, 140) + '...';
    const start = Math.max(0, i - 40);
    return '...' + text.slice(start, start + 140).trim() + '...';
  }

  async function doSearch(q) {
    resultsEl.innerHTML = '<div class="search-result">Searching…</div>';
    const index = await buildIndex();
    if (!q.trim()) { resultsEl.innerHTML = ''; return; }
    const results = index.map(p => {
      const score = (p.title.toLowerCase().includes(q.toLowerCase()) ? 3 : 0) + (p.body.toLowerCase().includes(q.toLowerCase()) ? 1 : 0);
      return { ...p, score };
    }).filter(r => r.score > 0).sort((a,b)=>b.score-a.score);
    if (!results.length) { resultsEl.innerHTML = '<div class="search-result">No results found.</div>'; return; }
    resultsEl.innerHTML = results.map(r => `<div class="search-result"><a href="${r.url}">${r.title}</a><p>${snippet(r.body, q)}</p></div>`).join('');
  }

  searchBtn?.addEventListener('click', (e) => { e.preventDefault(); if (!searchInput) return; doSearch(searchInput.value); });
  searchInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); doSearch(searchInput.value); } });

  // Newsletter handling (works offline via localStorage; replace data-action on form to POST to backend)
  document.querySelectorAll('#newsletterForm').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = form.querySelector('#newsletterEmail');
      const statusEl = form.parentElement.querySelector('#newsletterStatus');
      const email = emailInput?.value?.trim();
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        if (statusEl) statusEl.textContent = 'Please enter a valid email address.';
        return;
      }
      // If form has a data-action, try to POST there
      const action = form.dataset.action;
      if (action) {
        try {
          const res = await fetch(action, { method: 'POST', body: JSON.stringify({ email }), headers: { 'Content-Type': 'application/json' } });
          if (res.ok) {
            if (statusEl) statusEl.textContent = 'Subscribed — thank you!';
            form.reset();
            return;
          }
        } catch (err) {
          // fallthrough to local store
        }
      }
      // Save locally as fallback
      const key = 'newsletterSubscribers_v1';
      const cur = JSON.parse(localStorage.getItem(key) || '[]');
      if (!cur.includes(email)) cur.push(email);
      localStorage.setItem(key, JSON.stringify(cur));
      if (statusEl) statusEl.textContent = 'Subscribed locally — replace form action to send live.';
      form.reset();
    });
  });
});
