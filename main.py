import requests

resp = requests.get("https://postman-echo.com/headers", headers={'origin': 'https://www.omegle.com/', 'referer': "https://www.omegle.com/"})
print(resp.text)

#stuff