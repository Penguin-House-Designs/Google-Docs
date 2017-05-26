GoogleApps.directive('celldir',function(){
  return{
    restrict: 'A',
    controller: 'sheetsCtrlWork',
    link: function( scope, e, attribute){
        scope.array = [];

        e.on('mousedown', function(){
        scope.array.push([$( this ).get(0).id,$('input', this).val()])
        console.log([$( this ).get(0).id,$('input', this).val()]);

        $('.sheets-inputs').mouseover(function(){
                console.log('mouseover');
                scope.array.push([$( this ).get(0).id,$('input', this).val()])
                console.log(scope.array);
                return scope.array
              }).mouseup(
                function(){
                    scope.array = []
                    console.log('mouseup');
                    return scope.array
                  }
                )
                console.log('killing');
                    return;
              })

      }
  }
})
