// configLoader.js
async function loadConfig() {
  let config;

  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    const response = await fetch('local_config.json');
    if (!response.ok) throw new Error('Failed to load local_config.json');
    config = await response.json();
  } else {
    const response = await fetch('config.json');
    if (!response.ok) throw new Error('Failed to load config.json');
    config = await response.json();
  }

  return config;
}