GoogleApps.directive('celldir',function(){
  return{
    restrict: 'A',
    controller: 'sheetsCtrlWork',
    link: function( scope, e, attribute){
        scope.array = [];
          // console.log('wokring');
          var vals = []
        e.on('mousedown', function(){
        vals.push($('input', this).val())
        console.log(this, $('input', this).val());
        })
        e.on('mouseover', function() {
          vals.push($('input', this).val())
        })
        e.on('mouseup', function() {
          vals.push($('input', this).val())
          console.log(vals);
          vals= []
        })
            // $(window).mouseover(
            //   function(){
            //   console.log('mouseover');
            //   scope.array.push(document.getElementById(this.id))
            //   console.log(scope.array);
            //   return scope.array
            //       }).mouseup(
            //   function(){
            //       scope.array = []
            //       console.log('mouseup');
            //       return scope.array
            //     }
            //   )
            //       return;
            //       console.log('after');
            // })


          }
  }
})
