app.service('sheetsSrvc',['$http', function($http){

	this.sheetsTemplates = [
		{name:'Blank', img:'./sheetsView/pics/sheet1.png'},
		{name:'Annual budget', img:'./sheetsView/pics/sheet2.png'},
		{name:'To-do list', img:'./sheetsView/pics/sheet3.png'},
		{name:'Monthly budget', img:'./sheetsView/pics/sheet4.png'},
		{name:'2017 Calender', img:'./sheetsView/pics/sheet5.png'}
	];
}])
