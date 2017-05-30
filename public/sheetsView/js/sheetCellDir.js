GoogleApps.directive('celldir',function(){
  return{
    restrict: 'A',
    controller: 'sheetsCtrlWork',
    link: function( scope, e, attribute){
        scope.array = [];
        var isDown

        e.on('mousedown', function(){
          $('.sheets-inputs').css({background:"white"});
        scope.array.push({id:$( this ).get(0).id,val:$('input', this).val()})
        isDown = true;
        $('.sheets-inputs').mouseover(function(){
                if(isDown===true){
                $(this).css({background:"#b3b3ff"});
                scope.array.push({id:$( this ).get(0).id, val:$('input', this).val()})
                return scope.array
                }
              }).mouseup(
                function(){
                    isDown = false;
                    if(isDown === false){
                      scope.storage(scope.array)
                      scope.array = []
                    }
                    return scope.array
                  }
                )
                    return;
              })

      }
  }
})
