# Basic-Calculator
Basic Calculator made using vanilla JS. View it [here](https://helenzhou6.github.io/Basic-Calculator/)

* Calculates inputs such as 6 + 3 * 2 in the mathematically correct way (equals 12 not 18)
* Can display large numbers using scroll (i.e. there is no digital limit e.g. that [this example calculator](https://codepen.io/freeCodeCamp/full/rLJZrA) has)

* However:
 * Does not account for negative number inputs
 * Due to the nature of how [Javascript represents numbers](https://www.w3schools.com/js/js_numbers.asp), it does not account for inaccurate floating point arithmetic (e.g. 3.3011+0.3)
 * 