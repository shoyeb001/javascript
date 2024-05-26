const str = "hello my name is sk shoyeb";
const maxlen = 9;

console.log(truncate(str, maxlen));
console.log(truncate(str, 10));

function truncate(str, maxlen) {
	if (str.length > maxlen) {
		return str.slice(0, maxlen) + "...";
	} else {
		return str;
	}
}
