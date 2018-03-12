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
		$('#tdoll,#equip,#fairy,#disc,#battery,#enhance,#factory').removeClass('w3-show').addClass('w3-hide');
		$('#index').addClass('w3-show').removeClass('w3-hide');
	});
	$(".tab").click(function() {
		$("#info").removeClass('w3-red');
		$(".tab").removeClass('w3-red');
		$(this).addClass('w3-red');
		if ($(this).attr("id") === "d")
		{
			$('#index,#equip,#fairy').removeClass('w3-show').addClass('w3-hide');
			$('#tdoll').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "e")
		{
			$('#index,#tdoll,#fairy').removeClass('w3-show').addClass('w3-hide');
			$('#equip').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "f")
		{
			$('#index,#equip,#tdoll').removeClass('w3-show').addClass('w3-hide');
			$('#fairy').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "di")
		{
			$('#index,#battery,#enhance,#factory').removeClass('w3-show').addClass('w3-hide');
			$('#disc').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "ba")
		{
			$('#index,#disc,#enhance,#factory').removeClass('w3-show').addClass('w3-hide');
			$('#battery').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "en")
		{
			$('#index,#disc,#battery,#factory').removeClass('w3-show').addClass('w3-hide');
			$('#enhance').addClass('w3-show').removeClass('w3-hide');
		}
		if ($(this).attr("id") === "fa")
		{
			$('#index,#disc,#battery,#enhance').removeClass('w3-show').addClass('w3-hide');
			$('#factory').addClass('w3-show').removeClass('w3-hide');
		}
	});
});