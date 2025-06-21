/* color picker app / 21.6.2025 */

const startColor = document.getElementById("startColor");
const endColor = document.getElementById("endColor");
const gradientText = document.getElementById("gradientText");

function updateGradient() {
  const color1 = startColor.value;
  const color2 = endColor.value;

  const gradient = `linear-gradient(to right, ${color1}, ${color2})`;

  document.body.style.background = gradient;
  gradientText.textContent = `Current gradient: ${gradient}`;
}

startColor.addEventListener("input", updateGradient);
endColor.addEventListener("input", updateGradient);

// 初期化
updateGradient();