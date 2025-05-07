const gallery = document.querySelector('main > div:last-of-type');
for (let image of gallery.children) {
  image.addEventListener('click', () => {
    document.body.classList.add('no-scroll');
    const img = image.querySelector('img');
    const showImage = document.createElement('div');
    const innerDiv = document.createElement('div');
    const newImg = document.createElement('img');
    const text = document.createElement('p');
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    showImage.classList.add('show-image');
    newImg.src = `/assets/pictures/gallery/uncompressed/${img.src.split('/').pop().split('.').slice(0, -1).join('.')}.png`;
    newImg.alt = img.alt;
    newImg.loading = 'lazy';
    text.innerText = img.alt;
    svg.setAttribute('viewBox', '0 0 512 512');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');
    path.setAttribute('d', 'M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z');
    svg.appendChild(path);
    svg.addEventListener('click', () => {
      document.body.classList.remove('no-scroll');
      innerDiv.classList.remove('done');
      setTimeout(() => showImage.remove(), 500);
    });
    innerDiv.append(newImg, svg, text);
    showImage.appendChild(innerDiv);
    document.body.appendChild(showImage);
    setTimeout(() => innerDiv.classList.add('done'), 100);
  });
}
