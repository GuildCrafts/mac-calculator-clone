# Mac Calculator Clone
## Jorge Lopez

This this the base repo for the [Mac Calculator Clone](http://jsdev.learnersguild.org/goals/150) goal.

## Specifications

The specs are broken down in the following 3 stages, plus two “stretch” stages. Make sure to complete all the items in each stages’s Specs section.

* Stage 1
* Stage 2
* Stage 3
* General (applies to the whole project)
* Stretch Stage 1
* Stretch Stage 2

**IMPORTANT:** When you complete a stage, before moving onto the next stage, tag the commit that completes stage N as stage-N-complete using git tag. Don’t forget to push with --tags.

### Stage 1

In stage 1 you will only be using HTML and CSS to build a clone of the OS X calculator interface. You’re only building the interface in this stage. You’ll make the calculator work in stage 2.

calculator-in-browser

In this stage you will be using at least the following skills:

* HTML/CSS positioning
* CSS text/type styling
* Web Fonts
* Proper HTML formatting
* Proper CSS formatting
* Proper DOM positioning of assets
* Positioning with inline, block and inline-block
* CSS pseudo-selectors
* CSS transitions
* Chrome Developer Tools Element tab

During this phase you should…

* Use normalize.css
* NOT use any other css frameworks or libraries
* NOT use any JavaScript
* NOT use an express server
* NOT use images
* NOT use table tags
* NOT use form tags
* NOT use input tags

### Specs

  - [x] All text is in the Roboto web font
  - [x] Your HTML and CSS follows this style guide
  - [x] The calculator is positioned in the center of the page, both vertically and horizontally
  - [x] The calculator is a fixed size. It does not change in size when the page resizes.
  - [x] If the window is too small for the calculator, the page scrolls, both vertically and horizontally
  - [x] Each button has a CSS transition to slightly darken the background color on hover over 100ms
  - [x] Each button has a CSS transition to slightly darken the background color on click over 100ms
  - [x] All class names re: the calculator are name-spaced under .calculator-…
  - [x] Your stylesheet contains little to no duplicate style declarations

### Stage 2

In stage 2 you will be adding JavaScript to make the calculator work.

In this stage you will be using at least the following skills:

* ES5 syntax
* Registering event listeners
* Binding to the DOM Ready event
* JavaScript closures
* JavaScript callbacks
* JavaScript formatting
* Event Delegation
* Event bubbling
* Querying the DOM API
* Manipulating the DOM using the DOM API
* Avoiding using the DOM for state

During this phase you should…

* NOT use jQuery or any other JavaScript libraries or frameworks

### Specs

  - [x] Your JavaScript is written in ES5
  - [x] Your JavaScript follows this style guide
  - [ ] Your JavaScript defines 1 or less global variables
  - [x] The Calculator display is not an input
  - [x] Typing a relevant key at any point is reflected on the calculator
  - [x] Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes active //does this differ from the css transition in part 1? flashes if click lasts 1 sec
  - [x] The state of the calculator is not be stored in the DOM
  - [x] The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler
  - [ ] When the length of the number displayed exceeds the width available, the font-size deterministically drops

Calculator functionality and behavior is consistent with Mac calculator rules:

  - [x] pressing AC displays 0
  - [x] pressing AC 8 +/- displays -8
  - [x] pressing AC -5 +/- displays 5
  - [x] pressing AC 99 % displays 0.99
  - [x] pressing AC 9 + 9 - 3 = displays 15
  - [x] pressing AC 6 + = displays 12
  - [x] pressing AC 4 x 4 = displays 16
  - [x] pressing AC 64 + = displays 128
  - [x] pressing AC 9 + displays 9
  - [x] pressing AC 8 - 5 - displays 3
  - [x] pressing AC 9 - 5 + displays 4
  - [ ] pressing AC 9 + 9 + + + displays 18
  - [x] pressing AC 5 + 3 x 6 + displays 23
  - [x] pressing AC 9 x displays 9
  - [x] pressing AC 3 x 5 x displays 15
  - [x] pressing AC 6 / 3 displays 2
  - [ ] pressing AC 3 x 4 x x x displays 12
  - [x] pressing AC 4 + 3 x 6 x displays 18
  - [x] pressing AC 3 + 5 x displays 5
  - [x] pressing AC 3 + 5 x 6 x displays 30
  - [x] pressing AC 3 + 5 x 6 x 2 + displays 63

### Stage 3

In stage 3 you are going to add a second calculator to the page. Both calculators will be exactly the same but work independently. This will likely require you to refactor some of the JavaScript you wrote in stage 2.

In this stage you will be using at least the following skills:

* Event delegation
* JavaScript Constructors
* Componentization
* Composition

During this phase you should…

* duplicate the HTML for the calculator
* NOT try and render a calculator from JavaScript
* NOT use jQuery or any other JavaScript libraries or frameworks
* consider using a constructor called Calculator
* NOT give each calculator a unique id or classname

### Specs

  - [ ] Each calculator acts independently.
  - [ ] Clicking anywhere on a calculator focuses that calculator.
  - [ ] Typing a relevant key affects the focused calculator.
  - [ ] Use event delegation to avoid binding a click event listener to each button
  - [ ] The focused calculator is opacity: 1
  - [ ] The not-focused calculator is opacity: 0.5

### General

  - [ ] Repository includes a README file with basic installation and setup instructions.
  - [ ] All package dependencies are properly declared in package.json.
  - [ ] All major features are added via pull requests with a clear description and concise commit messages.
  - [ ] Code uses a linter and there are no linting errors.
  - [ ] Variables, functions, files, etc. have appropriate and meaningful names.
  - [ ] Functions are small and serve a single purpose.
  - [ ] The artifact produced is properly licensed, preferably with the MIT license.

### Stretch

**Stretch Stage 1**

In this stage you are going to move the work of your calculator to the server. This might seem silly but its a good way to practice moving logic from the browser to the server without the logic itself being too complex.

In this stage you will be using at least the following skills:

* Setting up a simple Node express server
* XHR / AJAX requests
* Sending conventional HTTP status codes
* Using conventional HTTP verbs
* Setting common HTTP headers
* rendering JSON from express
* Following the RESTful routes convention

During this phase you should…

* initialize a node package.json
* use express
* use a JSON body parser
* NOT use any other node packages

### Specs

  - [ ] Each mathematical operation should have it’s own API endpoint
  - [ ] Each mathematical operation is done on the server
  - [ ] Each request for a mathematical operation is a post request
  - [ ] Each operation request responds with JSON
  - [ ] When the calculator is waiting for an operation request response, it ignores all input

### Stretch Stage 2

In this stage you are going to add persistence to your express server. We’re going to be persisting the history of the users calculations. We’re also going back to just having one calculator on the page.

In this stage you will be using at least the following skills:

* SQL schema design
* writing SQL queries

During this phase you should…

* use the pg, pg-promise, and/or knex packages
* NOT use any other node packages
* create a visitors table
* create a calculations table
* persist each mathematical operations

Specs

  - [ ] there is only one calculator on the page
  - [ ] the calculator displays a scrolling history of calculations
  - [ ] the most recent calculation result is at the bottom
  - [ ] the scroll-back history is always scrolled to the bottom when a new operation result is added
  - [ ] the calculator history is stored per visitor (browser)
  - [ ] the express app uses a cookie to track individual visitors
  - [ ] reloading the page restores the calculator history
  - [ ] the server stores up to 100 calculation results
  - [ ] all mathematical operations have their own function, defined outside of any express router handlers.