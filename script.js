"use strict";
// takes all the input
const inputs = document.querySelectorAll(".controls input");
console.log(inputs);

// change the value of the inputs value
const changeAmount = function () {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
};
// add eventlistener for each input
inputs.forEach((input) => input.addEventListener("change", changeAmount));
inputs.forEach((input) => input.addEventListener("mousemove", changeAmount));
