let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 150;
canvas.height = 50;
ctx.font = "18px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
let capthaText = "";
function generateCaptcha() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  function getRandomChar() {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    return chars[Math.floor(Math.random() * chars.length)];
  }
  capthaText = "";
  for (let i = 0; i < 5; i++) {
    capthaText += getRandomChar();
  }
  let textWidth = ctx.measureText("A").width;
  let totalWidth = textWidth * capthaText.length;
  let startX = (canvas.width - totalWidth) / 2;
  for (let i = 0; i < capthaText.length; i++) {
    let char = capthaText[i];
    let x = startX + i * textWidth;
    let y = canvas.height / 2;
    ctx.fillStyle = "black";
    ctx.fillText(char, x, y);
  }
  for (let i = 0; i < 50; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let radius = Math.random() * 2 + 1;
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
generateCaptcha();
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  let captchaInput = document.querySelector('#captcha').value;
  let gambling = Math.random() > 0.5;
  if(captchaInput === capthaText && gambling) {
    window.location.reload();
  } else {
    alert("Błędne dane");
    generateCaptcha();
  }
});
