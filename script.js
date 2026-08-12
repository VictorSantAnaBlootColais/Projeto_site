// Contador desde o início do namoro.
// Data escolhida: 11/07/2026 às 00:00.
// Se quiser usar o horário exato em que vocês começaram, altere abaixo.
const startDate = new Date("2026-07-11T00:00:00");

function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now - startDate);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff %= 1000 * 60 * 60;

  const minutes = Math.floor(diff / (1000 * 60));
  diff %= 1000 * 60;

  const seconds = Math.floor(diff / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

// Corações flutuando
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = Math.random() > .5 ? "♡" : "♥";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  heart.style.animationDuration = (7 + Math.random() * 7) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 15000);
}

setInterval(createHeart, 1000);

// Estrelas
const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 65; i++) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}
