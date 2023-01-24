import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const renderGalleryItems = (pictures) =>
    pictures.reduce(
        (acc, picture) =>
            acc +
            `<a class="gallery__item" href=${picture.original}>
      <img class="gallery__image" src=${picture.preview} alt=${picture.description} />
    </a>
    `,
        ""
    );

const insertGalleryItems = (string) => {

    gallery.insertAdjacentHTML("beforeend", string);
};
insertGalleryItems(renderGalleryItems(galleryItems));

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
});
