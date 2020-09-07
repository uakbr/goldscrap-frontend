from flask import Flask, redirect, url_for, render_template
from home.views import home
from dashboard.views import dashboard
from stats.views import stats
import settings
import os

settings.load_config()

app = Flask(__name__)
app.register_blueprint(home, url_prefix="/home")
app.register_blueprint(dashboard, url_prefix="/dashboard")


@app.route("/")
def root():
    return redirect(url_for("home.home_index"))


if __name__ == "__main__":
    app.run(os.getenv("HOST"), port=os.getenv("PORT"))
