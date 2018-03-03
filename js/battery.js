document.getElementById("1t").addEventListener("keyup", e);
document.getElementById("2t").addEventListener("keyup", e);
document.getElementById("3t").addEventListener("keyup", e);
document.getElementById("4t").addEventListener("keyup", e);
document.getElementById("5t").addEventListener("keyup", e);
document.getElementById("6t").addEventListener("keyup", e);
document.getElementById("7t").addEventListener("keyup", e);
document.getElementById("8t").addEventListener("keyup", e);
document.getElementById("9t").addEventListener("keyup", e);
document.getElementById("10t").addEventListener("keyup", e);

var arr = ["1t", "2t", "3t", "4t", "5t", "6t", "7t", "8t", "9t", "10t"];
var a = 0;
var i;
function e() {
	"use strict";
    for (i = 0; i < arr.length; i++)
    {
    	a = a + Number(document.getElementById(arr[i]).value);
    }
	document.getElementById("trr").innerText = a;
}