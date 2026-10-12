/**
 * Footer — copyright year + privacy link (static markup in index.html).
 * Updates the year automatically.
 */
export function initFooter(): void {
  const yearSpan = document.querySelector<HTMLElement>('[data-i18n="footer_rights"]');
  if (!yearSpan) return;

  // Append current year dynamically while preserving i18n text
  const year = String(new Date().getFullYear());
  if (!yearSpan.textContent?.includes(year)) {
    // i18n re-translation overwrites innerHTML — listen for language changes too
    const updateYear = () => {
      yearSpan.innerHTML = yearSpan.innerHTML.replace(/\d{4}/, year);
    };
    updateYear();
    window.addEventListener('langchange', updateYear);
  }
}
