/* color picker app / 18.4.2023 - 21.6.2025 */

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const toggle = document.getElementById('toggleGradient');
const color1Code = document.getElementById('color1Code');
const color2Code = document.getElementById('color2Code');
const secondSection = document.getElementById('secondColorSection');

function updateBackground() {
  const c1 = color1.value;
  const c2 = color2.value;

  color1Code.textContent = c1;
  color2Code.textContent = c2;

  if (toggle.checked) {
    document.body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
  } else {
    document.body.style.background = c1;
  }
}

toggle.addEventListener('change', () => {
  secondSection.style.display = toggle.checked ? 'block' : 'none';
  updateBackground();
});

color1.addEventListener('input', updateBackground);
color2.addEventListener('input', updateBackground);

updateBackground(); 