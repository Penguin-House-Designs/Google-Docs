GoogleApps.service('slidesSrvc',['$http', function($http){

	this.slidesTemplates = [
		{name:'Blank', img:'./slidesView/pics/slide1.png'},
		{name:'Your big idea', img:'./slidesView/pics/slide2.png'},
		{name:'Photo album', img:'./slidesView/pics/slide3.png'},
		{name:'Wedding', img:'./slidesView/pics/slide4.png'},
		{name:'Portfolio', img:'./slidesView/pics/slide5.png'}
	];


	this.slidesDocuments = [
		{name:'Dominic Deci',title:'Who Are The Penguins',date:'3/12/17'},
		{name:'Andrew Chen', title:'The Penguin Crisis is Real',date:'3/15/17'},
		{name:'Andy Nguyen', title:'The State Of Penguins', date:'3/29/17'},
		{name:'Harriet NuVu',title:'What We Can Do For Penguins',date:'3/23/17'},
		{name:'Dominic Deci',title:'The Egyptians',date:'3/12/17'},
		{name:'Andrew Chen', title:'How We Can Make Egypt Better',date:'3/15/17'},
		{name:'Andy Nguyen', title:'The Batteries', date:'3/29/17'},
		{name:'Harriet NuVu',title:'Where The Egyptians Go?',date:'3/23/17'}
	]


}])
