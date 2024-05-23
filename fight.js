let stage = 0;

document.addEventListener("DOMContentLoaded", () => {
  initializeGame();
  window.addEventListener("keydown", handleKeydown);
  document.querySelectorAll(".weapon-button").forEach((button) => {
    button.addEventListener("click", handleWeaponClick);
  });
});

function initializeGame() {
  hideAllElements();
  document.getElementById("firstH1").style.display = "block";
  document.getElementById("description1").style.display = "block";
}

function handleKeydown(event) {
  if (event.key === "Enter" && stage % 2 === 0) {
    advanceStage();
  }
}

function handleWeaponClick() {
  if (stage % 2 === 1) {
    advanceStage();
  }
}

function showWeapons() {
  document
    .querySelectorAll(".description")
    .forEach((desc) => (desc.style.display = "none"));
  document.getElementById("weapons").style.display = "flex";
}

function hideWeapons() {
  document.getElementById("weapons").style.display = "none";
  document
    .querySelectorAll(".description")
    .forEach((desc) => (desc.style.display = "flex"));
}

function advanceStage() {
  hideAllElements();
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

function hideAllElements() {
  document.querySelectorAll("h1").forEach((h1) => (h1.style.display = "none"));
  document
    .querySelectorAll(".description")
    .forEach((desc) => (desc.style.display = "none"));
  document.getElementById("weapons").style.display = "none";
}
