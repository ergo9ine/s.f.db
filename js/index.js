//JavaScript Document
//index
const TogV="invisible",doc=document;
$(document).ready(()=>{
toggleV(doc.querySelector("#open"),"Sidebar")
for(i of doc.querySelectorAll("#lo,#lc")){toggleV(i,"lm")};
for(i of doc.querySelectorAll("#ro,#rc")){toggleV(i,"rm")};
for(i of doc.querySelectorAll("#lm>button:nth-child(2),#lm>button:nth-child(3)")){i.addEventListener("click",()=>doc.querySelector("#rm").classList.remove(TogV))};
for(i of doc.querySelectorAll(".tab")){
	i.addEventListener("click",function(){
		var Classes=(this.getAttribute("class")).split(" "),T="tab1 tab2 tab3 tab4 tab5 tab6 tab7 tab8 tab9 tab10".split(" "),Tab="#Sidebar>button:nth-child(5),#lm>button:nth-child(4)".split(",");
		doc.getElementById("result").innerHTML="";
		for(i of doc.querySelectorAll(Tab)){i.classList.remove("bg-danger")};
		for(i of doc.querySelectorAll(".tab")){i.classList.remove("bg-danger")};
		this.classList.add("bg-danger");
		doc.getElementById("tab".concat(Classes[0].slice(1))).classList.remove("d-none");
		for(i of doc.querySelectorAll(".content")){
			if(i.getAttribute('id')=="tab".concat(Classes[0].slice(1))){continue};
			i.classList.add("d-none")
		}
	})
};
for(i of doc.querySelectorAll("#Sidebar>button,#lm>button:not(#lc)")){
	i.addEventListener("click",function(){
		var text=this.innerHTML;
		for(i of [this.parentNode.children].filter((child)=>child!==this)[0]){i.classList.remove("bg-danger")};
		this.classList.add("bg-danger");
		if(text=="Database"){TopMToggle(".sm",".db")}
		else if(text=="Simulator"){TopMToggle(".db",".sm")}
		else if(text=="Information"){for(i of doc.querySelectorAll("#contents>div")){i.classList.add("d-none")};doc.getElementById("index").classList.remove("d-none");for(i of doc.querySelectorAll(".tab")){i.classList.remove("bg-danger")};doc.getElementById("result").innerHTML=''}
	})
}
});
function TopMToggle(fir,sec){
	for(i of doc.querySelectorAll(fir)){i.classList.add("d-none")}
	for(i of doc.querySelectorAll(sec)){i.classList.remove("d-none")}
};
function toggleV(item,TargetId){item.addEventListener("click",()=>doc.getElementById(TargetId).classList.toggle(TogV))}
// disc
const dollAccExp=[0,0,1,3,6,10,15,21,28,36,45,55,66,78,91,105,120,136,153,171,190,210,231,253,276,300,325,351,379,410,444,486,532,582,636,694,757,824,896,973,1055,1143,1236,1335,1440,1551,1669,1794,1925,2064,2210,2364,2525,2694,2871,3057,3252,3456,3669,3892,4125,4368,4621,4884,5158,5443,5739,6047,6367,6699,7043,7494,7962,8448,8952,9474,10014,10573,11152,11750,12368,13007,13667,14348,15051,15777,16525,17296,18091,18910,19753,20879,22040,23235,24466,25733,27037,28378,29757,31175,32632,33632,34832,36232,37832,39632,41632,43832,46232,49032,52632,57432,63832,72832,84832,100832,122832,152832,192832,242832,302832];
const squadAccExp=[0,0,5,14,27,45,67,94,126,162,202,247,297,351,409,472,540,612,688,771,861,959,1065,1185,1320,1470,1635,1818,2019,2239,2479,2742,3025,3333,3666,4024,4410,4824,5266,5740,6246,6784,7357,7965,8610,9292,10015,10779,11584,12433,13327,14268,15256,16294,17383,18523,19718,20967,22272,23635,25059,26544,28090,29701,31378,33123,34938,36823,38778,40808,42914,45096,47358,49700,52125,54633,57228,59908,62678,65538,68493,71540,74685,77925,81270,84710,88260,91910,95670,99540,103520,107610,111820,116140,120580,125140,129830,134640,139570,144630,15E4];
const PerHour=[1,3,3,5,7,7,9,11,11,13,15];
const dor=["oath","fairy"],dor2=["dollCurrentLv","dollCurrentExp","dollTargetLv"],hoc=["hocCurrentLv","hocCurrentExp","hocTargetLv","hocTrainingGroundLv"];
for(var n=0;3>n;n++)0==n?(a=dor,b="change",c=DollOperationReportCalc):1==n?(a=dor2,b="keyup",c=DollOperationReportCalc):2==n&&(a=hoc,b="keyup",c=HocOperationReportCalc),init(a,b,c);
function init(Selector,Event,Handler){for(i in Selector){doc.getElementById(Selector[i]).addEventListener(Event,Handler)}}
function DollOperationReportCalc(){
	let oath=doc.getElementById("oath").checked+1,fairy=doc.getElementById("fairy").checked?3:1,
		currentLv=doc.getElementById("dollCurrentLv").value,
		currentExp=doc.getElementById("dollCurrentExp").value/100,
		targetLv=doc.getElementById("dollTargetLv").value,operationReport=0,
		dorResult=doc.getElementById("dollOperationReportResult");
	if(IsValidLv(currentLv,currentExp,targetLv,fairy,0,dollAccExp)){
		if(targetLv>115){
			operationReport+=Math.ceil((dollAccExp[targetLv]-dollAccExp[Math.max(currentLv,115)]-currentExp)/(30*oath));
			targetLv=115,currentExp=0;
		}
		if(targetLv>110&&currentLv<115){
			operationReport+=Math.ceil((dollAccExp[targetLv]-dollAccExp[Math.max(currentLv,110)]-currentExp)/(30*oath));
			targetLv=110,currentExp=0;
		}
		if(targetLv>100&&currentLv<110){
			operationReport+=Math.ceil((dollAccExp[targetLv]-dollAccExp[Math.max(currentLv,100)]-currentExp)/(30*oath));
			targetLv=100,currentExp=0;
		}
		if(targetLv<=100&&currentLv<100){operationReport+=Math.ceil(((dollAccExp[targetLv]-dollAccExp[currentLv])*fairy-currentExp)/30)}
		dorResult.innerText=`필요 작전보고서 : ${operationReport} 개`;
	}
	else{dorResult.innerText="필요 작전보고서 : N/A"}
}
function HocOperationReportCalc(){
let currentLv=Number(doc.getElementById("hocCurrentLv").value),currentExp=doc.getElementById("hocCurrentExp").value/100,targetLv=doc.getElementById("hocTargetLv").value,trainingGroundLv=doc.getElementById("hocTrainingGroundLv").value,operationReport=0,trainingTime=0,battery=0;
if(IsValidLv(currentLv,currentExp,targetLv,1,trainingGroundLv,squadAccExp)){operationReport=Math.ceil((squadAccExp[targetLv]-squadAccExp[currentLv]-currentExp)/30);trainingTime=Math.ceil(operationReport/PerHour[trainingGroundLv]);battery=trainingTime*5;doc.getElementById("hocOperationReportResult").innerText=`필요 특수작전보고서 : ${operationReport} 개\n훈련시간 : ${trainingTime} 시간\n전지 : ${battery} 개`}
else{doc.getElementById("hocOperationReportResult").innerText=`필요 특수작전보고서 : N/A\n훈련시간 : N/A\n전지 : N/A`}
}
function IsValidLv(currentLv,currentExp,targetLv,fairy,trainingGroundLv,AccExp){if(currentLv<targetLv&&currentExp>=0&&(AccExp[currentLv+1]-AccExp[currentLv])*fairy>currentExp&&(fairy==1&&targetLv<AccExp.length||fairy==3&&targetLv<=100)&&trainingGroundLv>=0&&PerHour.length>trainingGroundLv)return true;return false}
// enhanced
var stats="#atk,#dod,#hit,#spd".split(","),HG={avg:[.21,.25,.35,.24],M1911:[.2,.2323,.3176,.2426],"나강 리볼버":[.2164,.2323,.3667,.1944],P38:[.2,.2323,.3429,.2426],"FNP-9":[.2164,.2625,.3667,.2625],PPK:[.183,.263,.389,.263],"MP-446":[.2164,.2625,.3176,.2526],"Bren Ten":[.2323,.2625,.3176,.2526],"USP Compact":[.1831,.2909,.3667,.2722]},
	SMG={avg:[.21,.09,.32,.31],M3:[.2164,.0889,.3176,.2816],"PPSh-41":[.2,.0889,.2909,.3628],PP2000:[.2323,.0889,.3667,.3304],"MP-40":[.2164,.0889,.2909,.3089],"베레타38형":[.2323,.0889,.2625,.3089],m45:[.2323,.0889,.3176,.3089],"Spectre M4":[.2,.0889,.3429,.3549],IDW:[.1831,.0889,.3429,.2955],"64식":[.2164,.0889,.3176,.3628]},
	RF={avg:[.54,.31,.18,.17],"SVT-38":[.526,.291,.2,.166],G43:[.541,.291,.166,.183],"시모노프":[.5258,.2909,.2,.1655],"FN-49":[.5407,.2909,.1655,.1535],BM59:[.5548,.2909,.1655,.1831]},
	AR={avg:[.32,.21,.2,.27],G3:[.3781,.2323,.2,.2576],L85A1:[.3304,.2,.2,.2674],"갈릴":[.3176,.2,.2,.3089],"SIG-510":[.3781,.2,.2,.2476],F2000:[.3176,.2323,.2323,.3304],"63식":[.3667,.2,.2,.3]},
	MG={avg:[.48,.15,.17,.41],LWMMG:[.5258,.1655,.1655,.3628],DP28:[.4593,.1655,.1655,.4035],MG34:[.4683,.1286,.1655,.4275],FG42:[.4683,.1655,.2,.4275],"AAT-52":[.4857,.1655,.1655,.4405]},
	dir="img/etc/";
for(i of stats){doc.querySelector(i).classList.add("my-2","rounded-0","form-control","text-center","mx-auto")};
function getOneTypeCount(c){
	var b=[0,0,0,0],dom=["atk","hit","dod","spd"],a;
	for(a=0;4>a;a++)b[a]=Math.ceil(doc.getElementById(dom[a]).value/c[a]);
	return max=Math.max.apply(Math,b)
};
function getFinalValue(b,c){
	final=[0,0,0,0];
	for(var a=0;4>a;a++)final[a]=Math.floor(b*c[a]);
	return final
}
function resulttable(type,TI,i){
	dom=doc.getElementById("result"),num=getOneTypeCount(type[i]),result=getFinalValue(num,type[i]);
	"avg"==i?$("#result").append(`<tr><td><img src="${dir}${TI}.png"></td><td>${num}</td><td><img src="${dir}Icon_dmg_b.png">화력:${result[0]}<img src="${dir}Icon_eva_b.png">회피:${result[2]}<img src="${dir}Icon_acc_b.png">명중:${result[1]}<img src="${dir}Icon_rof_b.png">사속:${result[3]}</td></tr>`):$("#result").append(`<tr><td>${i}</td><td>${num}</td><td><img src="${dir}Icon_dmg.png">:${result[0]}<img src="${dir}Icon_eva.png">:${result[2]}<img src="${dir}Icon_acc.png">:${result[1]}<img src="${dir}Icon_rof.png">:${result[3]}</td></tr>`);
}
$("#clickme").click(()=>{
	doc.getElementById("result").innerHTML="<thead><tr><th>명칭</th><th>소모량</th><th>상승예측량</th></tr></thead><tbody></tbody>";
	for(;;){
		for(i in HG){resulttable(HG,"hg",i)}
		for(i in SMG){resulttable(SMG,"smg",i)}
		for(i in RF){resulttable(RF,"rf",i)}
		for(i in AR){resulttable(AR,"ar",i)}
		for(i in MG){resulttable(MG,"mg",i)}
		$("#tab6").css("height",($("#tab6").children()[2].clientHeight*1.4|1)+"px");
	return!1};
});
// battery by kosehy
var arrCom="1com 2com 3com 4com 5com 6com 7com 8com 9com 10com".split(" "),arrSet="1set 2set 3set 4set 5set 6set 7set 8set 9set 10set".split(" "),arrPet="1pet 2pet 3pet 4pet 5pet 6pet 7pet 8pet 9pet 10pet".split(" "),arrTcom="1tcom 2tcom 3tcom 4tcom 5tcom 6tcom 7tcom 8tcom 9tcom 10tcom".split(" "),arrTnr=[0,50,85,95,99,101,102,102,102.5,103,103.5],i;
for(i in arrCom){
doc.getElementById(arrCom[i]).addEventListener("keyup",sumComfort);
doc.getElementById(arrSet[i]).addEventListener("keyup",sumComfort);
doc.getElementById(arrPet[i]).addEventListener("keyup",sumComfort);
doc.getElementById(arrTcom[i]).addEventListener("keyup",sumComfort)
}
var totalCom=0,totalTcom=0,numOfroom=0,totalBr=0,averageTbr=0;
function sumComfort(){
for(i in arrCom){
totalCom=Number(doc.getElementById(arrCom[i]).value)+Number(doc.getElementById(arrSet[i]).value)+Number(doc.getElementById(arrPet[i]).value);
doc.getElementById(arrTcom[i]).value=totalCom;
totalCom=0;
totalTcom=totalTcom+Number(doc.getElementById(arrTcom[i]).value);
doc.getElementById("tTcom").innerText=totalTcom;
if(doc.getElementById(arrCom[i]).value!=0){
numOfroom=i+1;
doc.getElementById("tnr").innerText=numOfroom
}
}
totalBr=11*totalTcom/10000+(-0.1*totalTcom*totalTcom/10000/10000)+arrTnr[Number(numOfroom)-1];
doc.getElementById("tbr").innerText=totalBr.toFixed(2);
averageTbr=(11*(totalTcom+1000))/10000+(-0.1*((totalTcom+1000)*(totalTcom+1000))/10000/10000)-((11*totalTcom/10000)+(-0.1*(totalTcom*totalTcom)/10000/10000));
doc.getElementById("abtr").innerText=averageTbr.toFixed(2);
averageTbr=0,totalTcom=0
}