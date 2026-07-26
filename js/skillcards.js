// Megkeressük a kártyákat és a szövegdobozt
const skillCards = document.querySelectorAll('.skill-card');
const skillText = document.getElementById('skill-text');
const defaultText = "Vidd az egeret egy kártya fölé a részletekért!";

skillCards.forEach(card => {
  // Amikor rávisszük az egeret (hover)
  card.addEventListener('mouseenter', () => {
    const text = card.getAttribute('data-skill');
    skillText.style.opacity = 0; // Finom áttűnés effekt indítása
    setTimeout(() => {
      skillText.innerText = text;
      skillText.style.opacity = 1;
    }, 150);
  });

  // Amikor elvisszük az egeret
  card.addEventListener('mouseleave', () => {
    skillText.style.opacity = 0;
    setTimeout(() => {
      skillText.innerText = defaultText;
      skillText.style.opacity = 1;
    }, 150);
  });
});
