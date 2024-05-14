localStorage.setItem("naam", "helina");
console.log(localStorage.getItem("naam"));

const greenColor = "#7FB275";
const yellowColor = "#FDD179";
const blueColor = "#8CABD7";

//for name button
function promptName() {
  var heroName = prompt("What is the name of the hero?");
  var heroInput = document.getElementById("hero-input");
  if (heroName !== null && heroName !== "") {
    heroInput.value = heroName;
  }
}

// Change character color
function changeEllipseColor(color) {
  const ellipse = document.getElementById("ellipse");
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

// Overlay character face
function overlayFace(face) {
  const happyFace = document.getElementById("happy");
  const angryFace = document.getElementById("angry");
  const sadFace = document.getElementById("sad");

  switch (face) {
    case "happy":
      happyFace.style.display = "inline";
      angryFace.style.display = "none";
      sadFace.style.display = "none";
      break;
    case "angry":
      happyFace.style.display = "none";
      angryFace.style.display = "inline";
      sadFace.style.display = "none";
      break;
    case "sad":
      happyFace.style.display = "none";
      angryFace.style.display = "none";
      sadFace.style.display = "inline";
      break;
    default:
      console.error("Invalid face");
  }
}
