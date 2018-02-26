# Basic-Calculator
Basic Calculator made using vanilla JS. View it [here](https://helenzhou6.github.io/Basic-Calculator/).
* Calculates inputs such as 6 + 3 * 2 in the mathematically correct way (equals 12 not 18).
* Can display large numbers using scroll (i.e. there is no digital limit, for example that [this calculator](https://codepen.io/freeCodeCamp/full/rLJZrA) has).
* AC button clears all inputs, whilst CE button removes the last number or operator.
* Accounts for instances such as '002', '00.002', '0.0200', '200.00+', '200.+', '+.02' and displays them correctly.
* Prevents instances of multiple decimal points (e.g. '0.00.01').
* If operator is pressed, and then another operator pressed (e.g. '+' then '-'), the first operator is replaced with the second. And if the operator (e.g. '-') is pressed first, 0 is used ('0-').
* Does not calculate the answer for instances such as '999+'.

* However:
  * Used `eval()` (considered bad practice) and therefore dealing with strings using regex.
  * Does not account for negative number inputs.
  * Due to the nature of how [Javascript represents numbers](https://www.w3schools.com/js/js_numbers.asp), it does not account for inaccurate floating point arithmetic (e.g. '3.3011 + 0.3').