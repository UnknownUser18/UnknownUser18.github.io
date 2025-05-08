const articles_table = [
  {title: 'Blue Carbon', image: 'blue_carbon_pic.webp'},
  {title: 'Kurouchi', image: 'kurouchi_pic.webp'},
  {title: 'Ryoma Sakamoto', image: 'ryomasakomoto_pic.webp'},
  {title: 'Original', image: 'original_pic.webp'},
  {title: 'Home', image: 'home_pic.webp'},
  {title: 'Yakitori', image: 'yakitori_pic.webp'},
];
document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('section:first-child article');
  articles.forEach(article => {
    const h3 = article.querySelector('h3');
    article.style.backgroundImage = `url(assets/pictures/main-page/${articles_table.find(a => a.title === h3.textContent).image})`;
  });
});
