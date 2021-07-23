$(document).ready(function () {
    $(function () {
      var $el,
        leftPos,
        newWidth,
        $mainNav = $("#nav").find("ol");
  
      $mainNav.append("<li id='magic-line'></li>");
      var $magicLine = $("#magic-line");
  
      if ($("#nav li").hasClass("active")) {
        $magicLine
          .css({
            left: $("#nav").find("li.active").position().left,
            width: $("#nav li.active a").width()
          })
          .data("origLeft", $magicLine.position().left);
      } else {
        $magicLine
          .css({
            left: -100,
            width: $("#nav li:first a").width()
          })
          .data("origLeft", $magicLine.position().left);
      }
  
      $("#nav")
        .find("li:not(#magic-line)")
        .hover(
          function () {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.children().width();
            $magicLine.stop().animate({
              left: leftPos,
              width: newWidth
            });
          },
          function () {
            $magicLine.stop().animate({
              left: $magicLine.data("origLeft"),
              width: $("#nav li.active a").width()
            });
          }
        );
    });
  });
  