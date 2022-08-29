import requests

resp = requests.get("https://front40.omegle.com/start?caps=recaptcha2,t&firstevents=1&spid=&lang=en")
print(resp)