from flask import Flask, render_template
import requests
import json

# TODO: update the folders as i deleted them.
    
app = Flask(__name__, template_folder=r"C:\Users\Administrator\Desktop\coding\repos\Learning-repo\Python\back\api\templates")
 
""" Get is the default value of methods but as a good redability practice it should be specified."""
@app.route("/", methods=["GET"])
def index():
    req = requests.get("https://cat-fact.herokuapp.com/facts")
    #By using json the data can be accessed as a dictionary.
    data = json.loads(req.content)
    return render_template(r"index.html", data=data)   

