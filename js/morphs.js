function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

const elts = {
  text1: document.getElementById("text1"),
  text2: document.getElementById("text2"),
  text3: document.getElementById("text3"),
  text4: document.getElementById("text4"),
};

const texts = ["Student", "Developer", "Innovator", "Programmer"];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

// Initialization
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];
elts.text3.textContent = texts[textIndex % texts.length];
elts.text4.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }

  setMorph(fraction);
}

function setMorph(fraction) {
  // text1/text2 morph
  elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  // text3/text4 morph
  let fraction2 = morph / morphTime;
  elts.text4.style.filter = `blur(${Math.min(8 / fraction2 - 8, 100)}px)`;
  elts.text4.style.opacity = `${Math.pow(fraction2, 0.4) * 100}%`;

  fraction2 = 1 - fraction2;
  elts.text3.style.filter = `blur(${Math.min(8 / fraction2 - 8, 100)}px)`;
  elts.text3.style.opacity = `${Math.pow(fraction2, 0.4) * 100}%`;

  // text update
  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
  elts.text3.textContent = texts[textIndex % texts.length];
  elts.text4.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";

  elts.text4.style.filter = "";
  elts.text4.style.opacity = "100%";

  elts.text3.style.filter = "";
  elts.text3.style.opacity = "0%";
}

function animate() {
  requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) textIndex++;
    doMorph();
  } else {
    doCooldown();
  }
}

animate();
