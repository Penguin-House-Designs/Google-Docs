GoogleApps.service('slidesSrvc',['$http', function($http){

	this.slidesTemplates = [
		{name:'Blank', img:'./slidesView/pics/slide1.png'},
		{name:'Your big idea', img:'./slidesView/pics/slide2.png'},
		{name:'Photo album', img:'./slidesView/pics/slide3.png'},
		{name:'Wedding', img:'./slidesView/pics/slide4.png'},
		{name:'Portfolio', img:'./slidesView/pics/slide5.png'},
		{name:'Photo album', img:'./slidesView/pics/slide3.png'}
	];


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

			this.save = function(id, title, info){
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
				// console.log('in srvc');
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
						console.log(res.data)
						this.slideContent = JSON.parse(res.data[0].slide_content);
						this.gInfo = JSON.parse(res.data[0].g_info);
						this.slideTitle = res.data[0].slide_title
					})
			}

}]);
