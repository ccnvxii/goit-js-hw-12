// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more-btn');

let page = 1;
let query = '';
let totalHits = 0;
let loadedImages = 0;

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  loadedImages = 0;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const response = await getImagesByQuery(query, page);
    if (response.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    totalHits = response.totalHits;
    createGallery(response.hits);
    loadedImages += response.hits.length;

    if (loadedImages < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Try again!',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
loadMoreBtn.addEventListener('click', async function () {
  page += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const response = await getImagesByQuery(query, page);
    createGallery(response.hits);

    loadedImages += response.hits.length;

    if (loadedImages >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }

    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Try again!',
      position: 'topRight',
    });
    console.error(error);
  } finally {
    hideLoader();
  }
});
