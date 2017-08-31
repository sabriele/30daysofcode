process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
	input_stdin += data;
});

process.stdin.on('end', function() {
	input_stdin_array = input_stdin.split("\n");
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ///////////////

function main() {
	var N = parseInt(readLine());

	if (N >= 1 && N <= 100) {
		if (N % 2 === 1 || N >= 6 && N <= 20) {
			process.stdout.write("Weird");
		} else {
			process.stdout.write("Not Weird");
		}
	}
}

/* First iteration of solution */
// if (N >= 1 && N <= 100) {
// 	if (N % 2 === 1) {
// 		process.stdout.write("Weird");
// 	} else if (N >= 2 && N <= 5) {
// 		process.stdout.write("Not Weird");
// 	} else if (N >= 6 && N <= 20) {
// 		process.stdout.write("Weird");
// 	} else {
// 		process.stdout.write("Not Weird");
// 	}
// }
/* Note: "1 <= N <= 100" is not an acceptable notation */

/* Second iteration of solution */
// if (N >= 1 && N <= 100) {
// 	if (N % 2 === 1 || N >= 6 && N <= 20) {
// 		process.stdout.write("Weird");
// 	} else if (N >= 2 && N <= 5 || N > 20) {
// 		process.stdout.write("Not Weird");
// 	}
// }

/* Forum-suggested solution (which I'm still not sure how to implement) */
// N = (((N % 2) == 1) || ((N > 5) && (N < 21))) ? "Weird" : "Not Weird";
