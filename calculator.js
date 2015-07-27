Array.prototype.last = function() {
    return this[this.length-1];
}

function calculator(num1, operator, num2){
	num1 = +num1;
	num2 = +num2;
	if (operator == "*"){
		return num1 * num2;
	}
	if (operator == "/"){
		return num1 / num2;
	}
	if (operator == "+"){
		return num1 + num2;
	}
	if (operator == "-"){
		return num1 - num2;
	}
	else {
		return false;
	}
}
process.argv[1] = process.argv[1].split("/").last();

var answer = calculator(process.argv[2],process.argv[3],process.argv[4]);
if (answer){
	console.log(answer);
}

else {
	console.log("\nUsage: $ node " + process.argv[1] + " <n1> <operator> <n2>");
	console.log("\nExample: $ node " + process.argv[1] + " 1 / 0.5");
	console.log(" = 2");
	console.log("\nNote: to use the operator '*', you must escape it with a backslash '\\'");
}