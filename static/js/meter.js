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
    'engineTemp': 2,
    'stab': 0,
    'abs': 0,
    // right circle
    'gas': 2,
    'trunk': 0,
    'bonnet': 0,
    'doors': 0,
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
img = document.getElementById("car_handle");
angle = 200;
img.style.transform = "rotate(90deg)";

$.ajax({
    url: "",
    type: "GET",
    dataType: "json",
    data: $("asd").serializeArray(),
    timeout: 5000,
}).done(function(data){
    val = ((data[steer] - 2048.0) / 4096.0) * 720.0;
     
}).fail(function(){

});