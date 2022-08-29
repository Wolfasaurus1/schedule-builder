import requests


resp = requests.post("https://front40.omegle.com/start?caps=recaptcha2,t&firstevents=1&spid=&lang=en", headers={'origin': 'https://www.omegle.com/', 'referer': "https://www.omegle.com/"})
print(resp.text)