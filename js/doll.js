"use strict";var grid,rCh,ghver=1.80623,dollData=[],idir='../img/t_doll/',loader=$(".loader"),dollSkill=["AimAttackCurrentTarge","AimAttackDistanceTarge","AimAttackSpecificTarge","airattack","airborne","AK12Buff","AN94Shot","AR15Shot","armor","armorBuff","armorBuffSelf","armorDebuff","armorDebuffSelf","BBNoel","bombard","Bronya","buff","Carcano1891","Carcano1938","CBJMS","Chloe","CLEAR","Coldweapon","comboBuffSelf","command","crit","critBuff","critBuffSelf","debuff","defense","dodgeBuff","dodgeBuffSelf","dodgeDebuff","empty","FAIL","fighting","Flare","Flashbomb","fortress","GGElfeldt","golden","Grenade","Himeko","hitBuff","hitBuffSelf","hitDebuff","illumine","Invincible","Invincible35","IWantU","Kaguya","Kiana","LadyMadeSTAR","Landmines","M4Nightmare","M1918","MosinNagant","Napalm","nightcritBuff","nightcritBuff38","nightcritBuffSelf","nightdodgeBuff","nightdodgeBuffSelf","nightdodgeDebuff","nighthitBuff","nighthitBuffSelf","nighthitDebuff","nightpowBuff","nightpowBuffSelf","nightpowDebuff","nightrateBuff","nightrateBuffSelf","nightrateDebuff","nightspeedDebuff","nighttargetdodgeDebuff","nighttargethitDebuff","nighttargetpowDebuff","nighttargetrateDebuff","nighttargetspeedDebuff","Noconsumption","position","powBuff","powBuffSelf","powBuffShield","powDebuff","RaidenMei","rateBuff","rateBuffSelf","rateDebuff","reinforce","rescue","RifleGrenade","roadblocks","Sakura","Seele","shield","Shotgun","Smoke","sniper","speedDebuff","target","targetdodgeDebuff","targethitDebuff","targetpowDebuff","targetrateDebuff","targetspeedDebuff","Theresa","VariableBuff","augbuff","OblivioN"];
var VoActor=["나즈카 카오리","마츠이 에리코","마이하라 유메","무카이야마 나오미","미사키 마미","미타라이 카린","사토 리나","사쿠마 히로미","스자키 아야","시노하라 나루미","시미즈 아이","아마노 미라이","아마미야 소라","아야미야 유키코","야마네 노조미","야츠루기 스미레","오구라 유이","오오니시 사오리","요시다 사치요","요시오카 카오리","요코야 사야카","우에사카 스미레","유우키 아오이","이와마츠 이즈미","이카다이 카나에","이타타니 아야카","이토 아스카","이데 카오리","츄조 토모요","타나카 아이미","타네다 리사","타카하시 하루카","토마츠 하루카","카나에 토오루","카야노 아이","코이즈미 타카오","호리에 유이","하나다 마미코","하나타 타마리","나카하라 마이","난죠 요시노","노나카 아이","노미즈 이오리","노토 마미코","닛타 히요리","다이몬 카미","미네우치 토모미","미모리 스즈코","사쿠라 아야네","세리자와 유우","스와 아야카","아카오 히카루","오오츠보 유카","우에마 에미","우치다 마아야","우치야마 유미","이가라시 히로미","코가 아오이","코시미즈 아미","쿠기미야 리에","카와스미 아야코","카토 에미리","쿠로사와 토모요","키타무라 에리"];
var VA=["Kaori Nazuka","Eriko Matsui","Yume Maihara","Naomi Mukaiyama","Mami Misaki","Karin Mitarai","Rina Sato","Hiromi Sakuma","Aya Suzaki","Narumi Sinohara","Ai Shimizu","Mirai Amano","Sora Amamiya","Yukiko Ayamiya","Nozomi Amane","Sumire Yatsurugi","Ogura Yui","Saori Onishi","Sachiyo Yoshida","Kaori Yoshioka","Sayaka Yokoya","Uesaka Sumire","Yuuki Aoi","Izumi Iwamatsu","Kanae Ikadai","Ayaka Itatani","Asuka Ito","Kaori Ide","Tomoyo Chuujou","Aimi Tanaka","Risa Taneda","Haruka Takahashi","Haruka Tomatsu","Tooru Kanae","Ai Kayano","Takao Koizumi","Yui Horie","Mamiko Hanada","Tamari Hinata","Mai Nakahara","Yoshino Nanjo","Ai Nonaka","Iori Nomizu","Mamiko Noto","Hiyori Nitta","Kami Daimon","Tomomi Mineuchi","Suzuko Mimori","Ayane Sakura","Serizawa Yuu","Ayaka Suwa","Hikaru Akao","Yuka Ootsubo","Emi Uema","Maaya Uchida","Yumi Uchiyama","Hiromi Igarashi","Aoi Koga","Koshimizu Ami","Rie Kugimiya","Ayako Kawasumi","Emiri Katou","Tomoyo Kurosawa","Eri Kitamura"];
$(document).ready(()=>{
	contentsload(),$('[data-toggle="popover"]').popover()
});
//FIXME Line 12: 스킬 검색용(필터)으로 일시 지정, 추후 스킬 이름으로 변환 바람
//FIXME Line 20: 스킬 검색용(타이핑)으로 일시 지정, 추후 스킬 이름으로 변환 바람
function contentsload(){
	$.ajax('../json/doll.json',{contentType:'application/json',dataType:'json',
		success:result=>{
		var allCharacters=$.map(result,(doll,index)=>{var timehour=parseInt(doll.buildTime/3600),timemin=doll.buildTime%3600/60,noval=doll.id;
			noval>20000?noval="M"+(noval-20000):noval>1000&&(noval="X"+(noval-1000));
			var character=$(`<div class="item" data-time="${timehour}${timemin}" data-type="${doll.type}" data-rarity="${doll.rarity}" data-skill="${doll.skill.src}"></div>`).detach(),
				dollcon=`<div class="text-white no" data-no="${doll.id}">${noval}</div><p class="name podo">${doll.krName}</p><i class="star r${doll.rarity}"></i><i class="incage doll info_cage_${doll.rarity}"></i><i class="type doll ${doll.type}_${doll.rarity}"></i><img width="175" height="276" src="https://cdn.jsdelivr.net/gh/ergo9ine/sfdb_img@${ghver}/img/t_doll/${doll.id}_i.png" style="background-color:#2c343d" onload="$(this).css('background-color','').removeAttr('onload')"><div class="tag">${doll.type}/${doll.nick}/${timehour}${timemin}/${doll.voice}/${doll.illust}/${doll.skill.src}</div>`;
			$(character).append(`<div class="tdoll item-content">`).find(".item-content").html(dollcon);
			return character
		});
		$('#grid').append(allCharacters),loadComplete();
		dollData=result
		}})
};
function loadComplete(){
	grid=new Muuri('#grid',{
		showDuration:0,hideDuration:0,layoutDuration:0,
		sortData:{
			time:(item,element)=>element.getAttribute('data-time'),
			type:(item,element)=>element.getAttribute('data-type').toUpperCase(),
			rarity:(item,element)=>element.getAttribute('data-rarity')
		},layout:{fillGaps:true}
	});
	loader.removeClass("is-active");
	$('#search').quicksearch('.item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click change blur focus',
		'hide':function(){$(this).removeClass('muuri-item-shown');filter('.muuri-item-shown')},
		'show':function(){$(this).addClass('muuri-item-shown');filter('.muuri-item-shown')}
	});
	$('.VAinput').quicksearch('.VA',{
		'bind':'keyup keydown click change blur focus',
		'hide':function(){$(this).addClass('d-none')},
		'show':function(){$(this).removeClass('d-none')}
	});
	$("button.flex-fill:nth-child(1)").click(()=>{$("div.justify-content-center:nth-child(3)").toggleClass("d-none"),$("div.justify-content-center:nth-child(4)").addClass("d-none")});
	$("button.flex-fill:nth-child(2)").click(()=>{$("div.justify-content-center:nth-child(4)").toggleClass("d-none"),$("div.justify-content-center:nth-child(3)").addClass("d-none")});
	$(".item-content").click(function(){
		$(".grid,#search,#func").toggleClass('d-none'),$("body>div:nth-child(2)").toggleClass("d-md-flex"),$("body>div:nth-child(3)").toggleClass("d-flex");
		var clicked=$(this).children(".no").attr("data-no");
		$.each(dollData,(index,doll)=>{
			if(doll.id==clicked){
				var simg=idir+doll.id,cimg=simg+'.png',timehour=parseInt(doll.buildTime/3600),timemin=doll.buildTime%3600/60,time=`${timehour}시간${timemin}분`,gridself=`#grid${doll.Fx.self}`,gridPos=[],skins=[];
				$.each(doll.Fx.tile,(index,value)=>{gridPos.push(`#grid${value}`)});
				gridPos=gridPos.toString();
				for (var x=1;x<10;x++){$(`#grid${x}`).removeClass("bg-white aqua grey").addClass("grey")};
				$("body,html").animate({scrollTop:0},0);
				$(".blockquote>p:nth-child(1)").html(doll.krName);
				$(".blockquote-footer>cite:nth-child(1)").html(doll.id);
				$.each(doll.skins,(index,value)=>{skins.push(`<button type="button" class="btn btn-warning btn-sm">${value}</button>`)});
				$(".skinntg,#contents>div:nth-child(6)").append(skins);
				$("#contents>div:nth-child(6)>button").addClass("btn-block")
				$(".col-lg-5:nth-child(1)>img").attr("src",cimg);
				$("#CV").text(doll.voice);
				$("#illust").text(doll.illust);
				$("#GN").html(doll.name);
				$("#Time").html(time);
				$("#Drop").attr("data-content",doll.drop);
				$(gridself).removeClass("grey").addClass("bg-white");
				$(gridPos).removeClass("grey").addClass("aqua");
				var ctx="statisticschart",statisticschart={datasets:[{label:doll.krName,backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgb(255,99,132)",pointBackgroundColor:"rgb(255,99,132)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(255,99,132)",borderWidth:1},{backgroundColor:"rgba(54,162,235,0.2)",borderColor:"rgb(54,162,235)",pointBackgroundColor:"rgb(54,162,235)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgb(54,162,235)",borderWidth:1}]},chartOptions={maintainAspectRatio:false,title:{display:false},scale:{ticks:{fontSize:9,beginAtZero:true}},scaleLabel:{display:false}};
				chrtset(doll,statisticschart);
				fxts(doll.Fx);
				SKB();
				Skill(doll.id,doll.skill);
				rCh=new Chart(ctx,{type:'radar',data:statisticschart,options:chartOptions});
				rCh.update();
			}
		})
	});
	$("button.btn-dark:nth-child(5)").click(()=>{$("#contents>div:nth-child(6)").toggleClass("d-none d-block")});
	$(".xfunc").click(()=>{rCh.destroy(),togglecon()});
};
function VAfltr(a){
	var b=cho_hangul(a)
	$(".VoC").append(`<a class="dropdown-item VA" href="#"><span>${a}</span><span class="d-none">${b}/</span></a>`)
};
function sort(a){grid.sort(a)};
function filter(a){grid.filter(`${a}`)};
function Sval(a){$("#search").val(a),$("#search").click()};
function chrtset(x,y){
	var D="편제당<br>탄약 C,식량 M 소모"
	"true"==x.mod?(Set1(2),table(2)):(Set1(1),table(1));
	"hg"==x.type?Set2("HG",[71,31,79,58,55],10,10):
	"smg"==x.type?Set2("SMG",[183,28,70,86,13],25,20):
	"ar"==x.type?Set2("AR",[115,51,43,72,47],20,20):
	"rf"==x.type?Set2("RF",[86,128,33,34,74],15,30):
	"mg"==x.type?Set2("MG",[171,89,28,119,28],40,30):
	"sg"==x.type&&Set2("SG",[261,32,11,28,11],30,40);
	function table(k){
		var a,b;
		for (var n=2;n<22;n=n+2){
			n==2?a=`${x.hp[0]} ~ ${x.hp[k]}`:
			n==4?a=`<div class="btn-group" role="group" aria-label="Acquisition"><button class="btn btn-sm bg-warning" disabled>Normal</button><button class="btn btn-sm bg-danger" disabled>Heavy</button><button class="btn btn-sm bg-info" disabled>Drop</button></div>`:
			n==6?a=`${x.dmg[0]} ~ ${x.dmg[k]}`:
			n==8?a=`${x.dodge[0]} ~ ${x.dodge[k]}`:
			n==10?a=`${x.hit[0]} ~ ${x.hit[k]}`:
			n==12?a=`${x.FR[0]} ~ ${x.FR[k]}`:
			n==14?a=
				x.type=="hg"?`20%`:
				x.type=="smg"?`5%`:
				x.type=="ar"?`20%`:
				x.type=="rf"?`40%`:
				x.type=="mg"?`5%`:
				`40%`:
			n==16?a=`50%`:
			n==18?a=`10`:
			n==20&&(a=`${x.ammo}`);
			$(`#table>div:nth-child(${n})`).html(a);
			if ($("#table>div:nth-child(20)").text()=="undefined"){$("#table>div:nth-child(20)").text("")};
			if (Array.isArray(x.drop)==true){$("#table>div:nth-child(4)>.btn-group>button:nth-child(3)").removeAttr("disabled").addClass("text-white")};
		}}
	function Set1(z){y.labels=["체력","화력","회피","사속","명중"];y.datasets[0].data=[x.hp[z],x.dmg[z],x.dodge[z],x.FR[z],x.hit[z]]};
	function Set2(a,b,c,d){y.datasets[1].label=a+"평균";y.datasets[1].data=b;D=D.replace("C",c).replace("M",d)};
	$("#sec-fir>div:nth-child(2)>div:nth-child(2)").html(D);
};
function fxts(x){
	var TS="타일 위 타겟에게";
	"all"==x.target?Set("모든 총기"):
	"hg"==x.target?Set("HG"):
	"smg"==x.target?Set("SMG"):
	"ar"==x.target?Set("AR"):
	"rf"==x.target?Set("RF"):
	"mg"==x.target?Set("MG"):
	"sg"==x.target&&Set("SG");
	$.each(x.TileFx,(index,value)=>{
		"dmg"==index?TS+=`<br>화력 ${value}%증가`:
		"dodge"==index?TS+=`<br>회피 ${value}%증가`:
		"hit"==index?TS+=`<br>명중 ${value}%증가`:
		"FR"==index?TS+=`<br>사속 ${value}%증가`:
		"cri"==index?TS+=`<br>치명타율 ${value}%증가`:
		"time"==index?TS+=`<br>쿨타임 ${value}%감소`:
		"armor"==index&&(TS+=`<br>장갑 ${value}%증가`);
	});
	function Set(x){TS=TS.replace("타겟",x)};
	$("#sec-fir>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)").html(TS);
};
function SKB(){
	$(".skinntg>button,#contents>div:nth-child(6)>button").click(function(){
		var imgtag=$(".col-lg-5:nth-child(1)>img"),iX=$(this).index(),No=$(".blockquote-footer>cite:nth-child(1)").text(),Isrc=idir+No+'.png';
		if(0==iX){var imgsrc=imgtag.attr("src").split(idir)[1].split(".png")[0],imgM=imgsrc.indexOf("_d"),imgT=imgsrc.slice(0,-2);-1!=imgM?(imgtag.attr("src",idir+imgT+".png")):(imgtag.attr("src",idir+imgsrc+"_d.png"))}
		else{1==iX?imgtag.attr("src",Isrc):(--iX,Isrc=idir+No+"_"+iX+".png",imgtag.attr("src",Isrc))};
	});
};
function Skill(y,x){
	var src=x.src,dmg=x.Fx.dmg,dmg1=x.Fx.dmg1,dmg2=x.Fx.dmg2,dmg3=x.Fx.dmg3,armor=x.Fx.armor,dodge=x.Fx.dodge,hit=x.Fx.hit,FR=x.Fx.FR,cri=x.Fx.cri,time=x.Fx.time,MS=x.Fx.MS,Sdesc="";
	function sniper(time,target){Sdesc=`${time}초간 조준 후, ${target}에게 공격력의 ${dmg[1]/10}배의 피해를 입힌다.`};
	function c81(a){Sdesc=`${a} 화력을 ${dmg[1]}% 상승시킨다.`};
	function rep(a,b){Sdesc=Sdesc.replace(a,b)};
	function pt(a){Sdesc=Sdesc.replace("1.5",a)};
	$("#sec-fir>div:nth-child(3)>div:nth-child(2)>img").attr('src',"../img/etc/skill/"+dollSkill[src]+".png");
	//console.log(src)
	src==0||src==1?
		y==148?Sdesc=`지속시간 동안 자신의 공격속도를 ${FR[1]}% 감소시키고, 화력을 ${dmg[1]}% 상승시킨다.`:
		y==183?Sdesc=`1초간 조준 후 특수한 탄환을 발사하여 공격력의 ${dmg1[1]/10}배의 피해를 입히고 3초간 받는 피해량을 ${dmg2[1]}% 증가시키며 아군의 화력을 집중시킨다. 보스급의 적을 우선 조준하며 컨텐더의 위치에 따라 전열 : 가장 멀리있는 / 중간 : 가장 체력이 많은 / 후열 : 가장 가까운 적을 조준한다.`:
		y==222?Sdesc=`패시브: 스킬 쿨타임 종료 후 TAC의 드론이 무작위의 적을 조준합니다.(1초마다 대상 변경) 액티브: 조준된 적에게 치명타가 적용되는 저격을 하여 ${dmg[1]}배의 피해를 입힙니다.`:
		x.target=="enemy_current"?(sniper("1.5","현재 공격하던 타깃"),
			y==145?(pt("2")):
			y==46&&(rep("1.5초간 조준 후","1초씩 두번 조준 사격하여"),rep("현재 공격히던 타깃","각각 현재 타깃에게"))):
		x.target=="enemy_farthest"?(sniper("1.5","가장 멀리 있는 적"),
			y==180||y==192&&(pt("2"),rep(`에게 공격력의 ${dmg[1]/10}배의 피해를 입힌다`,`에게 관통효과를 지닌 탄환을 발사하여, 뚫고 지나간 모든 적에게 공격력의 ${dmg[1]/10}배의 피해를 입히며, 목표 대상에겐 추가로 공격력의 ${dmg[1]/10}배의 피해를 입힌다.`))):
		x.target=="enemy_specific"?sniper("1.5","특정한 타깃"):
		x.target=="enemy_hp_highest"?Sdesc=`2초간 조준 후, 가장 체력이 많은 적에게 공격력의 ${dmg1[1]/10}배의 피해를 입힌다. 만약 목표 대상이 장갑형 개체일 경우 ${dmg2[1]/10}배의 피해를 입힌다.`:
		x.target=="enemy_nearest"&&(sniper("1.5","가장 가까운 타깃"),
			y==42||y==53||y==128?pt("2"):
			y==202&&(rep(`${dmg[1]/10}`,`${dmg[1]*100}`),pt("1"),rep("배의 피해를 입힌다.","%의 피해를 입힌다. 단 빗나갈 수 있으며 사격 후 재장전에 2초가 소요된다."))):
	src==5?Sdesc=`자신의 화력 사속 / 명중 및 치명률을 ${dmg[1]}% 상승시킨다.`:
	src==6?Sdesc=`공격 대상이 바뀔 시 2회의 대미지를 입힌다. 스킬 발동 후 지속시간 동안 매 공격 시 2회의 대미지를 입힌다.`:
	src==10?Sdesc=`자신의 장갑을 ${armor[1]}% 상승시킨다.`:
	src==13?Sdesc=`적을 향해 필살기를 사용하여 일정 범위 내의 적들에게 공격력의 ${dmg[1]/10}배의 대미지를 총 8회 입힌다`:
	src==15?Sdesc=`블랙홀을 발생시키는 수류탄을 던져 ${time[1]}초 동안 반경 2.5 범위 내의 적을 끌어당기고 중심에서 1.5 범위 내의 적들에게 초당 공격력의 ${dmg[1]}%의 피해를 준다.`:
	src==17?Sdesc=`스킬 발동 시 제대에 배속된 RF 1기마다(편제무관) 자신의 치명률과 사속 ${FR[1]}%씩 상승. ${time[1]}초 지속 【패시브 : 공격 시 40%의 확률로 2초 동안 같은 열에 있는 모든 아군의 치명률과 사속 ${cri[1]}% 상승(최대 3회 중첩)】`:
	src==18?Sdesc=`발동 시 ${dmg1[1]}개의 각인을 새긴다. 【패시브 : 공격 시 ${cri[1]}% 확률로 각인을 ${x.Fx.ammo[1]}개씩 새긴다. 18개 도달 시 다음 공격으로 엘리트 적에게 공격력의 ${dmg2[1]*10}%(통상 적에게 ${dmg3[1]*10}%)의 피해를 입히며 각인 수는 리셋된다.】`:
	src==19?Sdesc=`스킬을 발동할 때마다 다른 효과를 가진 탄환으로 교체 : <color=#91c1f0>아음속탄</color>(기본) : 회피 ${dodge[1]}% 상승 / <color=#db3d3d>ST탄</color> : 화력 ${dmg[1]}% 상승 / <color=#ffb400>일반탄</color> : 명중 ${hit[1]}% 상승`:
	src==21?Sdesc=`공격을 멈추고 다섯 차례 연주한다 매 연주는 무작위 아군 하나의 화력과 명중을 ${dmg1[1]}%(Glory Light 장착시 ${dmg2[1]}%) 상승시킨다<br>중첩 불가<br>연주당 지속시간 각 3초.`:
	src==22?Sdesc=`투척용 도끼를 던져 타깃에게 공격력의 ${dmg[1]}배의 피해를 입힌다.`:
	src==23?Sdesc=
		y==79||y==185?`야간작전에서 ${time[1]}초 동안 자신의 화력을 ${x.FxNight.dmg[1]}%(주간 보정치 : ${dmg[1]}%) 상승시키며 사격 중 장탄수를 ${x.Fx.ammo[1]}발 추가한다.`:
		y==80||y==81||y==110||y==121?`자신의 명중을 ${hit[1]}% 상승시키며 지속시간 동안 모든 공격이 치명타로 적용된다.`:
		y==77||y==85||y==109?`패시브 스킬 <br> 매 3회 공격 시 그 다음 공격은 타깃에게 ${dmg[1]/10}배의 피해를 입힌다.`:
		y==112?`재장전 할 때 마다 25초간 자신의 화력이 ${dmg[1]}% 상승하는 버프를 받는다 (각 버프는 중첩가능)`:
		y==163||y==164||y==165?`스크립트 준비중`:
		y==173?`매 공격시 ${cri[1]}%의 확률로 반드시 치명상을 입히는 탄환 한 발을 발사한다.`:
		y==189?`${time[1]}초 동안 사속이 ${FR[1]}% 상승하며 장탄수가 ${x.Fx.ammo[1]}발 증가한다. 단 다음 탄창 교체에 걸리는 시간이 1초 증가한다.`:
		y==203?`패시브 효과 : ${dmg[1]}초마다 적에게 표식 1개를 새긴다. (중첩 가능)<br>액티브 효과 : 스킬 발동 후 일반 사격 시 표식이 남겨진 목표에게 추가타가 발생하며 표식을 1개 소모한다. 액티브 효과는 최대 ${time[1]}초 혹은 표식이 전부 소모될 때까지 지속된다.`:
		y==208?`자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시키고 장탄수가 ${x.Fx.ammo[1]}발 추가되며 난사 모드로 진입하여 매 공격 시 타깃을 변경한다. 단 자신의 이동속도가 50% 감소한다.`:
		`${time[1]}초 동안 자신의 화력을 ${dmg[1]}% 상승시키며 사격 중 장탄수를 ${x.Fx.ammo[1]}발 추가한다.`:
	src==26?Sdesc=`아군 전체 화력을 ${dmg[1]}%, 치명타율을 ${cri[1]}% 상승시킨다.`:
	src==27?Sdesc=`자신의 화력과 치명타율을 각각 ${dmg[1]}% 씩 상승시킨다.`:
	src==30?Sdesc=
		y==140?(`아군 전체 명중을 ${hit[1]}%, 회피를 ${dodge[1]}% 상승시킨다.`):
		`아군 전체 회피를 ${dodge[1]}% 상승시킨다.`:
	src==31?Sdesc=
		y==28?`자신의 사속이 ${FR[1]}%, 명중이 ${hit[1]}% 만큼 감소하는 대신 이동속도가 ${MS[1]}%, 회피가 ${dodge[1]}% 만큼 증가한다`:
		`자신의 회피를 ${dodge[1]}% 상승시킨다.`:
	src==32?Sdesc=`적군 전체 회피를 ${dodge[1]}% 감소시킨다.`:
	src==34?Sdesc=`공격을 멈추고 다섯 차례 연주한다 매 연주는 무작위 적군 셋의 사속과 명중을 ${dmg1[1]}%(Black Cat 장착시 ${dmg2[1]}%) 감소시킨다<br>2회 중첩 가능<br>연주당 지속시간 각 3초.`:
	src==36?Sdesc=`[야간전용]아군 전체 명중을 ${x.FxNight.hit[1]}% 상승시킨다`:
	src==37?Sdesc=`섬광탄을 투척하여 반경 2.5범위 내의 적들을 ${time[1]}초 동안 기절 상태로 만든다.`:
	src==39?Sdesc=`표적에게 공격력의 ${dmg1[1]}배의 피해를 입힌 뒤 미사일을 발사하여 표적 주위 1.5범위 내의 적들에게 ${dmg2[1]}배의 피해를 입힌다`:
	src==41?Sdesc=`수류탄을 투척하여 반경 2.5범위 내의 적들에게 공격력의 ${dmg[1]/10}배의 피해를 입힌다.`:
	src==42?Sdesc=`가장 가까운 적 3기를 대상으로 매혹(화력 감소 ${dmg1[1]}%)과 공포(이동속도 감소 ${dmg1[1]}%) 상태로 만들고 공포에 빠진 적에게 가하는 대미지가 ${dmg2[1]}% 증가한다.`:
	src==43?Sdesc=`아군 전체 명중을 ${hit[1]}% 상승시킨다.`:
	src==44?Sdesc=`자신의 명중을 ${hit[1]*100}% 상승시킨다.`:
	src==45?Sdesc=`적군 전체 명중을 ${hit[1]}% 감소시킨다`:
	src==47?Sdesc=
		y==156||y==157?`자신의 회피를 ${dodge[1]}%, 장갑을 ${armor[1]}% 상승시킨다`:
		`어떠한 공격이라도 회피 할 수 있다.`:
	src==51?Sdesc=`한 줄기의 번개를 불러내 반경 1.5 범위 내의 적들에게 치명피해를 입히고 ${time[1]}초동안 마비(이동/공격 불가)와 쇄약(피해량 증가 ${dmg[1]}%) 상태로 만든다(보스 무효)`:
	src==57?Sdesc=`소이탄을 투척하여 반경 1.5범위 내의 적들에게 공격력의 ${dmg1[1]/10}배의 폭발 대미지와 함께 ${time[1]}초 동안 0.33초당 공격력의 ${dmg2[1]/10}배의 화상 도트 대미지를 지속적으로 입힌다.`:
	src==60?Sdesc=`야간작전에서 자신의 화력을 ${x.FxNight.dmg[1]}%(주간 보정치 없음) 명중을 ${hit[1]}%(주간 보정치 : ${hit[1]}%) 상승시키며 지속시간 동안 모든 공격이 치명타로 적용된다.`:
	src==61?Sdesc=`야간작전에서 아군 전체 회피를 ${x.FxNight.dodge[1]}% 상승시킨다. (주간 보정치 : ${dodge[1]}%)`:
	src==63?Sdesc=`야간작전에서 적군 전체 회피를 ${x.Fx.dodge[1]}% 감소시킨다. (주간 보정치 : ${dodge[1]}%)`:
	src==67?Sdesc=`야간작전에서 자신의 화력을 ${x.FxNight.dmg[1]}% 상승시킨다. (주간 보정치 : ${dmg[1]}%)`:
	src==68?Sdesc=`주간전에서 화력이 ${dmg[1]}% 치명률이 ${cri[1]}% 상승하며 야간전일 경우 명중이 ${x.FxNight.hit[1]}% 사속이 ${x.FxNight.FR[1]}% 상승한다.`:
	src==69?Sdesc=`(야간)적군 전체 화력을 ${dmg[1]}(${x.FxNight.dmg[1]})% 하락시킨다.`:
	src==71?Sdesc=`(야간)자신의 사속을 ${FR[1]}(${x.FxNight.FR[1]})% 상승시킨다.`:
	src==81?Sdesc=
		y==13?`아군 전체의 화력과 사속을 각각 ${dmg[1]}% 씩 상승시킨다.`:
		y==142?`아군 전체의 사속과 치명타율을 각각 ${dmg[1]}% 씩 상승시킨다.`:
		y==167?`아군 전체 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		y==171?`스킬 발동시 자신이 제공하는 버프칸에 있는 아군에게 화력과 명중 그리고 사속을 ${dmg[1]}% 상승시킨다.`:
		y==181||y==193?`야간작전에서 자신의 화력을 ${x.FxNight.dmg[1]}%(주간 보정치 : ${dmg[1]}%) 치명타율을 ${x.FxNight.cri[1]}%(주간 보정치 : ${cri[1]}%) 상승시킨다.`:
		`아군 전체 화력을 ${dmg[1]}% 상승시킨다.`:
	src==82?Sdesc=
		y==58||y==138?`자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		y==102?`패시브 효과 : 스킬 미발동 시 매 2초마다 회피 상승 ${dmg}% 화력 감소 ${dodge}%(최대 5회 중첩) & 액티브 효과 : 누적된 패시브 효과를 초기화 한 뒤 매 2초마다 화력 상승 ${dmg2[1]}% 회피감소 ${x.Fx.dodge2[1]}% (최대 5회 중첩)`:
		y==158||y==161||y==162?`자신의 화력을 ${dmg[1]}% 상승시키며 지속시간 동안 동시공격 가능한 타깃수가 5명으로 늘어난다.(슬러그 탄의 효과와 중첩되지 않는다.)`:
		y==165?`자신의 화력을 ${dmg[1]}% 장갑을 ${armor[1]}% 상승시킨다.`:
		y==169||y==203?`자신의 화력을 ${dmg[1]}% 회피를 ${dodge[1]}% 상승시킨다.`:
		y==172?`스킬 발동 시 자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시키며 후열의 적을 우선적으로 공격하게된다.`:
		y==175?`자신의 화력을 ${dmg[1]}% 사속을 ${FR[1]}% 상승시킨다.`:
		y==211?`자신의 화력을 ${dmg[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		`자신의 화력을 ${dmg[1]}% 상승시킨다.`:
	src==83?Sdesc=`전투 중 자신의 앞 한 칸에 아군 인형이 존재 시 해당 인형에게 ${armor[1]}의 피해를 막아주는 보호막을 부여하고 회피를 ${dodge[1]}% 상승시킨다. 비어 있을 경우 자신의 화력을 ${dmg[1]}% 사속을 ${FR[1]}% 상승시킨다.`:
	src==84?Sdesc=
		y==15||y==220?`적군 전체 화력을 ${dmg[1]}% 감소시킨다.`:
		`적군 전체 화력을 ${dmg[1]}% 감소시키고 자신의 회피를 ${dodge[1]}% 상승시킨다.`:
	src==85?Sdesc=`1.5초간 조준 후 가장 멀리 있는 적에게 공격력의 ${dmg[1]}배의 대미지를 입히고 ${time[1]}초간 마비(이동/공격 불가) 상태로 만든다.(보스 무효)`:
	src==86?Sdesc=`아군 전체 사속을 ${FR[1]}% 상승시킨다.`:
	src==87?Sdesc=
		y==184?`자신의 사속을 ${FR[1]}% 명중을 ${hit[1]}% 상승시킨다.`:
		`자신의 사속을 ${FR[1]}% 상승시킨다.`:
	src==88?Sdesc=`적군 전체 사속을 ${FR[1]}% 감소시킨다.`:
	src==91?Sdesc=
		y==61||y==66||y==69||y==108?`유탄을 발사하여 반경 1/2.5/4범위 내의 적들에게 각각 공격력의 ${dmg1[1]}/${dmg2[1]}/${dmg3[1]}배의 피해를 입힌다.`:
		y==106?`3발의 유탄을 연속으로 발사하여 각 발당 반경 1.5범위 내의 적들에게 공격력의 ${dmg[1]}배의 피해를 입힌다.`:
		y==151?`단일 적 타깃에게 ${dmg[1]}의 고정 대미지를 입히고 거리 ${x.Fx.KB[1]}칸 만큼 적을 밀어낸다.`:
		y==196?`유탄을 발사하여 반경 2.5범위 내의 적들에게 공격력의 ${dmg1[1]}%의 피해를 입히며 3기 이상의 적 명중 시 ${x.Fx.time1[1]}초 동안 타깃의 받는 피해량을 ${dmg2[1]}% 증가시키고 3기 미만의 적 명중 시 ${x.Fx.time2[1]}초 동안 자신의 대미지가 ${dmg3[1]}% 상승한다.`:
		`유탄을 발사하여 반경 1.5범위 내의 적들에게 공격력의 ${dmg[1]}배의 피해를 입힌다.`:
	src==94?Sdesc=`스킬 발동 후 공격의 마지막 탄환이 적에게 공격력의 ${dmg[1]}%의 대미지를 입히고 자신의 탄창을 즉시 장전한다.`:
	src==95?Sdesc=
		y==164?`스크립트 준비중`:
		`전투 중 전열에 존재하는 아군측 인형에게 ${armor[1]}의 피해를 흡수하는 실드를 부여한다.`:
	src==96?Sdesc=
		y==160?`다음 3회의 공격을 점차 강화 하여 각각 타깃에게 자신의 공격력의 ${dmg1[1]}/${dmg2[1]}/${dmg3[1]}배의 피해를 입힌다.`:
		`공격력의 ${dmg[1]}배의 피해를 주는 추가탄을 발사하고 거리 ${x.Fx.KB[1]}칸 만큼 적을 밀어낸다.`:
	src==97?Sdesc=`연막탄을 투척하여 반경 2.5범위 내의 적들의 공격속도를 ${FR[1]}%,이동속도를 ${MS[1]}% 감소시킨다`:
	src==106?Sdesc=`${time[1]}초 동안 자신 주변 반경 ${dmg1[1]}범위 내의 적들의 받는 피해량 ${dmg3[1]}% 상승 및 매 공격 시 ${dmg2[1]}% 확률로 대상을 ${MS[1]}초 동안 속박(이동불가) 상태로 만든다.(보스 무효)`:
	src==107?Sdesc=`자신의 버프칸에 위치한 아군 인형에게 그 종류에 따라 강화 부여 : HG/SMG 회피 ${dodge[1]}% 상승 RF/AR 화력 ${dmg[1]}% 상승 MG/SG 명중 ${hit[1]}% 상승`:
	src==108?Sdesc=`자신의 명중을 ${hit[1]}% 감소시키는 대신 사속을 150까지 상승시키고 난사합니다.`:
	src==109&&(Sdesc=`스킬 지속시간 동안 쌍총으로 공격하여 2회의 피해를 입히며 반드시 치명타가 됩니다.`);
	Sdesc=y==5||y==11||y==47||y==174||y==200||y==20005?Sdesc+`<br>지속시간${x.FxNight.time[1]}초(주간 보정치 : ${time[1]}초)/선쿨${x.FCD}초/쿨타임${x.CD[1]}초`:
	src==94||y==77||y==85||y==109||y==173?Sdesc+``:
	src==0||src==1||src==13||src==22||src==37||src==39||src==39||src==41||src==57||src==91||src==94||src==96||y==79||y==102||y==185||y==213||y==1004||y==1005||y==1006||y==1009||y==1010?Sdesc+`<br>선쿨${x.FCD}초/쿨타임${x.CD[1]}초`:
	Sdesc+`<br>지속시간${time[1]}초/선쿨${x.FCD}초/쿨타임${x.CD[1]}초`;
	y==148||y==183&&(Sdesc=Sdesc.replace(`<br>`,`<br>지속시간${time[1]}초.`));
	$("#sec-fir>div:nth-child(3)>div:nth-child(2)>div").html(Sdesc);
};
function togglecon(){
	$(".grid,#search,#func").toggleClass('d-none');
	$("body>div:nth-child(2)").toggleClass("d-md-flex");
	$("body>div:nth-child(3)").toggleClass("d-flex");
	$("button.btn-warning").remove();
	$(".img-fluid").attr("src","");
	$("div.w3-display-container:nth-child(9)>div:nth-child(4)").removeAttr("data-content");
	$('[data-toggle="popover"]').popover('hide');
	$(".skinntg>button,#contents>div:nth-child(6)>button").off("click");
};
VoActor.forEach(VAfltr);
$(".filter,.dropdown-menu>a").click(function(){
	var filtr=$(this).text();
	filtr=="2성"?filter('[data-rarity="2"]'):
	filtr=="3성"?filter('[data-rarity="3"]'):
	filtr=="4성"?filter('[data-rarity="4"]'):
	filtr=="5성"?filter('[data-rarity="5"]'):
	filtr=="EXTRA"?filter('[data-rarity="ex"]'):
	filtr=="HG"?filter('[data-type="hg"]'):
	filtr=="SMG"?filter('[data-type="smg"]'):
	filtr=="AR"?filter('[data-type="ar"]'):
	filtr=="RF"?filter('[data-type="rf"]'):
	filtr=="MG"?filter('[data-type="mg"]'):
	filtr=="SG"?filter('[data-type="sg"]'):
	filtr=="제조불가"?filter('[data-time="00"]'):
	/*
	case "타일효과":
		grid.filter('[data-time="00"]')
	break;
	case "일러스트레이터":
		grid.filter('[data-time="00"]')
	break;
	*/
	filtr=="All"&&filter('[data-type]');
	//정렬
	filtr=="도감순"?new Muuri('.grid',{sordData:null}):
	filtr=="등급"?sort("rarity"):
	filtr=="제조시간"?sort("time"):
	filtr=="타입"&&sort("type");
});
$(".VA").click(function(){
	var voice=$(this).find("span:nth-child(1)").text();
	Sval(VA[VoActor.indexOf(voice)])
});
$("#CV,#illust").click(function(){
	var ClickText=$(this).text();
	togglecon();
	Sval(ClickText);
});
function cho_hangul(str){
	var cho=["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
	var result = "";
	var i;
	for(i=0;i<str.length;i++) {
		var code = str.charCodeAt(i)-44032;
		if(code>-1 && code<11172) result += cho[Math.floor(code/588)];
	}
	return result;
}