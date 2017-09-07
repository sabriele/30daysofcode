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
	var n = parseInt(readLine());
	var n_bin = n.toString(2);
	var n_bin_array = n_bin.split("0");

	var length = 0;
	var longest;

	for (var i = 0; i < n_bin_array.length; i++) {
		if (n_bin_array[i].length > length) {
			length = n_bin_array[i].length;
			longest = n_bin_array[i];
		}
	}
	process.stdout.write(longest.length);
}

// ATTEMPT 1 THAT FAILED BECAUSE SOME TEST CASE HAD Input:439 (110110111), Expect:3
// BUT IT WAS RANDOM AND EFFICIENT AF SO I AM PROUD OF IT
function main() {
	var n = parseInt(readLine());
	var n_bin = n.toString(2);
	var n_bin_array = n_bin.split("");

	for (var i = 0; i < n_bin_array.length; i++) {
		if (parseInt(n_bin_array[i]) === 0) {
			process.stdout.write(i);
			break;
		}
	}
}
