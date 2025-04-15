const palindromes = function (string) {
    let noSpacesPunctuation = string.replace(/[^\w\d]/g, '').toLowerCase();
    let reversed = noSpacesPunctuation.split('').reverse().join('');

    return noSpacesPunctuation === reversed;
};

// Do not edit below this line
module.exports = palindromes;
