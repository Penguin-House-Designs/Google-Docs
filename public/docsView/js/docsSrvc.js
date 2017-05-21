app.service('GoogleService',['$http', function($http){

	this.docsTemplates = [
		{name:'Blank', img:'./docsView/pics/blank.png'},
		{name: 'Resume', img:'./docsView/pics/resume.png'},
		{name:'Brochure', img:'./docsView/pics/brochure.png'},
		{name:'Project Proposal', img:'./docsView/pics/reports.png'},
		{name:'Meeting Notes', img:'./docsView/pics/resume.png'}
	];
}])
