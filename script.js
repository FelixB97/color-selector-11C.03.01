"use strict";
window.addEventListener("DOMContentLoaded", start);


function start() {
    console.log("window has loaded");

    // const colorPicker = document.querySelector("#colorSelector").value;

    document.querySelector("#colorOutput").style.backgroundColor = document.querySelector("#colorSelector").value;
    
    document.querySelector("#colorSelector").addEventListener("input", colorChanger);
}

function colorChanger() {
    document.querySelector("#colorOutput").style.backgroundColor = document.querySelector("#colorSelector").value;
    parseColor(document.querySelector("#colorSelector").value);
}

function parseColor(hex) {
    //displaying hex:
    document.querySelector("#hexValue").innerHTML = hex;

    //displaying rgb:
    const toR = hex.substring(1,3);
    const toG = hex.substring(3,5);
    const toB = hex.substring(5,7);

    const r = Number.parseInt(toR,16);
    const g = Number.parseInt(toG,16);
    const b = Number.parseInt(toB,16);

    document.querySelector("#rgbValue").innerHTML = "(" + r + ", " + g + ", " + b + ")";

    //displaying HSL:

    calculateHSL(r,g,b);
   
//    document.querySelector("#hslValue").innerHTML = h + ", " + s + "%, " + l + "%";
 
}

function calculateHSL(r,g,b) {
    r /= 255;
    g /= 255;
    b /= 255;
    
    let h, s, l;
    
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
    
    if( max === min ) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min) );
    }
    
    if (h < 0) {h = h + 360; }
    
    l = (min + max) / 2;
    
    if (max === 0 || min === 1 ) {
        s = 0;
    } else {
        s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    document.querySelector("#hslValue").innerHTML = Math.round(h) + ", " + Math.round(s) + "%, " + Math.round(l) + "%";
 

    
}