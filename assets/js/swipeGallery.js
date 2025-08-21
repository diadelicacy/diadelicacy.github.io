import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.min.js';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery-previews',   // your container
  children: 'a',                  // items inside the container
  pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
});

lightbox.init();