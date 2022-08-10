const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const displayResult = document.querySelector(".display-result");

$("#dontClick").on({
  click: function () {
    $(".row").toggle(500);
  },
});

buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      displayResult.value = display.value + "=" + eval(display.value);
      display.value = "";
    }
  } else if (clickedButtonValue === "AC") {
    display.value = "";
    displayResult.value = "";
  } else if (clickedButtonValue === "C") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}
