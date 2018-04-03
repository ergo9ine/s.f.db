$(document).ready(function(){
	nurl = $(location).attr('href');
	var ourl = "http://sf2031.com/"||"http://sf2031.com/index.html";
	if (nurl == ourl){console.log('check')}
	else{
		//$('#index').addClass("w3-hide");
		//$("#tab1").removeClass("w3-hide");
		//$("#st").contents().find("#search").val('200');
		console.log((nurl.replace('index.html#','')));
		console.log($("#st").contents().find("#search").val());
	}
})