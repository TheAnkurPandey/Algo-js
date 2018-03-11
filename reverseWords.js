function reverseWords(str){
    var wordsArr = str.split(' ');
    var newStr = '';
    wordsArr.forEach(function (value) {
        var reverseWord = '';
        for (var i=value.length-1; i > -1; i--)
            reverseWord += value[i];
        newStr += reverseWord;
        newStr += ' ';
    });
    return newStr;
}

console.log(reverseWords('Coding JavaScript'));