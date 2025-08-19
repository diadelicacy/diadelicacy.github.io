// loadMenu.js
async function loadMenu(configItems) {

  function getTodayDate() {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
        const year = today.getFullYear();
        return `${day}.${month}.${year}`;
  }

  const menuHeading = document.getElementById('menuHeading');

  // Default to today's date
  let menuDate = getTodayDate();

  if (Array.isArray(configItems) && configItems.length > 0) {
   for (const config of configItems) {
      if (config.key === 'Custom_Menu_Date' && config.value) {
        menuDate = config.value;
        break;
      }
    }
  }
  // Set the menu date        
  menuHeading.textContent = `Menu for ${menuDate}`;

  try {

    // Fetch data from the JSON file, Append a timestamp to avoid cache
    const response = await fetch(`./data/Menu.json?nocache=${Date.now()}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch from ./data/Menu.json: ${response.statusText}`);
    }

    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      console.warn("Menu data is empty or malformed.");
      return;
    }

    // Extract headers from keys of the first object
    const headers = Object.keys(data[0]).map(h => h.toLowerCase().trim());
    const items = data;

    // Group items by category
    const grouped = {};

    items.forEach(rowData => {
      // Normalize keys to lowercase for consistency
      const row = {};
      Object.entries(rowData).forEach(([key, value]) => {
      row[key.toLowerCase().trim()] = value;
    });

    // Access properties by their lowercase, trimmed header names
    const active = row.active;
    const category = row.category;
    const name = row.name;
    const price = row.price;
    const dietary = row.dietary;
    const desc = row.description;

    // Filter based on the 'active' column, converting to string and comparing case-insensitively
      if (active !== undefined && String(active).toLowerCase() === "true") {
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push({ name, price, dietary, desc });
      }
    });

    const container = document.getElementById('dynamicMenu');

    if (!container) {
      console.error("Container element with ID 'dynamicMenu' not found.");
      return;
    }

    // Clear existing content in the container before appending new elements
    container.innerHTML = '';

    for (const category in grouped) {
      const section = document.createElement('div');
      section.classList.add('lg:border-r', 'lg:border-red-200', 'pr-6');

      const header = document.createElement('h4');
      header.className = 'text-2xl font-semibold mb-4 border-b-2 border-white pb-2 text-left';
      header.textContent = category;
      section.appendChild(header);

      const ul = document.createElement('ul');
      ul.className = 'space-y-4';

      grouped[category].forEach(item => {

        // Determine dietary icons
        let dietaryIcons = '';
        if (item.dietary) {
          const diets = String(item.dietary).toUpperCase().split(',').map(d => d.trim());
          if (diets.includes('V')) {
            dietaryIcons += '<i class="fas fa-leaf text-green-600 ml-2"></i>';
          }
          if (diets.includes('VEG')) {
            dietaryIcons += '<i class="fas fa-seedling text-green-800 ml-2"></i>';
          }
        }

        const li = document.createElement('li');
        li.innerHTML = `
          <div class="flex justify-between items-baseline">
              <span class="font-medium text-lg">${item.name} ${dietaryIcons}</span>
              <span class="text-black-200">CHF ${Number(item.price).toFixed(2)}</span>
          </div>
          <p class="text-sm text-black-300 text-left mt-1">${item.desc}</p>
        `;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    }
  } catch (err) {
    console.error("Error initializing menu:", err);
  }
}

