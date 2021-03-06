var numberOfButtons = document.querySelectorAll(".button").length;
  
for (var j = 0; j < numberOfButtons; j++) {
  
  document.querySelectorAll(".button")[j]
    .addEventListener("click", function() {
      var buttonStyle = this.innerHTML;
      sound(buttonStyle);
      animation(buttonStyle);
  });
}
document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
});
function sound(key) {
    switch (key) {
      case "a":
        var sound1 = new Audio("music/sounds_crash.mp3");
        sound1.play();
        break;
    
      case "b":
        var sound2 = new Audio("music/sounds_snare.mp3");
        sound2.play();
        break;
    
      case "c":
        var sound3 = new Audio('music/sounds_kick-bass.mp3');
        sound3.play();
        break;
    
      case "d":
        var sound4 = new Audio('music/sounds_tom-1.mp3');
        sound4.play();
        break;
    
      case "e":
        var sound5 = new Audio('music/sounds_tom-2.mp3');
        sound5.play();
        break;
    
      case "f":
        var sound6 = new Audio('music/sounds_tom-3.mp3');
        sound6.play();
        break;
    
      case "g":
        var sound7 = new Audio('music/sounds_tom-4.mp3');
        sound7.play();
        break;
    
      default: console.log(key);
    }
}
function animation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 100);
}
