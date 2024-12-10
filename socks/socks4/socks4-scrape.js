const axios = require('axios');
const fs = require('fs');

const proxyUrl = 'https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/socks4/socks4.txt';

axios.get(proxyUrl)
  .then(response => {
    fs.writeFileSync('socks4_proxies.txt', response.data);
    console.log('SOCKS4 proxies saved to socks4_proxies.txt');
  })
  .catch(error => {
    console.error('Error fetching SOCKS4 proxies:', error.message);
  });
