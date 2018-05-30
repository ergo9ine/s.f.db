var ghver=1.80519;dollData=[],w3img='<img class="w3-image" width="256" height="256">',idir='../img/t_doll/',loader=$(".loader"),dollSkill=["AimAttackCurrentTarge","AimAttackDistanceTarge","AimAttackSpecificTarge","airattack","airborne","AK12Buff","AN94Shot","AR15Shot","armor","armorBuff","armorBuffSelf","armorDebuff","armorDebuffSelf","BBNoel","bombard","Bronya","buff","Carcano1891","Carcano1938","CBJMS","Chloe","CLEAR","Coldweapon","comboBuffSelf","command","crit","critBuff","critBuffSelf","debuff","defense","dodgeBuff","dodgeBuffSelf","dodgeDebuff","empty","FAIL","fighting","Flare","Flashbomb","fortress","GGElfeldt","golden","Grenade","Himeko","hitBuff","hitBuffSelf","hitDebuff","illumine","Invincible","Invincible35","IWantU","Kaguya","Kiana","LadyMadeSTAR","Landmines","M4Nightmare","M1918","MosinNagant","Napalm","nightcritBuff","nightcritBuff38","nightcritBuffSelf","nightdodgeBuff","nightdodgeBuffSelf","nightdodgeDebuff","nighthitBuff","nighthitBuffSelf","nighthitDebuff","nightpowBuff","nightpowBuffSelf","nightpowDebuff","nightrateBuff","nightrateBuffSelf","nightrateDebuff","nightspeedDebuff","nighttargetdodgeDebuff","nighttargethitDebuff","nighttargetpowDebuff","nighttargetrateDebuff","nighttargetspeedDebuff","Noconsumption","position","powBuff","powBuffSelf","powBuffShield","powDebuff","RaidenMei","rateBuff","rateBuffSelf","rateDebuff","reinforce","rescue","RifleGrenade","roadblocks","Sakura","Seele","shield","Shotgun","Smoke","sniper","speedDebuff","target","targetdodgeDebuff","targethitDebuff","targetpowDebuff","targetrateDebuff","targetspeedDebuff","Theresa","VariableBuff"];
$(document).ready(()=>{
	contentsload();
	$('[data-toggle="popover"]').popover();
});
function contentsload(){
	$.ajax('../json/doll.json',{contentType:'application/json',dataType:'json',success:result=>{
		var itemcon='<div class="w3-hover-shadow tdoll item-content">',
		allCharacters=$.map(result,(doll,index)=>{var timehour=parseInt(doll.buildTime/3600),timemin=doll.buildTime%3600/60,noval=doll.id;
			noval>20000?noval="M"+(noval-20000):noval>1000&&(noval="X"+(noval-1000));
			var character=$(`<div class="item" data-time="${timehour}${timemin}" data-type="${doll.type}" data-rarity="${doll.rarity}"></div>`).detach(),
				dollcon=`<div class="w3-text-white no" data-no="${doll.id}">${noval}</div>
					<p class="w3-text-black name podo">${doll.krName}</p>
					<i class="star r${doll.rarity}"></i>
					<i	class="incage doll info_cage_${doll.rarity}"></i>
					<i class="type doll ${doll.type}_${doll.rarity}"></i>
					<img width="175" height="276" src="https://cdn.jsdelivr.net/gh/ergo9ine/sfdb_img@${ghver}/img/t_doll/${doll.id}_i.png" style="background-color:#2c343d" onload="$(this).css('background-color','').removeAttr('onload')">
					<div class="tag">${doll.nick}/${timehour}${timemin}/${doll.voice}/${doll.illust}</div>`;
			$(character).append(itemcon).find(".item-content").html(dollcon);
			return character;
		});
			$('#grid').append(allCharacters);
			loadComplete();
			dollData=result;
		},
		timeout:10000
	});
};
function loadComplete(){
	grid=new Muuri('#grid',{
		showDuration:0,
		hideDuration:0,
		layoutDuration:0,
		sortData:{
			time:(item,element)=>element.getAttribute('data-time'),
			type:(item,element)=>element.getAttribute('data-type').toUpperCase(),
			rarity:(item,element)=>element.getAttribute('data-rarity')
		},layout:{fillGaps:true}
	});
	loader.removeClass("is-active");
	$('#search').quicksearch('.item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':function(){$(this).removeClass('muuri-item-shown');filter('.muuri-item-shown')},
		'show':function(){$(this).addClass('muuri-item-shown');filter('.muuri-item-shown')}
	});
	$("button.flex-fill:nth-child(1)").click(()=>{
		$("div.justify-content-center:nth-child(3)").toggleClass("d-none")
		$("div.justify-content-center:nth-child(4)").addClass("d-none")
	});
	$("button.flex-fill:nth-child(2)").click(()=>{
		$("div.justify-content-center:nth-child(4)").toggleClass("d-none")
		$("div.justify-content-center:nth-child(3)").addClass("d-none")
	});
	$(".item-content").click(function(){
		$(".grid,#search,#filsor,#func").toggleClass('w3-hide');
		$("body>div:nth-child(2)").toggleClass("d-md-flex");
		var clicked=$(this).children(".no").attr("data-no");
		$.each(dollData,(index,doll)=>{
			if(doll.id==clicked){
				var simg=idir+doll.id,cimg=simg+'.png',timehour=parseInt(doll.buildTime/3600),timemin=doll.buildTime%3600/60,time=`${timehour}시간${timemin}분`,gridself=`#grid${doll.Fx.self}`,gridPos=[],skins=[];;
				$.each(doll.Fx.tile,(index,value)=>{gridPos.push(`#grid${value}`)});
				gridPos=gridPos.toString();
				for (x=1;x<10;x++){$(`#grid${x}`).removeClass("w3-white w3-aqua w3-grey").addClass("w3-grey")};
				$("body,html").animate({scrollTop:0},0);
				$(".blockquote>p:nth-child(1)").html(doll.krName);
				$(".blockquote-footer>cite:nth-child(1)").html(doll.id);
				$.each(doll.skins,(index,value)=>{skins.push(`<button type="button" class="btn btn-warning btn-sm">${value}</button>`)});
				$(".skinntg").append(skins);
				$(".w3-row.text-center>div:eq(0)").append(w3img);
				$(".w3-image").attr("src",cimg).removeClass("w3-grey").removeAttr("width height");
				$(".w3-left-align:nth-child(1)>div:nth-child(1)>div:nth-child(3)").html(doll.voice);
				$(".w3-left-align:nth-child(1)>div:nth-child(3)>div:nth-child(3)").html(doll.illust);
				$(".w3-display-container:nth-child(5)>div:nth-child(3)").html(doll.name);
				$(".w3-display-container:nth-child(7)>div:nth-child(3)").html(time);
				$(".w3-display-right:nth-child(4)").attr("data-content",doll.drop);
				$(gridself).removeClass("w3-grey").addClass("w3-white");
				$(gridPos).removeClass("w3-grey").addClass("w3-aqua");
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
	$(".xfunc").click(()=>{
		rCh.destroy();
		togglecon();
	});
};
function sort(a){grid.sort(a)};
function filter(a){grid.filter(`${a}`)};
function chrtset(x,y){
	var D="편제당<br>탄약 C,식량 M 소모"
	"true"==x.mod?Set1(2):Set1(1);
	"hg"==x.type?Set2("HG",[71,31,79,58,55],10,10):
	"smg"==x.type?Set2("SMG",[183,28,70,86,13],25,20):
	"ar"==x.type?Set2("AR",[115,51,43,72,47],20,20):
	"rf"==x.type?Set2("RF",[86,128,33,34,74],15,30):
	"mg"==x.type?Set2("MG",[171,89,28,119,28],40,30):
	"sg"==x.type&&Set2("SG",[261,32,11,28,11],30,40);
	function Set1(z){y.labels=["체력","화력","회피","사속","명중"];y.datasets[0].data=[x.hp[z],x.dmg[z],x.dodge[z],x.FoR[z],x.hit[z]]};
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
		"dmg"==index?TS+`<br>화력 ${value}%증가`:
		"dodge"==index?TS+`<br>회피 ${value}%증가`:
		"hit"==index?TS+`<br>명중 ${value}%증가`:
		"FoR"==index?TS+`<br>사속 ${value}%증가`:
		"cri"==index?TS+`<br>치명타율 ${value}%증가`:
		"time"==index?TS+`<br>쿨타임 ${value}%감소`:
		"armor"==index&&(TS+`<br>장갑 ${value}%증가`);
	});
	function Set(x){TS=TS.replace("타겟",x)};
	$("#sec-fir>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)").html(TS);
};
function SKB(){
	$(".skinntg>button").click(function(){
		var imgtag=$(".w3-image"),iX=$(this).index(),No=$(".blockquote-footer>cite:nth-child(1)").text(),Isrc=idir+No+'.png';
		if(0==iX){var imgsrc=imgtag.attr("src").split(idir)[1].split(".png")[0],imgM=imgsrc.indexOf("_d"),imgT=imgsrc.slice(0,-2);-1!=imgM?(loader.addClass("is-active"),imgtag.attr("src",idir+imgT+".png").ready(()=>{loader.removeClass("is-active")})):(loader.addClass("is-active"),imgtag.attr("src",idir+imgsrc+"_d.png").ready(()=>{loader.removeClass("is-active")}))}
		else{1==iX?imgtag.attr("src",Isrc):(--iX,ISrc=idir+No+"_"+iX+".png",loader.addClass("is-active"),imgtag.attr("src",ISrc).ready(()=>{loader.removeClass("is-active")}))};
	});
};
function Skill(y,x){
	var src=x.src,Sdesc="";
	function c81(a){Sdesc=`${a} 화력을 ${x.Fx.dmg[1]}% 상승시킨다`};
	$("div.w3-row:nth-child(3)>div:nth-child(2)>img").attr('src',"../img/etc/skill/"+dollSkill[src]+".png");
	console.log(src)
	0==src?
		x.target=="enemy_current"?(Sdesc=`1.5초간 조준 후, 현재 공격하던 대상에게 ${x.Fx.dmg[1]*10}% 데미지를 입힌다`,y==46&&(Sdesc=Sdesc.replace("1.5초간 조준 후","1초씩 두번 조준 사격하여"))):
		x.target=="enemy_farthest"?Sdesc=`1.5초간 조준 후, 가장 멀리있는 대상에게 ${x.Fx.dmg[1]*10}% 데미지를 입힌다`:
		x.target=="enemy_specific"?Sdesc=`1.5초간 조준 후, 특정한 대상에게 ${x.Fx.dmg[1]*10}% 데미지를 입힌다`:
		x.target=="enemy_nearest"&&(Sdesc=`1.5초간 조준 후, 가장 가까운 대상에게 ${x.Fx.dmg[1]*10}% 데미지를 입힌다`,y==53&&(Sdesc=Sdesc.replace("1.5","2"))):
	src==27?
		y==10?Sdesc=`아군 전체 화력을 ${x.Fx.dmg[1]}%, 치명타율을 ${x.Fx.cri[1]}% 상승시킨다`:
		y==170&&(Sdesc=`자신의 화력과 치명타율을 각각 ${x.Fx.dmg[1]}% 씩 상승시킨다`):
	src==30?
		y==11?Sdesc=`(야간)아군 전체 회피를 ${x.Fx.dodge[1]}(${x.FxNight.dodge[1]})% 상승시킨다.`:
		y==140&&(Sdesc=`아군 전체 명중을 ${x.Fx.hit[1]}%, 회피를 ${x.Fx.dodge[1]}% 상승시킨다`):
	src==31?Sdesc=28==y?`자신의 사속이 ${x.Fx.FoR[1]}%, 명중이 ${x.Fx.hit[1]}% 만큼 감소하는 대신 이동속도가 ${x.Fx.MS[1]}%, 회피가 ${x.Fx.dodge[1]}% 만큼 증가한다`:`자신의 회피를 ${x.Fx.dodge[1]}% 상승시킨다`:
	src==36?Sdesc=`[야간전용]아군 전체 명중을 ${x.FxNight.hit[1]}% 상승시킨다`:
	src==37?Sdesc=`섬광탄을 투척하여 반경 2.5범위 내의 적들을 ${x.Fx.time[1]}초 동안 기절 상태로 만든다`:
	src==41?Sdesc=`수류탄을 투척하여 반경 2.5범위 내의 적들에게 ${x.Fx.dmg[1]*10}% 데미지를 입힌다`:
	src==45?Sdesc=`적군 전체 명중을 ${x.Fx.hit[1]}% 감소시킨다`:
	src==47?Sdesc=156==y||157==y?`자신의 회피를 ${x.Fx.dodge[1]}%, 장갑을 ${x.Fx.armor[1]}% 상승시킨다`:`어떠한 공격이라도 회피 할 수 있다.`:
	src==57?Sdesc=`소이탄을 투척하여 반경 1.5범위 내의 적들에게 ${x.Fx.dmg1[1]*10}% 폭발 데미지를 입히고 매 0.33초당 ${x.Fx.dmg2[1]*10}% 화상 데미지를 입힌다 `:
	src==61?Sdesc=`아군 전체 회피를 ${x.Fx.dodge[1]}% 상승시킨다`:
	src==69?
		y==5?Sdesc=`(야간)적군 전체 화력을 ${x.Fx.dmg[1]}(${x.FxNight.dmg[1]})% 하락시킨다`:
		y==15&&(Sdesc=`적군 전체 화력을 ${x.Fx.dmg[1]}% 하락시킨다`):
	src==81?
		x.target=="ally"?(c81("아군 전체"),y=="13"&&(Sdesc=Sdesc.replace("화력","화력과 사속을 각각"))):
		x.target=="self_aura_grid"&&c81("스킬 발동 시 자신이 제공하는 버프칸에 있는 아군유닛의"):
	src==86?Sdesc=`아군 전체 사속을 ${x.Fx.FoR[1]}% 상승시킨다`:
	src==97&&(Sdesc=`연막탄을 투척하여 반경 2.5범위 내의 적들의 공격속도를 ${x.Fx.FoR[1]}%,이동속도를 ${x.Fx.MS[1]}% 감소시킨다`);
	Sdesc=11==y||5==y||20005==y?Sdesc+`<br>지속시간${x.Fx.time[1]}(${x.FxNight.time[1]})초/선쿨${x.FCD}초/쿨타임${x.CD[1]}초`:
	src==0||src==41?Sdesc+`<br>선쿨${x.FCD}초/쿨타임${x.CD[1]}초`:Sdesc+`<br>지속시간${x.Fx.time[1]}초/선쿨${x.FCD}초/쿨타임${x.CD[1]}초`;
	$("div.w3-row:nth-child(3)>div:nth-child(2)>div:nth-child(2)").html(Sdesc);
};
function togglecon(){
	$(".grid,#search,#filsor,#func").toggleClass('w3-hide');
	$("body>div:nth-child(2)").toggleClass("d-md-flex");
	$("button.btn-warning,.w3-image").remove();
	$(".w3-display-right:nth-child(4)").attr("data-content","");
	$('[data-toggle="popover"]').popover('hide');
	$(".skinntg>button").off("click");	
	$("div.w3-row:nth-child(3)>div:nth-child(2)>div:nth-child(2)").empty();
};
$("select").change(()=>{
	$("select:focus option:selected").each(function(){
		var sel=$(this).text();
		sel=="기본"?new Muuri('.grid',{sordData:null}):
		sel=="등급"?sort("rarity"):
		sel=="제조시간"?sort("time"):
		sel=="종류"&&sort("type");
	});
});
$(".btn").click(function(){
	var filtr=$(this).text();
	filtr=="2성"?filter('[data-rarity="2"]'):
	filtr=="3성"?filter('[data-rarity="3"]'):
	filtr=="4성"?filter('[data-rarity="4"]'):
	filtr=="5성"?filter('[data-rarity="5"]'):
	filtr=="HG"?filter('[data-type="hg"]'):
	filtr=="SMG"?filter('[data-type="smg"]'):
	filtr=="AR"?filter('[data-type="ar"]'):
	filtr=="RF"?filter('[data-type="rf"]'):
	filtr=="MG"?filter('[data-type="mg"]'):
	filtr=="SG"?filter('[data-type="sg"]'):
	filtr=="제조불가"?filter('[data-time="00"]'):
	/*
	case "특전":
		grid.filter('[data-time="00"]')
	break;
	case "타일효과":
		grid.filter('[data-time="00"]')
	break;
	case "일러스트레이터":
		grid.filter('[data-time="00"]')
	break;
	case "성우":
		grid.filter('[data-time="00"]')
	break;
	*/
	filtr=="제조불가"?filter('[data-time="00"]'):
	filtr=="All"&&filter('[data-type]');
});
