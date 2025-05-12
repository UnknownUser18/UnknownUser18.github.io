const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const data = {
  'Strona Główna': '/',
  'Produkty': '/produkty/',
  'Aktualności': '/aktualnosci/',
  'Kontakt': '/kontakt/',
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
      if (window.location.pathname.replace(/\/$/, '') === data[name].replace(/\/$/, ''))
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

let timeoutNav;

function loginMenu() {
  document.body.classList.toggle('no-scroll');
  if(document.body.classList.contains('no-scroll')) {
    let loginMenu = document.createElement('form');
    loginMenu.action = '#';
    loginMenu.method = 'post';
    loginMenu.classList.add('login');
    if(window.innerWidth > 720) {
      loginMenu.addEventListener('mouseover', () => clearTimeout(timeoutNav));
      loginMenu.addEventListener('mouseout', () => {
        timeoutNav = setTimeout(() => {
          loginMenu.remove();
          document.body.classList.remove('no-scroll');
        }, 500);
      });
    }
    const labels = [
      {header: 'Adres e-mail', name : 'email', type: 'email', placeholder: 'E-mail'},
      {header: 'Hasło', name : 'password', type: 'password', placeholder: 'Hasło'},
    ];
    let h2 = document.createElement('h2');
    h2.innerText = 'Logowanie';
    loginMenu.appendChild(h2);
    for (let item of labels) {
      let label = document.createElement('label');
      let b = document.createElement('b');
      b.innerText = item.header;
      let star = document.createElement('span');
      star.innerText = '*';
      b.appendChild(star);
      let input = document.createElement('input');
      input.name = item.name;
      input.type = item.type;
      input.placeholder = item.placeholder;
      input.required = true;
      label.appendChild(b);
      label.appendChild(input);
      loginMenu.appendChild(label);
    }
    let p = document.createElement('p');
    p.innerText = 'Nie pamiętasz hasła?';
    let a = document.createElement('a');
    a.href = '#';
    a.innerText = 'Zresetuj.';
    p.appendChild(a);
    loginMenu.appendChild(p);
    const buttons = [
      {name : 'Zaloguj się', type: 'submit'},
      {name : 'Utwórz konto', type: 'button'},
    ];
    for (let item of buttons) {
      let button = document.createElement('button');
      button.type = item.type;
      button.innerText = item.name;
      loginMenu.appendChild(button);
    }
    document.body.appendChild(loginMenu);
    if(window.innerWidth > 720) {
      timeoutNav = setTimeout(() => {
        loginMenu.remove();
        document.body.classList.remove('no-scroll');
      }, 2000);
    }
  } else {
    let loginMenu = document.querySelector('body > form.login');
    loginMenu.remove();
  }
}
let login = document.querySelector('nav ul li:last-of-type');
login.addEventListener('click', loginMenu);
if(window.innerWidth > 720)  {
  login.addEventListener('mouseenter', loginMenu);
}
let search = document.querySelector('nav ul li:first-of-type');
search.addEventListener('click', () => {
  if(window.innerWidth > 720) return;
  document.body.classList.toggle('no-scroll');
  if(document.body.classList.contains('no-scroll')) {
    let searchMenu = document.createElement('form');
    searchMenu.action = '#';
    searchMenu.method = 'get';
    searchMenu.classList.add('search');
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Szukaj...';
    input.name = 'search';
    input.required = true;
    searchMenu.appendChild(input);
    let button = document.createElement('button');
    button.type = 'submit';
    let svg = document.createElement('svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 19 19');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    svg.innerHTML = `<path d="M17.4272 18.4705L13.3824 14.4247L13.1734 14.5871C11.5699 15.8322 9.5523 16.4193 7.5313 16.2288C5.5103 16.0384 3.63781 15.0847 2.29504 13.5619C0.952268 12.0391 0.240166 10.0617 0.30372 8.03215C0.367274 6.00264 1.20171 4.07366 2.63712 2.6379C4.07254 1.20214 6.00102 0.367533 8.02998 0.303965C10.0589 0.240398 12.0359 0.952647 13.5583 2.29573C15.0807 3.63882 16.0342 5.51179 16.2246 7.53334C16.415 9.55489 15.8281 11.573 14.5832 13.1769L14.421 13.3859L18.4581 17.4242L18.4658 17.4314C18.5381 17.4987 18.596 17.5799 18.6362 17.6701C18.6763 17.7603 18.698 17.8577 18.6997 17.9564C18.7014 18.0551 18.6833 18.1532 18.6463 18.2448C18.6093 18.3363 18.5543 18.4195 18.4845 18.4893C18.4147 18.5591 18.3316 18.6142 18.2401 18.6511C18.1485 18.6881 18.0505 18.7063 17.9518 18.7045C17.8532 18.7028 17.7558 18.6812 17.6657 18.641C17.5755 18.6008 17.4945 18.5427 17.4272 18.4705ZM14.2935 10.773C14.6206 9.98304 14.789 9.13632 14.789 8.28123C14.789 6.55429 14.1031 4.89808 12.8823 3.67693C11.6614 2.45578 10.0056 1.76973 8.27899 1.76973C6.55241 1.76973 4.89655 2.45578 3.6757 3.67693C2.45484 4.89808 1.76899 6.55429 1.76899 8.28123C1.76899 9.13632 1.93737 9.98304 2.26452 10.773C2.59168 11.563 3.07119 12.2809 3.6757 12.8855C4.2802 13.4902 4.99786 13.9698 5.7877 14.2971C6.57753 14.6243 7.42407 14.7927 8.27899 14.7927C9.1339 14.7927 9.98045 14.6243 10.7703 14.2971C11.5601 13.9698 12.2778 13.4902 12.8823 12.8855C13.4868 12.2809 13.9663 11.563 14.2935 10.773Z" fill="currentColor"/>`;
    button.appendChild(svg);
    searchMenu.appendChild(button);

    document.body.appendChild(searchMenu);
  } else {
    let searchMenu = document.querySelector('body > form.search');
    searchMenu.remove();
  }
});
