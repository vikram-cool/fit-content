var pageWidth, pageHeight;

var basePage = {
  width: 763,
  height: 600,
  scale: 1,
  scaleX: 1,
  scaleY: 1,
};

$(function () {
  var $page = $(".page_content");

  getPageSize();
  scalePages($page, pageWidth, pageHeight);

  //using underscore to delay resize method till finished resizing window
  $(window).resize(
    _.debounce(function () {
      getPageSize();
      scalePages($page, pageWidth, pageHeight);
    }, 150)
  );

  function getPageSize() {
    pageHeight = $("#container").height();
    pageWidth = $("#container").width();
  }

  function scalePages(page, maxWidth, maxHeight) {
    var scaleX = 1,
      scaleY = 1;
    scaleX = maxWidth / basePage.width;
    scaleY = maxHeight / basePage.height;
    basePage.scaleX = scaleX;
    basePage.scaleY = scaleY;
    basePage.scale = scaleX > scaleY ? scaleY : scaleX;
    var scaleValue = basePage.scale - 0.03;   
    page.attr("style", "-webkit-transform:scale(" + scaleValue + ");");
  }
});
