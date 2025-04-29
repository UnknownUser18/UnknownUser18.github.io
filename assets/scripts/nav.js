let timeout;
let firstScroll = true;
function navClass() {
  const scrollTop = (document.documentElement.scrollTop || window.scrollY) === 0;
  const nav = document.querySelector('nav');
  nav.classList.toggle('black', !scrollTop);
}
document.addEventListener('DOMContentLoaded', () => {
  navClass();
})
window.addEventListener('scroll', () => {
  if (firstScroll) {
    navClass();
    firstScroll = false;
  }
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    navClass();
  }, 200);
});
