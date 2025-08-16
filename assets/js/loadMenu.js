// loadMenu.js
async function initMenu() {
  try {
    const { apiKey, spreadsheetId, rangeMenu } = await loadConfig();
    const gUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${rangeMenu}?key=${apiKey}`;

    const response = await fetch(gUrl);
    if (!response.ok) throw new Error('Failed to fetch Google Sheets data');
    const data = await response.json();

    const rows = data.values;
    if (!rows || rows.length < 2) return;

    const [headers, ...items] = rows;
    const grouped = {};
    items.forEach(row => {
      const [active, category, name, price, dietary, desc] = row;
      if (active === true || active === "TRUE") {
        if (!grouped[category]) grouped[category] = [];
        grouped[category].push({ name, price, dietary, desc });
      }
    });

    const container = document.getElementById('dynamicMenu');

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
          const diets = item.dietary.toLowerCase().split(',').map(d => d.trim());
          if (diets.includes('vegan')) {
            dietaryIcons += '<i class="fas fa-leaf text-green-600 ml-2"></i>';
          }
          if (diets.includes('vegetarian')) {
            dietaryIcons += '<i class="fas fa-seedling text-green-800 ml-2"></i>';
          }
        }

        const li = document.createElement('li');
        li.innerHTML = `
          <div class="flex justify-between items-baseline">
              <span class="font-medium text-lg">${item.name} ${dietaryIcons}</span>
              <span class="text-black-200">${item.price}</span>
          </div>
          <p class="text-sm text-black-300 text-left mt-1">${item.desc}</p>
        `;
        ul.appendChild(li);
      });

      section.appendChild(ul);
      container.appendChild(section);
    }
  } catch (err) {
    console.error(err);
  }
}

