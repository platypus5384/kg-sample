import sys
sys.path.append('C:\\Users\owner\.platformio\penv\lib\site-packages')
sys.path.append("C:\\Users\owner\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages")
from flask import Flask, render_template, request
import json
import serial

import threading


pin_data={
    "IN0": 0.000,
    "IN1": 0.000,
    "IN2": 0.000,
    "IN3": 0.000,
    "IN4": 0.000,
    "IN5": 0.000,
    "IN6": 0.000,
    "IN7": 0.000,
    "IN8": 0.000,
    "IN9": 0.000,
    "IN10": 0.000,
    "IN11": 0.000,
    "OUT0": "L",
    "OUT1": "L",
    "OUT2": "L",
    "OUT3": "L",
    "OUT4": "L",
    "OUT5": "L",
    "OUT6": "L",
    "OUT7": "L",
    "OUT8": "L",
    "OUT9": "L",
    "OUT10": "L",
    "OUT11": "L",
}


# ser = serial.Serial(port='COM4', baudrate=9600, timeout=0.1)
ser = serial.Serial("/dev/ttyUSB0", 115200)

def read_serial():
    print("---------------------------")
    json_str = ser.readline().decode("utf-8")
    try:
        json_dict = json.loads(json_str)
        print(json_dict)
    except json.decoder.JSONDecodeError:
        print("not json!")
        

while True:
    read_serial()



# thread = threading.Thread(read_serial);
# thread.start();



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
