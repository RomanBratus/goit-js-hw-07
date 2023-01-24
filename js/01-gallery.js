// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:
//
//     1)Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
//     2)Реалізація делегування на div.gallery і отримання url великого зображення.
//     3)Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr
//     і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
//     4)Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
//     5)Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку
//     модального вікна із зображенням з прикладів бібліотеки basicLightbox.

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