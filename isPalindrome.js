function isPalindrome(string) {
    string = string.toLowerCase();
    var charArr = string.split('');
    var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var validLetters = [];
    charArr.forEach(function (value) {
        if (validChar.indexOf(value) > -1) validLetters.push(value);
    });

    return validLetters.join('') === validLetters.reverse().join('');
}

isPalindrome("Madam, I'm Adam");

