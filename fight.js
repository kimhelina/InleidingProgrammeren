let stage = 0;

function handleClick(event) {
  //   if (event.keycode) {
  nextStage();
  console.log("test");
  //   }
}
window.addEventListener("click", handleClick);

function nextStage() {
  stage++;
  if (stage % 2 === 0) {
    let descriptions = document.querySelectorAll(".description");
    descriptions.forEach((desc) => {
      desc.style.display = "none";
    });
    let weapon = document.querySelector("#weapons");
    weapon.style.display = "flex";
  }
  if (stage % 2 === 1) {
    let descriptions = document.querySelectorAll(".description");
    descriptions.forEach((desc) => {
      desc.style.display = "flex";
    });
    let weapon = document.querySelector("#weapons");
    weapon.style.display = "none";
  }
}
