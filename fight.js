let stage = 0;

// Event listener for when the DOM content is fully loaded
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
document.addEventListener("DOMContentLoaded", () => {
  initializeGame();

  // Add an event listener for keydown events on the window
  window.addEventListener("keydown", handleKeydown);

  // Add click event listeners to all elements with the class "weapon-button"
  document.querySelectorAll(".weapon-button").forEach((button) => {
    button.addEventListener("click", handleWeaponClick);
  });
});

function initializeGame() {
  hideAllElements();
  document.getElementById("firstH1").classList.remove("hidden");
  document.getElementById("description1").classList.remove("hidden");
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
    return;
  }
  const rightOrder = [2, 3, 1];

  // stage van nu delen door 2 en afgerond van 0, 1, 2, 3, 4, 5 tot 0, 1, 2
  const stageNumber = Math.floor(stage / 2);

  //rightWeapon 을 rightOrder 을 현재 스테이지 기준으로 뽑아옴
  const rightWeapon = rightOrder[stageNumber];

  if (rightWeapon !== Number(event.target.value)) {
    window.location.href = "bad-ending.html";
    return;
  }
  advanceStage();
}

// Shows the weapons selection and hides all descriptions
function showWeapons() {
  document.querySelectorAll(".description").forEach((desc) => {
    desc.classList.add("hidden");
  });
  // document.getElementById("weapons").classList.remove("hidden");
  document.querySelectorAll(".weapon-button").forEach((desc) => {
    desc.classList.remove("hidden");
  });
}

// Hides the weapons selection and shows all descriptions
function hideWeapons() {
  // document.getElementById("weapons").classList.add("hidden");
  document.querySelectorAll(".weapon-button").forEach((desc) => {
    desc.classList.add("hidden");
  });
  document.querySelectorAll(".description").forEach((desc) => {
    desc.classList.remove("hidden");
  });
}

// Advances the stage and updates the display based on the current stage
function advanceStage() {
  hideAllElements();
  // Increment the stage
  switch (++stage) {
    case 1:
      showWeapons();
      document.getElementById("firstH1").classList.remove("hidden");
      break;
    case 2:
      hideAllElements();
      document.getElementById("secondH1").classList.remove("hidden");
      document.getElementById("description2").classList.remove("hidden");
      break;
    case 3:
      showWeapons();
      document.getElementById("secondH1").classList.remove("hidden");
      break;
    case 4:
      hideAllElements();
      document.getElementById("thirdH1").classList.remove("hidden");
      document.getElementById("description3").classList.remove("hidden");
      break;
    case 5:
      showWeapons();
      document.getElementById("thirdH1").classList.remove("hidden");
      break;
    case 6:
      window.location.href = "ending.html";
      break;
  }
}

// Hides all H1 elements, all descriptions, and the weapons section
function hideAllElements() {
  document.querySelectorAll("h1").forEach((h1) => h1.classList.add("hidden"));
  document.querySelectorAll(".description").forEach((desc) => {
    desc.classList.add("hidden");
  });
  document.querySelectorAll(".weapon-button").forEach((desc) => {
    desc.classList.add("hidden");
  });
}
