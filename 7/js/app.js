const carousel = document.querySelector("#carousel");
const pre = document.querySelector("#pre");
const next = document.querySelector("#next");

const images = ["./images/swann.JPG", "./images/swan.JPG"];

let index = 0;
carousel.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
  if (index == images.length - 1) {
    index = 0;
  } else {
    index++;
  }

  carousel.style.backgroundImage = `url(${images[index]})`;
}, 1000);

pre.addEventListener("click", (e) => {
  if (index === 0) {
    index = images.length - 1;
  } else {
    index--;
  }
  carousel.style.backgroundImage = `url(${images[index]})`;
});

next.addEventListener("click", (e) => {
  if (index == images.length - 1) {
    index = 0;
  } else {
    index++;
  }
  carousel.style.backgroundImage = `url(${images[index]})`;
});
