window.onload=function(){
	var display = document.getElementById('display--js');
	var answer = document.getElementById('answer--js');
	var input = document.getElementById('cells--js');

	var cumNum = 0;
	var clickFunc = function(e) {
		var num = e.target.dataset.num;
		var op = e.target.dataset.ops;
		var func = e.target.dataset.func;
		// for numbers not '.'
		if (num) {
			cumNum += num;
			console.log(parseInt(cumNum));
		} else if (op) {

		} else if (func) {

		}

	}
	input.addEventListener('click', clickFunc, false);

	// data-func = ac and ce and equals
	// data-num = .0123456789
	// data-ops =  + / - %


}
