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

/////////////// ignore above this line ////////////////////

function main() {
	var N = parseInt(readLine());
	arr = readLine().split(' ');
	arr = arr.map(Number);

	for (var i = N - 1; i >= 0; i--) {
		process.stdout.write(arr[i] + " "); // fucking HELL just add a space will make it ok??? wtf???
	}
}

// WRONG ANSWER
function main() {
	var N = parseInt(readLine());
	arr = readLine().split(' ');
	arr = arr.map(Number);

	if (N >= 1 && N <= 1000) {
		if (arr.length >= 1 && arr.length <= 10000) {
			for (var i = N - 1; i >= 0; i--) {
				process.stdout.write(arr[i]);
			}
		}
	}
}

// MINIMALIST ANSWER
function main() {
	var N = parseInt(readLine());
	arr = readLine().split(' ');
	arr = arr.map(Number);

	process.stdout.write(arr.reverse().join(" "));
}
