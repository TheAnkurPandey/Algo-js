function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    }
}

function getMean(arr) {
    var sum = 0;
    arr.forEach(function (value) {
       sum += value;
    });
    return sum/arr.length;
}

function getMedian(arr) {
    arr.sort(function(a, b){return a-b});
    if (arr.length % 2 !== 0)
        return arr[Math.floor(arr.length / 2)];
    else {
        var mid1 = arr[(arr.length / 2) - 1];
        var mid2 = arr[arr.length / 2];
        return (mid1 + mid2) / 2;
    }
}

function getMode(arr) {
    var hashMap = {};
    arr.forEach(function (value) {
        if (!hashMap[value]) hashMap[value] = 0;
        hashMap[value]++;
    });
    var maxFrequency = -1;
    var modes = [];
    for(var num in hashMap){
        if (hashMap[num] > maxFrequency){
            modes = [num];
            maxFrequency = hashMap[num];
        }
        else if (hashMap[num] === maxFrequency) modes.push(num);
    }
    if (modes.length === Object.keys(hashMap).length) modes = [];
    return modes;
}

console.log(meanMedianMode([9,10,23,10,23,9]));