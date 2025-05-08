const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const data = {
  'Strona Główna': '/',
  'Produkty': '/produkty/',
  'Aktualności': '/aktualnosci/',
  'Kontakt': '/contact/',
  'Historia': '/historia/'
};
hamburger.addEventListener('click', () => {
  document.body.classList.toggle('no-scroll');
  if(window.scrollY === 0)
    nav.classList.toggle('black');
  hamburger.classList.toggle('active');
  if(hamburger.classList.contains('active')) {
    let menu = document.createElement('ul');
    for (let name of Object.keys(data)) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      console.log(window.location.pathname)
      if ((data[name] && window.location.pathname === `/${data[name]}`) || (!data[name] && window.location.pathname === '/'))
        li.classList.add('active');
      a.href = data[name];
      a.title = Object.keys(data).find(key => data[key] === data[name]);
      a.innerText = name;
      li.appendChild(a);
      menu.appendChild(li);
    }
    document.body.insertBefore(menu, document.querySelector('main'));
    setTimeout(() => {
     menu.classList.add('done');
    }, 200);
  } else {
    let menu = document.querySelector('body > ul');
    menu.classList.remove('done');
    setTimeout(() => {
      menu.remove();
    }, 200);
  }
});
