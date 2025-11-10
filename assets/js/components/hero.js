function buildSocialLinksMarkup(socialLinks) {
  return socialLinks
    .map(
      (link) =>
        `<a href="${link.href || '#'}" aria-label="${link.label}"><i class="${link.icon}"></i></a>`
    )
    .join('');
}

export function buildHeroMarkup(data) {
  const typedItems = data.typedItems.join(', ');
  return `
    <section id="hero" class="hero section dark-background">
      <img
        src="${data.imageSrc}"
        alt="${data.imageAlt}"
        class="custom-image"
        data-aos="fade-in"
        style="width: 37.8%; height: 100%; position: absolute; left: 65%; object-fit: contain; scale: .85;"
      >
      <div class="container" data-aos="zoom-out" data-aos-delay="100">
        <h2>${data.name}</h2>
        <p>${data.tagline}<span class="typed" data-typed-items="${typedItems}">${data.fallbackText}</span><span class="typed-cursor typed-cursor--blink"></span></p>
        <div class="social-links">
          ${buildSocialLinksMarkup(data.socialLinks)}
        </div>
      </div>
    </section>
  `;
}

function startTypedAnimation(data) {
  if (!window.Typed || !data.typedItems.length) {
    return;
  }
  const typedElement = document.querySelector('.typed');
  if (!typedElement) {
    return;
  }
  new Typed('.typed', {
    strings: data.typedItems,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}

export function renderHero(container, data) {
  container.innerHTML = buildHeroMarkup(data);
  startTypedAnimation(data);
}

export { buildSocialLinksMarkup };
