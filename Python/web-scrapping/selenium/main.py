from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Gets the driver for chrome
service = Service(executable_path=r"Python\web-scrapping\selenium\chromedriver.exe")
driver = webdriver.Chrome(service=service)

# Example N°1: search and enter to a YouTube Channel


def google():
    # Gets the url you want to use
    driver.get("https://google.com")

    # Waits 5 seconds so everything loads

    WebDriverWait(driver, 5).until(
        # If it finds whatever is here, it doesn't quits
        EC.presence_of_element_located((By.CLASS_NAME, "gLFyf"))
    )

    # Gets the first element that has the class "gLFyf"
    input_element = driver.find_element(By.CLASS_NAME, "gLFyf")
    # If the element is a input you can clear the default text with clear()
    input_element.clear()
    # With send_keys() you can write something in them
    # With the keys module you can press enter,arrows,etc
    input_element.send_keys("tech with tim" + Keys.ENTER)

    WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.PARTIAL_LINK_TEXT, "Tech With Tim"))
    )

    # With PARTIAL_LINK_TEXT you can find a link that contains a string.
    link = driver.find_element(By.PARTIAL_LINK_TEXT, "Tech With Tim")
    # Clicks on an element
    link.click()

    time.sleep(10)

    # Closes the window
    driver.quit()


# example N°2: Cookie clicker auto-clicker


def clicker():
    # Get URL
    driver.get("https://orteil.dashnet.org/cookieclicker/")
    driver.maximize_window()

    WebDriverWait(driver, 60).until(
        EC.presence_of_element_located((By.ID, "langSelect-ES"))
    )

    # clicks a language so the cookie button is available
    lang = driver.find_element(By.ID, "langSelect-ES")
    lang.click()

    WebDriverWait(driver, 60).until(
        EC.presence_of_element_located((By.ID, "bigCookie"))
    )

    # Gets the cookie button
    cookie = driver.find_element(By.ID, "bigCookie")

    while True:
        products = driver.find_elements(By.CLASS_NAME, "product")

        for product in products:
            product_class = product.get_attribute("class")
            if product_class == "product unlocked enabled":
                product.click()
            else:
                cookie.click()


clicker()
