/**
 * Contact — copy-to-clipboard for the email card.
 */
export function initContact(): void {
  const emailCard = document.getElementById('emailCard');
  const emailAddress = document.getElementById('emailAddress');
  const copyTooltip = document.getElementById('copyTooltip');

  if (!emailCard || !emailAddress || !copyTooltip) return;

  const showTooltip = (): void => {
    copyTooltip.classList.add('show');
    window.setTimeout(() => copyTooltip.classList.remove('show'), 2000);
  };

  const copyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(emailAddress.textContent ?? '');
      showTooltip();
    } catch {
      // Fallback for insecure contexts / denied clipboard permission:
      // select the address so the user can copy it manually
      const range = document.createRange();
      range.selectNodeContents(emailAddress);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      showTooltip();
    }
  };

  emailCard.addEventListener('click', copyEmail);
  emailCard.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      void copyEmail();
    }
  });
}
