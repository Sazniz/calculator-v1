// Query all DOM elements
const sevenButton = document.querySelector("#row1btn1");
const eightButton = document.querySelector("#row1btn2");
const nineButton = document.querySelector("#row1btn3");
const acButton = document.querySelector("#row1btn4");
const fourButton = document.querySelector("#row2btn1");
const fiveButton = document.querySelector("#row2btn2");
const sixButton = document.querySelector("#row2btn3");
const minusButton = document.querySelector("#row2btn4");
const oneButton = document.querySelector("#row3btn1");
const twoButton = document.querySelector("#row3btn2");
const threeButton = document.querySelector("#row3btn3");
const plusButton = document.querySelector("#row3btn4");
const zeroButton = document.querySelector("#row4btn1");
const pointButton = document.querySelector("#row4btn2");
const equalButton = document.querySelector("#row4btn3");
const sumHtml = document.querySelector("#sum");
const historyElement = document.querySelector("#history");

//logic
let temp = "";
let result = 0;

//Numbers
const numbers = document.querySelectorAll("[data-type='number']");
[...numbers].forEach(number => number.addEventListener("click", e => addToTemp(e)));

acButton.addEventListener("click", () => {
  temp = "";
  result = 0;
  sumHtml.innerHTML  = result;
  historyElement.innerHTML = result;
})
//Operators
const operators = document.querySelectorAll("[data-type='op']");
[...operators].forEach(op => op.addEventListener("click", e => applyOperation(e)));

//Numbers
const buttons = document.querySelectorAll("button");
[...buttons].forEach(btn => {
  if (btn.id !== "row1btn4" && btn.id !== "row4btn3") {
    btn.addEventListener("click", e => {
      const character = btn.innerHTML;
      historyElement.innerHTML = historyElement.innerHTML + character;
    });
  }
});


function applyOperation(event) {
  const op = event.currentTarget.innerHTML;

  if (op === "+") {
    result = result + parseFloat(temp);
  }

  if (op === "-") {
    result = result - parseFloat(temp);
  }

  if (op === "=") {
    result = result + parseFloat(temp);
    sumHtml.innerHTML  = result;
  }

  console.log(result);
  temp = "";
}

function addToTemp(event) {
  temp = temp + event.currentTarget.innerHTML;
  console.log(temp)
}