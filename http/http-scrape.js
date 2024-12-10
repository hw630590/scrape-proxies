// This saves the proxies to a .txt, which you can then use AI to send these proxies to httpbin for example, or somewhere else.
const axios = require('axios');
const fs = require('fs');

const proxyUrl = 'https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/http/http.txt';

axios.get(proxyUrl)
  .then(response => {
    fs.writeFileSync('proxies.txt', response.data);
    console.log('Proxies saved to proxies.txt');
  })
  .catch(error => {
    console.error('Error fetching proxies:', error.message);
  });
