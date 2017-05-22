GoogleApps.controller('landingCtrl', function($scope) {

  $('.type-it-docs').typeIt({
    strings: ['Create persuasive documents', 'Create impactful documents', 'Create meaningful documents'],
    speed: 90,
    breakLines: false,
    deleteDelay: 4000,
    loop: true,
    loopDelay: 3000,
    deleteSpeed: 50
  })

  $('.type-it-sheets').typeIt({
    strings: ['Create complex spreadsheets', 'Create useful spreadsheets', 'Create powerful spreadsheets'],
    speed: 90,
    breakLines: false,
    deleteDelay: 4000,
    loop: true,
    loopDelay: 3000,
    deleteSpeed: 50
  })

  $('.type-it-slides').typeIt({
    strings: ['Create beautiful presentations', 'Create impactful presentations', 'Create inspiring presentations'],
    speed: 90,
    breakLines: false,
    deleteDelay: 4000,
    loop: true,
    loopDelay: 3000,
    deleteSpeed: 50
  })

})
