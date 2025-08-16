// loadStatus.js
async function initStatus() {
  try {
    const { apiKey, spreadsheetId, rangeStatus } = await loadConfig();

    const gUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeStatus}?key=${apiKey}`;

    const response = await fetch(gUrl);
    if (!response.ok) throw new Error('Failed to fetch Google Sheets data');

    const data = await response.json();
    const rows = data.values;
    if (!rows || rows.length < 2) return;

    const [headers, ...items] = rows;

    const container = document.getElementById('cafeStatus');
    if (!container) return;

    // Find the first row where Status = "on"
    const activeRow = items.find(row => row[0]?.toLowerCase() === 'true');

    if (activeRow) {
      const message = activeRow[1] || ''; // second column is Message
      container.textContent = message;
      container.className = 'bg-red-500 text-white text-center py-2 font-bold animate-pulse';
      container.style.animationDuration = '2s';
    } else {
      // No active message, hide the div
      container.textContent = '';
      container.className = '';
      container.style.animationDuration = '';
    }

  } catch (err) {
    console.error(err);
  }
}