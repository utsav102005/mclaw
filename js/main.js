$(document).ready(function () {
  $(".toggle-menu").click(function () {
    $(".menu").toggleClass("active");
  });
});

$(".testimonial-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// accordion start

// $(document).ready(function () {
//   $(".process-paragraph").hide();
//   $(".process-box-title,.arow").click(function () {
//     var content = $(this).closest(".process-box").find(".process-paragraph");
//     if (content.is(":visible")) {
//       content.slideUp();
//       $(this).removeClass("active");
//     } else {
//       $(".process-paragraph").slideUp();
//       $(".arow").removeClass("active");
//       content.slideDown();
//       $(this).addClass("active");
//     }
//   });
// });

$(document).ready(function () {
  $(".frequently-paragraph").hide();
  $(".process-box-title, .arow-second").click(function () {
    var content = $(this).closest(".process-box").find(".frequently-paragraph");
    var arrow = $(this).closest(".process-box").find(".arow-second");
    if (content.is(":visible")) {
      content.slideUp();
      arrow.removeClass("active");
    } else {
      $(".frequently-paragraph").slideUp();
      $(".arow-second").removeClass("active");
      content.slideDown();
      arrow.addClass("active");
    }
  });
});

//  Accrodian
$(".accordian.active-in .accordion-collapse").slideDown();

$(".title-acodian").click(function () {
  if ($(this).parents(".accordian").hasClass("active-in")) {
    $(this).parents(".accordian").removeClass("active-in");
    $(this).parents().children(".accordion-collapse").slideUp();
  } else {
    $(".accordian").removeClass("active-in");
    $(".accordian .accordion-collapse").slideUp();
    $(this).parents(".accordian").addClass("active-in");
    $(this).parents().children(".accordion-collapse").slideDown();
  }
});
// accordion end

// back to top
var $backToTop = $(".top-up-btn");
$backToTop.hide();

$(window).on("scroll", function () {
  if ($(this).scrollTop() > 400) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on("click", function (e) {
  $("html, body").animate({ scrollTop: 0 }, 500);
});
// back to end

$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-change");
    } else {
      $("header").removeClass("header-change");
    }
  });
});

var header = $("header").innerHeight() + "px";
console.log("Header Height : ", header);

$("body").css("--headerHeight", header);
