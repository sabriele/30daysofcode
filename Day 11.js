process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
	input_stdin += data;
});

process.stdin.on("end", function() {
	input_stdin_array = input_stdin.split("\n"); // Step 1: input text is split at the newline into arrays
	main();
});

function readLine() {
	return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
	var arr = [];
	for (arr_i = 0; arr_i < 6; arr_i++) {
		arr[arr_i] = readLine().split(" ");
		arr[arr_i] = arr[arr_i].map(Number);
	}

	// highestSum initially to -63 because that is lowest possible outcome for an hourglass
	// -9 -9 -9
	//    -9      = -63
	// -9 -9 -9

	var highestSum = -63;
	var tempSum = 0;
	for (let i = 0; i < 4; i++) {
		for (let j = 0; j < 4; j++) {
			tempSum =
				arr[i][j] +
				arr[i][j + 1] +
				arr[i][j + 2] +
				arr[i + 1][j + 1] +
				arr[i + 2][j] +
				arr[i + 2][j + 1] +
				arr[i + 2][j + 2];
			if (tempSum > highestSum) {
				highestSum = tempSum;
			}
		}
	}
	console.log(highestSum);
}


// Failed Test #5
function main() {
	var arr = [];
	for (arr_i = 0; arr_i < 6; arr_i++) {
		arr[arr_i] = readLine().split(" "); // Step 2: each line is turned into array with each number as array element
		arr[arr_i] = arr[arr_i].map(Number); // Step 3: strings turned into Numbers (info here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Tricky_use_case)
	}
	// Concatenate arrays 0 - 5
	var combined_array = arr[0].concat(arr[1], arr[2], arr[3], arr[4], arr[5]);

	// Find the sum of each hourglass and put each value into array
	var sum = [];
	for (n = 0; n < combined_array.length - 14; n++) {
		sum[n] =
			combined_array[n] +
			combined_array[n + 1] +
			combined_array[n + 2] +
			combined_array[n + 7] +
			combined_array[n + 12] +
			combined_array[n + 13] +
			combined_array[n + 14];
	}

	// Find largest value in sum array;
	console.log(Math.max.apply(null, sum));
}

// Step 1: ['1 1 1 0 0 0'], ['0 1 0 0 0 0'], ['1 1 1 0 0 0'], ['0 0 2 4 4 0'], ['0 0 0 2 0 0'], ['0 0 1 2 4 0']
// Step 2: [ '1', '1', '1', '0', '0', '0' ], [ '0', '1', '0', '0', '0', '0' ], [ '1', '1', '1', '0', '0', '0' ], [ '0', '0', '2', '4', '4', '0' ], [ '0', '0', '0', '2', '0', '0' ], [ '0', '0', '1', '2', '4', '0' ]
// Step 3: [ 1, 1, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 0, 0 ], [ 1, 1, 1, 0, 0, 0 ], [ 0, 0, 2, 4, 4, 0 ], [ 0, 0, 0, 2, 0, 0 ], [ 0, 0, 1, 2, 4, 0 ]
// a = n	[0] [0]
// b = n+1	[0] [1]
// c = n+2	[0] [2]
// d = n+7	[1] [1]
// e = n+12	[2] [0]
// f = n+13	[2] [1]
// g = n+14	[2] [2]
