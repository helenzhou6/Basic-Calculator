window.onload=function(){
	var display = document.getElementById('display--js');
	var answer = document.getElementById('answer--js');
	var input = document.getElementById('cells--js');

	var resultArray = [];
	var cumNum = 0;
	var operator = false;
	var decimal = false;
	var clickFunc = function(e) {
		var num = e.target.dataset.num;
		var op = e.target.dataset.ops;
		var func = e.target.dataset.func;

		if (num) {
			if (num !== '.') {

				if (decimal === true) {
					var popped = resultArray.pop();
					resultArray.push(popped + parseInt(cumNum + num));
					// cumNum = 0;
				} else {
					cumNum = parseInt(cumNum + num);
				}
			} else if ((num === '.') && (decimal === false)) {
				resultArray.push(cumNum);
-       resultArray.push('.');
				cumNum = 0;
				decimal = true;
			}
			operator = false;
		} else if (op) {
			if (operator === true) {
				resultArray.pop();
			} else {
				if (decimal === false) {
					resultArray.push(cumNum);
				}
			}
			resultArray.push(op);
			decimal = false;
			operator = true;
			cumNum = 0;
			console.log(resultArray);
		} else if (func) {

		}

		// var text = document.createTextNode(cumNum);
		// display.appendChild(text);
	}
	input.addEventListener('click', clickFunc, false);

	// data-func = ac and ce and equals
	// data-num = .0123456789
	// data-ops =  + / - %


}


// switch(op) {
// 	case 'plus':
// 		prevNum = prevNum + nextNum;
// 		break;
// 	case 'minus':
// 		prevNum = prevNum - nextNum;
// 		break;
// 	case 'times':
// 		prevNum = prevNum * nextNum;
// 		break;
// 	case 'percentage':
// 		prevNum = Math.floor((prevNum / nextNum) * 100);
// 		break;
// 	case 'divide':
// 		prevNum = prevNum / nextNum;
// 		break;
// }
