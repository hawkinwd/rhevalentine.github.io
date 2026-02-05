const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
  const randomLeft = Math.random() * (500 - (-150)) + (-150);
  const randomTop = Math.random() * (75 - (-400)) + (-400);

  noBtn.style.left = `${randomLeft}px`;
  noBtn.style.top = `${randomTop}px`;
});
