window.onload=function(){
	var display = document.getElementById('display--js');
	var answer = document.getElementById('answer--js');
	var input = document.getElementById('cells--js');

	var resultArray = '0';
	var opIsPressed = false;
	var decIsPressed = false;

	var clickFunc = function(e) {
		var num = e.target.dataset.num;
		var op = e.target.dataset.ops;
		var func = e.target.dataset.func;

		// If a number type is pressed
		if (num) {

			// If decimal selected
			if (num === '.') {
				// USE parseFloat etc
				if (!decIsPressed) {
					decIsPressed = true;
				} else {
					return;
				}
			}

			resultArray += num;
			opIsPressed = false;
		// If an operator type is pressed
		} else if (op) {

			// If operator already pressed
			if (opIsPressed) {
				resultArray = resultArray.slice(0, -1);
			}
			resultArray += op;
			decIsPressed = false;
			opIsPressed = true;

		} else if (func) {
				if ((func === '=') && (!opIsPressed)) {
					console.log(eval(resultArray));
				}
		}

		console.log(resultArray);

		// var text = document.createTextNode(resultArray);
		// display.appendChild(text);
	}
	input.addEventListener('click', clickFunc, false);

	var string = '000.2+.342+32432.+000200+0.0002+9.9+000.9+.9';
	// JUST NEED TO DO BEGINNING OF STRING MULTI ZEROS
	console.log(string.replace(/(?!\d)[.](?=[+-/*])/g, '').replace(/(?<=[-+/*])[.]/g, '0.').replace(/(?<=[-+/*])([0]+)(?=\d)/g, '').replace(/^0+(?=\d)/g, ''));
	// data-func = ac and ce and equals
	// data-num = .0123456789
	// data-ops =  + / - %

}
