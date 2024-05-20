localStorage.setItem("naam", "helina");
console.log(localStorage.getItem("naam"));

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

// Add event listeners for face buttons
document.getElementById("face-happy").addEventListener("click", function () {
  overlayFace("happy");
});
document.getElementById("face-angry").addEventListener("click", function () {
  overlayFace("angry");
});
document.getElementById("face-sad").addEventListener("click", function () {
  overlayFace("sad");
});
// addEventListener toevoegen van face + 클릭했을 때 src 만 바뀌도록
// function changeFace(event) {
//   const happyFace = document
//     .getElementById("happy")
//     .addEventListener("click", event.target.src);
//   const angryFace = document.getElementById("angry");
//   const sadFace = document.getElementById("sad");

//   happyFace;
// }

const faceOverlay = document.getElementById("face-overlay");

function aCallBack(e) {
  console.log(faceOverlay.src);
  //   faceOverlay.src = e.target.src;
}

const sadFace = document.getElementById("sad-face");
sadFace.addEventListener("click", aCallBack);

// Overlay character face
// function overlayFace(face) {
//   const happyFace = document.getElementById("happy");
//   const angryFace = document.getElementById("angry");
//   const sadFace = document.getElementById("sad");

//   switch (face) {
//     case "happy":
//       happyFace.style.display = "inline";
//       angryFace.style.display = "none";
//       sadFace.style.display = "none";
//       break;
//     case "angry":
//       happyFace.style.display = "none";
//       angryFace.style.display = "inline";
//       sadFace.style.display = "none";
//       break;
//     case "sad":
//       happyFace.style.display = "none";
//       angryFace.style.display = "none";
//       sadFace.style.display = "inline";
//       break;
//     default:
//       console.error("Invalid face");
//   }
// }

//for name button
function promptName() {
  var heroName = prompt("What is the name of the hero?");
  var heroInput = document.getElementById("hero-input");
  if (heroName !== null && heroName !== "") {
    heroInput.value = heroName;
  }
}
