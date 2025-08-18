// loadStatus.js
async function loadStatus(configItems) {
  try {

    for (const config of configItems) {
      if (config.key === 'Status') {
        const statusMessage = config.value;
        console
        const container  = document.getElementById('cafeStatus');
        if (!container) return;

        container.textContent = statusMessage;
        container.className = 'bg-red-500 text-white text-center py-2 font-bold animate-pulse';
        container.style.animationDuration = '2s';
        break; // Exit loop after finding the status

      }
  }   

    
  } catch (err) {
    console.error(err);
  }
}