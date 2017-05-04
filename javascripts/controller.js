(function(){
  var calculatorButtons, input, screen, clear, number, mathFunction, operation, operationStack, numberStack, currentValue;

  calculatorButtons = document.querySelectorAll('.calculator-button-container')[0];
  calculatorButtons.addEventListener("click", buttonClicked, false)

  firstInput = null
  operation = null
  secondInput = null
  // currentValue = 0

  displayPort = document.querySelectorAll(".calculator-display-port")[0];
  clear = document.querySelector(".calculator-AC-button");
  number = document.querySelector(".calculator-number-button");
  mathFunction = document.querySelector(".calculator-function-button");
  // operation = document.querySelector(".calculator-operation-button");
  decimal = document.querySelector(".calculator-decimal-button");


  function buttonClicked(event) {
    var displayedNumber = displayPort.innerText
    var buttonValue = event.target.innerText
    console.log( '---===target===---', buttonValue )
    if (buttonValue === 'AC') {
      firstInput = secondInput = operation = null
      return
    }
    if (/^\d$/.test(buttonValue)) {
      if (operation) {
        secondInput = parseInt(
          secondInput
            ? secondInput + '' + buttonValue
            : buttonValue,
          10)

      } else {
        firstInput = parseInt(
          firstInput
            ? firstInput + '' + buttonValue
            : buttonValue,
          10)
      }
      return
    }
    if (buttonValue === '+') {
      operation = '+'
      return
    }
    // if (buttonValue === '=') {
    //   calculate()
    // }
    updateDisplay()
  }

  clear.onClick = function() {
    currentValue = [];
  };
  function calculate() {
    // do operation update display with the result of operation
    result = firstInput + secondInput
    console.log( '<3333333 success <3333333', result )
    return result
  }

  function updateDisplay() {
    console.log( '---===firstInput===---', firstInput )
    console.log( '---===secondInput===---', secondInput )
    console.log( '---===operation===---', operation )
    displayPort.innerText = secondInput ? secondInput : firstInput
  }

})()
