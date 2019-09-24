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

  // Generates the map at the end of the page
  function initMap() {
    var uluru = { lat: 45.4205, lng: -75.70217 };

    var style2 = [
      {
        featureType: "all",
        elementType: "labels",
        stylers: [
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [
          {
            saturation: 36
          },
          {
            color: "#000000"
          },
          {
            lightness: 40
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.text.stroke",
        stylers: [
          {
            visibility: "on"
          },
          {
            color: "#232323"
          }
        ]
      },
      {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 17
          },
          {
            weight: 1.2
          }
        ]
      },
      {
        featureType: "administrative.country",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#612940"
          }
        ]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#c4c4c4"
          }
        ]
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#612940"
          }
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 20
          }
        ]
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 21
          },
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#612940"
          },
          {
            lightness: "0"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#612940"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 18
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#575757"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ffffff"
          }
        ]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#2c2c2c"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
          {
            color: "#612940"
          }
        ]
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#999999"
          }
        ]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 19
          }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#000000"
          },
          {
            lightness: 17
          }
        ]
      }
    ];
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
      styles: style2
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
});
