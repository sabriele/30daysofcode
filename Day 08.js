function processData(input) {
	var data = input.split("\n"); // The split() method is used to split a string into an array of substrings, and returns the new array.
	var N = parseInt(data[0]);

	var phoneBook = new Map(); // Initialised with an empty array

	for (var i = 1; i <= N; i++) {
		var entries = data[i].split(" "); // Separate the names and numbers into key value pairs in an array to be part of the iterable in new Map([iterable])
		var key = entries[0],
			value = entries[1];
		phoneBook.set(key, value);
	}

	for (var j = N + 1; j < data.length; j++) {
		if (phoneBook.has(data[j])) {
			console.log(data[j] + "=" + phoneBook.get(data[j]));
		} else {
			console.log("Not found");
		}
	}
}

function stdin() {
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


/*************************************************/
/* Past answers and other users' solutions below */
/*************************************************/

// Only passed Test 0 (I think because of timeouts? A lot of people are complaining about it)
function processData(input) {
	var inputArray = input.split("\n");
	var N = parseInt(inputArray[0]); // Read value of N

	var phoneBook = []; // Create phoneBook array

	function Person(name, number) {
		this.name = name;
		this.phoneNumber = number;
	}

	for (i = 1; i <= N; i++) { // Loop through N values to split name and number at the space
		var entriesArray = inputArray[i].split(" ");
		phoneBook[i] = new Person(entriesArray[0], entriesArray[1]);
	}

	for (j = N + 1; j < inputArray.length; j++) { // N+1 onwards until end: pair names and numbers up
		var k = j - N;
		if (inputArray[j] === phoneBook[k].name) { // Output as name=phoneNumber or Not found
			console.log(phoneBook[k].name + "=" + phoneBook[k].phoneNumber);
		} else {
			console.log("Not found");
		}
	}
}

// DraigRygbi
function processData(input) {
	input = input.split('\n');
	var N = parseInt(input[0]);

	var phonebook = [];
	for (var i = 0; i < N; i++) {
		var line = input[i + 1];
		line = line.split(' ');
		phonebook[line[0]] = line[1];
	}

	for (var k = N + 1; k < input.length; k++) {
		var num = (phonebook[input[k]]);
		if (num !== undefined) {
			console.log(input[k] + '=' + num);
		} else {
			console.log('Not found');
		}
	}
}

// yeoman
function processData(input) {
	var myMap = new Map(),
	hashMap = {},
	arr = input.split('\n'),
	arrint = parseInt(arr[0]);

	for (var i = 1; i <= arrint; i++) {
		var a = arr[i].split(' '),
		key = a[0],
		value = a[1];
		//hashMap[key] = value;
		myMap.set(key, value);
	}

	for (var d = arrint + 1; d <= arr.length - 1; d++) {
		var check = arr[d];
		if (myMap.has(check)) { // check in hashMap
			console.log(check + '=' + myMap.get(check));
			//console.log(check + '=' + hashMap[check]);
		} else {
			console.log('Not found');
		}
	}
}

// nickpapoutsis
function processData(input) {
	var tempArray = input.split("\n");
	var entriesLength = tempArray.splice(0, 1); //get the number of entries out of the array
	var queries = tempArray.splice(entriesLength); //dump the queries into their own array

	for (var i = 0; i < entriesLength; i++) {
		tempArray[i] = tempArray[i].split(" "); //split the names from the phones to prepare for mapping
	}

	var phoneBookMap = new Map(tempArray); //turn the array into a map

	for (var i = 0; i < queries.length; i++) {
		if (phoneBookMap.has(queries[i])) { //check if the qeury (name) exists in the phone book 
			console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
		} else {
			console.log("Not found");
		}
	}
}