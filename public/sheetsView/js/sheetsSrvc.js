GoogleApps.service('sheetsSrvc',['$http', function($http){

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
