module.exports.factorial = function(n) {
	
	if (n == 0) {
		return 1;
	}

	var num = 1;
	for (var i = 1; i < n + 1; i++) {
		num *=i;
	}
	return num;
};