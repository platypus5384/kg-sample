from flask import Flask, render_template, request
import json
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/viewer.html')
def viewer():
    return render_template('viewer.html')

@app.route('/meter.html')
def meter():
    return render_template('meter.html')


@app.route("/req_pin_status", methods = ["GET"])
def callfromajax():
    if request.method == "GET":
        resp = {"result": "failed"}      # 辞書
        try:
            #check pin
            resp[''] = ""
            resp['result'] = "true"
            pass
        except Exception as e:
            message = str(e)
    return json.dumps(resp)             # 辞書をJSONにして返す

if __name__ == "__main__":
    app.run(debug=True)
