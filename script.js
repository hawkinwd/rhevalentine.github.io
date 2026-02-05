const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - noBtn.offsetWidth;
  const maxY = containerRect.height - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

function goYes() {
  window.location.href = "yes.html";
}
