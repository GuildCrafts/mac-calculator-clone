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
}

function inputBuffer() {
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
  this.inputBuffer = new inputBuffer()
  this.outputQueue = new Queue()
  this.operatorStack = new Stack()

  this.buttonPress = function(button) {
    if (isNaN(button) && button != '.') {
      console.log("not a number");
    } else {
      console.log(button);
    }
  }
}

var myCalculator = new Calculator()
