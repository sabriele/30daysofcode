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
	for (var i = 1; i <= 10; i++) {
		var result = N * i;
		process.stdout.write(N + " x " + i + " = " + result + "\n");
	}
}
