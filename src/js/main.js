$(document).ready(function () {
  $("#logo").hover(
    function () {
      $(this).css("transform", "scale(1.2)");
    },
    function () {
      $(this).css("transform", "scale(1)");
    }
  );
});
