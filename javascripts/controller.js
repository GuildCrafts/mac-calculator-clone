(function(){
  var calculatorButtons, input, screen, clear, number, mathFunction, operation, operationStack, numberStack, currentValue;

  calculatorButtons = document.querySelectorAll('.calculator-button-container')[0];
  calculatorButtons.addEventListener("click", buttonClicked, false)

  firstInput = null
  operation = null
  secondOperation = null
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
      updateDisplay()
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
      updateDisplay()
      return
    }
    if (buttonValue === '+') {
      operation = function(firstInput,secondInput) {return firstInput + secondInput}
      updateDisplay()
      return
    }
    if (buttonValue === '-') {
      operation = function(firstInput,secondInput) {return firstInput - secondInput}
      updateDisplay()
      return
    }
    if (buttonValue === '/') {
      operation = function(firstInput,secondInput) {return firstInput / secondInput}
      updateDisplay()
      return
    }
    if (buttonValue === 'x') {
      operation = function(firstInput,secondInput) {return firstInput * secondInput}
      updateDisplay()
      return
    }
    if (buttonValue === '+/-') {
      operation = function(firstInput,secondInput) {return firstInput * -1}
      calculate()
      updateDisplay()
      return
    }
    if (buttonValue === '%') {
      operation = function(firstInput,secondInput) {return firstInput / 100}
      calculate()
      updateDisplay()
      return
    }
    if (buttonValue === '=') {
      calculate()
      updateDisplay()
      return
    }
  }

  clear.onClick = function() {
    currentValue = [];
  }

  function calculate() {
    // do operation update display with the result of operation
    result = operation(firstInput, secondInput)
    console.log( '<3333333 success <3333333', result )
    secondInput = undefined
    firstInput = result
    updateDisplay()
    return result
  }

  function updateDisplay() {
    console.log( '---===firstInput===---', firstInput )
    console.log( '---===secondInput===---', secondInput )
    console.log( '---===operation===---', operation )
    displayPort.innerText = secondInput ? secondInput : firstInput
  }

})()
