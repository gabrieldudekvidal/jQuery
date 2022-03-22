$("h1").addClass("big-title maring-50");

$("h1").text("Bye");

$("button").html("<em>Click baby</em>");

$("a").attr("href", "https://www.yahoo.com");

//Event Listeners

$("h1").click(function() {
   $("h1").css("color" , "purple");
});

$("button").click(function() {
  $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
  console.log(event.key);
});

$(document).keypress(function(event) {
  $("h1").text(event.key);
})

$("h1").on("mouseover" , function() {
  $("h1").css("color", "purple");
});

//Add and remove elements

$("h1").before("<button>New Before</button>");

$("h1").after("<button>New After</button>");

$("h1").prepend("<button>New Prepend</button>");

$("h1").append("<button>New Append</button>");

// Animation

//To hide an element use .hide()
$("h1").show();

//Hide and show

$("button").on("click", function() {
  $("h1").toggle();
});

//To show use .fadeIn()
$("button").on("click", function() {
  $("h1").fadeOut();
});

//To show use .fadeIn()
$("button").on("click", function() {
  $("h1").fadeToggle();
});

//slideUp and slideDown
$("button").on("click", function() {
  $("h1").slideToggle();
});

//Animation with CSS

//It only applies to things with numeric values
$("button").on("click", function() {
  $("h1").animate({opacity: 0.5});
});

//Combining animations

$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
