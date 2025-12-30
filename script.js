// === CREATE CANVAS ===
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// === STYLE CANVAS (JS) ===
Object.assign(canvas.style, {
  position: "fixed",
  inset: 0,
  zIndex: "-1",
  background: "black"
});

// === RESIZE ===
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// === FIRE PARTICLE ===
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.size = Math.random() * 8 + 4;
    this.speedY = Math.random() * 3 + 1;
    this.life = 100;
    this.hue = Math.random() * 30 + 15;
  }

  update() {
    this.y -= this.speedY;
    this.size *= 0.96;
    this.x += Math.random() * 2 - 1;
    this.life--;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${this.hue}, 100%, 60%)`;
    ctx.shadowBlur = 30;
    ctx.shadowColor = ctx.fillStyle;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// === FIRE SYSTEM ===
let particles = [];

function animate() {
  // heat trail
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // spawn flames
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle());
  }

  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.life <= 0 || p.size < 0.5) {
      particles.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

animate();
