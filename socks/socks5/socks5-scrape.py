import requests

proxy_url = "https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/socks5/socks5.txt"

try:
    response = requests.get(proxy_url)
    response.raise_for_status()
    with open("socks5_proxies.txt", "w") as file:
        file.write(response.text)
    print("SOCKS5 proxies saved to socks5_proxies.txt")
except requests.RequestException as e:
    print(f"Error fetching SOCKS5 proxies: {e}")
