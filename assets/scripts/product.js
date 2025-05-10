const sources = [
  'masahiro',
  'masahiro2',
  'masahiro3',
  'noz',
  'noz1',
];
let currentIndex = 0;
let leftarrow = document.querySelector('figure span:first-of-type');
let rightarrow = document.querySelector('figure span:last-of-type');
let img = document.querySelector('figure:first-of-type img');
leftarrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sources.length) % sources.length;
  img.classList.add('fade-out');
  img.addEventListener('transitionend', () => {
    img.classList.remove('fade-out');
    img.src = `/assets/pictures/${sources[currentIndex]}.webp`;
  });
});
rightarrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sources.length;
  img.classList.add('fade-out');
  img.addEventListener('transitionend', () => {
    img.classList.remove('fade-out');
    img.src = `/assets/pictures/${sources[currentIndex]}.webp`;
  });
});
const articles = document.querySelectorAll('section:first-of-type article');
articles.forEach(article => {
  let span = article.querySelector('span');
  span.addEventListener('click', () => {
    article.classList.toggle('collapsed');
  })
});
let lastspan = document.querySelector('section:last-of-type > span:last-of-type');
let firstspan = document.querySelector('section:last-of-type > span:first-of-type');
firstspan.addEventListener('click', () => {
  let products = document.querySelector('section:last-of-type > div');
  let lastProduct = products.children[products.children.length - 1];

  lastProduct.classList.add('slide-in');
  lastProduct.addEventListener('transitionend', () => {
    lastProduct.remove();
    createProduct(products, true);
  });
});
lastspan.addEventListener('click', () => {
  let products = document.querySelector('section:last-of-type > div');
  let firstProduct = products.children[0];
  firstProduct.classList.add('slide-out');

  firstProduct.addEventListener('transitionend', () => {
    firstProduct.remove();
    createProduct(products);
  });
});
function createProduct(container, start = false) {
  let newArticle = document.createElement('article');
  newArticle.innerHTML =
    `<h3>Przykładowa nazwa noża 165 mm (10501)</h3>
     <img src="/assets/pictures/singlenoz.webp" alt="Nowy produkt">
     <span><s>1049,00 zł</s><img src="/assets/svgs/info.svg" alt="Info"></span>
     <p>949,00 zł</p>
     <a href="/produkt/" title="Zobacz więcej">Zobacz więcej</a>`;
  if(start) {
    container.insertBefore(newArticle, container.firstChild);
    newArticle.classList.add('slide-out');
    setTimeout(() => { newArticle.classList.remove('slide-out'); }, 10);
  } else {
    container.appendChild(newArticle);
    newArticle.classList.add('slide-in');
    setTimeout(() => { newArticle.classList.remove('slide-in'); }, 10);
  }
}
