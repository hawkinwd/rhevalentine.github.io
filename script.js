const noBtn = document.getElementById("noBtn");
const buttonArea = document.querySelector(".buttons");

noBtn.addEventListener("mouseenter", () => {
  const areaRect = buttonArea.getBoundingClientRect();

  const maxX = areaRect.width - noBtn.offsetWidth;
  const maxY = areaRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});
