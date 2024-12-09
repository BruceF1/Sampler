var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


document.addEventListener("keypress", function(event) {

  playSample(event.key);

  buttonAnimation(event.key);

});

function playSample(key) {

  const button = document.querySelector(`button[data-key="${key}"]`);
  if (button) {
    // Add the "active" class
    button.classList.add("active");

    // Remove the "active" class after 200ms (simulate key release)
    setTimeout(() => {
      button.classList.remove("active");
    }, 200);
  }

  switch (key) {
    case "w":
      var wKey = new Audio("sounds/dubstep-kick.wav");
      wKey.play();
      break;

    case "q":
      var qKey = new Audio("sounds/dubstep-snare.wav");
      qKey.play();
      break;

    case "e":
      var eKey = new Audio("sounds/dubstep-short-hi-hat.wav");
      eKey.play();
      break;
  }
}
