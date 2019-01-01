var purpleColor = document.querySelector(".purpleColor");
var redColor = document.querySelector(".redColor");
var orangeColor = document.querySelector(".orangeColor");

purpleColor.addEventListener("click", function () {
    document.documentElement.style
        .setProperty('--main-color', '#4D4D81');
});
redColor.addEventListener("click", function () {
    document.documentElement.style
        .setProperty('--main-color', '#C62641');
});
orangeColor.addEventListener("click", function () {
    document.documentElement.style
        .setProperty('--main-color', '#ff6d00');
})