
// getting the number of buttons with the class name drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  // getting html buttons to get identify button clicks using event listner
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // getting the html value of the button pressed
    var buttonInnerHTML = this.innerHTML;
    // calling the function to make sounds by pass the HTML values
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML); //passing same values to do animation
  });
}

// getting keyboard input using 'keydown' event listner
document.addEventListener("keydown", function(event) {
  // calling the function to make sounds by pass the keyboard key (a, s, d....)
  makeSound(event.key);
  buttonAnimation(event.key);   //passing same values to do animation
});

// function that take the key value of html/keyboard and
// play sounds based on the value of parameter passing to the function
function makeSound (key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);
  }
}

function buttonAnimation(key) {
  // getting the class of the button that pressed (.w, .a, .l...etc)
  var activeButton = document.querySelector("." + Key);
  //adding css class named 'pressed' for animation
  activeButton.classList.add("pressed");

  // setting a timer to removed previously added class so
  // that it can animate mor ethan once.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
