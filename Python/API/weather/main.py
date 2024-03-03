import datetime as dt
import requests
import json

base_url = "http://api.openweathermap.org/data/2.5/weather?appid=23285a4497af200a1a66a8d602346440"

city = "Buenos Aires"


def kelvin_to_celsius(kelvin):
    celsius = kelvin - 273.15
    return celsius


url = base_url + "&q=" + city

response = requests.get(url).json()

print(json.dumps(response, indent=4))

desc = response["weather"][0]["description"]

current_temp_kelvin = response["main"]["temp"]

current_temp_celsius = kelvin_to_celsius(current_temp_kelvin)

temp_min_kelvin = response["main"]["temp_min"]
temp_max_kelvin = response["main"]["temp_max"]
temp_min_celsius = kelvin_to_celsius(temp_min_kelvin)
temp_max_celsius = kelvin_to_celsius(temp_max_kelvin)


print(f"Right now we have a {desc}.")
print(f"The minimum temperature for today is {temp_min_celsius:.1f} °C (Probably wrong)")
print(f"The maximum temperature for today is {temp_max_celsius:.1f} °C")
print(f"The temperature right now is {current_temp_celsius:.1F} °C")
