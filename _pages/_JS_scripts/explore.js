$(document).ready(function() {
  $('.story-container').on('mousewheel', function(e) {
    e.preventDefault();
    var scrollDistance = e.originalEvent.wheelDelta || -e.originalEvent.deltaY;
    this.scrollLeft -= scrollDistance;
  });
});
