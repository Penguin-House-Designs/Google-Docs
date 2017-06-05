GoogleApps.service('sheetsSrvc',['$http', function($http){


	this.setStorage = function(arr){
		this.storage = [];
		this.storage = arr;
		return this.storage
	};


	this.chart = function(name,x,y){
	console.log(name);
	console.log(x);
	console.log(y);
	var arrX = x;
	var arrY = y;
		var lineChartData = {
		    labels: arrX,
		    datasets: [{
		        fillColor: "rgba(220,220,220,0)",
		        strokeColor: "rgba(0,160,0,0.8)",
		        pointColor: "rgba(38, 115, 38,0.8)",
		        data: arrY
		    }]
		}
		Chart.defaults.global.animationSteps = 50;
		Chart.defaults.global.tooltipYPadding = 16;
		Chart.defaults.global.tooltipCornerRadius = 0;
		Chart.defaults.global.tooltipTitleFontStyle = "normal";
		Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
		Chart.defaults.global.animationEasing = "easeOutBounce";
		Chart.defaults.global.responsive = true;
		Chart.defaults.global.scaleLineColor = "black";
		Chart.defaults.global.scaleFontSize = 16;
		var ctx = document.getElementById("canvas").getContext("2d");
		var LineChartDemo = new Chart(ctx).Line(lineChartData, {
		    pointDotRadius: 5,
		    bezierCurve: false,
		    scaleShowVerticalLines: false,
		    scaleGridLineColor: "black"
		});
		return
	};

	this.sheetsTemplates = [
		{name:'Blank', img:'./sheetsView/pics/sheet1.png'},
		{name:'Annual budget', img:'./sheetsView/pics/sheet2.png'},
		{name:'To-do list', img:'./sheetsView/pics/sheet3.png'},
		{name:'Monthly budget', img:'./sheetsView/pics/sheet4.png'},
		{name:'2017 Calender', img:'./sheetsView/pics/sheet5.png'}
	];



	this.sheetsDocuments = [
		{name:'Dominic Deci',title:'Penguin Growth 2013-2015',date:'3/12/17'},
		{name:'Andrew Chen', title:'Penguin Food are Good Groth',date:'3/15/17'},
		{name:'Andy Nguyen', title:'Stats Of Bear Penguins', date:'3/29/17'},
		{name:'Harriet NuVu',title:'The Deaths Of Penguins',date:'3/23/17'},
		{name:'Dominic Deci',title:'The Batteries Stats (Egypt)',date:'3/12/17'},
		{name:'Andrew Chen', title:'Population of Egyptions',date:'3/15/17'},
		{name:'Andy Nguyen', title:'Foundation of Aliens', date:'3/29/17'},
		{name:'Harriet NuVu',title:'Egypts Eatting Habits 2014-2017',date:'3/23/17'}
	]
}])
