# Mac Calculator Clone

Replicate the builtin Mac calculator as a web app.

This this the base repo for the [Mac Calculator Clone](http://jsdev.learnersguild.org/goals/150) goal.

![calculator-with-history](https://cloud.githubusercontent.com/assets/8385/22572149/9be3c83e-e957-11e6-9431-9b9742b6b4af.png)

## Installation and Setup

## Specifications

The specs are broken down in the following 3 stages, plus two "stretch" stages. Make sure to complete all the items in each stages's `Specs` section.

- [Stage 1](#stage-1)
- [Stage 2](#stage-2)
- [Stage 3](#stage-3)
- [General](#general) (applies to the whole project)
- [Stretch Stage 1](#stretch-stage-1)
- [Stretch Stage 2](#stretch-stage-2)

**IMPORTANT:** When you complete a stage, before moving onto the next stage, tag the commit that completes stage N as `stage-N-complete` using [`git tag`](https://git-scm.com/book/en/v2/Git-Basics-Tagging). *Don't forget to push with `--tags`*.

### Stage 1

In stage 1 you will only be using `HTML` and `CSS` to build a clone of the OS X calculator interface. You're only building the interface in this stage. You'll make the calculator work in stage 2.

![calculator-in-browser](https://cloud.githubusercontent.com/assets/8385/22572099/6786dd74-e957-11e6-9340-278e63aa3809.png)

##### In this stage you will be using at least the following skills:

- HTML/CSS positioning
- CSS text/type styling
- Web Fonts
- Proper HTML formatting
- Proper CSS formatting
- Proper DOM positioning of assets
- Positioning with `inline`, `block` and `inline-block`
- CSS pseudo-selectors
- CSS transitions
- Chrome Developer Tools Element tab

##### During this phase you should…

- Use [normalize.css](https://necolas.github.io/normalize.css/)
- NOT use any other css frameworks or libraries
- NOT use any JavaScript
- NOT use an express server
- NOT use images
- NOT use `<table>` tags
- NOT use `<form>` tags
- NOT use `<input>` tags

##### Specs

- [ ] All text is in the [Roboto](https://fonts.google.com/specimen/Roboto) web font
- [ ] Your `HTML` and `CSS` follows this [style guide](https://google.github.io/styleguide/htmlcssguide.xml)
- [ ] The calculator is positioned in the center of the page, both vertically and horizontally
- [ ] The calculator is a fixed size. It does not change in size when the page resizes.
- [ ] If the window is too small for the calculator, the page scrolls, both vertically and horizontally
- [ ] Each button has a CSS transition to slightly darken the background color on hover over 100ms
- [ ] Each button has a CSS transition to slightly darken the background color on click over 100ms
- [ ] All class names re: the calculator are name-spaced under `.calculator-…`
- [ ] Your stylesheet contains little to no duplicate style declarations

### Stage 2

In stage 2 you will be adding `JavaScript` to make the calculator work.

##### In this stage you will be using at least the following skills:

- ES5 syntax
- Registering event listeners
- Binding to the DOM Ready event
- JavaScript closures
- JavaScript callbacks
- JavaScript formatting
- Event Delegation
- Event bubbling
- Querying the DOM API
- Manipulating the DOM using the DOM API
- Avoiding using the DOM for state

##### During this phase you should…

- NOT use `jQuery` or any other `JavaScript` libraries or frameworks

##### Specs

- [ ] Your `JavaScript` is written in `ES5`
- [ ] Your `JavaScript` follows this [style guide](https://google.github.io/styleguide/jsguide.html)
- [ ] Your JavaScript defines 1 or less global variables
- [ ] The Calculator display is not an `<input>`
- [ ] Typing a relevant key at any point is reflected on the calculator
- [ ] Typing a relevant key causes the corresponding button on the calculator to appear to have been pressed. AKA flashes active
- [ ] The state of the calculator is not be stored in the `DOM`
- [ ] The mathematical operations for your calculator are each their own function, and are defined outside of any DOM event handler
- [ ] When the length of the number displayed exceeds the width available, the font-size deterministically drops

Calculator functionality and behavior is consistent with [Mac calculator rules](#calculator-rules-and-examples):

- [ ] pressing `AC` displays `0`
- [ ] pressing `AC` `8` `+/-` displays `-8`
- [ ] pressing `AC` `-5` `+/-` displays `5`
- [ ] pressing `AC` `99` `%` displays `0.99`
- [ ] pressing `AC` `9` `+` `9` `-` `3` `=` displays `15`
- [ ] pressing `AC` `6` `+` `=` displays `12`
- [ ] pressing `AC` `4` `x` `4` `=` displays `16`
- [ ] pressing `AC` `64` `+` `=` displays `128`
- [ ] pressing `AC` `9` `+` displays `9`
- [ ] pressing `AC` `8` `-` `5` `-` displays `3`
- [ ] pressing `AC` `9` `-` `5` `+` displays `4`
- [ ] pressing `AC` `9` `+` `9` `+` `+` `+` displays `18`
- [ ] pressing `AC` `5` `+` `3` `x` `6` `+` displays `23`
- [ ] pressing `AC` `9` `x` displays `9`
- [ ] pressing `AC` `3` `x` `5` `x` displays `15`
- [ ] pressing `AC` `6` `/` `3` displays `2`
- [ ] pressing `AC` `3` `x` `4` `x` `x` `x` displays `12`
- [ ] pressing `AC` `4` `+` `3` `x` `6` `x` displays `18`
- [ ] pressing `AC` `3` `+` `5` `x` displays `5`
- [ ] pressing `AC` `3` `+` `5` `x` `6` `x` displays `30`
- [ ] pressing `AC` `3` `+` `5` `x` `6` `x` `2` `+` displays `63`

### Stage 3

In stage 3 you are going to add a second calculator to the page. Both calculators will be exactly the same but work independently. This will likely require you to refactor some of the JavaScript you wrote in stage 2.

![two-calculators-in-browser](https://cloud.githubusercontent.com/assets/8385/22572109/72df42ba-e957-11e6-8c9e-c9efd39045c1.png)

##### In this stage you will be using at least the following skills:

- Event delegation
- JavaScript Constructors
- Componentization
- Composition

##### During this phase you should…

- duplicate the HTML for the calculator
- NOT try and render a calculator from `JavaScript`
- NOT use `jQuery` or any other `JavaScript` libraries or frameworks
- consider using a constructor called `Calculator`
- NOT give each calculator a unique `id` or `classname`

##### Specs

- [ ] Each calculator acts independently.
- [ ] Clicking anywhere on a calculator focuses that calculator.
- [ ] Typing a relevant key affects the focused calculator.
- [ ] Use event delegation to avoid binding a `click` event listener to each button
- [ ] The focused calculator is `opacity: 1`
- [ ] The not-focused calculator is `opacity: 0.5`

### General

- [ ] Repository includes a README file with basic installation and setup instructions.
- [ ] All package dependencies are properly declared in `package.json`.
- [ ] All major features are added via pull requests with a clear description and concise commit messages.
- [ ] Code uses a linter and there are no linting errors.
- [ ] Variables, functions, files, etc. have appropriate and meaningful names.
- [ ] Functions are small and serve a single purpose.
- [ ] The artifact produced is properly licensed, preferably with the [MIT license][mit-license].

## Usage and Examples

_...and this_
