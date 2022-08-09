const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

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
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "AC") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}
