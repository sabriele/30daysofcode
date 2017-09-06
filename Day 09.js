function processData(input) {
	//Enter your code here
	function factorial(N) {
		if (N === 1) {
			process.stdout.write(1);
		} else {
			var i = N;
			while (N-- >= 2) {
				i *= N;
			}
			process.stdout.write(i);
		}
	}

	factorial(parseInt(input));
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

// MINIMALIST ANSWER
function processData(input) {
	function factorial(N) {
		if (N == 1) return 1;
		return N * factorial(N - 1);
	}

	console.log(Number(factorial(input)));
}
