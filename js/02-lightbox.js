import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryItemsMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<li>
<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
		})
		.join("");
}
function onGalleryContainerClick(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== "IMG") {
		return;
	}
}
const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionsDelay: 250,
});
