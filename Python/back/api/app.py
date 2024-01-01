from flask import Flask, render_template
import requests
import json


    
app = Flask(__name__, template_folder=r"C:\Users\Administrator\Desktop\coding\repos\Learning-repo\Python\back\api\templates")


@app.route("/", methods=["GET"])
def index():
    req = requests.get("https://cat-fact.herokuapp.com/facts")
    data = req.content
    return render_template(r"index.html", data=data)

