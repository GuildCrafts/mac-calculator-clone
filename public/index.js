// TODO: I reverted back to not nesting everything to get it mostly working again. Tips?
var output = [];
// TODO: look into bubbling! (note to self)
var buttons = document.getElementsByClassName( "calculator-btn" );

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener( "click", function() {
    var value = this.getAttribute( "data-value" );

    controller(value);
  })
}

function clear() {
  output.length = 0;
  document.querySelector("#clear").innerText = "AC";
  setView(0);
}

function percentage() {
  return output.pop() / 100;
}

function posNeg() {
  return output.pop() * -1;
}

function dot() {
  return output.pop() + ".";
}

function multiply(position, value) {
  return position === -1
         ?
         output[output.length - 2] * value : output[0] * output[2];
}

function divide(position, value) {
  return position === -1
         ?
         output[output.length - 2] / value : output[0] / output[2];
}

function add() {
  return parseInt(output[0]) + parseInt(output[2]);
}

function subtract() {
  return parseInt(output[0]) - parseInt(output[2]);
}

function calculate(operator) {
  var val;

  switch (operator) {
    case "*":
      val = multiply();
      break;
    case "/":
      val = divide();
      break;
    case "+":
      val = add();
      break;
    case "-":
      val = subtract();
      break;
    default:
      break;
  }

  return val;
}

function calculateController() {
  var operators = ["*", "/", "+", "-"];

  if (output.length === 1) return output[0];

  var operator = operators.indexOf(output[1]);

  if (output.length === 2) output.push(output[0]);

  return calculate(operators[operator]);
  // does not yet account for 2 + 3 *
}

function setView(val) {
  console.log(output);
  document.querySelector("#calculator-output").innerText = val;
}

function controller(value) {
  // TODO: add blink effect via fade in/fade out ?

  if (output.length === 0) {
    if (isNaN(value)) {
      return;
    } else {
      document.querySelector("#clear").innerText = "C";
    }
  }

// TODO: nest this in if statement or should I let certain items fall through?
// TODO: number with "." isn't calculated properly
  switch (value) {
    case "clear":
      clear();
      return;
    case "%":
      if (isNaN(output[output.length - 1])) return;
      var val = percentage();
      output.push(val);
      setView(val);
      return;
    case "pos-neg":
      if (isNaN(output[output.length - 1])) return;
      var val = posNeg();
      output.push(val);
      setView(val);
      return;
    case ".":
      if (isNaN(output[output.length - 1])) return;
      var val = dot();
      output.push(val);
      setView(val);
      return;
    case "=":
      var val = calculateController();
      output = [val];
      setView(val);
      return;
    default:
      break;
  }

  if (!isNaN(value) && !isNaN(output[output.length - 1])) {
    output.push(output.pop() + value);
    setView(output[output.length - 1]);
    return;
  }

  if (output.length < 3) {
    output.push(value);
    if (!isNaN(value)) setView(value);
    return;
  }

  if (output.length < 4) {
    var val;

    if (["*", "/"].includes(output[1])) {
      val = output[1] === "*" ? multiply(0) : divide(0);
      output = [val, value];
      setView(val);
    } else if (!["*", "/"].includes(value)) {
      val = output[1] === "+" ? add() : subtract();
      output = [val, value];
      setView(val);
    } else {
      output.push(value);
      return;
    }
  } else {
    var val;

    if (["*", "/"].includes(output[3])) {
      val = output[3] === "*" ? multiply(-1, value) : divide(-1, value);
      output = output.splice(0, 2);
      output.push(val);
    } else {
      val = output[1] === "+" ? add() : subtract();
      output = [val, value];
    }

    setView(val);
  }
}
