// gallery.js
import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '.grid',          // container with images
  children: 'a',             // selector for slides
  pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
});

lightbox.init();
