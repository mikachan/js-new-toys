var obj = {
	rex: /\d/,
	checkArray: function (array) {
		return array.some((entry) => this.rex.test(entry));
	},
};

console.log(obj.checkArray(['no', 'digits', 'in', 'this', 'array'])); // false
console.log(obj.checkArray(['this', 'array', 'has', '1', 'digit'])); // true
