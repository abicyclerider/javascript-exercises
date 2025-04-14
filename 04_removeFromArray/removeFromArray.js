const removeFromArray = function(arr, ...elements) {
    for (i = 0; i < arr.length; i ++) {
        for (j = 0; j < elements.length; j ++) {
            if (arr[i] === elements[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
