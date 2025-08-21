document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModalBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const exploreBtn = document.getElementById('explore-gallery');
    const imageCounter = document.getElementById('image-counter');

    // All images and their names
    const imageUrls = [
        './assets/images/food_biryani.jpg',
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

    const imageNames = [
        'Biryani',
        'Chocolate Cake',
        'Catering Service',
        'Vada Pav',
        'Indian Thali',
        'Sabudana Vada',
        'Kheema Pav',
        'Butter Chicken',
        'Pastry',
        'Pastel Cake',
        'Catering Setup',
        'Catering Display',
    ];

    let currentIndex = 0;

    function updateCounter() {
        const totalImages = imageUrls.length;
        imageCounter.textContent = `${imageNames[currentIndex]} (${currentIndex + 1}/${totalImages})`;
    }

    function openModal(index) {
        currentIndex = index;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = imageNames[currentIndex];
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
        modalImg.alt = imageNames[currentIndex];
        updateCounter();
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        modalImg.src = imageUrls[currentIndex];
        modalImg.alt = imageNames[currentIndex];
        updateCounter();
    }

    // --- Event Listeners ---
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(index);
        });
    });

    exploreBtn.addEventListener('click', () => {
        openModal(0);
    });

    closeModalBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

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

    // --- Swipe Navigation for mobile/tablet ---
    let startX;
    const swipeThreshold = 50;

    modalImg.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    modalImg.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling while swiping
    });

    modalImg.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swiped left
                showNextImage();
            } else {
                // Swiped right
                showPrevImage();
            }
        }
    });
});