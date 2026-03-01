// loadMenu.js
let cachedMenuData = [];

async function loadMenu(configItems) {
    const container = document.getElementById('dynamicMenu');
    
    try {
        // 1. Fetch JSON once
        const response = await fetch(`./data/Menu.json?nocache=${Date.now()}`, { cache: "no-store" });
        if (!response.ok) throw new Error("Could not load menu data");
        
        cachedMenuData = await response.json();

        // 2. Create Tabs Monday - Friday
        createTabs(container);

        // 3. Auto-detect today's day
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const todayIndex = new Date().getDay();
        
        // If it's Saturday (6) or Sunday (0), default to Monday. Otherwise, use today.
        const defaultDay = (todayIndex === 0 || todayIndex === 6) ? "Monday" : days[todayIndex];

        // 4. Trigger the initial display for today
        displayDay(defaultDay);

    } catch (err) {
        console.error("Error initializing menu:", err);
        container.innerHTML = `<p class="text-center col-span-full text-red-500">Unable to load the menu.</p>`;
    }
}

function createTabs(container) {
    const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    let tabWrapper = document.getElementById('menuTabs');
    
    if (!tabWrapper) {
        tabWrapper = document.createElement('div');
        tabWrapper.id = 'menuTabs';
        // Relative container to hold the gradient fades
        tabWrapper.className = "relative flex justify-center mb-10 px-4";
        container.parentNode.insertBefore(tabWrapper, container);
    }

    // Inner HTML with scrollable track and gradient "hints" for mobile
    tabWrapper.innerHTML = `
        <div class="inline-flex p-1 bg-gray-100 rounded-2xl shadow-inner overflow-x-auto no-scrollbar max-w-full" id="tabTrack">
            ${weekdays.map(day => `
                <button onclick="displayDay('${day}')" 
                        id="btn-${day}"
                        class="tab-btn whitespace-nowrap px-6 py-2 rounded-xl font-bold transition-all duration-200 text-sm md:text-base">
                    ${day}
                </button>
            `).join('')}
        </div>
    `;
}

function displayDay(selectedDay) {
    const container = document.getElementById('dynamicMenu');
    
    // 1. Update Tab Visuals (The Chrome/Segmented Look)
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.id === `btn-${selectedDay}`) {
            btn.className = "tab-btn whitespace-nowrap px-6 py-2 rounded-xl font-bold transition-all duration-200 text-sm md:text-base bg-white text-custom-red-800 shadow-sm";
            // Auto-scroll the tab into view on mobile
            btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        } else {
            btn.className = "tab-btn whitespace-nowrap px-6 py-2 rounded-xl font-bold transition-all duration-200 text-sm md:text-base text-gray-500 hover:text-gray-700";
        }
    });

    // 2. Filter JSON data for the specific day (FIXED LOGIC HERE)
    const filtered = cachedMenuData.filter(item => {
        const itemDay = String(item.Day || item.day || "").trim().toLowerCase();
        const isActive = String(item.Active || item.active).toLowerCase() === "true";
        return isActive && (itemDay === selectedDay.toLowerCase() || itemDay === "everyday");
    });

    // 3. Group by Category
    const grouped = filtered.reduce((acc, item) => {
        const cat = item.Category || item.category;
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {});

    // 4. Render the grid (Using your existing function name)
    renderMenuGrid(grouped, container);
}

function renderMenuGrid(grouped, container) {
    container.innerHTML = '';

    if (Object.keys(grouped).length === 0) {
        container.innerHTML = '<p class="col-span-full text-center py-20 text-gray-400 italic font-medium text-lg">No specials listed for this day. Please check back later!</p>';
        return;
    }

    for (const category in grouped) {
        const section = document.createElement('div');
        section.className = 'lg:border-r lg:border-red-100 pr-6 last:border-r-0';

        section.innerHTML = `
            <div class="flex justify-between items-center mb-6 border-b-2 border-gray-100 pb-3">
                <h4 class="text-2xl font-bold text-gray-800 uppercase tracking-wide">${category}</h4>
                <div class="flex items-center text-gray-400 space-x-2">
                    <i class="fa-solid fa-bag-shopping" title="Takeaway"></i>
                    <span class="font-bold text-red-200">/</span> 
                    <i class="fas fa-utensils" title="Dine-in"></i>
                </div>
            </div>
            <ul class="space-y-8">
                ${grouped[category].map(item => renderMenuItem(item)).join('')}
            </ul>
        `;
        container.appendChild(section);
    }
}

function renderMenuItem(item) {
    // Dietary logic
    let icons = '';
    const diet = String(item.Dietary || item.dietary || "").toUpperCase();
    if (diet.includes('V')) icons += '<i class="fas fa-leaf text-green-500 ml-2" title="Vegan"></i>';
    if (diet.includes('VEG')) icons += '<i class="fas fa-seedling text-green-700 ml-2" title="Vegetarian"></i>';
    if (diet.includes('GF')) icons += '<i class="fas fa-wheat-awn-circle-exclamation text-yellow-500 ml-2" title="Gluten-Free"></i>';

    // Pricing format helper
    const fmt = (val) => {
        const parts = parseFloat(val || 0).toFixed(2).split('.');
        return `${parts[0]}<span class="text-xs align-top">.${parts[1]}</span>`;
    };

    return `
        <li class="group">
            <div class="flex justify-between items-baseline mb-1">
                <span class="font-semibold text-lg text-gray-800 group-hover:text-custom-red-800 transition-colors">
                    ${item.Name || item.name} ${icons}
                </span>
                <span class="whitespace-nowrap flex items-center">
                    <span class="text-[10px] text-gray-400 mr-1 font-bold">CHF</span>
                    <span class="text-lg font-medium text-gray-500">${fmt(item.T_Price || item.t_price)}</span>
                    <span class="text-red-200 font-black px-1">/</span> 
                    <span class="text-lg font-bold text-black">${fmt(item.D_Price || item.d_price)}</span>
                </span>
            </div>
            <p class="text-sm text-gray-500 leading-relaxed font-light">
                ${item.Description || item.description || ''}
            </p>
        </li>
    `;
}