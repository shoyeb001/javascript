//check a number is palindrome or not

function palindrome(num) {
	return num < 0 ? false : num === +num.toString().split("").reverse().join("");
}

console.log(palindrome(1));
