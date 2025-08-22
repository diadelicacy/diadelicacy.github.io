document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModalBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const exploreBtn = document.getElementById('explore-gallery');
    const imageCounter = document.getElementById('image-counter');
    const heroHeader = document.getElementById('hero-header');

    // All images and their names
    const imageUrls = [
        './assets/images/food_biryani.jpg',
        './assets/images/food_vadapav.jpg',
        './assets/images/food_thali.jpg',
        './assets/images/food_sabudana_vada.jpg',
        './assets/images/food_kheemapav.jpg',
        './assets/images/food_butter_chicken.png',
        './assets/images/food_baking_pastry1.jpeg',
        './assets/images/food_baking_cake1.jpeg',
        './assets/images/food_baking_cake2.jpg',
        './assets/images/food_catering1.jpg',
        './assets/images/food_catering3.jpg',
        './assets/images/food_catering2.jpg',

    ];

    const imageNames = [
        'Biryani',
        'Vada Pav',
        'Indian Thali',
        'Sabudana Vada',
        'Kheema Pav',
        'Butter Chicken',
        'Pastry',
        'Cake',
        'Anniversary Cake',
        'Catering',
        'Catering',
        'Catering',
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
    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Get the source of the clicked image
            const clickedImageUrl = item.getAttribute('src');

            // Find the index of this image in the main imageUrls array
            const correctIndex = imageUrls.indexOf(clickedImageUrl);

            // Open the modal with the correct index
            if (correctIndex !== -1) {
                openModal(correctIndex);
            }
        });
    });




    exploreBtn.addEventListener('click', () => {
        openModal(0);
    });

    closeModalBtn.addEventListener('click', closeModal);
    heroHeader.addEventListener('click',closeModal);
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
    let startX, startY;
    const swipeThreshold = 50; // horizontal distance
    const verticalSafeZone = 0.15; // 15% top & bottom reserved for closing

    modal.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    });

    modal.addEventListener('touchmove', (e) => {
        e.preventDefault(); // Prevent scrolling while swiping inside modal
    }, { passive: false });

    modal.addEventListener('touchend', (e) => {
        const touch = e.changedTouches[0];
        const endX = touch.clientX;
        const endY = touch.clientY;

        const diffX = startX - endX;
        const diffY = Math.abs(startY - endY);

        const screenHeight = window.innerHeight;
        const topZone = screenHeight * verticalSafeZone;
        const bottomZone = screenHeight * (1 - verticalSafeZone);

        // Only allow swipe in the middle 70% zone
        if (startY > topZone && startY < bottomZone) {
            if (Math.abs(diffX) > swipeThreshold && diffY < 100) {
                if (diffX > 0) {
                    showNextImage(); // Swipe left
                } else {
                    showPrevImage(); // Swipe right
                }
            }
        }
    });
});