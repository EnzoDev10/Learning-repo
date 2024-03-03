import datetime as dt
import requests

base_url = "http://api.openweathermap.org/data/2.5/weather?appid=23285a4497af200a1a66a8d602346440"

city = "José C. Paz"


def kelvin_to_celsius_fahrenheit(kelvin):
    celsius = kelvin - 273.15
    fahrenheit = celsius * (9 / 5) + 32
    return celsius, fahrenheit


url = base_url + "&q=" + city

response = requests.get(url).json()

#print(response)

# 1st access a category, 2nd the index inside and 3rd, access the specific key

desc = response['weather'][0]['description']
temp_min_kelvin = response['main']['temp_min']
temp_max_kelvin = response['main']['temp_max']

temp_min_celsius, temp_min_fahrenheit = kelvin_to_celsius_fahrenheit(temp_min_kelvin)
temp_max_celsius, temp_max_fahrenheit = kelvin_to_celsius_fahrenheit(temp_max_kelvin)

print(response,"\n")

print(f"Right now we have a {desc}.")
print(f"The minimum temperature for today is {temp_min_celsius:.1f} °C")
print(f"The maximum temperature for today is {temp_max_celsius:.1f} °C")