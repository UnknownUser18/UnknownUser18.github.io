const images = [
  'assets/pictures/header.webp',
  'assets/pictures/noze.webp',
  'assets/pictures/noze2.webp',
]
const header = document.getElementsByTagName('header')[0];
const left_arrow = header.getElementsByTagName('span')[0];
const right_arrow = header.getElementsByTagName('span')[1];
let currentIndex = 0;
document.addEventListener('DOMContentLoaded', () => {
  updateBackgroundImage(0);
});
left_arrow.addEventListener('click', () => {
  updateBackgroundImage((currentIndex - 1 + images.length) % images.length);
});
right_arrow.addEventListener('click', () => {
  updateBackgroundImage((currentIndex + 1) % images.length);
});
function updateBackgroundImage(index) {
  header.classList.add('fade-out');
  currentIndex = index;
  setTimeout(() => {
    header.style.backgroundImage = `url("${images[currentIndex]}")`;
    header.classList.remove('fade-out');
  }, 500);
}

setInterval(() => {
  updateBackgroundImage((currentIndex + 1) % images.length);
}, 10000);
