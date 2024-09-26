var images = ["Media/game bg 1.jpg", "Media/game bg 2.png", "Media/game bg 3.jpg", "Media/game bg 4.jpg", "Media/game bg 5.jpg"];
// slideshow
let slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex == 5) {
    slideIndex = 0;
  } else if (slideIndex == -1) {
    slideIndex = 4;
  }
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  console.log(images[n]);
  document.getElementById("game-bg").src = images[n];
  document.body.style.backgroundImage = "url(" + images[n] + ")";
}
