//JavaScript Document
//index
$(document).ready(function() {
	$('.x').click(function(){
		$(this).parent().addClass('w3-hide');
	});
	$('#close,#open').click(function() {
		$('#Sidebar').toggleClass('w3-hide');
		$('#Sidebar').toggleClass('w3-show');
	});
	$('#lo,#lc').click(function() {
		$('#lm').toggleClass('w3-hide');
		$('#lm').toggleClass('w3-show');
	});
	$('#ro,#rc').click(function() {
		$('#rm').toggleClass('w3-hide');
		$('#rm').toggleClass('w3-show');
	});
	$('#info').click(function() {
		$(".tab").removeClass('w3-red');
		$(this).addClass('w3-red');
		$('#tab1,#tab2,#tab3,#tab4,#tab5').removeClass('w3-show').addClass('w3-hide');
		$('#index').addClass('w3-show').removeClass('w3-hide');
	});
	$(".tab").click(function() {
		$("#info").removeClass('w3-red');
		$(".tab").removeClass('w3-red');
		$(this).addClass('w3-red');
		if ($(this).attr("id") === "m1")
		{
			$('#index,#tab2,#tab3,#tab4,#tab5').removeClass('w3-show').addClass('w3-hide');
			$('#tab1').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "m2")
		{
			$('#index,#tab1,#tab3,#tab4,#tab5').removeClass('w3-show').addClass('w3-hide');
			$('#tab2').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "m3")
		{
			$('#index,#tab1,#tab2,#tab4,#tab5').removeClass('w3-show').addClass('w3-hide');
			$('#tab3').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "m4")
		{
			$('#index,#tab1,#tab2,#tab3,#tab5').removeClass('w3-show').addClass('w3-hide');
			$('#tab4').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "m5")
		{
			$('#index,#tab1,#tab2,#tab3,#tab4').removeClass('w3-show').addClass('w3-hide');
			$('#tab5').addClass('w3-show').removeClass('w3-hide');
		}
	});
	$('.sf .fc').click(function() {
		$('.sf .fc').removeClass('active');
		$('.mf li').removeClass('active');
		$(this).addClass('active');
	});
	$('.mf li').click(function() {
		$(this).toggleClass('active');
	});
	$('.shuffle').click(function() {
		$('.fo .fc').removeClass('active');
		$(this).addClass('active');
	});
	$('.fo .fc').click(function() {
		$('.shuffle').removeClass('active');
		$('.fo .fc').removeClass('active');
		$(this).addClass('active');
	});
	var	filterizd =	$('#gun').filterizr({
	controlsSelector:'.fc',
	filterOutCss:{
		opacity:0,
		transform:'scale(0.75)'
	},
	filterInCss:{
		opacity:1,
		transform:'scale(1)'
	}
	});
	$('.fo li').click(function() {
        var sortBy    = $('.so').val();
        var sortOrder = $(this).data('sort');
        filterizd.filterizr('sort', sortBy, sortOrder);
	})
	$('.fom li').click(function() {
        var sortBy    = $('.som').val();
        var sortOrder = $(this).data('fso');
        filterizd.filterizr('sort', sortBy, sortOrder);
	})
});