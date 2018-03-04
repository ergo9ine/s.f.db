// JavaScript Document
// battery

var arrCom = ["1com", "2com", "3com", "4com", "5com", "6com", "7com", "8com", "9com", "10com"];
var arrSet = ["1set", "2set", "3set", "4set", "5set", "6set", "7set", "8set", "9set", "10set"];
var arrPet = ["1pet", "2pet", "3pet", "4pet", "5pet", "6pet", "7pet", "8pet", "9pet", "10pet"];
var arrTcom = ["1tcom", "2tcom", "3tcom", "4tcom", "5tcom", "6tcom", "7tcom", "8tcom", "9tcom", "10tcom"];
var arrTnr = [0, 50, 85, 95, 99, 101, 102, 102, 102.5, 103, 103.5];
var i;
for (i = 0; i < arrCom.length; i++)
    {
    	document.getElementById(arrCom[i]).addEventListener("keyup", sumComfort);
    	document.getElementById(arrSet[i]).addEventListener("keyup", sumComfort);
    	document.getElementById(arrPet[i]).addEventListener("keyup", sumComfort);
    	document.getElementById(arrTcom[i]).addEventListener("keyup", sumComfort);
    }

var totalCom = 0;
var totalTcom = 0;
var numOfroom = 0;
var totalBr = 0;
var averageTbr = 0;

function sumComfort() {
    for (i = 0; i < arrCom.length; i++)
    {
    	totalCom = Number(document.getElementById(arrCom[i]).value) + Number(document.getElementById(arrSet[i]).value) + Number(document.getElementById(arrPet[i]).value);
    	document.getElementById(arrTcom[i]).value = totalCom;
		totalCom = 0;

    	totalTcom = totalTcom + Number(document.getElementById(arrTcom[i]).value);		
		document.getElementById("tTcom").innerText = totalTcom;
		if(document.getElementById(arrCom[i]).value != 0)
		{
			numOfroom = i + 1;
			document.getElementById("tnr").innerText = numOfroom;
		}
    }
    totalBr = 11 * totalTcom / 10000 + (-0.1 * totalTcom * totalTcom / 10000 / 10000) + arrTnr[Number(numOfroom) -1];
    document.getElementById("tbr").innerText = totalBr.toFixed(2);
    averageTbr = (11 * (totalTcom + 1000)) / 10000 + (-0.1 * ((totalTcom + 1000) * (totalTcom + 1000)) / 10000 / 10000)-((11 * totalTcom / 10000) + (-0.1 * (totalTcom * totalTcom) / 10000 / 10000));
    document.getElementById("abtr").innerText = averageTbr.toFixed(2);
    averageTbr = 0;
    totalTcom = 0;	
}