let ar =[6,7,8]

function simpleArraySum(ar) {
	// Write your code here
	let sum = 0;
	for(let i = 0; i < ar.length; i++) {
		sum = sum + ar[i];
	}
	return sum;
}

console.log(simpleArraySum(ar));