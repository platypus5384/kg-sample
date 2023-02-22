import sys
sys.path.append('C:\\Users\owner\.platformio\penv\lib\site-packages')
sys.path.append("C:\\Users\owner\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages")
from flask import Flask, render_template, request
import json
import serial

# import schedule



# ser = serial.Serial(port='COM4', baudrate=9600, timeout=0.1)
ser = serial.Serial("COM4", 9600)

def read_serial():
    pass



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
