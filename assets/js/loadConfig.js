// loadStatus.js
async function loadStatus(configItems) {

  if (!Array.isArray(configItems) || configItems.length === 0) {
    console.debug("No config items to load");
    return;
  }

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
    
    const startConfig = configItems.find(item => item.key === "Week_Start_Date");
    const endConfig   = configItems.find(item => item.key === "Week_End_Date");

    console.debug("Start Date Config:", startConfig, "End Date Config:", endConfig);

    if (!startConfig || !endConfig) return;

    const startDate = new Date(startConfig.value);
    const endDate   = new Date(endConfig.value);

    const formatSwiss = (date) =>
      date.toLocaleDateString("de-CH", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });

    const formattedRange = `(${formatSwiss(startDate)} - ${formatSwiss(endDate)})`;
    document.getElementById("menuDates").textContent = formattedRange;



    
  } catch (err) {
    console.error(err);
  }
}