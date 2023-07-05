import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListArray = galleryItems.map((item) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
}).join('');

let instance;

const galleryContainer = document.querySelector('.gallery');
galleryContainer.insertAdjacentHTML('beforeend', galleryListArray);

galleryContainer.addEventListener('click', openImage);
galleryContainer.addEventListener('keydown', modalClose);

function openImage(event) {

  if(event.target.tagName !== 'IMG') {
    return 
  }
  const source = event.target.dataset.source;
  event.preventDefault()
  instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `)
  instance.show()
}

function modalClose(event) {
  if (event.key === "Escape") {
    instance.close();
  }
}

