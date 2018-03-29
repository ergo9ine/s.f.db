$(document).ready(function() {
	$.ajax('../json/fairy.j', {
		contentType: 'application/json',
		dataType: 'json',
		success: function(result) {
					itemcon = '<div class="w3-hover-shadow fariy item-content">';
					var allCharacters = $.map(result, function(fairy, index) {
						character = $('<div class="item" data-no="'+fairy.no+'" data-sort="'+fairy.time+'" data-type="'+fairy.type+'" data-event="'+fairy.event+'"></div>');
						fairycon = '<p class="name pofa f125 er2">'+fairy.name+'</p><i class="tools '+fairy.type+'_Fairy_info_cage incage"></i><i class="tools '+fairy.type+'_Fairy_Tag ftype"></i><i class="tools info_cage_up cover"></i><i class="skill	'+fairy.skill+'"></i><i class="fairy_i	'+fairy.skill+'_i	icon3"></i><div class="tag">'+fairy.tag+'</div>';
						$(character).append(itemcon).find(".item-content").html(fairycon);
						return character;
					});
					$('.grid').append(allCharacters);
		},
		error: function(request, errorType, errorMessage) {
			alert('Error: ' + errorType + ' With message: ' + errorMessage);
		},
		timeout: 3000
	});
}).ajaxStop(function(){loadComplete();});
function sortnum(){grid.sort('num')};
function sortsort(){grid.sort('time')};
function sorttype(){grid.sort('type')};
$("select").change(function(){
	$("select:focus option:selected").each(function(){
		var query = $(this).text()
		switch (query) {
		case "도감번호" :
			sortnum();
		break;
		case "제조시간" :
			sortsort();
		break;
		case "종류" :
			sorttype();
		break;
		};
	});
});
function loadComplete(){
	grid = new Muuri('.grid',{
		sortData:{
			time:function (item, element) {
			return parseInt(element.getAttribute('data-sort'));
			},
			type:function (item, element) {
			return element.getAttribute('data-type').toUpperCase();
			},
			num:function (item, element) {
			return parseInt(element.getAttribute('data-no'));
			}
		},
		layout:{
			fillGaps:true,
			rounding:true
		}
	});
//	sortnums = document.querySelectorAll(".num");
//	sortsorts = document.querySelectorAll(".sort");
//	sorttypes = document.querySelectorAll(".type");
//	sortnums.forEach(function(sortnum)
//	{	
//		sortnum.addEventListener('click', function () {
//			grid.sort('num');
//		});
//	});
//	sortsorts.forEach(function(sortsort)
//	{
//		sortsort.addEventListener('click', function () {
//			grid.sort('time');
//		});
//	});
//	sorttypes.forEach(function(sorttype)
//	{
//		sorttype.addEventListener('click', function () {
//			grid.sort('type');
//		});
//	});
	$('input#search').quicksearch('div.grid .item', {
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':function () {
			$(this).removeClass('muuri-item-shown').addClass('muuri-item-hidden').css("display","none");
			grid.filter('.muuri-item-shown');
		},
		'show':function () {
			$(this).addClass('muuri-item-shown').removeClass('muuri-item-hidden').css("display","block");
			grid.filter('.muuri-item-shown');
		},
	});
	$(".mf li").click(function() {
		if($(this).hasClass("battle") === true) {
			grid.filter('[data-type="Battle"]');
			$('.mf li').removeClass('active');
			$('.battle').addClass('active');
		}
		if($(this).hasClass("strategy") === true) {
			grid.filter('[data-type="Strategy"]');
			$('.mf li').removeClass('active');
			$('.strategy').addClass('active');
		}
		if($(this).hasClass("event") === true) {
			grid.filter('[data-event="1"]');
			$('.mf li').removeClass('active');
			$('.event').addClass('active');
		}
		if($(this).hasClass("all") === true) {
			grid.filter('[data-type]');
			$('.mf li').removeClass('active');
			$('.all').addClass('active');
		}
	});
};