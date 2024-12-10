import requests

proxy_url = "https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/socks4/socks4.txt"

try:
    response = requests.get(proxy_url)
    response.raise_for_status()
    with open("socks4_proxies.txt", "w") as file:
        file.write(response.text)
    print("SOCKS4 proxies saved to socks4_proxies.txt")
except requests.RequestException as e:
    print(f"Error fetching SOCKS4 proxies: {e}")
