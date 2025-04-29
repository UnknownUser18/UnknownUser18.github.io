function isElementVisible(el, margin = 150) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= -margin &&
    rect.left >= -margin &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + margin &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + margin
  );
}
let knifes;
document.addEventListener('DOMContentLoaded', () => {
  function handleKnifes(main) {
    let article;
    if(main) {
      article = document.querySelector('section:last-child article');
    } else {
      article = document.querySelector('article:nth-child(2)');
    }
    const images = article.querySelectorAll('figure img');
    images.forEach(image => {
      image.classList.toggle('done', isElementVisible(article));
    });
  }
  handleKnifes(!window.location.href.includes('historia'));
  document.addEventListener('scroll', () => {
    clearTimeout(knifes);
    knifes = setTimeout(() => {
      handleKnifes(!window.location.href.includes('historia'));
    }, 200);
  })
});
