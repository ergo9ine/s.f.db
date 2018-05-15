var dollData=[],dollSkill=[],w3img='<img class="w3-image w3-grey" width="256" height="256">',idir='../img/t_doll/',loader=$(".loader");
$(document).ready(()=>{
	contentsload();
	$('[data-toggle="popover"]').popover();
});
function contentsload(){
	$.ajax('../json/doll.json',{contentType:'application/json',dataType:'json',
		success:result=>{
			var itemcon='<div class="w3-hover-shadow tdoll item-content">',
			allCharacters=$.map(result,(doll,index)=>{var timehour=parseInt(doll.buildTime/3600),timemin=doll.buildTime%3600/60,noval=doll.id;
				switch(noval){
				case noval>20000:noval="M"+(doll.id-20000);break;case noval>1000:noval="X"+(doll.id-1000);break;
				}
				character=$(`<div class="item" data-time="${timehour}${timemin}" data-type="${doll.type}" data-rarity="${doll.rarity}"></div>`).detach(),
				dollcon=`<div class="w3-text-white no" data-no="${doll.id}">${noval}</div>
					<p class="w3-text-black name podo">${doll.krName}</p>
					<i class="star r${doll.rarity}"></i>
					<i	class="incage doll info_cage_${doll.rarity}"></i>
					<i class="type doll ${doll.type}_${doll.rarity}"></i>
					<img width="175" height="276" Class="w3-grey" src="https://cdn.jsdelivr.net/gh/ergo9ine/sfdb_img@1.80428-2/img/t_doll/${doll.id}_i.png" onload="$(this).removeClass('w3-grey').removeAttr('onload')">
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
		sortData:{
			time:(item,element)=>element.getAttribute('data-time'),
			type:(item,element)=>element.getAttribute('data-type').toUpperCase(),
			rarity:(item,element)=>element.getAttribute('data-rarity')
		},layout:{fillGaps:true,rounding:true}
	});
	loader.removeClass("is-active");
	$('#search').quicksearch('.item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':function(){
			$(this).removeClass('muuri-item-shown').addClass('muuri-item-hidden').css("display","none");
			grid.filter('.muuri-item-shown')},
		'show':function(){
			$(this).addClass('muuri-item-shown').removeClass('muuri-item-hidden').css("display","block");
			grid.filter('.muuri-item-shown')}
	});
	$(".btn").click(function(){
		switch ($(this).text()){
		case "2성":
			grid.filter('[data-rarity="2"]')
		break;
		case "3성":
			grid.filter('[data-rarity="3"]')
		break;
		case "4성":
			grid.filter('[data-rarity="4"]')
		break;
		case "5성":
			grid.filter('[data-rarity="5"]')
		break;
		case "HG":
			grid.filter('[data-type="hg"]')
		break;
		case "SMG":
			grid.filter('[data-type="smg"]')
		break;
		case "AR":
			grid.filter('[data-type="ar"]')
		break;
		case "RF":
			grid.filter('[data-type="rf"]')
		break;
		case "MG":
			grid.filter('[data-type="mg"]')
		break;
		case "SG":
			grid.filter('[data-type="sg"]')
		break;
		case "제조불가":
			grid.filter('[data-time="00"]')
		break;
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
		case "제조불가":
			grid.filter('[data-time="00"]')
		break;
		case "All":
			grid.filter('[data-type]')
		break;
		}
	});
	$("select").change(()=>{
		$("select:focus option:selected").each(function(){
			switch ($(this).text()){
			case "기본":
				new Muuri('.grid',{sordData:null})
			break;
			case "등급":
				sortrarity()
			break;
			case "제조시간":
				sorttime()
			break;
			case "종류":
				sorttype()
			break;
			};
		});
	});
	$("button.w3-bar-item:nth-child(1)").click(()=>{
		$("div.w3-bar:nth-child(3)").removeClass("w3-hide")
		$("div.w3-bar:nth-child(4)").addClass("w3-hide")
	});
	$("button.w3-bar-item:nth-child(2)").click(()=>{
		$("div.w3-bar:nth-child(4)").removeClass("w3-hide")
		$("div.w3-bar:nth-child(3)").addClass("w3-hide")
	});
	$(".item-content").click(function(){
		togglecon();
		var clicked=$(this).children(".no").attr("data-no");
		$.each(dollData,(index,doll)=>{
			if(doll.id==clicked){
				var simg=idir+doll.id,
				cimg=simg+'.png',
				timehour=parseInt(doll.buildTime/3600),
				timemin=doll.buildTime%3600/60,
				time=`${timehour}시간${timemin}분`,
				gridself=`#grid${doll.Fx.self}`,
				gridPos=[];
				$.each(doll.Fx.tile,(index,value)=>{
					gridPos.push(`#grid${value}`);
				});
				gridPos=gridPos.toString();
				$("body,html").animate({scrollTop:0},0);
				$(".dollname label:nth-child(2)").html(doll.id);
				$(".dollname span").html(doll.krName);
				$(".skins").remove();
				skins=[];
				$.each(doll.skins,(index,value)=>{
					skins.push(`<button class="w3-button w3-round-xxlarge w3-hover-text-white w3-hover-orange skins" style="background-color:#feb976;color:#fff;margin:2.5px">${value}</button>`)
				});
				$(".skinntg").append(skins);
				SKB();
				$('.w3-row:nth-child(7)>div:nth-child(1)').append(w3img);
				$(".w3-image").attr("src",cimg).removeClass("w3-grey").removeAttr("width height");
				$(".w3-left-align:nth-child(1)>div:nth-child(1)>div:nth-child(3)").html(doll.voice);
				$(".w3-left-align:nth-child(1)>div:nth-child(3)>div:nth-child(3)").html(doll.illust);
				$(".w3-display-container:nth-child(5)>div:nth-child(3)").html(doll.name);
				$(".w3-display-container:nth-child(7)>div:nth-child(3)").html(time);
				$(".w3-display-right:nth-child(4)").attr("data-content",doll.drop);
				$(gridself).removeClass("w3-grey").addClass("w3-white");
				$(gridPos).removeClass("w3-grey").addClass("w3-aqua");
				var ctx="statisticschart",
				statisticschart={
					datasets:[{
						label:doll.krName,
						backgroundColor:"rgba(255,99,132,0.2)",
						borderColor:"rgb(255,99,132)",
						pointBackgroundColor:"rgb(255,99,132)",
						pointBorderColor:"#fff",
						pointHoverBackgroundColor:"#fff",
						pointHoverBorderColor:"rgb(255,99,132)",
						borderWidth:1
					},{
						backgroundColor:"rgba(54,162,235,0.2)",
						borderColor:"rgb(54,162,235)",
						pointBackgroundColor:"rgb(54,162,235)",
						pointBorderColor:"#fff",
						pointHoverBackgroundColor:"#fff",
						pointHoverBorderColor:"rgb(54,162,235)",
						borderWidth:1
					}]
				},
				chartOptions={maintainAspectRatio:false,title:{display:false},scale:{ticks:{fontSize:9,beginAtZero:true}},scaleLabel:{display:false}},
				TS="타일 위 타겟에게",D="편제당<br>탄약 C, 식량 M 소모",dollSkill=["AimAttackCurrentTarge","AimAttackDistanceTarge","AimAttackSpecificTarge","airattack","airborne","AK12Buff","AN94Shot","AR15Shot","armor","armorBuff","armorBuffSelf","armorDebuff","armorDebuffSelf","BBNoel","bombard","Bronya","buff","Carcano1891","Carcano1938","CBJMS","Chloe","CLEAR","Coldweapon","comboBuffSelf","command","crit","critBuff","critBuffSelf","debuff","defense","dodgeBuff","dodgeBuffSelf","dodgeDebuff","empty","FAIL","fighting","Flare","Flashbomb","fortress","GGElfeldt","golden","Grenade","Himeko","hitBuff","hitBuffSelf","hitDebuff","illumine","Invincible","Invincible35","IWantU","Kaguya","Kiana","LadyMadeSTAR","Landmines","M4Nightmare","M1918","MosinNagant","Napalm","nightcritBuff","nightcritBuff38","nightcritBuffSelf","nightdodgeBuff","nightdodgeBuffSelf","nightdodgeDebuff","nighthitBuff","nighthitBuffSelf","nighthitDebuff","nightpowBuff","nightpowBuffSelf","nightpowDebuff","nightrateBuff","nightrateBuffSelf","nightrateDebuff","nightspeedDebuff","nighttargetdodgeDebuff","nighttargethitDebuff","nighttargetpowDebuff","nighttargetrateDebuff","nighttargetspeedDebuff","Noconsumption","position","powBuff","powBuffSelf","powBuffShield","powDebuff","RaidenMei","rateBuff","rateBuffSelf","rateDebuff","reinforce","rescue","RifleGrenade","roadblocks","Sakura","Seele","shield","Shotgun","Smoke","sniper","speedDebuff","target","targetdodgeDebuff","targethitDebuff","targetpowDebuff","targetrateDebuff","targetspeedDebuff","Theresa","VariableBuff"];
				if (doll.mod=="true") {
					statisticschart.labels=["체력","화력","회피","사속","명중"];
					statisticschart.datasets[0].data=[doll.hp[2],doll.dmg[2],doll.dodge[2],doll.FoR[2],doll.hit[2]];
				} else {
					statisticschart.labels=["체력","화력","회피","사속","명중"];
					statisticschart.datasets[0].data=[doll.hp[1],doll.dmg[1],doll.dodge[1],doll.FoR[1],doll.hit[1]];
				};
				switch (doll.type){
				case "hg":
					statisticschart.datasets[1].label="HG평균"
					statisticschart.datasets[1].data=[71,31,79,58,55]
					D=D.replace("C","10").replace("M","10");break;
				case "smg":
					statisticschart.datasets[1].label="SMG평균"
					statisticschart.datasets[1].data=[183,28,70,86,13]
					D=D.replace("C","25").replace("M","20");break;
				case "ar":
					statisticschart.datasets[1].label="AR평균"
					statisticschart.datasets[1].data=[115,51,43,72,47]
					D=D.replace("C","20").replace("M","20");break;
				case "rf":
					statisticschart.datasets[1].label="RF평균"
					statisticschart.datasets[1].data=[86,128,33,34,74]
					D=D.replace("C","15").replace("M","30");break;
				case "mg":
					statisticschart.datasets[1].label="MG평균"
					statisticschart.datasets[1].data=[171,89,28,119,28]
					D=D.replace("C","40").replace("M","30");break;
				case "sg":
					statisticschart.datasets[1].label="SG평균"
					statisticschart.datasets[1].data=[261,32,11,28,11]
					D=D.replace("C","30").replace("M","40");break};
				var TS="타일 위 타겟에게";
				switch (doll.Fx.target){
				case "all":TS=TS.replace("타겟","모든 총기");break;
				case "hg":TS=TS.replace("타겟","HG");break;
				case "smg":TS=TS.replace("타겟","SMG");break;
				case "ar":TS=TS.replace("타겟","AR");break;
				case "rf":TS=TS.replace("타겟","RF");break;
				case "mg":TS=TS.replace("타겟","MG");break;
				case "sg":TS=TS.replace("타겟","SG");break};
				$.each(doll.Fx.TileFx,(index,value)=>{
					switch (index){
					case "dmg":TS=`${TS}<br>화력 ${value}%증가`;break;
					case "dodge":TS=`${TS}<br>회피 ${value}%증가`;break;
					case "hit":TS=`${TS}<br>명중 ${value}%증가`;break;
					case "FoR":TS=`${TS}<br>사속 ${value}%증가`;break;
					case "crit":TS=`${TS}<br>치명타율 ${value}%증가`;break;
					case "time":TS=`${TS}<br>쿨타임 ${value}%감소`;break;
					case "armor":TS=`${TS}<br>장갑 ${value}%증가`;break};
				});
				$("#sec-fir>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)").html(TS);
				$("div.w3-container:nth-child(2)").html(D);
				$(".text-center:nth-child(1)").append(w3img)
				$("div.w3-row:nth-child(3)>div:nth-child(2)>img").attr('src',"../img/etc/skill/"+dollSkill[doll.skill.src]+".png")
				rCh=new Chart(ctx,{type:'radar',data:statisticschart,options:chartOptions});
				rCh.update();
			}
		})
	});
	$(".xfunc").click(()=>{
		togglecon();
		$(".w3-image").remove();
		$('[data-toggle="popover"]').popover('hide');
		rCh.destroy();
		$(".skinntg>button").off("click")
	});
};
function sortrarity(){grid.sort('rarity')};
function sorttime(){grid.sort('time')};
function sorttype(){grid.sort('type')};
function togglecon(){
	$(".grid,#search,#filsor,#func").toggleClass('w3-hide')
	for (x=1;x<10;x++){
		$("#grid"+x+"").removeClass("w3-white w3-aqua w3-grey").addClass("w3-grey")
	}
};
function SKB(){
	$(".skinntg>button").click(function(){
		var imgtag=$(".w3-image"),
		iX=$(this).index();
		No=$(".dollname>label:nth-child(2)").text(),
		Isrc=idir+No+'.png';
		if(iX==0){
			var imgsrc=imgtag.attr('src').split(idir)[1].split(".png")[0];
			imgM=imgsrc.indexOf('_d');
			imgT=imgsrc.slice(0,-2);
			if (imgM!=-1){
				loader.addClass("is-active");
				(imgtag.attr('src',idir+imgT+'.png')).ready(()=>{loader.removeClass("is-active")});
			} else {
				loader.addClass("is-active");
				(imgtag.attr('src',idir+imgsrc+'_d.png')).ready(()=>{loader.removeClass("is-active")});
			}
		} else if (iX==1){
			imgtag.attr('src',Isrc);
		} else {
			var iX=iX-1,
			ISrc=idir+No+'_'+iX+'.png';
			loader.addClass("is-active");
			(imgtag.attr('src',ISrc)).ready(()=>{loader.removeClass("is-active")});
		}
	});
};