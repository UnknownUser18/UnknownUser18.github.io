let button = document.querySelector('main > button')
button.addEventListener('click', () => {
  document.querySelector('main').classList.toggle('sidebar-open');
});
