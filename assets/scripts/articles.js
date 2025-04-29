const articles_table = [
  {title: 'Blue Carbon', image: 'assets/pictures/blue_carbon_pic.webp'},
  {title: 'Kurouchi', image: 'assets/pictures/kurouchi_pic.webp'},
  {title: 'Ryoma Sakamoto', image: 'assets/pictures/ryomasakomoto_pic.webp'},
  {title: 'Original', image: 'assets/pictures/original_pic.webp'},
  {title: 'Home', image: 'assets/pictures/home_pic.webp'},
  {title: 'Yakitori', image: 'assets/pictures/yakitori_pic.webp'},
];
document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('section:first-child article');
  articles.forEach(article => {
    const h3 = article.querySelector('h3');
    article.style.backgroundImage = `url(${articles_table.find(a => a.title === h3.textContent).image})`;
  });
});
