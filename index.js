// collect all the buttons in the document  inside an array
var allButtons = document.querySelectorAll("button");

// function that plays the sound of the button pressed
function makeSound(key) {
  switch (key) {
    case "w":
      var audioCrash = new Audio("sounds/crash.mp3");
      audioCrash.play();
      break;
    case "a":
      var audioKick = new Audio("sounds/kick-bass.mp3");
      audioKick.play();
      break;
    case "s":
      var audioSnare = new Audio("sounds/snare.mp3");
      audioSnare.play();
      break;
    case "d":
      var audioTom1 = new Audio("sounds/tom-1.mp3");
      audioTom1.play();
      break;
    case "j":
      var audioTom2 = new Audio("sounds/tom-2.mp3");
      audioTom2.play();
      break;
    case "k":
      var audioTom3 = new Audio("sounds/tom-3.mp3");
      audioTom3.play();
      break;
    case "l":
      var audioTom4 = new Audio("sounds/tom-4.mp3");
      audioTom4.play();
      break;
    default:
      console.log("Invalid");
  }
}

// function that adds the animation to the button pressed
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// adding event listener to all the buttons: buttons will play sound and show animation when clicked
for (var i = 0; i < 7; i++) {
  allButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// adding event listener to the document: buttons will play sound and show animation when the corresponding key is pressed
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// adding event listener to the play button: buttons will play sound and show animation when the play button gets randomly clicked
let x = false ;
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.querySelector(".play").addEventListener("click", async function () {
    x = true ;
    while(x) {
        var n = Math.floor(Math.random() * 7) + 1;
        makeSound(allButtons[n-1].innerHTML);
        buttonAnimation(allButtons[n-1].innerHTML);
        await delay(300);
    }
});

// adding event listener to the stop button: buttons will stop playing sound and showing animation when the stop button is clicked and the page will be reloaded
document.querySelector(".stop").addEventListener("click", function () {
    x = false;
    location.reload();
});





