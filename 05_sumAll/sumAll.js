const sumAll = function(first, second) {
    if ((!Number.isInteger(first)) || (!Number.isInteger(second))) {
        return "ERROR";
    }

    if (first < 0 || second < 0) {
        return "ERROR";
    }

    if (first > second) {
        lower = second;
        higher = first;
    }

    else {
        lower = first;
        higher = second;
    }

    let sum = 0;
    for (let i = lower; i <= higher; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
