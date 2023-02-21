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
    'dippedBeam': 1,
    'brake': 1,
    'drift': 1,
    'highBeam': 1,
    'lock': 1,
    'seatBelt': 1,
    'engineTemp': 2,
    'stab': 1,
    'abs': 1,
    // right circle
    'gas': 2,
    'trunk': 1,
    'bonnet': 1,
    'doors': 1,
    // left circle
    'battery': 2,
    'oil': 2,
    'engineFail': 2
}

function redraw() {
    speed = 0.0;
    tacho = 0.0;
    gas = 0.0;
    mileage = 0.0;
    draw(speed, tacho, gas, mileage, turnSignalsStates, iconsStates);
}

redraw();

// $("#car_handle").
// img = document.getElementById("car_handle");
// angle = 200;
// img.style.transform = "rotate(90deg)";

function getStatus() {
    url = ""
    $.ajax("/req_pin_status", {
        url: url,
        type: "GET",
        dataType: "json",
        // data: 'req:asd',
        timeout: 500,
    }).done(function (data) {
        console.log(data["answer"]);
        // val = ((data[steer] - 2048.0) / 4096.0) * 720.0;

    }).fail(function () {

    });
}

setInterval(getStatus, 100);