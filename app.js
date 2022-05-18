const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const canvas = $('canvas');
canvas.width = innerWidth;
canvas.height = 300;
const c = canvas.getContext('2d');

const sprite = new Image();
sprite.src = 'sprite.png';

window.onload = () => drawGround();

let frame = 0;

function animate() {
  requestAnimationFrame(animate);
  frame++;
  c.clearRect(0, 0, innerWidth, innerHeight);
  drawGround();
}
animate();

function drawGround() {
  c.drawImage(
    sprite,
    0,
    sprite.height - 30,
    sprite.width,
    30,
    0,
    canvas.height - 30,
    canvas.width + frame * 10,
    30
  );
}
