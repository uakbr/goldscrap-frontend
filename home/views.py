from flask import Blueprint, render_template
import os
import requests

home = Blueprint('home', __name__, template_folder="templates", static_folder="static")


@home.route('/')
def home_index():
    latest_prices_url = os.getenv("API_URL") + os.getenv("API_PRICES")
    osrs_request = requests.get(latest_prices_url, params={'game': "OSRS"})
    rs_request = requests.get(latest_prices_url, params={'game': "RS3"})


    data = {
        "OSRS": osrs_request.json(),
        "RS3": rs_request.json()
    }
    return render_template("index.html", items_json = data)
