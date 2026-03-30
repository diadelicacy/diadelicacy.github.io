const resModal = document.getElementById('reservation-modal');
const closeResBtn = document.getElementById('close-reservation-modal');

// Function to open modal
function openResModal() {
    resModal.classList.remove('hidden');
    resModal.classList.add('flex');
}

// Function to close modal
function closeResModal() {
    resModal.classList.add('hidden');
    resModal.classList.remove('flex');
    document.getElementById('formMessage').classList.add('hidden'); // Reset message
}

// Close on button click
closeResBtn.addEventListener('click', closeResModal);

// Close on clicking outside the white box
resModal.addEventListener('click', (e) => {
    if (e.target === resModal) {
        closeResModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !resModal.classList.contains('hidden')) {
        closeResModal();
    }
});

// Form Submission (keep your existing logic, just ensures it calls the correct modal)
document.getElementById('reservationForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    const msg = document.getElementById('formMessage');
    
    btn.disabled = true;
    btn.innerText = "Processing...";

    const formData = new FormData(this);
    // Replace with your actual Apps Script URL
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxdXMqsopkfx-XnjBqct_rYHeq1tUmwwr8062XEc_cg7g0m0WYiusi1iV7Fmma2l4h6IA/exec'; 

    try {
        await fetch(scriptURL, { method: 'POST', body: formData });
        msg.innerText = "Request received! We'll confirm via WhatsApp/Email.";
        msg.className = "p-4 text-center font-medium text-green-700 bg-green-50 rounded-b-2xl";
        msg.classList.remove('hidden');
        this.reset();
        setTimeout(closeResModal, 3500);
    } catch (error) {
        msg.innerText = "Error. Please call +41 227 34 11 22.";
        msg.className = "p-4 text-center font-medium text-red-700 bg-red-50 rounded-b-2xl";
        msg.classList.remove('hidden');
    } finally {
        btn.disabled = false;
        btn.innerText = "Confirm Reservation Request";
    }
});