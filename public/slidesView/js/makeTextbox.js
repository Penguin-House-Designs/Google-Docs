GoogleApps.directive('makeTextBox', function() {
  return {
    controller: 'slidesCtrl',
    link: function(scope, element, attr){
      element.on('click', function() {
        for (var i=0; i<scope.textBoxes.length; i++) {
          $("#div" + String(i)).html(scope.textBoxes[i])
          }
        })
      }
    }
  });
