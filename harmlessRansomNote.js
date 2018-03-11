function harmlessRansomNote (noteText, magazineText) {
    var noteTextArr = noteText.split(' ');
    var magzineTextArr = magazineText.split(' ');
    var magzineObj = {};

    magzineTextArr.forEach(function (value) {
       if(!magzineObj[value]) magzineObj[value] = 0;
       magzineObj[value]++;
    });

    var noteIsPossible = true;
    noteTextArr.forEach(function (value) {
        if(magzineObj[value]>=1)
            magzineObj[value]--;
        else
            noteIsPossible = false;
    });
    return noteIsPossible;

}
console.log(harmlessRansomNote('this is is', 'this is the is magazine text in the magazine'));