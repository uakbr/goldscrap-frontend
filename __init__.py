import os, time, sys
from flask import Flask, redirect, url_for, render_template
sys.path.insert(0, os.path.realpath(os.path.dirname(__file__)))

from home.views import home
from dashboard.views import dashboard
from stats.views import stats
import settings

settings.load_config()

app = Flask(__name__, static_folder="static", static_url_path="")
app.register_blueprint(home, url_prefix="/home")
app.register_blueprint(dashboard, url_prefix="/dashboard")


@app.route("/")
def root():
    return redirect(url_for("home.home_index"))


if __name__ == "__main__":
    app.run(os.getenv("HOST"), port=os.getenv("PORT"))
