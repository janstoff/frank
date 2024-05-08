const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");
let currentImage = 0;

function showImage(index) {
  images[currentImage].classList.add("opacity-0");
  images[currentImage].classList.remove("opacity-100", "z-10");
  images[index].classList.remove("opacity-0");
  images[index].classList.add("opacity-100", "z-10");
  currentImage = index;
}

function nextImage() {
  let nextIndex = (currentImage + 1) % images.length;
  showImage(nextIndex);
}

// Show the first image initially
showImage(0);

setInterval(nextImage, 5000);
