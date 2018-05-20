var ig = new eg.InfiniteGrid("#grid",{isEqualSize:true});
ig.setLayout(eg.InfiniteGrid.GridLayout,{
	horizontal:false,
	margin:25,
	align:"center",
	itemSize:175
});
$(document).ready(()=>{
	$.ajax('../json/fairy.json',{contentType:'application/json',dataType:'json',
		success:result=>{
			var itemcon = '<div class="w3-hover-shadow fairy item-content">',
			allCharacters = $.map(result,(fairy,index)=>{
				var character = $('<div class="item" data-sort="'+fairy.time+'" data-type="'+fairy.type+'" data-event="'+fairy.event+'"></div>'),
				fairycon = '<p class="name pofa er2">'+fairy.name+'</p><i class="tools '+fairy.type+'_Fairy_info_cage incage"></i><i class="tools '+fairy.type+'_Fairy_Tag ftype"></i><i class="tools info_cage_up cover"></i><i class="skill	'+fairy.skill+'"></i><i class="fairy_i	'+fairy.skill+'_i	icon3"></i><div class="tag">'+fairy.tag+'/'+fairy.time+'</div>';
				$(character).append(itemcon).find(".item-content").html(fairycon);
				return character;
			});
			ig.append(allCharacters);
		},
		timeout:10000
	});
}).ajaxStop(()=>{loadComplete()});
$("select").change(()=>{
	$("select:focus option:selected").each(function(){
		var query=$(this).text();
		switch (query){
		case "도감번호":
		break;
		case "제조시간":
		break;
		case "종류":
		break;
		};
	});
});
function loadComplete(){
	$('input#search').quicksearch('.grid .item',{
		noResults:"#noResultMessage",
		'bind':'keyup keydown click input',
		'hide':function(){

		},
		'show':function(){

		}
	});
};