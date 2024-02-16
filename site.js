function changeBackgroundColor() {
    const element = document.querySelector(".change");
    const currentColor = window.getComputedStyle(element).backgroundColor;
    const newColor = getRandomColor();

    if (currentColor !== newColor) {
        element.style.backgroundColor = newColor;
    } else {
        changeBackgroundColor();
    }
}
function changeBackgroundColor1() {
    const element = document.body;
    const currentColor = window.getComputedStyle(element).backgroundColor;
    const newColor = getRandomColor1();

    if (currentColor !== newColor) {
        element.style.backgroundColor = newColor;
    } else {
        changeBackgroundColor();
    }
}
function changeBackgroundColor2() {
    const element = document.querySelector('.title');
    const currentColor = window.getComputedStyle(element).backgroundColor;
    const newColor = getRandomColor1();

    if (currentColor !== newColor) {
        element.style.backgroundColor = newColor;
    } else {
        changeBackgroundColor();
    }
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomColor1() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function getRandomColor2() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}