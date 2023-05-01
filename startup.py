import threading
import serial
import json
from flask import Flask, render_template, request
import sys
sys.path.append('C:\\Users\owner\.platformio\penv\lib\site-packages')
sys.path.append("C:\\Users\owner\appdata\local\packages\pythonsoftwarefoundation.python.3.10_qbz5n2kfra8p0\localcache\local-packages\python310\site-packages")
import time

pin_data = {
    "IN1": 0,
    "IN2": 0,
    "IN3": 0,
    "IN4": 0,
    "IN5": 0,
    "IN6": 0,
    "IN7": 0,
    "IN8": 0,
    "IN9": 0,
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
    # print("---------------------------")
    json_str = ser.readline().decode("utf-8")
    # print(json_str)
    try:
        json_dict = json.loads(json_str)
        pin_data["IN1"] = json_dict["IN1"]
        pin_data["IN2"] = json_dict["IN2"]
        pin_data["IN3"] = json_dict["IN3"]
        pin_data["IN4"] = json_dict["IN4"]
        pin_data["IN5"] = json_dict["IN5"]
        pin_data["IN6"] = json_dict["IN6"]
        pin_data["IN7"] = json_dict["IN7"]
        pin_data["IN8"] = json_dict["IN8"]
        pin_data["IN9"] = json_dict["IN9"]
        pin_data["OUT1"] = json_dict["OUT1"]
        pin_data["OUT2"] = json_dict["OUT2"]
        pin_data["OUT3"] = json_dict["OUT3"]
        pin_data["OUT4"] = json_dict["OUT4"]
        pin_data["OUT5"] = json_dict["OUT5"]
        pin_data["OUT6"] = json_dict["OUT6"]
        pin_data["OUT7"] = json_dict["OUT7"]
        pin_data["OUT8"] = json_dict["OUT8"]
        pin_data["OUT9"] = json_dict["OUT9"]
        # print(json_dict)
    except json.decoder.JSONDecodeError:
        print("not json!")


# while True:
    # read_serial()


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


@app.route("/req_pin_status", methods=["GET"])
def callfromajax():
    if request.method == "GET":
        resp = {"result": "failed"}      # 辞書
        try:
            # check pin
            resp = pin_data
            resp['result'] = "true"

        except Exception as e:
            message = str(e)
    return json.dumps(resp)             # 辞書をJSONにして返す


def app_main():
    app.run()


if __name__ == "__main__":
    thread = threading.Thread(target=app_main)
    thread.start()
    while True:
        read_serial()
        time.sleep(0.02)
