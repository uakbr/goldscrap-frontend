from flask import Blueprint, render_template
import os
import requests
import requests_cache

home = Blueprint('home', __name__, template_folder="templates", static_folder="static")

requests_cache.install_cache('api_requests_cache', backend='sqlite', expire_after=290)


@home.route('/')
def home_index():
    latest_prices_url = os.getenv("API_URL") + os.getenv("API_PRICES")
    osrs_request = requests.get(latest_prices_url, params={'game': "OSRS"})
    rs_request = requests.get(latest_prices_url, params={'game': "RS3"})

    data = {
        "OSRS": osrs_request.json(),
        "RS3": rs_request.json()
    }
    return render_template("index.html", items_json=data)


@home.route('/stats')
def stats_home():
    latest_prices_url = os.getenv("API_URL") + os.getenv("API_STATS")

    osrs_request_daily = requests.get(latest_prices_url,
                                      params={'game': "OSRS", 'recurrence': 'daily', 'stat': 'avg_max_min'})
    rs_request_daily = requests.get(latest_prices_url,
                                    params={'game': "RS3", 'recurrence': 'daily', 'stat': 'avg_max_min'})

    daily_stats = {
        "OSRS": osrs_request_daily.json(),
        "RS3": rs_request_daily.json()
    }

    return render_template("home_stats.html", dailyData_json=daily_stats)

@home.route('/about')
def about_home():

    return render_template("about.html")

@home.route('/contact')
def contact_home():

    return render_template("contact.html")
