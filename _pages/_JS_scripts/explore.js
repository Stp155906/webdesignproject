$(document).ready(function() {
    $('.story-container').on('mousewheel', function(e) {
      e.preventDefault();
      var scrollDistance = e.originalEvent.wheelDelta || -e.originalEvent.deltaY;
      this.scrollLeft -= scrollDistance;
    });
  });

  $(function() {
    $(".card-component-placeholder").load("card-component.html", function() {
      // Once the card-component.html is loaded, you can perform any additional logic or modifications here.
      // For example, you can add event listeners or manipulate the loaded content.

      // Example: Add a click event listener to the like-icon
      $(".like-icon").on("click", function() {
        // Handle like functionality here
        console.log("Liked!");
      });
    });
  });