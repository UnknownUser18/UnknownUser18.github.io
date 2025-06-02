const scrollable = document.querySelector('.scrollable');
const thumb = document.querySelector('.scroller-thumb');

function updateThumb() {
  const visible = scrollable.clientHeight;
  const total = scrollable.scrollHeight;
  const scrollTop = scrollable.scrollTop;
  const thumbHeight = Math.max((visible / total) * 50, 10); // min 10%
  const thumbTop = (scrollTop / (total - visible)) * (100 - thumbHeight);

  thumb.style.height = `${thumbHeight}%`;
  thumb.style.top = `${thumbTop}%`;
}

scrollable.addEventListener('scroll', updateThumb);
window.addEventListener('resize', updateThumb);
updateThumb();
const figures = document.querySelectorAll('#dla-programistow article > figure');
document.addEventListener('scroll', () => {
  figures.forEach(figure => {
    const rect = figure.getBoundingClientRect();
    const isShown = rect.top + rect.height / 5 < window.innerHeight && rect.bottom - rect.height / 5 > 0;
    setTimeout(() => {
      figure.classList.toggle('shown', isShown);
    }, 500)
  })
});

