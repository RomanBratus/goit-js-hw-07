import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const renderGalleryItems = (pictures) => {
    return pictures.reduce(
        (acc, picture) =>
            acc +
            `<div class="gallery__item">
  <a class="gallery__link" href=${picture.original}>
    <img
      class="gallery__image"
      src=${picture.preview}
      data-source=${picture.original}
      alt=${picture.description}
    />
  </a>
</div>`,
        ""
    );
};
const insertGalleryItems = (string) => {

    gallery.insertAdjacentHTML("beforeend", string);
};
insertGalleryItems(renderGalleryItems(galleryItems));

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    const instance = basicLightbox.create(
        `<img src=${evt.target.dataset.source} width="800" height="600" />`,
        {
            onShow: instance => {
                window.addEventListener('keydown', closeModal);
            },
            onClose: instance => {
                window.removeEventListener('keydown', closeModal);
            },
        }
    );
    function closeModal(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    }
    instance.show();
}