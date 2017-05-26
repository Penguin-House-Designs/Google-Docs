GoogleApps.directive('celldir',function(){
  return{
    restrict: 'A',
    controller: 'sheetsCtrlWork',
    link: function( scope, e, attribute){
        scope.array = [];
        var isDown

        e.on('mousedown', function(){
          $('.sheets-inputs').css({background:"white"});
        scope.array.push([$( this ).get(0).id,$('input', this).val()])
        isDown = true;
        $('.sheets-inputs').mouseover(function(){
                if(isDown===true){
                  $(this).css({background:"#b3b3ff"});
                scope.array.push([$(this).get(0).id,$('input', this).val()])
                console.log(scope.array);
                
                return scope.array
                }
              }).mouseup(
                function(){
                    isDown = false;
                    scope.array = []
                    console.log('mouseup');
                    return scope.array
                  }
                )
                    return;
              })

      }
  }
})
