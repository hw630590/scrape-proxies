const axios = require('axios');
const fs = require('fs');

const proxyUrl = 'https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/socks5/socks5.txt';

axios.get(proxyUrl)
  .then(response => {
    fs.writeFileSync('socks5_proxies.txt', response.data);
    console.log('SOCKS5 proxies saved to socks5_proxies.txt');
  })
  .catch(error => {
    console.error('Error fetching SOCKS5 proxies:', error.message);
  });
