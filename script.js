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
  const character = document.getElementById("character");
  switch (face) {
    case "happy":
      character.innerHTML +=
        '<img src="img/customize/happy.png" alt="happy face overlay" class="overlay-img" />';
      break;
    case "angry":
      character.innerHTML +=
        '<img src="img/customize/angry.png" alt="angry face overlay" class="overlay-img" />';
      break;
    case "sad":
      character.innerHTML +=
        '<img src="img/customize/sad.png" alt="sad face overlay" class="overlay-img" />';
      break;
    default:
      console.error("Invalid face");
  }
}
