function processData(input) {
    //Enter your code here
    var inputArray = input.split("\n");
    var mealCost = Number(inputArray[0]);
    var tipPercent = Number(inputArray[1]);
    var taxPercent = Number(inputArray[2]);
    
    var tip = (tipPercent/100) * mealCost;
    var tax = (taxPercent/100) * mealCost;
    
    var totalCost = Math.round(mealCost + tip + tax);
    process.stdout.write("The total meal cost is " + totalCost + " dollars.");
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});


// The input is a given as a string: "12.00\n20\n8". 
// You'll have to split the input into an inputArray,
// 			var inputArray = input.split("\n");
// then assign each variables e.g. 
// 			mealCost = inputArray[0];
// (I knew input was a string, but didn't know it was given in one line,
// and hence didn't know I had to break it up using the array method -- 
// which was actually done in the previous challenge. But now I geddit! Yay!)