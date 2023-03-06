import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


// console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");

const galleryListEl = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryListEl);


function createGallery (galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {
return `
<li style = "list-style: none">
<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a>
</li>
`;

})
.join('');
}

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

