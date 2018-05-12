//JavaScript Document
//index
var TogV="invisible";
$(document).ready(()=>{
	$.ajaxSetup({
		error:function(x,e){
			if(x.status==0){
			alert('You are offline!!\n Please Check Your Network.');
			}else if(x.status==404){
			alert('Requested URL not found.');
			}else if(x.status==500){
			alert('Internel Server Error.');
			}else if(e=='parsererror'){
			alert('Error.nParsing JSON Request failed.');
			}else if(e=='timeout'){
			alert('Request Time out.');
			}else {
			alert('Unknow Error.n'+x.responseText);
			}
		}
	});
	$(".x").click(()=>{
		$(this).parent().addClass(TogV);
	});
	$("#mom button").click(()=>{
		if ($(this).attr("id") === "f"){
			$("#mf").toggleClass(TogV);
			$("#fo").addClass(TogV);
			$("#s").toggleClass("w3-border-bottom");
			$("#f").removeClass("w3-border-bottom");
		}
		if ($(this).attr("id") === "s"){
			$("#fo").toggleClass(TogV);
			$("#mf").addClass(TogV);
			$("#f").toggleClass("w3-border-bottom");
			$("#s").removeClass("w3-border-bottom");
		}
	});
	$("#close,#open").click(()=>{
		$("#Sidebar").toggleClass(TogV);
	});
	$("#lo,#lc").click(()=>{
		$("#lm").toggleClass(TogV);
	});
	$("#ro,#rc").click(()=>{
		$("#rm").toggleClass(TogV);
	});
	$("#info").click(()=>{
		$(".tab").removeClass("w3-red");
		$(this).addClass("w3-red");
		$("#contents>div").addClass(TogV);
		$("#index").removeClass(TogV);
	});
	$(".tab").click(function(){
		var tis=$(this),
		Classes=(tis.attr("class")).split(" "),
		T=["#tab1","#tab2","#tab3","#tab4","#tab5",".content"];
		$("#info,.tab").removeClass("w3-red");
		tis.addClass("w3-red");
		for (var a=0,len=Classes.length;a<len;a++){
			switch (Classes[a]){
			case "m1":
				$(T[0]).removeClass(TogV).parent().find(T[5]).not(T[0]).addClass(TogV)
			break;
			case "m2":
				$(T[1]).removeClass(TogV).parent().find(T[5]).not(T[1]).addClass(TogV)
			break;
			case "m3":
				$(T[2]).removeClass(TogV).parent().find(T[5]).not(T[2]).addClass(TogV)
			break;
			case "m4":
				$(T[3]).removeClass(TogV).parent().find(T[5]).not(T[3]).addClass(TogV)
			break;
			case "m5":
				$(T[4]).removeClass(TogV).parent().find(T[5]).not(T[4]).addClass(TogV)
			break;
			}
		}
	});
});