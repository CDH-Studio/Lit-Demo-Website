$(document).ready(function() {
  // From https://www.w3schools.com/howto/howto_css_smooth_scroll.asp#section1
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // var navbarHeight = $("#navbar").height();

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number specifies the number of milliseconds it takes to scroll to the specified area
      // TODO Add an offset to the scrolling without stuttering
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(hash).offset().top
          },
          500,
          "swing",
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
    } // End if
  });

  // Change the text in the 'More' button to 'Less' when unfold.
  // From https://stackoverflow.com/questions/16224636/twitter-bootstrap-collapse-change-display-of-toggle-button
  $("#btn-more").click(function() {
    $(this).text(function(i, old) {
      if (old == "Less") {
        return "More";
      } else {
        return "Less";
      }
      // return old == 'Less' ? 'More' : 'Less';
    });
  });

  // Change the color of the navbar on scroll down.
  $(window).scroll(function() {
    // var newImageUrl = $("#navbar-logo").src;
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("navbar-scrolled");
      $(".nav-link").addClass("nav-link-scrolled");
      $("#navbar-logo").attr("src", "assets/img/logo-light.png");
      // newImageUrl = "assets/img/logo-light.png";
    } else {
      $(".navbar").removeClass("navbar-scrolled");
      $(".nav-link").removeClass("nav-link-scrolled");
      $("#navbar-logo").attr("src", "assets/img/logo-dark.png");
      // newImageUrl = "assets/img/logo-dark.png";
    }
  });

  // From https://codepen.io/tutsplus/pen/QNeJgR
  // Adds animations to the timeline
  (function() {
    "use strict";

    // define variables
    var items = document.querySelectorAll(".timeline-item");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();

  // Underlines the active navbar link
  $(".navbar-nav a").on("click", function() {
    $(".navbar-nav")
      .find("li.active")
      .removeClass("active");
    $(this)
      .parent("li")
      .addClass("active");
  });
});
