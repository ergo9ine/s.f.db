document.getElementById("1com").addEventListener("keyup", sumComfort);
document.getElementById("2com").addEventListener("keyup", sumComfort);
document.getElementById("3com").addEventListener("keyup", sumComfort);
document.getElementById("4com").addEventListener("keyup", sumComfort);
document.getElementById("5com").addEventListener("keyup", sumComfort);
document.getElementById("6com").addEventListener("keyup", sumComfort);
document.getElementById("7com").addEventListener("keyup", sumComfort);
document.getElementById("8com").addEventListener("keyup", sumComfort);
document.getElementById("9com").addEventListener("keyup", sumComfort);
document.getElementById("10com").addEventListener("keyup",sumComfort);
var arr = ["1com", "2com", "3com", "4com", "5com", "6com", "7com", "8com", "9com", "10com"];
var a = 0;
var i;
function sumComfort() {
	"use strict";
    for (i = 0; i < arr.length; i++)
    {
    	a = a + Number(document.getElementById(arr[i]).value);
    }
	document.getElementById("tCom").innerText = a;
}