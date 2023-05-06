const inputArea = document.querySelector(".wrapper input") as HTMLInputElement;
const copyButton = document.querySelector(
  ".wrapper button"
) as HTMLButtonElement;

console.log(inputArea, copyButton);

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(inputArea.value);
});
