/**
 * Just demo of speedo by changing values 
 */

let speed = 0;
let tacho = 0;
let gas = 0;
let mileage = 0;

let turnSignalsStates = {
    'left': false,
    'right': false
}

let iconsStates = {
    // main circle
    'dippedBeam': 0,
    'brake': 0,
    'drift': 0,
    'highBeam': 0,
    'lock': 0,
    'seatBelt': 0,
    'engineTemp': 0,
    'stab': 0,
    'abs': 0,
    // right circle
    'gas': 0,
    'trunk': 0,
    'bonnet': 0,
    'doors': 0,
    // left circle
    'battery': 0,
    'oil': 0,
    'engineFail': 0
}

function redraw() {
    speed = 0.0;
    tacho = 0.0;
    gas = 0.0;
    mileage = 0.0;
    draw(speed, tacho, gas, mileage, turnSignalsStates, iconsStates);
}

function redraw(speed, tacho, gas, mileage) {
    draw(speed, tacho, gas, mileage, turnSignalsStates, iconsStates);
}

redraw();

// $("#car_handle").

function analog2digital( val){
    res = 0
    if (val > 3000)res = 1
    return res
}

function getStatus() {
    url = ""
    $.ajax("/req_pin_status", {
        url: url,
        type: "GET",
        dataType: "json",
        // data: 'req:asd',
        timeout: 500,
    }).done(function (data) {
        SPEED_MAX = 180.0;
        speed = data["IN1"] / 4095.0;
        tacho = data["IN2"] / 4095.0
        gas = data["IN3"] / 4095.0
        mileage = Math.round(speed * 200)
        turnSignalsStates['left'] = analog2digital(data["IN4"])
        turnSignalsStates['right'] = analog2digital(data["IN5"])
        iconsStates['lock'] = analog2digital(data["IN6"])
        redraw(speed, tacho, gas, mileage)
        img = document.getElementById("car_handle");
        angle = ((data["IN9"] - 2048) / 4095.0) * 270;
        img.style.transform = `rotate(${angle}deg)`;
        kmph = Math.round(speed * SPEED_MAX);
        $("#kmph-val").text(kmph);

    }).fail(function () {

    });
}

setInterval(getStatus, 100);

