window.onload=function(){
	var display = document.getElementById('display--js');
	var answer = document.getElementById('answer--js');
	var input = document.getElementById('cells--js');

	var resultArray = '';
	var operator = false;
	var decimal = false;

	var clickFunc = function(e) {
		var num = e.target.dataset.num;
		var op = e.target.dataset.ops;
		var func = e.target.dataset.func;

		// If a number type is pressed
		if (num) {

			// If decimal selected
			if (num === '.') {
				if (!decimal) {
					decimal = true;
				} else {
					return;
				}
			}

			resultArray += num;
			operator = false;
		// If an operator type is pressed
		} else if (op) {

			// If operator already pressed
			if (operator === true) {
				resultArray = resultArray.slice(0, -1);
			}
			
			resultArray += op;
			decimal = false;
			operator = true;

		} else if (func) {

		}
		// console.log(resultArray);
		console.log(eval(resultArray));
		// var text = document.createTextNode(resultArray);
		// display.appendChild(text);
	}
	input.addEventListener('click', clickFunc, false);


	// data-func = ac and ce and equals
	// data-num = .0123456789
	// data-ops =  + / - %

}
