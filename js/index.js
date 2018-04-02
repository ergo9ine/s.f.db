//JavaScript Document
//index
$(document).ready(function(){
	$('.x').click(function(){
		$(this).parent().addClass('w3-hide');
	});
	$('#mom button').click(function(){
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
	$('#close,#open').click(function(){
		$('#Sidebar').toggleClass('w3-hide');
	});
	$('#lo,#lc').click(function(){
		$('#lm').toggleClass('w3-hide');
	});
	$('#ro,#rc').click(function(){
		$('#rm').toggleClass('w3-hide');
	});
	$('#info').click(function(){
		$(".tab").removeClass('w3-red');
		$(this).addClass('w3-red');
		$('#tab1,#tab2,#tab3,#tab4,#tab5').addClass('w3-hide');
		$('#index').removeClass('w3-hide');
	});
	$(".tab").click(function(){
		$("#info").removeClass('w3-red');
		$(".tab").removeClass('w3-red');
		$(this).addClass('w3-red');  
		switch ($(this).attr("id")){
		case "m1":
			$('#index,#tab2,#tab3,#tab4,#tab5').addClass('w3-hide');
			$('#tab1').removeClass('w3-hide');
		break;
		case "m2":
			$('#index,#tab1,#tab3,#tab4,#tab5').addClass('w3-hide');
			$('#tab2').removeClass('w3-hide');
		break;
		case "m3":
			$('#index,#tab2,#tab3,#tab4,#tab5').addClass('w3-hide');
			$('#tab3').removeClass('w3-hide');
		break;
		case "m4":
			$('#index,#tab1,#tab2,#tab3,#tab5').addClass('w3-hide');
			$('#tab4').removeClass('w3-hide');
		break;
		case "m5":
			$('#index,#tab1,#tab2,#tab3,#tab4').addClass('w3-hide');
			$('#tab5').removeClass('w3-hide');
		break;
		}
	});
	$('.shuffle').click(function(){
		$('.fo .fc').removeClass('active');
		$(this).addClass('active');
	});
	$('.fo .fc').click(function(){
		$('.shuffle').removeClass('active');
		$('.fo .fc').removeClass('active');
		$(this).addClass('active');
	})
});