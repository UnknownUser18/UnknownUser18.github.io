let currentArticleNumber = 1;
const bar = document.querySelector('main > div:last-of-type');
const totalNumbers = 13;
function renderNumbers() {
  bar.innerHTML = '';
  const prevButton = document.createElement('span');
  prevButton.innerText = '←';
  prevButton.addEventListener('click', () => {
    if (currentArticleNumber > 0) {
      currentArticleNumber--;
      renderNumbers();
    }
  });
  bar.appendChild(prevButton);
  for (let i = 0; i < totalNumbers; i++) {
    if (i < 4 || i >= totalNumbers - 4 || (i >= currentArticleNumber - 1 && i <= currentArticleNumber + 1)) {
      let span = document.createElement('span');
      span.innerText = (i + 1).toString().padStart(2, '0');
      if (i === currentArticleNumber) {
        span.classList.add('current');
      }
      span.addEventListener('click', () => {
        if (currentArticleNumber !== i) {
          currentArticleNumber = i;
          renderNumbers();
        }
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
  const nextButton = document.createElement('span');
  nextButton.innerText = '→';
  nextButton.addEventListener('click', () => {
    if (currentArticleNumber < totalNumbers - 1) {
      currentArticleNumber++;
      renderNumbers();
    }
  });
  bar.appendChild(nextButton);
}
renderNumbers();
