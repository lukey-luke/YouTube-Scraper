from flask import Flask, render_template, jsonify
app = Flask(__name__)

# could just use a database here, but we only have 2 things we need to store ¯\_(ツ)_/¯
pewdiepie_count = 0
tseries_count = 0

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/get_sub_counts')
def get_sub_counts():
    resp = {
        "pewdiepie": 100,
        "tseries": 200
    }
    return jsonify(resp)
