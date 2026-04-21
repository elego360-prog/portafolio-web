const cards = document.querySelectorAll('.card');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

function openLightbox(card) {
  const image = card.dataset.image;
  const title = card.dataset.title;
  const description = card.dataset.description;
  const preview = card.querySelector('img');

  lightboxImage.src = image;
  lightboxImage.alt = preview ? preview.alt : title;
  lightboxTitle.textContent = title;
  lightboxDescription.textContent = description;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lightboxImage.src = '';
}

cards.forEach(card => {
  card.addEventListener('click', () => openLightbox(card));
  card.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(card);
    }
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxBackdrop.addEventListener('click', closeLightbox);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
    closeLightbox();
  }
});
