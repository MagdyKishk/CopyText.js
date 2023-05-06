"use strict";
const inputArea = document.querySelector(".wrapper input");
const copyButton = document.querySelector(".wrapper button");
console.log(inputArea, copyButton);
copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(inputArea.value);
});
