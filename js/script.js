$(document).ready(function(){
  var userArray;
  $( "#sortlist" ).sortable({
    placeholder: "sortable-placeholder",
    containment:"#sortlist",
    stop: function( event, ui ) {
      userArray = $( "#sortlist" ).sortable( "toArray" );
    }
  });

  $.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
    $parents = $elems.parent();

    $parents.each(function(){
      $(this).children(selector).sort(function(){
        return Math.round(Math.random()) - 0.5;
        // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
    }).detach().appendTo(this);
    });

    return this;
  };

  
  $('.redo').click(function() {
    $('ul').randomize();
    userArray = $( "#sortlist" ).sortable( "toArray" );
  });

  var arr =[];
  for(var i=1; i<=12;i++){
    arr.push(i);
  }

  function gameOver() {
    var count=0;
    console.log(arr);
    console.log(userArray);
    for(var j=0;j<12;j++){
      if(arr[j]==userArray[j]){
        count+=1;
      }      
    }
    console.log(count); 
    if(count==12){
      alert("Game Over");
    } else{
      alert("Not Over");
    }
  }

  $('#check').click(function(){
    gameOver();
  });


});











