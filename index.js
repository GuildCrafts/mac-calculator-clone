//Stack first in first outline
'use strict'

function Stack() {
  this._elements = []
  this._topIndex = 0

  this.length = function() {
    return this._topIndex
  }

  this.push = function(data) {
    this._elements[this._topIndex++] = data
  }

  this.isEmpty = function() {
    return this._topIndex === 0
  }

  this.peek = function() {
    return this.isEmpty() ? null : this._elements[this._topIndex - 1]
  }

  this.pop = function() {
    if (this.isEmpty()) {
      return null
    }
    var result = this._elements[this._topIndex - 1]
    delete this._elements[this._topIndex-- -1]
    return result
  }
}

function Node(data ) {
  this._data = data
  this._next = null
}

function Queue() {
  this._front = null
  this._back = null
  this._length = 0

  this.length = function() {
    return this._length
  }

  this.isEmpty = function() {
    return this._length == 0
  }

  this.back = function() {
    if (this._back) {
      return this._back._data
    }
    else {return null }
  }

  this.front = function() {
    if (this._front) {
      return this._front._data
    }
    else {
      return null
    }
  }

  this.enqueue = function(data) {
    var newNode = new Node(data)
    if (this._length === 0) {
      this._front = newNode
    } else {
      var oldBack = this._back
      newNode._next = oldBack
    }
    this._back = newNode
    ++this._length
  }

  this.dequeue = function() {
    if (this.isEmpty()) {
      return null
    }
    var oldFront = this._front
    --this._length
    var newFront = this._back
    for (var i = 1; i < this._length; ++i) {
      newFront = newFront._next
    }
    newFront._next = null
    this._front = newFront
    return oldFront._data
  }

  this.emptyAndReturn = function() {
    var result = []
    var length = this.length()
    for (var i = 0; i < length; ++i) {
      result.push(this.dequeue())
    }
    console.log('emptyAndReturn',result)
    return result
  }

  this.display = function() {
    console.log('front', this._front)
    console.log('back', this._back)
    console.log('length', this.length())
  }
}

function InputBuffer() {
  this.buffer = ''

  this.push = function(character) {
    this.buffer += character
  }

  this.clear = function() {
    this.buffer = ''
  }

  this.read = function() {
    return this.buffer
  }
}

function Calculator() {
  this.inputBuffer = new InputBuffer()
  this.outputQueue = new Queue()
  this.operatorStack = new Stack()

  this.buttonPress = function(buttonInput) {
    if (isNaN(buttonInput) && buttonInput != '.') {
      this.outputQueue.enqueue(this.inputBuffer.read())
      this.inputBuffer.clear()
      switch (buttonInput) {
        case '=':
          this.outputQueue.enqueue(this.operatorStack.pop())
          var evaluate = this.evaluate(this.outputQueue.emptyAndReturn())
          console.log('evaluate',evaluate)
          break;
        default:
          this.operatorStack.push(buttonInput)
      }
    } else {
      this.inputBuffer.push(buttonInput)
      this.updateDisplay()
    }
  }

  this.updateDisplay = function() {
    document.getElementById('calculator-display-text').innerText = this.inputBuffer.read()
  }

  this.evaluate = function(expressionArray) {
    if (expressionArray[0] === '') {
      return 0
    }
    this.isOperator = function(input) {
      switch (input) {
        case '+':
        case '-':
        case '÷':
        case '*':
          return true
        break;
        default:
          return false
      }
    }

    var index = 0
    var operatorFound = false
    while ((operatorFound === false) && (index < expressionArray.length)) {
      if (this.isOperator(expressionArray[index])) {
        operatorFound = true
      } else {
        index++
      }
    }

    if (operatorFound === false) {
      return expressionArray[0]
    } else {
      var evalString = ''
      evalString = expressionArray[index - 2]
        + expressionArray[index]
        + expressionArray[index - 1]
      console.log('evalString',evalString)
      console.log('eval(evalString',eval(evalString))
      if (index === 3) {
        return eval(evalString)
      } else if (index === 4){
        var partialResult
        var clonedArray = expressionArray.slice(0)
        var start = index - 2
        clonedArray.splice(start, index, partialResult)
      }
      return index
      //if down to 3 / 1,
      //place result into outputQueue
      //["2","3","5","*","+"]
    }
  }
}

var myCalculator = new Calculator()
