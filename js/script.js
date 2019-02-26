$(document).ready(function() {
  console.log("Script loaded");

  $(".wall-grid-cell").click(function() {
    // $(this).css("background-color", "green");
  });

  $(".icon").click(function() {
    $(".selected").toggleClass("selected", false)
    $(this).toggleClass("selected");
  });

  $(".wall-grid-cell").click(function() {
    if ($(".selected").length && !$(".selected").hasClass("icon-remove")) {
      console.log($(".selected").attr("src"));
      $(this).css("background-image", 'url(' + $(".selected").attr("src") + ')');
    } else {
      $(this).css("background-image", 'url("./images/baseline-add_circle-24px.svg")');
    }
  });
});
