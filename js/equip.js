$(document).ready(()=>{
	$.ajax('../json/equip.json',{
		contentType:'application/json',
		dataType:'json',
		success:result=>{
			itemcon='<div class="w3-hover-shadow equip item-content">';
			var allCharacters=$.map(result,(equip,index)=>{
				character = $('<div class="item" data-time="'+equip.time+'" data-type="'+equip.type+'" data-rarity="'+equip.rarity+'"></div>');
				equipcon = '<p class="name pofa f125 er'+equip.rarity+'">'+equip.name+'</p><i class="star r'+equip.rarity+'"></i><i class="equip	equip_info_cage_'+equip.rarity+' incage"></i><i class="equip bg_'+equip.rarity+' bg"></i><i class="equip '+equip.type+'_'+equip.rarity+' etype"></i><img src="https://cdn.jsdelivr.net/gh/ergo9ine/sfdb_img@1.80428-2/img/equip/'+equip.img+'.png" class="icon2" alt="icon"><div class="tag">'+equip.tag+'/'+equip.time+'</div>';
				$(character).append(itemcon).find(".item-content").html(equipcon);character;
				return character;
			});
			$('.grid').append(allCharacters);
			loadComplete();
		},
		error:(request,errorType,errorMessage)=>{alert('Error:'+errorType+' With message:'+errorMessage)},
		timeout:3000
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
			new Muuri('.grid',{sordData:null});
		break;
		case "등급":
			sortrarity();
		break;
		case "제조시간":
			sorttime();
		break;
		case "종류":
			sorttype();
		break;
		};
	});
});
function loadComplete(){
	$('.grid').removeClass('w3-hide');
	grid=new Muuri('.grid',{
		sortData:{
			time:(item,element)=>element.getAttribute('data-time'),
			type:(item,element)=>element.getAttribute('data-type').toUpperCase(),
			rarity:(item,element)=>element.getAttribute('data-rarity')
		},
		layout:{fillGaps:true,rounding:true}
	});
	$('input#search').quicksearch('.grid .item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':()=>{
			$(this).removeClass('muuri-item-shown').addClass('muuri-item-hidden').css("display","none");
			grid.filter('.muuri-item-shown')
		},
		'show':()=>{
			$(this).addClass('muuri-item-shown').removeClass('muuri-item-hidden').css("display","block");
			grid.filter('.muuri-item-shown')
		}
	});
	function active(){$('.fc').removeClass('active')};
	$(".fc").click(function(){
		var query=$(this).text();
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
		case "제조불가":
			grid.filter('[data-time="9999"]')
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
};