document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModalBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const exploreBtn = document.getElementById('explore-gallery');

    // --- Get the new counter element ---
    const imageCounter = document.getElementById('image-counter'); // <-- ADD THIS

    // All images
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

    // --- function to update the counter ---
    function updateCounter() { // <-- ADD THIS FUNCTION
        const totalImages = imageUrls.length;
        imageCounter.textContent = `${currentIndex + 1} / ${totalImages}`;
    }

    function openModal(index) {
        currentIndex = index;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = `Image ${currentIndex + 1}`;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        updateCounter();
    }

    function closeModal() {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = `Image ${currentIndex + 1}`;
        updateCounter(); // <-- Update counter when changing image
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = `Image ${currentIndex + 1}`;
        updateCounter();
    }

    // Event Listeners
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index);
        });
    });

    exploreBtn.addEventListener('click', () => {
        // Open modal with the first image in the full list
        openModal(0);
    });

    // Close modal when close button or overlay is clicked
    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navigation buttons
    nextBtn.addEventListener('click', showNextImage);
    prevBtn.addEventListener('click', showPrevImage);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('hidden')) {
            if (e.key === 'ArrowRight') showNextImage();
            else if (e.key === 'ArrowLeft') showPrevImage();
            else if (e.key === 'Escape') closeModal();
        }
    });
});