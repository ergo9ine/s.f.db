$(document).ready(function(){
	$.ajax('../json/fairy.json',{
		contentType:'application/json',
		dataType:'json',
		success:function(result){
			itemcon = '<div class="w3-hover-shadow fariy item-content">';
			var allCharacters = $.map(result,function(fairy,index){
				character = $('<div class="item" data-sort="'+fairy.time+'" data-type="'+fairy.type+'" data-event="'+fairy.event+'"></div>');
				fairycon = '<p class="name pofa f125 er2">'+fairy.name+'</p><i class="tools '+fairy.type+'_Fairy_info_cage incage"></i><i class="tools '+fairy.type+'_Fairy_Tag ftype"></i><i class="tools info_cage_up cover"></i><i class="skill	'+fairy.skill+'"></i><i class="fairy_i	'+fairy.skill+'_i	icon3"></i><div class="tag">'+fairy.tag+'/'+fairy.time+'</div>';
				$(character).append(itemcon).find(".item-content").html(fairycon);
				return character;
			});
			$('.grid').append(allCharacters);
		},
		error:function(request,errorType,errorMessage){
			alert('Error:'+errorType+' With message:'+errorMessage);
		},
		timeout:3000
	});
}).ajaxStop(function(){loadComplete()});
function sortnum(){grid.sort('num')};
function sortsort(){grid.sort('time')};
function sorttype(){grid.sort('type')};
$("select").change(function(){
	$("select:focus option:selected").each(function(){
		var query = $(this).text()
		switch (query){
		case "도감번호":
			new Muuri('.grid',{sordData:null});
		break;
		case "제조시간":
			sortsort()
		break;
		case "종류":
			sorttype()
		break;
		};
	});
});
function loadComplete(){
	$('.grid').removeClass('w3-hide');
	grid = new Muuri('.grid',{
		sortData:{
			time:function (item,element){
			return element.getAttribute('data-sort')
			},
			type:function (item,element){
			return element.getAttribute('data-type').toUpperCase()
			},
			num:function (item,element){
			return element.getAttribute('data-no')
			}
		},
		layout:{fillGaps:true,rounding:true}
	});
	$('input#search').quicksearch('div.grid .item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':function(){
			$(this).removeClass('muuri-item-shown').addClass('muuri-item-hidden').css("display","none")
			grid.filter('.muuri-item-shown')
		},
		'show':function(){
			$(this).addClass('muuri-item-shown').removeClass('muuri-item-hidden').css("display","block")
			grid.filter('.muuri-item-shown')
		}
	});
	function active(){$('.fc').removeClass('active')};
	$(".fc").click(function(){
		var query = $(this).text();
		switch (query){
		case "전투":
			grid.filter('[data-type="Battle"]')
			active()
			$(this).addClass('active')
		break;
		case "전략":
			grid.filter('[data-type="Strategy"]')
			active()
			$(this).addClass('active')
		break;
		case "이벤트":
			grid.filter('[data-event="1"]')
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