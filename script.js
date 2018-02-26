/* JS TO DO */
/* Need to add key press for 0-9 and + etc*/
// REFACTOR

// TO THINK ABOUT
/* What happens when you have too many characters (8 digits max)/calculated value high*/
// 3.3011+0.3 (round to 2dp? or decimals times by 10 and then divide by 10 at end?)

window.onload=function(){
	var display = document.getElementById('display--js').firstChild;
	var answer = document.getElementById('answer--js').firstChild;
	var input = document.getElementById('cells--js');

	var resultArray = '0';
	var opIsPressed = false;
	var decIsPressed = false;
	var currentNum = '';
	var eqIsPressed = false;

var reset = function(){
	display.nodeValue = '0';
	answer.nodeValue = '0';

	resultArray = '0';
	opIsPressed = false;
	decIsPressed = false;
	eqIsPressed = false;
	currentNum = '';
}

	reset();

	var rgxr = function(string){
		return string.replace(/[.](?=[-+/*])|^[0](?=\d)|[.][0]+(?=[-+/*])/g, '');
	}

	var divTimesRegx = function (string){
		return string.replace(/[*]/g, 'x').replace(/[/]/g, '÷');
	}

	var clickFunc = function(e) {
		var num = e.target.dataset.num;
		var op = e.target.dataset.ops;
		var func = e.target.dataset.func;

		// If a number type is pressed
		if (num) {
			eqIsPressed = false;
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
				eqIsPressed = false;
				// If operator already pressed
				if (opIsPressed) {
					resultArray = resultArray.slice(0, -1);
				} else if (decIsPressed) {
					currentNum = currentNum.replace(/[0]+$/g, '');
				}

				resultArray += currentNum + op;
				decIsPressed = false;
				opIsPressed = true;
				answer.nodeValue = divTimesRegx(op);
				currentNum = '';
				resultArray = rgxr(resultArray);
				display.nodeValue = divTimesRegx(resultArray);

		} else if (func) {
				if ((func === '=') && (!opIsPressed)) {
					if (eqIsPressed) {
						return;
					}
					resultArray += currentNum;
					resultArray = rgxr(resultArray);
					currentNum = '';
					answer.nodeValue = (eval(resultArray));
					resultArray = '0';
					eqIsPressed = true;
				} else if (func === 'ac') {
					reset();
				} else if (func === 'ce') {
					eqIsPressed = false;
					// if 99- operator then CE - removes operator and reinstates prev number 99
					if (opIsPressed) {
						resultArray = resultArray.replace(/[-+/*]$/g, '');
						currentNum = resultArray.match(/\d+$|\d+[.]$|\d+[.]\d+$/g);
						resultArray = resultArray.replace(/\d+$|\d+[.]$|\d+[.]\d+$/g, '');
						answer.nodeValue = currentNum;
						display.nodeValue = divTimesRegx(resultArray) + currentNum;
						opIsPressed = false;
					// for cases e.g. 9-99
					} else if (!opIsPressed && /[-+/*]/.test(resultArray)) {
						answer.nodeValue = divTimesRegx(resultArray.match(/[-+/*]$/g)[0]);
						currentNum = '';
						decIsPressed = false;
						opIsPressed = true;
						display.nodeValue = divTimesRegx(resultArray);
					} else {
						reset();
					}
				}
		}
	}

	input.addEventListener('click', clickFunc, false);

}
