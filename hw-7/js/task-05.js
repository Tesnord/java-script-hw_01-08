const textInput = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value == '') {
    output.textContent = 'Незнакомец'
  } else {
    output.textContent = event.currentTarget.value;
  }
});