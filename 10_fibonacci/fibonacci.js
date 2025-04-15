const fibonacci = function(number) {
    if (!isNaN(Number(number))) {
        number = Number(number)
    }
    if (number < 0) {return "OOPS";}

    let fibonacciSequence = [0, 1, 1];

    for (i = 3; i < number + 1; i++) {
        fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2])
    }

    return fibonacciSequence[number];
};

// Do not edit below this line
module.exports = fibonacci;
