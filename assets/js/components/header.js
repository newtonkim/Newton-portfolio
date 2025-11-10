export function buildNavLinkMarkup(link, isActive = false) {
  const activeClass = isActive ? ' class="active"' : '';
  return `<li><a href="${link.href}"${activeClass}>${link.label}</a></li>`;
}

export function buildNavLinksMarkup(links, activePage) {
  return links
    .map((link) => buildNavLinkMarkup(link, link.id === activePage))
    .join('');
}

export function renderHeader(container, data, activePage) {
  container.innerHTML = `
    <header id="header" class="header d-flex align-items-center fixed-top">
      <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="${data.brandUrl}" class="logo d-flex align-items-center">
          <h1 class="sitename">${data.brandName}</h1>
        </a>
        <nav id="navmenu" class="navmenu">
          <ul>
            ${buildNavLinksMarkup(data.navLinks, activePage)}
          </ul>
          <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  `;
}
