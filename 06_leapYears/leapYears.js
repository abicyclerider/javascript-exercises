const leapYears = function(year) {
    divisible4 = !(year%4);
    divisible100 = !(year%100);
    divisible400 = !(year%400)

    return (divisible4 && (!divisible100 || divisible400))
};

// Do not edit below this line
module.exports = leapYears;
