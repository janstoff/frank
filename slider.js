const slider = document.querySelector(".slider");
const images = slider.querySelectorAll("img");

// Start with a random image
let currentImage = Math.floor(Math.random() * (images.length - 1));

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

showImage(currentImage);

setInterval(nextImage, 5000);
