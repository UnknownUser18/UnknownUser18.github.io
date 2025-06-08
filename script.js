const scrollable = document.querySelector('.scrollable');
const thumb = document.querySelector('.scroller-thumb');
const figures = document.querySelectorAll('#debugging article > figure');
const articles = document.querySelectorAll('.scrollable article');

const h1 = document.querySelector('h1');
const caret = document.createElement('span');
caret.className = 'caret';

h1.childNodes.forEach(node => {
  if (node.nodeType === Node.TEXT_NODE) h1.removeChild(node);
});
h1.appendChild(caret);

const text = 'Kaczuszki';
let index = 0;
let typing = true;

function typeText() {
  if (typing && index < text.length) {
    h1.insertBefore(document.createTextNode(text[index++]), caret);
    setTimeout(typeText, 250);
  } else if (typing) {
    typing = false;
    setTimeout(typeText, 1000);
  } else if (!typing && index > 0) {
    if (h1.childNodes.length > 1) h1.removeChild(h1.childNodes[h1.childNodes.length - 2]);
    index--;
    setTimeout(typeText, 100);
  } else {
    typing = true;
    setTimeout(typeText, 500);
  }
}

typeText();

function updateThumb() {
  const visible = scrollable.clientHeight;
  const total = scrollable.scrollHeight;
  const scrollTop = scrollable.scrollTop;
  const thumbHeight = Math.max((visible / total) * 50, 10);
  const thumbTop = (scrollTop / (total - visible)) * (100 - thumbHeight);

  thumb.style.height = `${ thumbHeight }%`;
  thumb.style.top = `${ thumbTop }%`;
}

function updateFiguresVisibility() {
  const scrollableRect = scrollable.getBoundingClientRect();
  figures.forEach(figure => {
    const rect = figure.getBoundingClientRect();
    const isShown = rect.top + rect.height / 15 < scrollableRect.bottom && rect.bottom - rect.height / 15 > scrollableRect.top;
    setTimeout(() => {
      figure.classList.toggle('shown', isShown);
    }, 500);
  });
}

function updateArticlesVisibility() {
  const scrollableRect = scrollable.getBoundingClientRect();
  articles.forEach(article => {
    const rect = article.getBoundingClientRect();
    const visibleHeight = Math.max(0, Math.min(rect.bottom, scrollableRect.bottom) - Math.max(rect.top, scrollableRect.top));
    const percentVisible = Math.min(1, visibleHeight * 2 / rect.height);

    article.style.opacity = percentVisible.toString();
    article.style.transform = `translateY(${ 60 * (1 - percentVisible) }px)`;
    article.style.filter = `blur(${ (1 - percentVisible) * 1.5 }px)`;
    article.classList.toggle('visible', percentVisible > 0.75);

    if (article.classList.contains('with-chart') && percentVisible > 0.5 && !article.classList.contains('chart-created')) {
      createChart();
      article.classList.add('chart-created');
    }
  });
}

let span = document.querySelector('nav li:first-child');
const sections = document.querySelectorAll('section');

function updateAll() {
  updateThumb();
  updateFiguresVisibility();
  updateArticlesVisibility();
  checkNavSpan();
}

scrollable.addEventListener('scroll', updateAll);
window.addEventListener('resize', updateAll);
window.addEventListener('scroll', checkNavSpan);
updateAll();

function createChart() {
  const ctx = document.getElementById('wykres').getContext('2d');
  const chart = new Chart(ctx, {
    type : 'line',
    data : {
      labels : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ],
      datasets : [ {
        label : 'Grupa kontrolna',
        data : [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 20 ],
        borderColor : '#babbf1',
        fill : false,
        tension : 0.1
      }, {
        label : 'Rubber Duck Debugging',
        data : [ 10, 12, 14, 16, 18, 20, 22, 25, 28, 30 ],
        borderColor : '#e5c890',
        fill : false,
        tension : 0.1
      } ]
    },
    options : {
      animation : {
        duration : 1500,
        easing : 'easeInOutQuad'
      },
      plugins : {
        legend : {
          labels : {
            color : '#babbf1'
          }
        }
      },
      scales : {
        x : {
          title : {
            display : true,
            text : 'Dzień ',
            color : '#babbf1'
          },
          ticks : {
            color : '#babbf1'
          }
        },
        y : {
          title : {
            display : true,
            text : 'Liczba błędów',
            color : '#babbf1'
          },
          ticks : {
            color : '#babbf1'
          }
        }
      }
    }
  });
}

function checkNavSpan() {
  sections.forEach((section, index) => {
    if (isElementVisible(section) && (index === 0 || !isElementVisible(sections[index - 1]))) {
      const navElement = document.querySelector(`nav li:nth-child(${ index + 1 })`);
      let left = parseInt(getComputedStyle(navElement).width);
      if (index === 1) left += 10;
      else if (index > 1) left += 20 * (index - 1);
      else left = 0;
      span.style.left = `${ left }px`;
      let color;
      switch (index) {
        case 0:
          color = 'var(--lavender)';
          break;
        case 1:
          color = 'var(--green)';
          break;
      }
      span.style.outlineColor = color;
    }
  });
}


function isElementVisible(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < window.innerHeight / 2 &&
    rect.bottom > window.innerHeight / 2
  );
}
