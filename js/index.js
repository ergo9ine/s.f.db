//JavaScript Document
//index
var TogV="invisible";
$(document).ready(()=>{
$('[data-toggle="tooltip"]').tooltip(); 
$.ajaxSetup({error:function(x,e){0==x.status?alert("You are offline!!\n Please Check Your Network."):404==x.status?alert("Requested URL not found."):500==x.status?alert("Internel Server Error."):"parsererror"==e?alert("Error.nParsing JSON Request failed."):"timeout"==e?alert("Request Time out."):alert("Unknow Error.n"+x.responseText)}});
$(".x").click(()=>{$(this).parent().addClass(TogV)});
$("#close,#open").click(()=>{$("#Sidebar").toggleClass(TogV)});
$("#lo,#lc").click(()=>{$("#lm").toggleClass(TogV)});
$("#ro,#rc").click(()=>{$("#rm").toggleClass(TogV)});
$("#lm>button").click(function(){var sel=$(this).index();sel==1||sel==2?($("#rm").removeClass(TogV),$("#lm").addClass(TogV)):$("#lm").addClass(TogV);});
$("#rm>button").click(function(){$("#rm").addClass(TogV);});
$("#Sidebar>button:nth-child(3),#lm>button:nth-child(2)").click(()=>{
$("body>div:nth-child(2)>button:hidden,#rm>button:hidden").css("display","inline-block");
$("body>div:nth-child(2)>button:eq(3)~button:visible,#rm>button:eq(3)~button:visible").css("display","none");
});
$("#Sidebar>button:nth-child(4),#lm>button:nth-child(3)").click(()=>{
$("body>div:nth-child(2)>button:eq(0)~button:visible,#rm>button:eq(0)~button:visible").css("display","none");
$("body>div:nth-child(2)>button:eq(3)~button:hidden,#rm>button:eq(3)~button:hidden").css("display","inline-block");
});
$("#Sidebar>button:nth-child(5),#lm>button:nth-child(4)").click(function(){
$(".tab").removeClass("bg-danger");
$(this).addClass("bg-danger");
$("#contents>div").addClass("d-none");
$("#index").removeClass("d-none");
$("#result").empty();
});
$(".tab").click(function(){
var tis=$(this),Classes=(tis.attr("class")).split(" "),T=["#tab1","#tab2","#tab3","#tab4","#tab5","#tab6","#tab7","#tab8","#tab9","#tab10"];
$("#Sidebar>button,.tab,#lm>button").removeClass("bg-danger");
$("#result").empty();
tis.addClass("bg-danger");
for (var a=0,len=Classes.length;a<len;a++){
switch (Classes[a]){
case "m1":hidden(0);break
case "m2":hidden(1);break
case "m3":hidden(2);break
case "m4":hidden(3);break
case "m5":hidden(4);break
case "m6":hidden(5);break
case "m7":hidden(6);break
case "m8":hidden(7);break
case "m9":hidden(8);break
case "m10":hidden(9);break
}
function hidden(x){$(T[x]).removeClass("d-none").parent().find(".content").not(T[x]).addClass("d-none")}
}
});
});
// disc
var dollAccExp=[0,0,1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351,379,410,444,486,532,582,636,694,757,824,896,973,1055,1143,1236,1335,1440,1551,1669,1794,1925,2064,2210,2364,2525,2694,2871,3057,3252,3456,3669,3892,4125,4368,4621,4884,5158,5443,5739,6047,6367,6699,7043,7494,7962,8448,8952,9474,10014,10573,11152,11750,12368,13007,13667,14348,15051,15777,16525,17296,18091,18910,19753,20879,22040,23235,24466,25733,27037,28378,29757,31175,32632,33632,34832,36232,37832,39632,41632,43832,46232,49032,52632,57432,63832,72832,84832,100832,122832,152832,192832,242832,302832];
document.getElementById("oath").addEventListener("change",ReportCalc,!1);
document.getElementById("fairy").addEventListener("change",ReportCalc,!1);
document.getElementById("currentLv").addEventListener("keyup",ReportCalc,!1);
document.getElementById("currentExp").addEventListener("keyup",ReportCalc,!1);
document.getElementById("targetLv").addEventListener("keyup",ReportCalc,!1);
function ReportCalc(){
var oath=document.getElementById("oath").checked+1,fairy=document.getElementById("fairy").checked?3:1,currentLv=Number(document.getElementById("currentLv").value),currentExp=Number(document.getElementById("currentExp").value),targetLv=Number(document.getElementById("targetLv").value),report=0;
if(IsValidLv(fairy,currentLv,currentExp,targetLv)){
if(targetLv>115){report+=Math.ceil((dollAccExp[targetLv]-dollAccExp[Math.max(currentLv,115)]-currentExp)/(30*oath)),targetLv=115,currentExp=0}
if(targetLv>110&&currentLv<115){report+=Math.ceil((dollAccExp[targetLv]-dollAccExp[Math.max(currentLv,110)]-currentExp)/(30*oath)),targetLv=110,currentExp=0}
if(targetLv>100&&currentLv<110){report+=Math.ceil((dollAccExp[targetLv]-dollAccExp[Math.max(currentLv,100)]-currentExp)/(30*oath)),targetLv=100,currentExp=0}
if(targetLv<=100&&currentLv<100){report+=Math.ceil((dollAccExp[targetLv]-dollAccExp[currentLv]-currentExp)/30);}
document.getElementById("reportCalcResult").innerText=report*fairy}
else{document.getElementById("reportCalcResult").innerText="N/A"}
}
function IsValidLv(fairy,currentLv,currentExp,targetLv){if(targetLv>currentLv&&currentExp>=0&&(dollAccExp[currentLv+1]-dollAccExp[currentLv])*fairy>currentExp&&(fairy==1&&targetLv<dollAccExp.length)||(fairy==3&&targetLv<=100)){return true;}return false;}
// enhanced
var HG={avg:[.21,.25,.35,.24],M1911:[.2,.2323,.3176,.2426],"\ub098\uac15 \ub9ac\ubcfc\ubc84":[.2164,.2323,.3667,.1944],P38:[.2,.2323,.3429,.2426],"FNP-9":[.2164,.2625,.3667,.2625],PPK:[.183,.263,.389,.263],"MP-446":[.2164,.2625,.3176,.2526],"Bren Ten":[.2323,.2625,.3176,.2526],"USP Compact":[.1831,.2909,.3667,.2722]},SMG={avg:[.21,.09,.32,.31],M3:[.2164,.0889,.3176,.2816],"PPSh-41":[.2,.0889,.2909,.3628],PP2000:[.2323,.0889,.3667,.3304],"MP-40":[.2164,.0889,.2909,.3089],"\ubca0\ub808\ud0c038\ud615":[.2323,.0889,.2625,.3089],m45:[.2323,.0889,.3176,.3089],"Spectre M4":[.2,.0889,.3429,.3549],IDW:[.1831,.0889,.3429,.2955],"64\uc2dd":[.2164,.0889,.3176,.3628]},RF={avg:[.54,.31,.18,.17],"SVT-38":[.526,.291,.2,.166],G43:[.541,.291,.166,.183],"\uc2dc\ubaa8\ub178\ud504":[.5258,.2909,.2,.1655],"FN-49":[.5407,.2909,.1655,.1535],BM59:[.5548,.2909,.1655,.1831]},AR={avg:[.32,.21,.2,.27],G3:[.3781,.2323,.2,.2576],L85A1:[.3304,.2,.2,.2674],"\uac08\ub9b4":[.3176,.2,.2,.3089],"SIG-510":[.3781,.2,.2,.2476],F2000:[.3176,.2323,.2323,.3304],"63\uc2dd":[.3667,.2,.2,.3]},MG={avg:[.48,.15,.17,.41],LWMMG:[.5258,.1655,.1655,.3628],DP28:[.4593,.1655,.1655,.4035],MG34:[.4683,.1286,.1655,.4275],FG42:[.4683,.1655,.2,.4275],"AAT-52":[.4857,.1655,.1655,.4405]};function getOneTypeCount(b,c){count=[0,0,0,0];for(var a=0;4>a;a++)count[a]=Math.ceil(b[a]/c[a]);return max=Math.max.apply(Math,count)}function getFinalValue(b,c){final=[0,0,0,0];for(var a=0;4>a;a++)final[a]=Math.floor(b*c[a]);return final}
$("#stat").on("submit",()=>{$("#result").html("<thead><tr><th>\uba85\uce6d</th><th>소모량</th><th>\uc2a4\ud0ef\uc0c1\uc2b9\uc608\uce21\ub7c9</th></tr></thead><tbody></tbody>");arr=[$("#atk").val(),$("#hit").val(),$("#dod").val(),$("#spd").val()];for(i in HG)num=getOneTypeCount(arr,HG[i]),result=getFinalValue(num,HG[i]),"avg"==i?$("#result").append("<tr><td><img src=\"img/etc/hg.png\"></td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg_b.png\" style=\"width:5%\">\ud654\ub825:"+result[0]+"<img src=\"img/etc/Icon_eva_b.png\" style=\"width:5%\">\ud68c\ud53c:"+result[2]+"<img src=\"img/etc/Icon_acc_b.png\" style=\"width:5%\">\uba85\uc911:"+result[1]+"<img src=\"img/etc/Icon_rof_b.png\" style=\"width:5%\">\uc0ac\uc18d:"+result[3]+"</td></tr>"):$("#result").append("<tr><td>"+i+"</td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg.png\" style=\"width:5%\">:"+result[0]+"<img src=\"img/etc/Icon_eva.png\" style=\"width:5%\">:"+result[2]+"<img src=\"img/etc/Icon_acc.png\" style=\"width:5%\">:"+result[1]+"<img src=\"img/etc/Icon_rof.png\" style=\"width:5%\">:"+result[3]+"</td></tr>");for(i in SMG)num=getOneTypeCount(arr,SMG[i]),result=getFinalValue(num,SMG[i]),"avg"==i?$("#result").append("<tr><td><img src=\"img/etc/smg.png\"></td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg_b.png\" style=\"width:5%\">\ud654\ub825:"+result[0]+"<img src=\"img/etc/Icon_eva_b.png\" style=\"width:5%\">\ud68c\ud53c:"+result[2]+"<img src=\"img/etc/Icon_acc_b.png\" style=\"width:5%\">\uba85\uc911:"+result[1]+"<img src=\"img/etc/Icon_rof_b.png\" style=\"width:5%\">\uc0ac\uc18d:"+result[3]+"</td></tr>"):$("#result").append("<tr><td>"+i+"</td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg.png\" style=\"width:5%\">:"+result[0]+"<img src=\"img/etc/Icon_eva.png\" style=\"width:5%\">:"+result[2]+"<img src=\"img/etc/Icon_acc.png\" style=\"width:5%\">:"+result[1]+"<img src=\"img/etc/Icon_rof.png\" style=\"width:5%\">:"+result[3]+"</td></tr>");for(i in RF)num=getOneTypeCount(arr,RF[i]),result=getFinalValue(num,RF[i]),"avg"==i?$("#result").append("<tr><td><img src=\"img/etc/rf.png\"></td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg_b.png\" style=\"width:5%\">\ud654\ub825:"+result[0]+"<img src=\"img/etc/Icon_eva_b.png\" style=\"width:5%\">\ud68c\ud53c:"+result[2]+"<img src=\"img/etc/Icon_acc_b.png\" style=\"width:5%\">\uba85\uc911:"+result[1]+"<img src=\"img/etc/Icon_rof_b.png\" style=\"width:5%\">\uc0ac\uc18d:"+result[3]+"</td></tr>"):$("#result").append("<tr><td>"+i+"</td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg.png\" style=\"width:5%\">:"+result[0]+"<img src=\"img/etc/Icon_eva.png\" style=\"width:5%\">:"+result[2]+"<img src=\"img/etc/Icon_acc.png\" style=\"width:5%\">:"+result[1]+"<img src=\"img/etc/Icon_rof.png\" style=\"width:5%\">:"+result[3]+"</td></tr>");for(i in AR)num=getOneTypeCount(arr,AR[i]),result=getFinalValue(num,AR[i]),"avg"==i?$("#result").append("<tr><td><img src=\"img/etc/ar.png\"></td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg_b.png\" style=\"width:5%\">\ud654\ub825:"+result[0]+"<img src=\"img/etc/Icon_eva_b.png\" style=\"width:5%\">\ud68c\ud53c:"+result[2]+"<img src=\"img/etc/Icon_acc_b.png\" style=\"width:5%\">\uba85\uc911:"+result[1]+"<img src=\"img/etc/Icon_rof_b.png\" style=\"width:5%\">\uc0ac\uc18d:"+result[3]+"</td></tr>"):$("#result").append("<tr><td>"+i+"</td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg.png\" style=\"width:5%\">:"+result[0]+"<img src=\"img/etc/Icon_eva.png\" style=\"width:5%\">:"+result[2]+"<img src=\"img/etc/Icon_acc.png\" style=\"width:5%\">:"+result[1]+"<img src=\"img/etc/Icon_rof.png\" style=\"width:5%\">:"+result[3]+"</td></tr>");for(i in MG)num=getOneTypeCount(arr,MG[i]),result=getFinalValue(num,MG[i]),"avg"==i?$("#result").append("<tr><td><img src=\"img/etc/mg.png\"></td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg_b.png\" style=\"width:5%\">\ud654\ub825:"+result[0]+"<img src=\"img/etc/Icon_eva_b.png\" style=\"width:5%\">\ud68c\ud53c:"+result[2]+"<img src=\"img/etc/Icon_acc_b.png\" style=\"width:5%\">\uba85\uc911:"+result[1]+"<img src=\"img/etc/Icon_rof_b.png\" style=\"width:5%\">\uc0ac\uc18d:"+result[3]+"</td></tr>"):$("#result").append("<tr><td>"+i+"</td><td>"+num+"</td><td><img src=\"img/etc/Icon_dmg.png\" style=\"width:5%\">:"+result[0]+"<img src=\"img/etc/Icon_eva.png\" style=\"width:5%\">:"+result[2]+"<img src=\"img/etc/Icon_acc.png\" style=\"width:5%\">:"+result[1]+"<img src=\"img/etc/Icon_rof.png\" style=\"width:5%\">:"+result[3]+"</td></tr>");return!1});
// battery by kosehy
var arrCom="1com 2com 3com 4com 5com 6com 7com 8com 9com 10com".split(" "),arrSet="1set 2set 3set 4set 5set 6set 7set 8set 9set 10set".split(" "),arrPet="1pet 2pet 3pet 4pet 5pet 6pet 7pet 8pet 9pet 10pet".split(" "),arrTcom="1tcom 2tcom 3tcom 4tcom 5tcom 6tcom 7tcom 8tcom 9tcom 10tcom".split(" "),arrTnr=[0,50,85,95,99,101,102,102,102.5,103,103.5],i;
for(i=0;i<arrCom.length;i++){
document.getElementById(arrCom[i]).addEventListener("keyup",sumComfort);
document.getElementById(arrSet[i]).addEventListener("keyup",sumComfort);
document.getElementById(arrPet[i]).addEventListener("keyup",sumComfort);
document.getElementById(arrTcom[i]).addEventListener("keyup",sumComfort);
}
var totalCom=0,totalTcom=0,numOfroom=0,totalBr=0,averageTbr=0;
function sumComfort(){
for(i=0;i<arrCom.length;i++){
totalCom=Number(document.getElementById(arrCom[i]).value)+Number(document.getElementById(arrSet[i]).value)+Number(document.getElementById(arrPet[i]).value);
document.getElementById(arrTcom[i]).value=totalCom;
totalCom=0;
totalTcom=totalTcom+Number(document.getElementById(arrTcom[i]).value);
document.getElementById("tTcom").innerText=totalTcom;
if(document.getElementById(arrCom[i]).value!=0){
numOfroom=i+1;
document.getElementById("tnr").innerText=numOfroom;
}
}
totalBr=11*totalTcom/10000+(-0.1*totalTcom*totalTcom/10000/10000)+arrTnr[Number(numOfroom)-1];
document.getElementById("tbr").innerText=totalBr.toFixed(2);
averageTbr=(11*(totalTcom+1000))/10000+(-0.1*((totalTcom+1000)*(totalTcom+1000))/10000/10000)-((11*totalTcom/10000)+(-0.1*(totalTcom*totalTcom)/10000/10000));
document.getElementById("abtr").innerText=averageTbr.toFixed(2);
averageTbr=0,totalTcom=0;
}