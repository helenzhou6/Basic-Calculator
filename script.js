/* JS TO DO */
/* What happens when you have too many characters (8 digits max)/calculated value high*/
/* Need to add key press for 0-9 and + etc*/

// equals then number - display is wrong
// 3.3011+0.3

window.onload=function(){
	var display = document.getElementById('display--js').firstChild;
	var answer = document.getElementById('answer--js').firstChild;
	var input = document.getElementById('cells--js');

	var resultArray = '0';
	var opIsPressed = false;
	var decIsPressed = false;
	var currentNum = '';

var reset = function(){
	display.nodeValue = '0';
	answer.nodeValue = '0';

	resultArray = '0';
	opIsPressed = false;
	decIsPressed = false;
	currentNum = '';
}

	reset();

	var rgxr = function(string){
		return string.replace(/[.](?=[-+/*])|^[0](?=\d)|[.][0]+(?=[-+/*])/g, '');
	}

	var divTimesRegx = function (string){
		return string.replace(/[*]/g, 'x').replace(/[/]/g, '÷')
	}

	var clickFunc = function(e) {
		var num = e.target.dataset.num;
		var op = e.target.dataset.ops;
		var func = e.target.dataset.func;

		// If a number type is pressed
		if (num) {

			// If decimal selected
			if (num === '.') {
				if (!decIsPressed) {
					decIsPressed = true;
				} else {
					return;
				}
			}
			opIsPressed = false;
			currentNum += num;
			currentNum = currentNum.replace(/^[0]+(?=\d)/g, '').replace(/^[.]/g, '0.');
			answer.nodeValue = currentNum;

			resultArray = rgxr(resultArray);
			if (resultArray === '0') {
				display.nodeValue = currentNum;
			} else {
				display.nodeValue = divTimesRegx(resultArray) + currentNum;
			}

		// If an operator type is pressed
		} else if (op) {

				// If operator already pressed
				if (opIsPressed) {
					resultArray = resultArray.slice(0, -1);
				} else if (decIsPressed) {
					currentNum = currentNum.replace(/[0]+$/g, '');
				}

				resultArray += currentNum + op;
				decIsPressed = false;
				opIsPressed = true;
				currentNum = '';
				answer.nodeValue = divTimesRegx(op);

				resultArray = rgxr(resultArray);
				display.nodeValue = divTimesRegx(resultArray);
		} else if (func) {
				if ((func === '=') && (!opIsPressed)) {
					resultArray += currentNum;
					currentNum = '';
					answer.nodeValue = (eval(resultArray));
				} else if (func === 'ac') {
					reset();
				} else if (func === 'ce') {
					decIsPressed = false;
					opIsPressed = true;
					currentNum = '';
					answer.nodeValue = '0';
					display.nodeValue = divTimesRegx(resultArray);
				}
		}

	}
	input.addEventListener('click', clickFunc, false);

}
