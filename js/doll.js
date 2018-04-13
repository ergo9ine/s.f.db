$(document).ready(()=>{
	$.ajax('../json/doll.json',{contentType:'application/json',dataType:'json',
		success:result=>{
			itemcon='<div class="w3-hover-shadow tdoll item-content">';
			var allCharacters=$.map(result,(doll,index)=>{
				var timehour=parseInt(doll.buildTime/3600);
				var timemin=doll.buildTime%3600/60;
				character=$('<div class="item" data-time="'+timehour+timemin+'" data-type="'+doll.type+'" data-rarity="'+doll.rank+'"></div>');
				dollcon='<div class="w3-text-white no">'+doll.id+'</div><p class="w3-text-black name podo f125">'+doll.krName+'</p><i class="star r'+doll.rank+'"></i><i	class="incage doll info_cage_'+doll.rank+'"></i><i class="type	doll '+doll.type+'_'+doll.rank+'"></i><img	src="../img/t_doll/'+doll.id+'_i.png"	alt="icon"><div class="tag">'+doll.nick+'/'+timehour+''+timemin+'/'+doll.voice+'/'+doll.illust+'</div>';
				$(character).append(itemcon).find(".item-content").html(dollcon);
				return character;
			});
		$('.grid').append(allCharacters);loadComplete()
		},
		error:(request,errorType,errorMessage)=>{alert('Error:'+errorType+' With message:'+errorMessage)},timeout:5000
	});
});
function sortrarity(){grid.sort('rarity')};
function sorttime(){grid.sort('time')};
function sorttype(){grid.sort('type')};
$("select").change(()=>{
	$("select:focus option:selected").each(function(){
		var query=$(this).text()
		switch (query){
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
function togglecon(){$(".grid,#search,#filsor,#func").toggleClass('w3-hide')};
function loadComplete(){
	$('.grid').removeClass('w3-hide');
	grid=new Muuri('.grid',{
		sortData:{
			time:(item,element)=>element.getAttribute('data-time'),
			type:(item,element)=>element.getAttribute('data-type').toUpperCase(),
			rarity:(item,element)=>element.getAttribute('data-rarity')
		},layout:{fillGaps:true,rounding:true}
	});
	$('input#search').quicksearch('.grid .item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':()=>{
			$(this).removeClass('muuri-item-shown').addClass('muuri-item-hidden').css("display","none");
			grid.filter('.muuri-item-shown')},
		'show':()=>{
			$(this).addClass('muuri-item-shown').removeClass('muuri-item-hidden').css("display","block");
			grid.filter('.muuri-item-shown')}
	});
	function active(){$('.fc').removeClass('active')};
	$(".fc").click(function(){
		query=$(this).text()
		switch (query){
		case "2성":
			grid.filter('[data-rarity="2"]')
			active()
			$(this).addClass('active')
		break;
		case "3성":
			grid.filter('[data-rarity="3"]')
			active()
			$(this).addClass('active')
		break;
		case "4성":
			grid.filter('[data-rarity="4"]')
			active()
			$(this).addClass('active')
		break;
		case "5성":
			grid.filter('[data-rarity="5"]')
			active()
			$(this).addClass('active')
		break;
		case "HG":
			grid.filter('[data-type="hg"]')
			active()
			$(this).addClass('active')
		break;
		case "SMG":
			grid.filter('[data-type="smg"]')
			active()
			$(this).addClass('active')
		break;
		case "AR":
			grid.filter('[data-type="ar"]')
			active()
			$(this).addClass('active')
		break;
		case "RF":
			grid.filter('[data-type="rf"]')
			active()
			$(this).addClass('active')
		break;
		case "MG":
			grid.filter('[data-type="mg"]')
			active()
			$(this).addClass('active')
		break;
		case "SG":
			grid.filter('[data-type="sg"]')
			active()
			$(this).addClass('active')
		break;
		case "제조불가":
			grid.filter('[data-time="00"]')
			active()
			$(this).addClass('active')
		break;
		case "All":
			grid.filter('[data-type]')
			active()
			$(this).addClass('active')
		break;
		}
	});
	$(".item-content").click(function(){
		togglecon();
		var clicked=$(this).children(".no").text();
		$.ajax('../json/doll.json',{contentType:'application/json',dataType:'json',success:result=>{
		$.each(result,(index,doll)=>{
			if(doll.id==clicked){
				$('body,html').animate({scrollTop:0},0);
				$(".dollname label:nth-child(2)").html(doll.id);
				$(".dollname span").html(doll.krName);
				$(".skins").remove();
				$.each(doll.skins,(index,value)=>{
					var skins='<button class="w3-button w3-round-xxlarge w3-hover-text-white w3-hover-orange skins" style="background-color:#feb976;color:#fff;margin:2.5px">'+value+'</button>'
					$(".skintag").append(skins);
				});
				idir='../img/t_doll/';
				var cimg=idir+doll.id+'.png';
				var simg=idir+doll.id;
				$("div.skintag>button.w3-button").click(()=>{switch ($(this).index()){
					case 1:
						$(".w3-image").attr('src',cimg);
					break;
					case 2:
						$(".w3-image").attr('src',simg+'_1.png');
					break;
					case 3:
						$(".w3-image").attr('src',simg+'_2.png');
					break;
					case 4:
						$(".w3-image").attr('src',simg+'_3.png');
					break;
					case 5:
						$(".w3-image").attr('src',simg+'_4.png');
					break;
					case 6:
						$(".w3-image").attr('src',simg+'_5.png');
					break;
					case 7:
						$(".w3-image").attr('src',simg+'_6.png');
					break;
					case 8:
						$(".w3-image").attr('src',simg+'_7.png');
					break;
					case 9:
						$(".w3-image").attr('src',simg+'_8.png');
					break;}
				});
				var w3img='<img class="w3-image">';
				$('div.w3-row:nth-child(7)>div:nth-child(1)').append(w3img);
				$("div.w3-row>div:nth-child(1)>img:nth-child(1)").attr("src",cimg);
				$("div.w3-left-align:nth-child(1)>div:nth-child(1)>div:nth-child(3)").html(doll.voice);
				$("div.w3-left-align:nth-child(1)>div:nth-child(3)>div:nth-child(3)").html(doll.illust);
				$("div.w3-display-container:nth-child(5)>div:nth-child(3)").html(doll.name);
				var timehour=parseInt(doll.buildTime/3600);
				var timemin=doll.buildTime%3600/60;
				var time=timehour+'시간'+timemin+'분'
				$("div.w3-third:nth-child(1)>div:nth-child(3)>div:nth-child(3)").html(time);
				var ctx=document.getElementById("statisticschart");
				var statisticschart={
					labels:["체력","화력","회피","사속","명중"],
					datasets:[{
						label:doll.krName,
						data:[doll.stats.hp,doll.stats.pow,doll.stats.dodge,doll.stats.rate,doll.stats.hit],
						backgroundColor:[
							'rgba(255,99,132,0.2)',
						],
						borderColor:[
							'rgba(255,99,132,1)',
						],
						borderWidth:1
					}]
				}
				var chartOptions = {
					legend:{
						display:false,
						label:{
							fontSize:26
						}
					},
					title:{
						display:false,
					},
					scale: {
					ticks: {
						beginAtZero: true,
						min: 10,
						max: 200,
						stepSize:20
					}
					}
				};
				var rCh = new Chart(ctx, {
					type: 'radar',
					data: statisticschart,
					options: chartOptions
				});
				rCh.update();
			}
		})},error:(request,errorType,errorMessage)=>{alert('Error:'+errorType+' With message:'+errorMessage)},timeout:5000
		});
	});
	function Skinbutton() {
		var imgsrc=$(".w3-image").attr('src').split(idir)[1].split(".png")[0];
		var imgM=imgsrc.indexOf('_d');
		if (imgM != -1){
			var imgT=imgsrc.slice(0,-2);
			$(".w3-image").attr('src',idir+imgT+'.png');
		} else {
			$(".w3-image").attr('src',idir+imgsrc+'_d.png');
		}
	}
	$("div.skintag>button.w3-button").click(function(){
		switch ($(this).index()){
		case 0:
			Skinbutton()
		break;
		};
	});
	$(".xfunc").click(()=>{
		togglecon();
		$(".w3-image").remove();
		statisticschart.destroy();
	});
};