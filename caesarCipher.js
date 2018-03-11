function  caesarCipher(str, num) {
    var lowerCaseStr = str.toLowerCase();
    var albhabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr = '';
    for(var i = 0; i < lowerCaseStr.length; i++){
        if (lowerCaseStr[i] === ' '){
            newStr += lowerCaseStr[i];
            continue;
        }
        if (num < 0){
            num = num%26;
            num = num + 26;
        }
        if (str[i] === str[i].toUpperCase())
            newStr += albhabets[(albhabets.indexOf(lowerCaseStr[i])+ num )%26].toUpperCase();
        else
            newStr += albhabets[(albhabets.indexOf(lowerCaseStr[i])+ num )%26];
    }
    return newStr;
}

console.log(caesarCipher('aB c',28));