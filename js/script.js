var WallContents = {};
var WallRow = '<div class="wall-grid-row">';
var WallCell = '<div class="wall-grid-cell"></div>';

var RowMarkup = '<div class="wall-grid-row">';
var GridMarkup = "";

$(document).ready(function() {

  BuildWallGrid();

  $(".icon").click(function() {
    $(".selected").toggleClass("selected", false)
    $(this).toggleClass("selected");
  });

  AttachClickEvent();

});

var BuildWallGrid = function() {
  var RowCount = $(".wall-rows").val();
  var ColumnCount = $(".wall-columns").val();

  if (Object.keys(WallContents).length == 0) {
    $(".wall-grid-cell").unbind();
    $("#wall-grid").html("");

    for (var i = 1; i <= ColumnCount; i++) {
        RowMarkup += WallCell;
        if (i == ColumnCount) {
          RowMarkup += '</div>';
          for (var c = 1; c <= RowCount; c++) {
            GridMarkup += RowMarkup;
          }
        };
    };
    $("#wall-grid").html(GridMarkup);
    AttachClickEvent();
  };
};

var AttachClickEvent = function() {
  $(".wall-grid-cell").click(function() {
    if ($(".selected").length && !$(".selected").hasClass("icon-remove")) {
      console.log($(".selected").attr("src"));
      $(this).css("background-image", 'url(' + $(".selected").attr("src") + ')');
      $(this).css("background-size", "contain");
    } else {
      $(this).css("background-image", 'url("./images/baseline-add_circle-12px.svg")');
      $(this).css("background-size", "auto");
    }
  });
};

var ClearWall = function() {
  $("#wall-grid").html(GridMarkup);
  AttachClickEvent();
}
