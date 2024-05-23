let stage = 0;

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeGame();
  window.addEventListener("keydown", handleKeydown);
  document.querySelectorAll(".weapon-button").forEach((button) => {
    button.addEventListener("click", handleWeaponClick);
  });
});

// Initializes the game by hiding all elements and showing the first H1 and description
function initializeGame() {
  hideAllElements();
  document.getElementById("firstH1").style.display = "block";
  document.getElementById("description1").style.display = "block";
}

// Handles the 'keydown' event, advancing the stage if the Enter key is pressed and stage is even
function handleKeydown(event) {
  if (event.key === "Enter" && stage % 2 === 0) {
    advanceStage();
  }
}

// Handles the 'click' event on weapon buttons, checking the selected weapon against the correct order
function handleWeaponClick(event) {
  if (stage % 2 !== 1) {
    console.log("왜 안 된?");

    return;
  }

  // The correct order of weapons
  const rightOrder = [2, 3, 1];
  // stage van nu delen door 2 en afgerond van 0, 1, 2, 3, 4, 5 tot 0, 1, 2
  const stageNumber = Math.floor(stage / 2);
  //rightWeapon 을 rigjtOrder 을 현재 스테이지 기준으로 뽑아옴
  const rightWeapon = rightOrder[stageNumber];

  // If the selected weapon is incorrect, redirect to the bad ending
  if (rightWeapon !== Number(event.target.value)) {
    window.location.href = "bad-ending.html";
    return;
  }
  // Advance to the next stage if the weapon is correct
  advanceStage();
}

// Shows the weapons selection and hides all descriptions
function showWeapons() {
  document
    .querySelectorAll(".description")
    .forEach((desc) => (desc.style.display = "none"));
  document.getElementById("weapons").style.display = "flex";
}

// Hides the weapons selection and shows all descriptions
function hideWeapons() {
  document.getElementById("weapons").style.display = "none";
  document
    .querySelectorAll(".description")
    .forEach((desc) => (desc.style.display = "flex"));
}

// Advances the stage and updates the display based on the current stage
function advanceStage() {
  hideAllElements();
  // Increment the stage
  switch (++stage) {
    case 1:
      showWeapons();
      break;
    case 2:
      document.getElementById("secondH1").style.display = "block";
      document.getElementById("description2").style.display = "block";
      break;
    case 3:
      showWeapons();
      break;
    case 4:
      document.getElementById("thirdH1").style.display = "block";
      document.getElementById("description3").style.display = "block";
      break;
    case 5:
      showWeapons();
      break;
    case 6:
      window.location.href = "ending.html";
      break;
  }
}

// Hides all H1 elements, all descriptions, and the weapons section
function hideAllElements() {
  document.querySelectorAll("h1").forEach((h1) => (h1.style.display = "none"));
  document
    .querySelectorAll(".description")
    .forEach((desc) => (desc.style.display = "none"));
  document.getElementById("weapons").style.display = "none";
}
