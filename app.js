// Not a necessary feature, but shows the use of hover()
$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?!");
  }, function() {
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center");
});
