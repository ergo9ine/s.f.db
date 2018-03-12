$(document).ready(function() {
	$("#calendar").fullCalendar({
		height:'auto',
		header:{
		left:false,
		center:false,
		right: false
		},
		events:[
			{
			title:'포인트 이벤트 :꽃등축제 3주차',
			start:'2018-03-01',
			end:'2018-03-08'
			},
			{
			title:'「2017년 가을의 신부」 테마 코스튬 복각 및 「달콤한 각인」 테마 코스튬 오픈', /* 및 「2018년 화이트데이의 신부」*/
			start:'2018-03-09',
			end:'2018-03-24',
			url:'http://www.girlsfrontline.co.kr/archives/1302.html'
			},
			{
			title:'「2018년 신년에는 꽃길만 걷자」 테마 코스튬',
			start:'2018-02-14',
			end:'2018-03-03',
			url:'http://www.girlsfrontline.co.kr/archives/1254.html'
			},
			{
			title:'정기점검',
			start:'2018-03-02',
			url:'http://www.girlsfrontline.co.kr/archives/1297.html'
			},
			{
			title:'기간한정 월정액 두배 이벤트',
			start:'2018-03-01',
			end:'2018-03-08',
			url:'http://www.girlsfrontline.co.kr/archives/1297.html'
			},
			{
			title:'빙고이벤트 [전술능력 평가]',
			start:'2018-03-10',
			end:'2018-03-31',
			url:'http://www.girlsfrontline.co.kr/archives/1308.html'
			},
			{
			title:'정기점검',
			start:'2018-03-09',
			url:'http://www.girlsfrontline.co.kr/archives/1335.html'
			},
		],
		eventColor:'#000',
		eventBackgroundColor:'#ffa63c',
		eventTextColor:'#fff',
		eventBorderColor:'#ffa63c'
	})
});