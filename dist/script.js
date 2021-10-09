const items = document.querySelectorAll("img");
const itemCount = items.length;
const nextItem = document.querySelector(".next");
const previousItem = document.querySelector(".previous");
const currImg = document.querySelector(".slider");
const homeCurrImg = document.querySelector(".slider-home");
const imageDescriptions = document.querySelectorAll(".img-text");

//Slider Functionality
let count = 0;

function showNextItem() {
  items[count].classList.remove("active");
  imageDescriptions[count]?.classList.add("hidden");

  if (count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }
  items[count].classList.add("active");
  imageDescriptions[count]?.classList.remove("hidden");
}

function showPreviousItem() {
  items[count].classList.remove("active");
  imageDescriptions[count]?.classList.add("hidden");

  if (count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }
  items[count].classList.add("active");
  imageDescriptions[count]?.classList.remove("hidden");
}

function keyPress(e) {
  e = e || window.event;
  if (e.keyCode == "37") {
    showPreviousItem();
  } else if (e.keyCode == "39") {
    showNextItem();
  }
}

// Show text
function showNextText() {
  imageDescriptions[count].classList.remove("hidden");
}

//Event Handlers
nextItem.addEventListener("click", showNextItem);
previousItem.addEventListener("click", showPreviousItem);
// homeCurrImg.addEventListener("click", showNextItem);
