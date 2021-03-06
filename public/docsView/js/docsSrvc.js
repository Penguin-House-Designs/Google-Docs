GoogleApps.service('GoogleService',['$http', function($http){

	this.docsTemplates = [
		{name:'Blank', img:'./docsView/pics/blank.png'},
		{name: 'Resume', img:'./docsView/pics/resume.png'},
		{name:'Brochure', img:'./docsView/pics/brochure.png'},
		{name:'Project Proposal', img:'./docsView/pics/reports.png'},
		{name:'Meeting Notes', img:'./docsView/pics/resume.png'},
		{name:'Brochure', img:'./docsView/pics/brochure.png'},
	];

	this.docsDocuments = [
		{name:'Andy Nguyen',title:'Group Project Presentation',date:'3/12/17'},
		{name:'Andrew Chen', title:'Penguin Food Research',date:'3/15/17'},
		{name:'Andy Nguyen', title:'Physiology Penguin Research', date:'3/29/17'},
		{name:'Harriet NuVu',title:'Penguin Research',date:'3/23/17'},
		{name:'Dominic Deci',title:'The Pyramids Are Batteries',date:'3/12/17'},
		{name:'Andrew Chen', title:'What Happen In Egypt',date:'3/15/17'},
		{name:'Andy Nguyen', title:'The Secrets of the Pyramids', date:'3/29/17'},
		{name:'Harriet NuVu',title:'The Conspiracy Behind DevMtn',date:'3/23/17'}
	];

	this.getDocs = (user) => {
		return $http({
			method: 'POST',
			url: '/api/get_g_docs',
			data: user
		}).then((response) => response.data)
	}


	this.postDocs = (text) => {
		console.log(text);
		return $http({
			method: 'POST',
			url:'/api/save_g_docs',
			data: text
		})
	}



}])
