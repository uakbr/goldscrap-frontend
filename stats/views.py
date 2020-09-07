from flask import Blueprint, render_template
import os
import requests

stats = Blueprint('stats', __name__, template_folder="templates", static_folder="static")


@stats.route('/')
def stats_page():
    return render_template("stats_index.html")
