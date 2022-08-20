const background_change = document.getElementById('background-body');
const colorChange = document.getElementById('change-color');
const button = document.getElementById('btn');
const shadow = document.getElementById('header');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
function HexColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    background_change.style.backgroundColor = hexColor;
    colorChange.innerText = hexColor;
}
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
// function ChangeColor() {
//     background_change.style.backgroundColor = colorChange.textContent;
// }
// console.log(colorChange.textContent);
button.addEventListener('click', function () {
    HexColor();
})