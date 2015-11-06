$(document).ready(function(){
  $( "#sortlist" ).sortable({
    placeholder: "sortable-placeholder",
    containment:"#sortlist"
  });
  $('.redo').click(function() {
    $("#sortlist").sortable("cancel");
  });
});
