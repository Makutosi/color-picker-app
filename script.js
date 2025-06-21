/* color picker app / 21.6.2025 */

const darkColorsArr = ["#2C3E50", "#34495E", "#2C2C2C", "#616A6B",
  "#4A235A", "#2F4F4F", "#0E4B5A", "#36454F",
  "#800020"
];

const body = document.querySelector("body");
const colorText = document.querySelector("#colorText");
const colorPicker = document.querySelector("#colorPicker");
const btn = document.querySelector("#btn");

function getRandomColor() {
    const index = Math.floor(Math.random() * darkColorsArr.length);
    return darkColorsArr[index];
}

function updateBackgroundColor(color) {
    body.style.backgroundColor = color;

    let label = "";
    if (color.toLowerCase() === "#ffffff") {
        label = "(white)";
    } else if (color.toLowerCase() === "#000000") {
        label = "(black)";
    }

    colorText.textContent = `Color Code: ${color}${label}`;
}

    btn.addEventListener("click", () => {
        const randomColor = getRandomColor();
        updateBackgroundColor(randomColor);
        colorPicker.value = randomColor;
    });

    colorPicker.addEventListener("input", () => {
        updateBackgroundColor(colorPicker.value);
    });