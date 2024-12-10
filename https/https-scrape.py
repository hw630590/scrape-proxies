import requests

proxy_url = "https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/https/https.txt"

try:
    response = requests.get(proxy_url)
    response.raise_for_status()
    with open("https_proxies.txt", "w") as file:
        file.write(response.text)
    print("HTTPS proxies saved to https_proxies.txt")
except requests.RequestException as e:
    print(f"Error fetching HTTPS proxies: {e}")
