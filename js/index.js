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
		$('.content').addClass('w3-hide');
		$('#index').removeClass('w3-hide');
	});
	$(".tab").click(function(){
		$("#info,.tab").removeClass('w3-red');
		$(this).addClass('w3-red');
		var cnts=$('#contents>div'),
		Classes=($(this).attr('class')).split(' ');
		for (var a=0,len=Classes.length;a<len;a++){
			switch (Classes[a]){
			case "m1":
				cnts.not('#tab1').addClass('w3-hide')
				$('#tab1').removeClass('w3-hide')
			break;
			case "m2":
				cnts.not('#tab2').addClass('w3-hide')
				$('#tab2').removeClass('w3-hide')
			break;
			case "m3":
				cnts.not('#tab3').addClass('w3-hide')
				$('#tab3').removeClass('w3-hide')
			break;
			case "m4":
				cnts.not('#tab4').addClass('w3-hide')
				$('#tab4').removeClass('w3-hide')
			break;
			case "m5":
				cnts.not('#tab5').addClass('w3-hide')
				$('#tab5').removeClass('w3-hide')
			break;
			}
		}
	}); 
});