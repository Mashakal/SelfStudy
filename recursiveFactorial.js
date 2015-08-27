var factorial = function(n) {
	// base case: 
	if(n === 0) {
	    return 1;
	}
	// recursive case:
	else if (n < 0) {
	    return ("Negative number is invalid");
	} else {
	    return (n*factorial(n-1));
	}
}; 
