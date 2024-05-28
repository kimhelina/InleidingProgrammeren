// Change character color
function changeEllipseColor(color) {
  const ellipse = document.getElementById("ellipse");
  const greenColor = "#7FB275";
  const yellowColor = "#FDD179";
  const blueColor = "#8CABD7";
  switch (color) {
    case "green":
      ellipse.style.backgroundColor = greenColor;
      break;
    case "yellow":
      ellipse.style.backgroundColor = yellowColor;
      break;
    case "blue":
      ellipse.style.backgroundColor = blueColor;
      break;
    default:
      console.error("Invalid color");
  }
}

// Add event listeners for color buttons
document.getElementById("green-ellipse").addEventListener("click", function () {
  changeEllipseColor("green");
});
document
  .getElementById("yellow-ellipse")
  .addEventListener("click", function () {
    changeEllipseColor("yellow");
  });
document.getElementById("blue-ellipse").addEventListener("click", function () {
  changeEllipseColor("blue");
});

// Function to change face image src
function changeFaceImage(event) {
  const faceOverlay = document.getElementById("face-overlay");
  faceOverlay.src = event.target.src;
}

// Add event listeners for face buttons
document
  .getElementById("happy-face")
  .addEventListener("click", changeFaceImage);
document
  .getElementById("angry-face")
  .addEventListener("click", changeFaceImage);
document.getElementById("sad-face").addEventListener("click", changeFaceImage);

//for name button
function promptName() {
  let heroName = prompt("What is the name of the hero?");
  let heroInput = document.getElementById("hero-input");
  if (heroName !== null && heroName !== "") {
    heroInput.value = heroName;
  }
}

// Add event listener for the hero name button
document
  .getElementById("hero-name-button")
  .addEventListener("click", promptName);
