
var GoogleApps = angular.module('GoogleApp', ['ui.router','ui.materialize']);

GoogleApps.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
	//LANDING VIEWS//
    .state('docs', {
      url:'/docslanding',
      templateUrl: './landingViews/docs.html',
      controller: 'landingCtrl'
    })

    .state('sheets', {
      url:'/sheetslanding',
      templateUrl: './landingViews/sheets.html',
      controller: 'landingCtrl'
    })

    .state('slides', {
      url:'/slideslanding',
      templateUrl: './landingViews/slides.html',
      controller: 'landingCtrl'
    })


//DOCS VIEWS
    .state('docsHome', {
      url:'/docsHome',
      templateUrl: './docsView/docsHome.html',
      controller: 'DocHomeController'
    })

    .state('docsWork', {
      url:'/docsWork',
      templateUrl: './docsView/docsWork.html',
      controller: 'DocHomeController'
    })

//SHEETS VIEWS
    .state('sheetsHome', {
      url:'/sheetsHome',
      templateUrl: './sheetsView/sheetsHome.html',
      controller: 'sheetsCtrl'
    })

    .state('sheetsWork', {
      url: '/sheetsWork',
      templateUrl: './sheetsView/sheetsWork.html',
      controller: 'sheetsCtrlWork'
    })

//SLIDES VIEWS//
  .state('slidesHome', {
    url:'/slidesHome',
    templateUrl: './slidesView/slidesHome.html',
    controller: 'slidesHomeCtrl'
  })

  .state('slidesWork', {
    url: '/slidesWork',
    templateUrl: './slidesView/slidesWork.html',
    controller: 'slidesCtrl'
  })
//DRIVE VIEWS//
  .state('driveLanding', {
    url: '/driveLanding',
    templateUrl: './driveView/driveLanding.html',
    controller: 'driveCtrl'
  })

  .state('driveHome', {
    url: '/driveHome',
    templateUrl: './driveView/driveHome.html',
    controller: 'driveCtrl'
  })

	$urlRouterProvider.otherwise('/docslanding')

});



// What Some Views Share
GoogleApps.directive('dropdown', function($document) {
	return {
		restrict: "C",
		link: function(scope, elem, attr) {

			elem.bind('click', function() {
				elem.toggleClass('dropdown-active');
				elem.addClass('active-recent');
			});

			$document.bind('click', function() {
				if(!elem.hasClass('active-recent')) {
					elem.removeClass('dropdown-active');
				}
				elem.removeClass('active-recent');
			});

		}
	}
});
