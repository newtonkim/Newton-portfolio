import { renderHeader } from './components/header.js';
import { renderHero } from './components/hero.js';
import { renderFooter } from './components/footer.js';
import { siteData } from './data/site-data.js';

const activePage = document.body.dataset.page ?? 'home';

const headerRoot = document.querySelector('[data-component="header"]');
if (headerRoot) {
  renderHeader(headerRoot, siteData.header, activePage);
}

const heroRoot = document.querySelector('[data-component="hero"]');
if (heroRoot && activePage === 'home') {
  renderHero(heroRoot, siteData.hero);
}

const footerRoot = document.querySelector('[data-component="footer"]');
if (footerRoot) {
  renderFooter(footerRoot, siteData.footer);
}

function toggleScrolled() {
  const selectBody = document.body;
  const selectHeader = document.querySelector('#header');
  if (!selectHeader) {
    return;
  }

  if (
    !selectHeader.classList.contains('scroll-up-sticky') &&
    !selectHeader.classList.contains('sticky-top') &&
    !selectHeader.classList.contains('fixed-top')
  ) {
    return;
  }

  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

function setupNavigation() {
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  if (!mobileNavToggleBtn) {
    return;
  }

  const body = document.body;

  function toggleMobileNav() {
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  mobileNavToggleBtn.addEventListener('click', toggleMobileNav);

  document.querySelectorAll('#navmenu a').forEach((navmenu) => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        toggleMobileNav();
      }
    });
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });
}

const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

const scrollTop = document.querySelector('.scroll-top');

function toggleScrollTop() {
  if (scrollTop) {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}

if (scrollTop) {
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}

function initSwiper() {
  document.querySelectorAll('.init-swiper').forEach(function (swiperElement) {
    const config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim());

    if (
      swiperElement.classList.contains('swiper-tab') &&
      typeof initSwiperWithCustomPagination === 'function'
    ) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

function setupIsotope() {
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';
    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function () {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener(
        'click',
        function () {
          isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
          this.classList.add('filter-active');
          initIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          if (typeof aosInit === 'function') {
            aosInit();
          }
        },
        false
      );
    });
  });
}

function setupSkillsAnimation() {
  document.querySelectorAll('.skills-animation').forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function () {
        const progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach((el) => {
          el.style.width = `${el.getAttribute('aria-valuenow')}%`;
        });
      }
    });
  });
}

function initAll() {
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  if (scrollTop) {
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop);
  }

  window.addEventListener('load', aosInit);
  window.addEventListener('load', initSwiper);
  window.addEventListener('load', setupIsotope);

  new PureCounter();
  setupSkillsAnimation();
  GLightbox({
    selector: '.glightbox'
  });

  if (headerRoot) {
    setupNavigation();
  }
}

initAll();
