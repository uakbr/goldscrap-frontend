from flask import Blueprint, render_template

dashboard = Blueprint('dashboard', __name__, template_folder="templates")


@dashboard.route('/')
def dashboard_index():
    return render_template("dashboard_index.html")
