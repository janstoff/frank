const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");

// Start with a random image
let currentIndex = Math.floor(Math.random() * (images.length - 1));

function nextIndex(index) {
  return (index + 1) % images.length;
}

function showImage(index) {
  images[currentIndex].classList.add("opacity-0");
  images[currentIndex].classList.remove("opacity-100", "z-10");
  images[index].classList.remove("opacity-0");
  images[index].classList.add("opacity-100", "z-10");

  // Remove the intial hidden attributes from the images one in advance
  images[index].removeAttribute("hidden");
  images[nextIndex(index)].removeAttribute("hidden");

  currentIndex = index;
}

function nextImage() {
  showImage(nextIndex(currentIndex));
}

showImage(currentIndex);

setInterval(nextImage, 5000);
