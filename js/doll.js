$(document).ready(()=>{
	$.ajax('../json/doll.json',{contentType:'application/json',dataType:'json',
		success:result=>{
			itemcon='<div class="w3-hover-shadow tdoll item-content">';
			var allCharacters=$.map(result,(doll,index)=>{
				var timehour=parseInt(doll.buildTime/3600),
				timemin=doll.buildTime%3600/60,
				character=$('<div class="item" data-time="'+timehour+timemin+'" data-type="'+doll.type+'" data-rarity="'+doll.rank+'"></div>').detach(),
				dollcon='<div class="w3-text-white no">'+doll.id+'</div><p class="w3-text-black name podo f125">'+doll.krName+'</p><i class="star r'+doll.rank+'"></i><i	class="incage doll info_cage_'+doll.rank+'"></i><i class="type	doll '+doll.type+'_'+doll.rank+'"></i><img	src="../img/t_doll/'+doll.id+'_i.png"	alt="icon"><div class="tag">'+doll.nick+'/'+timehour+''+timemin+'/'+doll.voice+'/'+doll.illust+'</div>';
				$(character).append(itemcon).find(".item-content").html(dollcon);
				return character;
			});
		var grid=$('.grid');
		grid.append(allCharacters);loadComplete()
		},
		error:(request,errorType,errorMessage)=>{alert('Error:'+errorType+' With message:'+errorMessage)},timeout:5000
	});
});
function sortrarity(){grid.sort('rarity')};
function sorttime(){grid.sort('time')};
function sorttype(){grid.sort('type')};
$("select").change(()=>{
	$("select:focus option:selected").each(function(){
		var query=$(this).text();
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
	$('#search').quicksearch('.grid .item',{
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
		var query=$(this).text(),
		menu=$(this);
		switch (query){
		case "2성":
			grid.filter('[data-rarity="2"]')
			active()
			menu.addClass('active')
		break;
		case "3성":
			grid.filter('[data-rarity="3"]')
			active()
			menu.addClass('active')
		break;
		case "4성":
			grid.filter('[data-rarity="4"]')
			active()
			menu.addClass('active')
		break;
		case "5성":
			grid.filter('[data-rarity="5"]')
			active()
			menu.addClass('active')
		break;
		case "HG":
			grid.filter('[data-type="hg"]')
			active()
			menu.addClass('active')
		break;
		case "SMG":
			grid.filter('[data-type="smg"]')
			active()
			menu.addClass('active')
		break;
		case "AR":
			grid.filter('[data-type="ar"]')
			active()
			menu.addClass('active')
		break;
		case "RF":
			grid.filter('[data-type="rf"]')
			active()
			menu.addClass('active')
		break;
		case "MG":
			grid.filter('[data-type="mg"]')
			active()
			menu.addClass('active')
		break;
		case "SG":
			grid.filter('[data-type="sg"]')
			active()
			menu.addClass('active')
		break;
		case "제조불가":
			grid.filter('[data-time="00"]')
			active()
			menu.addClass('active')
		break;
		case "All":
			grid.filter('[data-type]')
			active()
			menu.addClass('active')
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
					$(".skinntg").append(skins);
				});
				idir='../img/t_doll/';
				var simg=idir+doll.id,
				cimg=simg+'.png',
				w3img='<img class="w3-image">',
				timehour=parseInt(doll.buildTime/3600),
				timemin=doll.buildTime%3600/60,
				time=timehour+'시간'+timemin+'분',
				ctx=document.getElementById("statisticschart"),
				statisticschart={
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
				},
				chartOptions={
					legend:{
						display:false,
						label:{fontSize:26}
					},
					title:{display:false},
					scale:{
						ticks:{
							fontSize:9,
							beginAtZero:true,
							min:10,
							max:200,
							stepSize:20
						}
					},
					scaleLabel:{display:false}
				};
				rCh=new Chart(ctx,{
					type:'radar',
					data:statisticschart,
					options:chartOptions
				});
				imgtag=$(".w3-image");
				$(".skinntg>button").click(function(){switch($(this).index()){
					case 1:
						imgtag.attr('src',cimg);
					break;
					case 2:
						imgtag.attr('src',simg+'_1.png');
					break;
					case 3:
						imgtag.attr('src',simg+'_2.png');
					break;
					case 4:
						imgtag.attr('src',simg+'_3.png');
					break;
					case 5:
						imgtag.attr('src',simg+'_4.png');
					break;
					case 6:
						imgtag.attr('src',simg+'_5.png');
					break;
					case 7:
						imgtag.attr('src',simg+'_6.png');
					break;
					case 8:
						imgtag.attr('src',simg+'_7.png');
					break;
					case 9:
						imgtag.attr('src',simg+'_8.png');
					break;}
				});
				$('div.w3-row:nth-child(7)>div:nth-child(1)').append(w3img);
				imgtag=$(".w3-image");
				$("div.w3-row>div:nth-child(1)>img:nth-child(1)").attr("src",cimg);
				$("div.w3-left-align:nth-child(1)>div:nth-child(1)>div:nth-child(3)").html(doll.voice);
				$("div.w3-left-align:nth-child(1)>div:nth-child(3)>div:nth-child(3)").html(doll.illust);
				$("div.w3-display-container:nth-child(5)>div:nth-child(3)").html(doll.name);
				$("div.w3-third:nth-child(1)>div:nth-child(3)>div:nth-child(3)").html(time);
				rCh.update();
			}
		})},error:(request,errorType,errorMessage)=>{alert('Error:'+errorType+' With message:'+errorMessage)},timeout:5000
		});
	});
	function Skinbutton(){
		var imgtag=$(".w3-image"),
		imgsrc=imgtag.attr('src').split(idir)[1].split(".png")[0],
		imgM=imgsrc.indexOf('_d'),
		imgT=imgsrc.slice(0,-2);
		if (imgM != -1){
			imgtag.attr('src',idir+imgT+'.png');
		} else {
			imgtag.attr('src',idir+imgsrc+'_d.png');
		}
	}
	$(".skinntg>button").click(function(){switch($(this).index()){
		case 0:
			Skinbutton()
		break;
		};
	});
	$(".xfunc").click(()=>{
		togglecon();
		imgtag.remove();
		rCh.destroy();
	});
};