//JavaScript Document
//index
$(document).ready(()=>{
	$('.x').click(()=>{
		$(this).parent().addClass('w3-hide');
	});
	$('#mom button').click(()=>{
		if ($(this).attr("id") === "f"){
			$('#mf').toggleClass('w3-hide');
			$('#fo').addClass('w3-hide');
			$('#s').toggleClass('w3-border-bottom');
			$('#f').removeClass('w3-border-bottom');
		}
		if ($(this).attr("id") === "s"){
			$('#fo').toggleClass('w3-hide');
			$('#mf').addClass('w3-hide');
			$('#f').toggleClass('w3-border-bottom');
			$('#s').removeClass('w3-border-bottom');
		}
	});
	$('#close,#open').click(()=>{
		$('#Sidebar').toggleClass('w3-hide');
	});
	$('#lo,#lc').click(()=>{
		$('#lm').toggleClass('w3-hide');
	});
	$('#ro,#rc').click(()=>{
		$('#rm').toggleClass('w3-hide');
	});
	$('#info').click(()=>{
		$(".tab").removeClass('w3-red');
		$(this).addClass('w3-red');
		$('#contents>div').addClass('w3-hide');
		$('#index').removeClass('w3-hide');
	});
	$(".tab").click(function(){
		var tis=$(this),
		Classes=(tis.attr('class')).split(' '),
		t1='#tab1',t2='#tab2',t3='#tab3',t4='#tab4',t5='#tab5';
		$("#info,.tab").removeClass('w3-red');
		tis.addClass('w3-red');
		for (var a=0,len=Classes.length;a<len;a++){
			//var Classes[a][a].split(' ').join(t)
			//function back(){$().removeClass('w3-hide').not(t[a]).addClass('w3-hide')};
			//console.log(Classes[a])
			switch (Classes[a]){
			case "m1":
				$(t1).removeClass('w3-hide').not(t1).addClass('w3-hide')
			break;
			case "m2":
				$(t2).removeClass('w3-hide').not(t2).addClass('w3-hide')
			break;
			case "m3":
				$(t3).removeClass('w3-hide').not(t3).addClass('w3-hide')
			break;
			case "m4":
				$(t4).removeClass('w3-hide').not(t4).addClass('w3-hide')
			break;
			case "m5":
				$(t5).removeClass('w3-hide').not(t5).addClass('w3-hide')
			break;
			}
		}
	}); 
});