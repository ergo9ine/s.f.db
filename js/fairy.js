var loader=$(".loader");
	$(document).ready(()=>{
	contentsload();
});
function contentsload(){
	$.ajax('../json/fairy.json',{contentType:'application/json',dataType:'json',success:result=>{
		var itemcon='<div class="w3-hover-shadow fairy item-content">',
		allCharacters=$.map(result,(fairy,index)=>{
			var character=$(`<div class="item" data-sort="${fairy.time}" data-type="${fairy.type}" data-event="${fairy.event}"></div>`),
				fairycon=`<p class="name pofa er2">${fairy.name}</p>
				<i class="tools ${fairy.type}_Fairy_info_cage incage"></i>
				<i class="tools ${fairy.type}_Fairy_Tag ftype"></i>
				<i class="tools info_cage_up cover"></i>
				<i class="skill	${fairy.skill}"></i>
				<i class="fairy_i	${fairy.skill}_i	icon3"></i>
				<div class="tag">${fairy.tag}/${fairy.time}</div>`;
			$(character).append(itemcon).find(".item-content").html(fairycon);
			return character;
		});
			$('.grid').append(allCharacters);
			loadComplete();
		},
		timeout:10000
	});
};
function loadComplete(){
	$('.grid').removeClass('w3-hide');
	grid=new Muuri('.grid',{
		sortData:{
			time:(item,element)=>element.getAttribute('data-sort'),
			type:(item,element)=>element.getAttribute('data-type').toUpperCase()
		},
		layout:{fillGaps:true,rounding:true}
	});
	loader.removeClass("is-active");
	$('input#search').quicksearch('.grid .item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':function(){$(this).removeClass('muuri-item-shown');grid.filter('.muuri-item-shown')},
		'show':function(){$(this).addClass('muuri-item-shown');grid.filter('.muuri-item-shown')}
	});
	
}
function sort(a){grid.sort(a)};
function active(){$('.fc').removeClass('active')};
function filter(a){grid.filter(`${a}`);$('.fc').removeClass('active');$(this).addClass('active')};
$("select").change(()=>{
	$("select:focus option:selected").each(function(){
		var query=$(this).text();
		switch (query){
		case "도감번호":new Muuri('.grid',{sordData:null});break;
		case "제조시간":sort("time");break;
		case "종류":sort("type");break;
		};
	});
});
$(".fc").click(function(){
	var query=$(this).text();
	switch (query){
	case "전투":filter('[data-type="Battle"]');break;
	case "전략":filter('[data-type="Strategy"]');break;
	case "이벤트":filter('[data-event="1"]');break;
	case "All":grid.filter('[data-type]');break; 
	}
});