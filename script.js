window.onload=function(){
	var display = document.getElementById('display--js').firstChild;
	var answer = document.getElementById('answer--js').firstChild;
	var input = document.getElementById('cells--js');

	var resultArray = '0';
	var opIsPressed = false;
	var decIsPressed = false;

var reset = function(){
	display.nodeValue = '0';
	answer.nodeValue = '0';

	resultArray = '0';
	opIsPressed = false;
	decIsPressed = false;

}
	reset();

	var rgxr = function(string){
		return string.replace(/(?!\d)[.](?=[-+/*])|^0+(?=\d)|(?<=[-+/*])([0]+)(?=\d)|(?<=\d+.\d+)[0]+(?=[-+/*])/g, '').replace(/(?<=[-+/*])[.]/g, '0.');
	}
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
			resultArray = rgxr(resultArray);
			opIsPressed = false;
		// If an operator type is pressed
		} else if (op) {

			// If operator already pressed
			if (opIsPressed) {
				resultArray = resultArray.slice(0, -1);
			}
			resultArray += op;
			resultArray = rgxr(resultArray);
			decIsPressed = false;
			opIsPressed = true;

		} else if (func) {
				if ((func === '=') && (!opIsPressed)) {
					answer.nodeValue = (eval(resultArray));
				} else if (func === 'ac') {
					reset();
				} else if (func === 'ce') {

				}
		}
		display.nodeValue = resultArray;
	}
	input.addEventListener('click', clickFunc, false);

}
