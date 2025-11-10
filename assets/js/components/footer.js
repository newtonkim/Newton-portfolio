export function renderFooter(container, data) {
  container.innerHTML = `
    <footer id="footer" class="footer dark-background">
      <div class="container">
        <h4 class="sitename">${data.title}</h4>
        <p>${data.message}</p>
        <div class="container">
          <div class="copyright">
            <span>${data.copyrightPrefix}</span>
            <strong class="px-1 sitename">${data.copyName}</strong>
            <span>${data.copySuffix}</span>
          </div>
          <div class="credits">
            ${data.credit}
          </div>
        </div>
      </div>
    </footer>
  `;
}
