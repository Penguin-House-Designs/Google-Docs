GoogleApps.service('slidesSrvc',['$http', function($http){

	this.slidesTemplates = [
		{name:'Blank', img:'./slidesView/pics/slide1.png'},
		{name:'Your big idea', img:'./slidesView/pics/slide2.png'},
		{name:'Photo album', img:'./slidesView/pics/slide3.png'},
		{name:'Wedding', img:'./slidesView/pics/slide4.png'},
		{name:'Portfolio', img:'./slidesView/pics/slide5.png'},
		{name:'Photo album', img:'./slidesView/pics/slide3.png'}
	];


	// this.slidesDocuments = [
	// 	{name:'Dominic Deci',title:'Who Are The Penguins',date:'3/12/17'},
	// 	{name:'Andrew Chen', title:'The Penguin Crisis is Real',date:'3/15/17'},
	// 	{name:'Andy Nguyen', title:'The State Of Penguins', date:'3/29/17'},
	// 	{name:'Harriet NuVu',title:'What We Can Do For Penguins',date:'3/23/17'},
	// 	{name:'Dominic Deci',title:'The Egyptians',date:'3/12/17'},
	// 	{name:'Andrew Chen', title:'How We Can Make Egypt Better',date:'3/15/17'},
	// 	{name:'Andy Nguyen', title:'The Batteries', date:'3/29/17'},
	// 	{name:'Harriet NuVu',title:'Where The Egyptians Go?',date:'3/23/17'}
	// ];



	//Initial Divs
	    this.slideContent = [
	        {
	            slideId: 1,
	            divId: "drag1",
	            divHtml: `<div id='drag1' class='slide-text-input ui-widget-content slide-title' grab-css>
	                <input id='input1' type='text' class='hello slide-text-input slide-title-input' value='Click to add title'>
	            </div>`,
	            innerId: "input1",
	        },
	        {
	          slideId: 1,
	          divId: "drag2",
	          divHtml: `<div id="drag2" class="ui-widget-content slide-author" grab-css>
	            <input type="text" id="input2" class="slide-author-input" placeholder="Click to add author">
	          </div>`,
	          innerId: 'input2',
	        }
	    ];

			this.gInfo = {
				bgColor: 'white',
				slides: [0]
			};
			this.slideTitle  = ""


			this.save = function(id, title, info){
				console.log('at srvc');
				// console.log(x);
				// console.log(JSON.stringify(this.slideContent));
				return $http({
					'method': 'POST',
					'url': '/api/saves_slide',
					'data': {
						'user_id': id,
						'slide_title': title,
						'g_info': JSON.stringify(info),
						'slide_content': JSON.stringify(this.slideContent),
						'slide_date': new Date().toLocaleDateString()
					}
				}).then( () => console.log("success"))
			}

			this.resave = function(id, title, info){
				console.log('at srvc');
				// console.log(x);
				// console.log(JSON.stringify(this.slideContent));
				return $http({
					'method': 'PUT',
					'url': '/api/saves_slide',
					'data': {
						slide_id: this.slideId,
						'user_id': id,
						'slide_title': title,
						'g_info': JSON.stringify(info),
						'slide_content': JSON.stringify(this.slideContent),
						'slide_date': new Date().toLocaleDateString()
					}
				}).then( () => console.log("success"))
			}

			this.loadUserSlides = function(id) {
				console.log('in srvc');
				return $http({
					method:"POST",
					url: "/api/loadUserSlides",
					data: {user_id : id}
				}).then((res)=>{
					this.slidesDocuments = res.data;
					return res.data;
				})
			}

			this.loadSlide = function() {
					return $http({
						method: "POST",
						url: "/api/loadSlide",
						data:{s_id: this.slideId}
					}).then((res)=>{
						this.slideContent = JSON.parse(res.data[0].slide_content);
						this.gInfo = JSON.parse(res.data[0].g_info)
					})
			}



}]);
