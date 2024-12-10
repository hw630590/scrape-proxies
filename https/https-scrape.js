const axios = require('axios');
const fs = require('fs');

const proxyUrl = 'https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/https/https.txt';

axios.get(proxyUrl)
  .then(response => {
    fs.writeFileSync('https_proxies.txt', response.data);
    console.log('HTTPS proxies saved to https_proxies.txt');
  })
  .catch(error => {
    console.error('Error fetching HTTPS proxies:', error.message);
  });
