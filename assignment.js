// Get all combintions:
	var all = [];

	function allCombos(str) {
		let idx = str.indexOf('?');
		
		if (idx < 0) {
			all.push(str);
			return;
		}

		var splitStr = str.split('');
		var addZero = splitStr.slice();
		var addOne = splitStr.slice();

		addZero.splice(idx, 1, '0');
		addOne.splice(idx, 1, '1');

		allCombos(addZero.join(''));
		allCombos(addOne.join(''));
	}

	allCombos('10??');

	console.log(all); // ["1000", "1001", "1010", "1011"]


// Get all possible cases:
	function allPossibleCases(array, result, index) { 
		if (!result) {
			result = [];
			index = 0;
			array = array.map(function(element) {
				return element.push ? element : [element]; 
			});
		}
		if (index < array.length) {
			array[index].forEach(function(element) {
				var a = array.slice(0);
				a.splice(index, 1, [element]);
				allPossibleCases(a, result, index + 1);
			});
		} else {
			result.push(array.join(' '));
		}

		return result;
	}

	var t3 = [["a", "b"], ["c", "d"], "e"];

	console.log(allPossibleCases(t3)); // ["a c e", "a d e", "b c e", "b d e"]
