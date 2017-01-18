# mdl-currency-usd
An Material Design Lite currency textfield implementation for capturing user entered US currency values (https://github.com/google/material-design-lite)

[![Bower Version](https://img.shields.io/bower/v/mdl-currency-usd.svg)](https://github.com/rathxxx/mdl-currency-usd)
[![NPM Version](https://img.shields.io/npm/v/mdl-currency-usd.svg)](https://www.npmjs.com/package/mdl-currency-usd)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/rathxxx/mdl-currency-usd/blob/master/LICENSE)

[![bitHound Overall Score](https://www.bithound.io/github/rathxxx/mdl-currency-usd/badges/score.svg)](https://www.bithound.io/github/rathxxx/mdl-currency-usd)
[![bitHound Dependencies](https://www.bithound.io/github/rathxxx/mdl-currency-usd/badges/dependencies.svg)](https://www.bithound.io/github/rathxxx/mdl-currency-usd/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/rathxxx/mdl-currency-usd/badges/devDependencies.svg)](https://www.bithound.io/github/rathxxx/mdl-currency-usd/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/rathxxx/mdl-currency-usd/badges/code.svg)](https://www.bithound.io/github/rathxxx/mdl-currency-usd)

> A custom textfield implementation of a US currency component for [Material Design Lite](https://github.com/google/material-design-lite)

## Install

Via npm:

````
npm install mdl-currency-usd
````

Then include in your html:

````
<link rel="stylesheet" href="./bower_components/mdl-currency-usd/dist/mdl-currency-usd.min.css">
...
<script src="./bower_components/mdl-currency-usd/dist/mdl-currency-usd.min.js"></script>
````

## Basic use
To use any MDL component, you must include the minified CSS and JavaScript files using standard relative-path references in the `<head>` section of the page, as described in the MDL Introduction.

### To include a MDL **currency-usd textfield** component:

&nbsp;1. Code a `<div>` element to hold the currency text field.
```html
<div>
...
</div>
```
&nbsp;2. Inside the div, code an `<input>` element add an `id` attribute of your choice.
```html
<div>
  <input type="text" id="sample3">
</div>
```
&nbsp;3. Also inside the div, after the `<input>` field, code a `<label>` element with a `for` attribute whose value matches the `input` element's `id` value, and a short string to be used as the field's placeholder text.
```html
<div>
		<input type="text" id="sample3">
        <label for="sample3">currency Example...</label>
</div>
```
&nbsp;4. Add one or more MDL classes, separated by spaces, to the div container, input field, input label, and error message using the `class` attribute.
```html
<div class="mdl-currency-usd mdl-js-currency-usd mdl-currency-usd--floating-label">
        <input class="mdl-currency-usd__input" type="text" id="sample3">
        <label class="mdl-currency-usd__label" for="sample3">currency Example...</label>
</div>
```
The currency textfield component is ready for use.

#### Examples

currency field with a standard label.
```html
<div class="mdl-currency-usd mdl-js-currency-usd">
        <input class="mdl-currency-usd__input" type="text" id="sample1">
        <label class="mdl-currency-usd__label" for="sample1">currency Example...</label>
</div>
```

currency field with a floating label.
```html
<div class="mdl-currency-usd mdl-js-currency-usd mdl-currency-usd--floating-label">
        <input class="mdl-currency-usd__input" type="text" id="sample4">
        <label class="mdl-currency-usd__label" for="sample4">currency Example...</label>
</div>
```

currency field with a standard label, and error message.
```html
<div class="mdl-currency-usd mdl-js-currency-usd">
        <input class="mdl-currency-usd__input" type="text" id="sample4">
        <label class="mdl-currency-usd__label" for="sample4">currency Example...</label>
		<span class="mdl-currency-usd__error">#.##</span>
</div>
```
currency field with a standard label, symbol, and error message.
```html
<div class="mdl-currency-usd mdl-js-currency-usd">
        <input class="mdl-currency-usd__input" type="text" id="sample4">
        <label class="mdl-currency-usd__label" for="sample4">currency Example...</label>
		<div class="mdl-currency-usd__symbol">$</div>
		<span class="mdl-currency-usd__error">#.##</span>
</div>
```

currency field with floating label, symbol, error message, and 12 integer 2 decimal constraint
```html
<div class="mdl-currency-usd mdl-js-currency-usd mdl-currency-usd--floating-label">
        <input class="mdl-currency-usd__input" type="text" id="sample1" maxIntegers="12" maxDecimals="2">
        <label class="mdl-currency-usd__label" for="sample1">currency 12.2 Example...</label>
        <div class="mdl-currency-usd__symbol">$</div>
        <span class="mdl-currency-usd__error">#.##</span>
    </div>
```
