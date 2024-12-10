import requests

proxy_url = "https://raw.githubusercontent.com/hw630590/free-proxies/refs/heads/main/proxies/http/http.txt"

try:
    response = requests.get(proxy_url)
    response.raise_for_status()
    with open("http_proxies.txt", "w") as file:
        file.write(response.text)
    print("HTTP proxies saved to http_proxies.txt")
except requests.RequestException as e:
    print(f"Error fetching HTTP proxies: {e}")
