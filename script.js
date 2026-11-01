const lightbox = document.getElementById('lightbox');
const expanded = document.getElementById('lightbox-image');
document.querySelectorAll('[data-image]').forEach(button => {
  button.addEventListener('click', () => {
    expanded.src = button.dataset.image;
    expanded.alt = button.dataset.alt || 'Expanded project screenshot';
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
    else window.open(button.dataset.image, '_blank', 'noopener');
  });
});
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});
