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
  if (event.key === "Enter") {
    if (stage % 2 === 0) {
      showWeapons();
    } else {
      hideWeapons();
      advanceStage();
    }
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
  stage++;
}

function hideWeapons() {
  document.getElementById("weapons").style.display = "none";
  document
    .querySelectorAll(".description")
    .forEach((desc) => (desc.style.display = "flex"));
  stage++;
}

function advanceStage() {
  hideAllElements();
  switch (stage) {
    case 2:
      document.getElementById("secondH1").style.display = "block";
      document.getElementById("description2").style.display = "block";
      break;
    case 4:
      document.getElementById("thirdH1").style.display = "block";
      document.getElementById("description3").style.display = "block";
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
