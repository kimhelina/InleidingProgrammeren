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
      ellipse.style.backgroundColor = "#7FB275";
      break;
    case "yellow":
      ellipse.style.backgroundColor = "#FDD179";
      break;
    case "blue":
      ellipse.style.backgroundColor = "#8CABD7";
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
