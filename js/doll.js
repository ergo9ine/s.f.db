$(document).ready(()=>{
	$.ajax('../json/doll.json',{
		contentType:'application/json',
		dataType:'json',
		success:result=>{
			itemcon = '<div class="w3-hover-shadow tdoll item-content">';
			var allCharacters = $.map(result,(doll,index)=>{
				var timehour = parseInt(doll.buildTime/3600);
				var timemin = doll.buildTime%3600/60;
				character = $('<div class="item" data-time="'+timehour+''+timemin+'" data-type="'+doll.type+'" data-rarity="'+doll.rank+'"></div>');
				dollcon = '<div class="w3-text-white no">'+doll.id+'</div><p class="w3-text-black name podo f125">'+doll.krName+'</p><i	class="star	r'+doll.rank+'"></i><i	class="incage doll info_cage_'+doll.rank+'"></i><i	class="type	doll '+doll.type+'_'+doll.rank+'"></i><img	src="../img/t_doll/'+doll.id+'_i.png"	alt="icon"><div class="tag">'+doll.nick+'/'+timehour+''+timemin+'</div>';
				$(character).append(itemcon).find(".item-content").html(dollcon);
				return character;
			});
		$('.grid').append(allCharacters)
		},
		error:(request,errorType,errorMessage)=>{alert('Error:'+errorType+' With message:'+errorMessage)},
		timeout:3000
	});
}).ajaxStop(()=>{loadComplete()});
function sortrarity(){grid.sort('rarity')};
function sorttime(){grid.sort('time')};
function sorttype(){grid.sort('type')};
$("select").change(()=>{
	$("select:focus option:selected").each(function(){
		var query = $(this).text()
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
function loadComplete(){
	$('.grid').removeClass('w3-hide');
	grid = new Muuri('.grid',{
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
		'hide':function(){
			$(this).removeClass('muuri-item-shown').addClass('muuri-item-hidden').css("display","none");
			grid.filter('.muuri-item-shown')},
		'show':function(){
			$(this).addClass('muuri-item-shown').removeClass('muuri-item-hidden').css("display","block");
			grid.filter('.muuri-item-shown')}
	});
	function active(){$('.fc').removeClass('active')};
	$(".fc").click(function(){
		query = $(this).text()
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
	function togglecon() {
		$('.grid').toggleClass('w3-hide');
		$('#search').toggleClass('w3-hide');
		$('#filsor').toggleClass('w3-hide');
		$('#func').toggleClass('w3-hide');
	};
	$(".item-content").click(()=>{
		var clicked = $(".no").text()
		//alert($(this).children(".no").text());
		togglecon();
		$(document).scrollTop();
		$("#num").text('+doll.id+');
	});
	$(".xfunc").click(()=>{
		togglecon();
	});
};