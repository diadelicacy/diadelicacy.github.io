document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModalBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const exploreBtn = document.getElementById('explore-gallery');

    // --- All images including the ones not in preview ---
    const imageUrls = [
        './assets/images/food_biryani.avif',
        './assets/images/food_baking_cake1.jpeg',
        './assets/images/food_catering2.jpg',
        './assets/images/food_vadapav.jpg',
        './assets/images/food_thali.jpg',
        './assets/images/food_sabudana_vada.jpg',
        './assets/images/food_kheemapav.jpg',
        './assets/images/food_butter_chicken.png',
        './assets/images/food_baking_pastry1.jpeg',
        './assets/images/food_baking_cake2.jpg',
        './assets/images/food_catering1.jpg',
        './assets/images/food_catering3.jpg',
    ];

    let currentIndex = 0;

    function openModal(index) {
        currentIndex = index;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = `Image ${currentIndex + 1}`;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }

    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = `Image ${currentIndex + 1}`;
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = `Image ${currentIndex + 1}`;
    }

    // Click preview images
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index);
        });
    });

    // Explore gallery button opens modal at first image (or index 3 if you want to skip previews)
    exploreBtn.addEventListener('click', () => {
        openModal(0); // change 0 → 3 to start from image after previews
    });

    // Close modal
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target !== modalImg) {
            closeModal();
        }
    });

    // Navigation buttons
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'ArrowRight') showNextImage();
            else if (e.key === 'ArrowLeft') showPrevImage();
            else if (e.key === 'Escape') closeModal();
        }
    });
});
