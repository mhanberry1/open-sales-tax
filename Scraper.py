from bs4 import BeautifulSoup
import requests

html_text = requests.get('https://dor.georgia.gov/sales-tax-upcoming-quarterly-rate-changes').text
if html_text.__contains__("2021-04-27T14:12:44-0400"):
    #The date that is being checked
    print("Up to date!")
else:
    print("You need to update the taxAPI")
