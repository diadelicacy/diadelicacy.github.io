// configLoader.js
async function readConfig() {
  let configItems = [];  // initialize array
  try {
    
    // Fetch data from the JSON file, Append a timestamp to avoid cache
    const response = await fetch(`./data/Config.json?nocache=${Date.now()}`, {
      cache: "no-store"
    });


    if (!response.ok) {
      throw new Error(`Failed to fetch from ./data/Config.json: ${response.statusText}`);
    }

     const data = await response.json();

     if (!Array.isArray(data) || data.length === 0) {
      console.debug("Config data is empty or malformed.");
      return;
    }

    // Extract headers from keys of the first object
    const headers = Object.keys(data[0]).map(h => h.toLowerCase().trim());
    const items = data;


    items.forEach(rowData => {
      // Normalize keys to lowercase for consistency
      const row = {};
      Object.entries(rowData).forEach(([key, value]) => {
      row[key.toLowerCase().trim()] = value;
    });

    // Access properties by their lowercase, trimmed header names
    const active = row.active;
    const key = row.key;
    const value = row.value;

    

    // Filter based on the 'active' column, converting to string and comparing case-insensitively
      if (active !== undefined && String(active).toLowerCase() === "true") {
        if (key && value) {
          configItems.push({ key: key, value: value });
        }
      }
    });


  }  catch (err) {
    console.error("Error initializing config:", err);
  }

  /*  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const response = await fetch('local_config.json');
    if (!response.ok) throw new Error('Failed to load local_config.json');
    config = await response.json();
  } else {
    const response = await fetch('config.json');
    if (!response.ok) throw new Error('Failed to load config.json');
    config = await response.json();
  }*/
  
  return configItems;
}