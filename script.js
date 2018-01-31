/* JS TO DO */
/* What happens when you have too many characters (8 digits max)/calculated value high*/
/* Need to add key press for 0-9 and + etc*/
// MINUS NUMBERS :()
// bug when press numbers first then hit CE
// safari :()

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
		return string.replace(/(?!\d)[.](?=[-+/*])|^0+(?=\d)|(?<=[-+/*])([0]+)(?=\d)|(?<=\d+.\d+)[0]+(?=[-+/*])/g, '').replace(/(?<=[-+/*])[.]/g, '0.');
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
				// USE parseFloat etc
				if (!decIsPressed) {
					decIsPressed = true;
				} else {
					return;
				}
			}

			resultArray += num;
			opIsPressed = false;
			currentNum += num;
			answer.nodeValue = currentNum.replace(/^0+(?=\d)/g, '').replace(/^[.]/g, '0.');
		// If an operator type is pressed
		} else if (op) {

			// If operator already pressed
			if (opIsPressed) {
				resultArray = resultArray.slice(0, -1);
			}
			resultArray += op;
			decIsPressed = false;
			opIsPressed = true;
			currentNum = '';
			answer.nodeValue = divTimesRegx(op);
		} else if (func) {
				if ((func === '=') && (!opIsPressed)) {
					answer.nodeValue = (eval(resultArray));
				} else if (func === 'ac') {
					reset();
				} else if (func === 'ce') {
					decIsPressed = false;
					opIsPressed = true;
					currentNum = '';
					answer.nodeValue = '0';
					// |^\d+$|^\d+[.]\d+$|^\d+[.]$ need to add beginning
					resultArray = resultArray.replace(/(?<=[^\d]+)\d+$|(?<=[^\d]+)\d+[.]\d+$|(?<=[^\d]+)\d+[.]$/g, '');
				}
		}
		resultArray = rgxr(resultArray);
		display.nodeValue = divTimesRegx(resultArray);
	}
	input.addEventListener('click', clickFunc, false);

}
