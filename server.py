import threading
from flask import Flask, render_template, jsonify
from scrape import get_youtube_user_sub_count

# could just use a database here, but we only have 2 things we need to store ¯\_(ツ)_/¯
pewdiepie_count = 0
tseries_count = 0

def update_sub_counts():
    pewdiepie_sub_count = get_youtube_user_sub_count('PewDiePie')
    if pewdiepie_sub_count:
        global pewdiepie_count
        pewdiepie_count = pewdiepie_sub_count
    tseries_sub_count = get_youtube_user_sub_count('tseries')
    if tseries_sub_count:
        global tseries_count
        tseries_count = tseries_sub_count
    t = threading.Timer(60, update_sub_counts)
    t.start()

update_sub_counts()
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/get_sub_counts')
def get_sub_counts():
    global pewdiepie_count
    global tseries_count
    resp = {
        "pewdiepie": pewdiepie_count,
        "tseries": tseries_count
    }
    return jsonify(resp)
