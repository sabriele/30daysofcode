// DO NOT LIKE TWO FOR-LOOPS, wish we could dry up the code.

function processData(input) {
	//Enter your code here
	var input_array = input.split("\n");
	var T = input_array[0];
	if (T >= 1 && T <= 10) {
		for (var i = 1; i <= T; i++) {
			var S = input_array[i];
			if (S.length >= 2 && S.length <= 10000) {
				var S_array = S.split("");
				for (var j = 0; j <= S.length - 1; j++) {
					if (j % 2 === 0) {
						var even_letters = S_array[j];
						process.stdout.write(even_letters);
					}
				}
				process.stdout.write(" ");
				for (var k = 0; k <= S.length - 1; k++) {
					if (k % 2 === 1) {
						var odd_letters = S_array[k];
						process.stdout.write(odd_letters);
					}
				}
				process.stdout.write("\n");
			}
		}
	}
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
	_input += input;
});

process.stdin.on("end", function() {
	processData(_input);
});

//=================================
function vincent() {
	// vtjeng: not sure whether you can use mutliple functions in javascript like this
	// you can run this and check that it works?
	function is_even(x) {
		return (x % 2 === 0);
	}

	function is_odd(x) {
		return (x % 2 === 1);
	}

	// vtjeng: I would prefer not doing the writing immediately but using an
	// intermediate string for debugging
	// `write` takes an array and a function (which is a predicate) on indexes, printing out those characters where
	// the function evaluates to true
	function write(s_array, f) {
		for (var j = 0; j <= s.length - 1; j++) {
			if (f(j)) {
				process.stdout.write(S_array[j]);
			}
		}
	}

	// e: element, i: index, es: array
	function is_even_functional(e, i, es) {
		return (i % 2 === 0);
	}

	function is_odd_functional(e, i, es) {
		return (i % 1 === 0);
	}

	// vtjeng: BONUS - it's a lot easier to read things when they are functional!
	// here is a sample of what functional code would look like.
	// this should work mudol syntax errors but not 100% sure
	function writeFunctional(s_array, f) {
		// filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
		// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
		s_array.filter(f).forEach(process.stdout.write);
	}

	// function processDataFunctionalShort(input) {
	// 	var input_array = input.split("\n");
	// 	var T = input_array[0];
	// 	for (var i = 1; i <= T; i++) {
	// 		var S = input_array[i];
	// 		var S_array = s.split("");
	// 		S_array.filter((e, i, es) => (i % 1 === 0)).forEach(process.stdout.write);
	// 		process.stdout.write(" ");
	// 		S_array.filter((e, i, es) => (i % 1 === 1)).forEach(process.stdout.write);
	// 		process.stdout.write("\n");
	// 	}
	// }

	function processDataFunctional(input) {
		var input_array = input.split("\n");
		var T = input_array[0];
		for (var i = 1; i <= T; i++) {
			var S = input_array[i];
			var S_array = s.split("");
			writeFunctional(S_array, is_even_functional);
			process.stdout.write(" ");
			writeFunctional(S_array, is_odd_functional);
			process.stdout.write("\n");
		}
	}

	function processDataDry(input) {
		//Enter your code here
		var input_array = input.split("\n");
		var T = input_array[0];
		for (var i = 1; i <= T; i++) {
			var S = input_array[i];
			var S_array = S.split("");
			write(S_array, is_even);
			process.stdout.write(" ");
			write(S_array, is_odd);
			process.stdout.write("\n");
		}
	}

	function processData(input) {
		//Enter your code here
		var input_array = input.split("\n");
		var T = input_array[0];
		if (T >= 1 && T <= 10) {
			for (var i = 1; i <= T; i++) {
				var S = input_array[i];
				// vtjeng: Checks on the length of S and T are unnecessary.
				// In any case, you're not doing anything when S and T fail the checks ...
				if (S.length >= 2 && S.length <= 10000) {
					var S_array = S.split("");
					for (var j = 0; j <= S.length - 1; j++) {
						if (j % 2 === 0) {
							var even_letters = S_array[j];
							process.stdout.write(even_letters);
						}
					}
					process.stdout.write(" ");
					for (var k = 0; k <= S.length - 1; k++) {
						if (k % 2 === 1) {
							var odd_letters = S_array[k];
							process.stdout.write(odd_letters);
						}
					}
					process.stdout.write("\n");
				}
			}
		}
	}


	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	_input = "";
	process.stdin.on("data", function(input) {
		_input += input;
	});

	process.stdin.on("end", function() {
		processData(_input);
	});
}
