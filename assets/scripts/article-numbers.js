let currentArticleNumber = 1;
const bar = document.querySelector('main > div:last-of-type');
const totalNumbers = 13;
function renderNumbers() {
  bar.innerHTML = '<span>←</span>';
  for (let i = 0; i < totalNumbers; i++) {
    if (i < 4 || i >= totalNumbers - 4 || (i >= currentArticleNumber - 1 && i <= currentArticleNumber + 1)) {
      let span = document.createElement('span');
      span.innerText = (i + 1).toString().padStart(2, '0');
      if (i === currentArticleNumber) {
        span.classList.add('current');
      }
      span.addEventListener('click', () => {
        currentArticleNumber = i;
        renderNumbers();
      });
      bar.appendChild(span);
    } else if (
      (i === 4 && currentArticleNumber > 5) ||
      (i === totalNumbers - 5 && currentArticleNumber < totalNumbers - 6)
    ) {
      let dots = document.createElement('span');
      dots.innerText = '...';
      dots.classList.add('dot');
      bar.appendChild(dots);
    }
  }
  bar.innerHTML += '<span>→</span>';
  let firstspan = bar.querySelector('span:first-child');
  let lastspan = bar.querySelector('span:last-child');
  firstspan.addEventListener('click', () => {
    if (currentArticleNumber < 1) return;
    currentArticleNumber--;
    renderNumbers();
  });
  lastspan.addEventListener('click', () => {
    if (currentArticleNumber >= totalNumbers-1) return;
    currentArticleNumber++;
    renderNumbers();
  });
}
renderNumbers();
