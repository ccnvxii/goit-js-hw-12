import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');
const loadMoreBtn = document.querySelector('.load-more-btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `
      <li class="photo-card">
        <a href="${image.largeImageURL}">
          <img 
            src="${image.webformatURL}" 
            alt="${image.tags}" 
            class="photo-img"
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${image.likes}</p>
          <p class="info-item"><b>Views:</b> ${image.views}</p>
          <p class="info-item"><b>Comments:</b> ${image.comments}</p>
          <p class="info-item"><b>Downloads:</b> ${image.downloads}</p>
        </div>
      </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}
export function showLoader() {
  loader.style.display = 'flex';
}
export function hideLoader() {
  loader.style.display = 'none';
}
export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'flex';
}
export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}
