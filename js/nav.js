/* ═══════════════════════════════════════════════════
   SOMBREIRO SHIPPING — SHARED NAV SCRIPT
   Injects full nav HTML, handles popovers & mobile
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── NAV HTML ── */
  function buildNav(activePage) {
    return `
    <!-- Utility bar -->
    <div class="util-bar">
      <div class="util-bar-inner">
        <span class="util-item">
          <span class="material-icons-outlined util-icon">public</span>
          Nigeria Operations
        </span>
        <a href="contact.html" class="util-item">
          <span class="material-icons-outlined util-icon">chat_bubble</span>
          Make an Enquiry
        </a>
        <a href="contact.html" class="util-item util-cta">
          Contact Us
        </a>
      </div>
    </div>

    <!-- Main nav -->
    <nav class="site-nav" id="siteNav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="images/logo.png" alt="Sombreiro Shipping & Logistics Ltd" />
        </a>

        <ul class="nav-items" id="navItems">

          <li class="nav-item" data-popover="services">
            <button class="nav-item-btn ${activePage === 'services' ? 'active' : ''}" aria-haspopup="true" aria-expanded="false">
              Services
              <span class="material-icons-outlined chevron">expand_more</span>
            </button>
          </li>

          <li class="nav-item" data-popover="about">
            <button class="nav-item-btn ${activePage === 'about' ? 'active' : ''}" aria-haspopup="true" aria-expanded="false">
              About
              <span class="material-icons-outlined chevron">expand_more</span>
            </button>
          </li>

          <li class="nav-item">
            <a href="index.html" class="nav-item-btn ${activePage === 'home' ? 'active' : ''}">Home</a>
          </li>

        </ul>

        <div class="nav-actions">
          <!-- Search icon -->
          <button class="nav-action-btn" id="searchToggle" aria-label="Search">
            <span class="material-icons-outlined">search</span>
          </button>
          <a href="contact.html" class="nav-contact-btn">
            Make an Enquiry
            <span class="material-icons-outlined contact-arrow">arrow_forward</span>
          </a>
        </div>

        <!-- Hamburger -->
        <button class="hamburger" id="hamburgerBtn" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- ── POPOVERS ── -->
    <div class="nav-popover-overlay" id="popoverOverlay"></div>

    <!-- Services popover -->
    <div class="nav-popover" id="popover-services">
      <div class="popover-inner" style="grid-template-columns: 200px 1fr; align-items: start;">
        <div class="popover-aside">
          <div class="popover-label">Our Services</div>
          <h3>What We Do</h3>
          <p>Six specialist maritime service lines for vessel owners, operators, and cargo interests across Nigeria.</p>
          <a href="services.html" class="popover-aside-link">View all services →</a>
        </div>
        <div>
          <div class="popover-grid cols-2">
            <a href="services.html#ship-agency" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined service-icon">local_shipping</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Ship Agency</div>
                <div class="popover-link-desc">Full port agency across all Nigerian ports</div>
              </div>
            </a>
            <a href="services.html#husbandry" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined service-icon">directions_boat</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Husbandry Services</div>
                <div class="popover-link-desc">Crew changes, provisions, launch services</div>
              </div>
            </a>
            <a href="services.html#protective" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined service-icon">shield</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Ship Protective Agency</div>
                <div class="popover-link-desc">P&I, cargo supervision & independent reporting</div>
              </div>
            </a>
            <a href="services.html#spares" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined service-icon">inventory_2</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Ship Spares Logistics</div>
                <div class="popover-link-desc">Time-critical customs clearance & delivery</div>
              </div>
            </a>
            <a href="services.html#management" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined service-icon">engineering</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Ship Management</div>
                <div class="popover-link-desc">Technical & crew management in Nigeria</div>
              </div>
            </a>
            <a href="services.html#cargo" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined service-icon">description</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Cargo Documentation</div>
                <div class="popover-link-desc">Customs clearance & procurement support</div>
              </div>
            </a>
          </div>
          <div class="popover-footer">
            <p>Need help choosing the right service?</p>
            <a href="contact.html">Speak to our team →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- About popover -->
    <div class="nav-popover" id="popover-about">
      <div class="popover-inner" style="grid-template-columns: 200px 1fr; align-items: start;">
        <div class="popover-aside">
          <div class="popover-label">The Company</div>
          <h3>About Sombreiro</h3>
          <p>A Nigerian-owned maritime services company serving vessel owners and operators across Nigeria's major ports.</p>
          <a href="about.html" class="popover-aside-link">Learn more →</a>
        </div>
        <div>
          <div class="popover-grid cols-2">
            <a href="about.html#scroll-point" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined">book</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Our Story</div>
                <div class="popover-link-desc">From the Niger Delta to Nigeria's ports</div>
              </div>
            </a>
            <a href="about.html#leadership" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined">groups</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Leadership</div>
                <div class="popover-link-desc">Meet the team behind the company</div>
              </div>
            </a>
            <a href="about.html#dna" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined">insights</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Our Core Strengths</div>
                <div class="popover-link-desc">Agency · Husbandry · Protective</div>
              </div>
            </a>
            <a href="about.html#vm" class="popover-link">
              <div class="popover-link-icon"><span class="material-icons-outlined">track_changes</span></div>
              <div class="popover-link-text">
                <div class="popover-link-title">Vision & Mission</div>
                <div class="popover-link-desc">What drives everything we do</div>
              </div>
            </a>
          </div>
          <div class="popover-footer">
            <p>100% Nigerian-owned · 24/7 availability · 6 ports covered</p>
            <a href="contact.html">Make an enquiry →</a>
          </div>
        </div>
      </div>
    </div>

    <!-- ── MOBILE DRAWER ── -->
    <div class="mobile-drawer" id="mobileDrawer">

      <div class="mobile-nav-section">
        <button class="mobile-nav-header" data-mob="mob-services">
          Services
          <span class="material-icons-outlined chevron">expand_more</span>
        </button>
        <div class="mobile-nav-links" id="mob-services">
          <a href="services.html#ship-agency" class="mobile-nav-link ${activePage === 'services' ? 'active' : ''}"><span class="mobile-nav-link-icon"><span class="material-icons-outlined service-icon">local_shipping</span></span> Ship Agency</a>
          <a href="services.html#husbandry" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined service-icon">directions_boat</span></span> Husbandry Services</a>
          <a href="services.html#protective" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined service-icon">shield</span></span> Protective Agency</a>
          <a href="services.html#spares" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined service-icon">inventory_2</span></span> Ship Spares Logistics</a>
          <a href="services.html#management" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined service-icon">engineering</span></span> Ship Management</a>
          <a href="services.html#cargo" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined service-icon">description</span></span> Cargo Documentation</a>
        </div>
      </div>

      <div class="mobile-nav-section">
        <button class="mobile-nav-header" data-mob="mob-about">
          About
          <span class="material-icons-outlined chevron">expand_more</span>
        </button>
        <div class="mobile-nav-links" id="mob-about">
          <a href="about.html" class="mobile-nav-link ${activePage === 'about' ? 'active' : ''}"><span class="mobile-nav-link-icon"><span class="material-icons-outlined">book</span></span> About Us</a>
          <a href="about.html#scroll-point" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined">flag</span></span> Our Story</a>
          <a href="about.html#leadership" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined">groups</span></span> Leadership</a>
          <a href="about.html#vm" class="mobile-nav-link"><span class="mobile-nav-link-icon"><span class="material-icons-outlined">track_changes</span></span> Vision & Mission</a>
        </div>
      </div>

      <div class="mobile-nav-section">
        <a href="index.html" class="mobile-nav-header" style="text-decoration:none; color:inherit; justify-content:flex-start; gap:0;">
          Home
        </a>
      </div>

      <div class="mobile-cta-wrap">
        <a href="contact.html" class="mobile-cta-btn primary">Make an Enquiry</a>
        <a href="services.html" class="mobile-cta-btn outline">View All Services</a>
      </div>
    </div>

    <!-- Nav spacer (pushes page content below fixed bars) -->
    <div class="nav-spacer"></div>
    
    <!-- Search overlay -->
    <div class="search-overlay" id="searchOverlay" aria-hidden="true">
      <div class="search-inner">
        <button class="search-close" id="searchClose" aria-label="Close search">✕</button>
        <h3>Search the site</h3>
        <div class="search-input-wrap">
          <input id="siteSearchInput" class="site-search-input" type="search" placeholder="Search services, pages, and content..." aria-label="Search site" />
          <button id="siteSearchBtn" class="site-search-btn">Search</button>
        </div>
        <div id="siteSearchResults" class="search-results" role="list"></div>
      </div>
    </div>
    `;
  }

  /* ── INJECT ── */
  function injectNav() {
    const placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;
    const page = placeholder.dataset.page || 'home';
    placeholder.outerHTML = buildNav(page);
    initNav();
  }

  /* ── INIT INTERACTIONS ── */
  function initNav() {
    const siteNav   = document.getElementById('siteNav');
    const overlay   = document.getElementById('popoverOverlay');
    const hamburger = document.getElementById('hamburgerBtn');
    const drawer    = document.getElementById('mobileDrawer');
    let   openPopover = null;

    /* Scroll shadow */
    window.addEventListener('scroll', () => {
      siteNav?.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    /* ── Desktop popovers ── */
    function openPop(id) {
      if (openPopover === id) { closePop(); return; }
      closePop(false);
      openPopover = id;

      const pop  = document.getElementById('popover-' + id);
      const item = document.querySelector(`.nav-item[data-popover="${id}"]`);
      const btn  = item?.querySelector('.nav-item-btn');

      pop?.classList.add('active');
      overlay?.classList.add('active');
      item?.classList.add('open');
      btn?.setAttribute('aria-expanded', 'true');
    }

    function closePop(resetRef = true) {
      document.querySelectorAll('.nav-popover.active').forEach(p => p.classList.remove('active'));
      overlay?.classList.remove('active');
      document.querySelectorAll('.nav-item.open').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.nav-item-btn')?.setAttribute('aria-expanded', 'false');
      });
      if (resetRef) openPopover = null;
    }

    /* Nav item clicks */
    document.querySelectorAll('.nav-item[data-popover]').forEach(item => {
      item.querySelector('.nav-item-btn')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openPop(item.dataset.popover);
      });
    });

    /* Close on overlay click */
    overlay?.addEventListener('click', closePop);

    /* Close on Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closePop();
    });

    /* Prevent popover close when clicking inside */
    document.querySelectorAll('.nav-popover').forEach(p => {
      p.addEventListener('click', e => e.stopPropagation());
    });

    /* ── Mobile drawer ── */
    hamburger?.addEventListener('click', () => {
      const isOpen = drawer?.classList.contains('open');
      if (isOpen) {
        drawer?.classList.remove('open');
        hamburger?.classList.remove('open');
        document.body.style.overflow = '';
      } else {
        drawer?.classList.add('open');
        hamburger?.classList.add('open');
        document.body.style.overflow = 'hidden';
        closePop();
      }
    });

    /* Mobile accordion */
    document.querySelectorAll('.mobile-nav-header[data-mob]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.dataset.mob;
        const links    = document.getElementById(targetId);
        const isOpen   = links?.classList.contains('open');

        document.querySelectorAll('.mobile-nav-links.open').forEach(l => l.classList.remove('open'));
        document.querySelectorAll('.mobile-nav-header.open').forEach(b => b.classList.remove('open'));

        if (!isOpen) {
          links?.classList.add('open');
          btn.classList.add('open');
        }
      });
    });

    /* Close drawer on link click */
    document.querySelectorAll('.mobile-nav-link, .mobile-cta-btn').forEach(link => {
      link.addEventListener('click', () => {
        drawer?.classList.remove('open');
        hamburger?.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    /* Search toggle: open overlay */
    const searchToggle = document.getElementById('searchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');

    function openSearch() {
      searchOverlay?.classList.add('active');
      searchOverlay?.setAttribute('aria-hidden', 'false');
      document.getElementById('siteSearchInput')?.focus();
      closePop();
    }

    function closeSearch() {
      searchOverlay?.classList.remove('active');
      searchOverlay?.setAttribute('aria-hidden', 'true');
      document.getElementById('siteSearchResults').innerHTML = '';
    }

    searchToggle?.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });

    searchClose?.addEventListener('click', closeSearch);
    searchOverlay?.addEventListener('click', (e) => { if (e.target === searchOverlay) closeSearch(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });
  }

  /* ── RUN ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

})();
